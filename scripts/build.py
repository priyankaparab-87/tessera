"""Build the Tessera docs site.

Reads  dist/tokens.json, dist/bundle.*, dist/index.d.ts, docs/README.md, docs/components/*
Writes dist/tokens.css (generated from tokens.json) and the static site in site/.

Run from the repo root:  python3 scripts/build.py
No dependencies beyond the Python 3 standard library.
"""
import html, json, os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
DOCS = os.path.join(ROOT, 'docs')
SITE = os.path.join(ROOT, 'site')

# Links shown in the site header and footer. Leave a value empty to hide it.
REPO_URL = ''
FIGMA_URL = ''
AUTHOR_URL = 'https://priyanka-personal-portfolio.pages.dev/'

REACT = 'https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js'
REACT_DOM = 'https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js'

GROUP_ORDER = ['Foundations', 'Actions', 'Forms', 'Overlays', 'Feedback', 'Navigation',
               'App chrome', 'Data display', 'Layout', 'Patterns']

esc = html.escape


# --------------------------------------------------------------------------- tokens.css
def css_value(v):
    if isinstance(v, str):
        return re.sub(r'\{([A-Za-z0-9_.-]+)\}', r'var(--\1)', v)
    return str(v)


def build_tokens_css(t):
    themes = [th['id'] for th in t['color']['themes']]
    first, rest = themes[0], themes[1:]
    themed = [x for x in t['color']['tokens']] + t.get('shadow', {}).get('tokens', [])
    out = ['/* Tessera — generated from tokens.json by scripts/build.py. Do not edit by hand. */']
    out.append(':root, [data-theme="%s"] {' % first)
    for tok in themed:
        v = tok['value'] if isinstance(tok['value'], dict) else {first: tok['value']}
        note = (' /* %s */' % tok['usage']) if tok.get('usage') else ''
        out.append('  --%s: %s;%s' % (tok['name'], css_value(v[first]), note))
    out.append('}')
    for th in rest:
        out.append('[data-theme="%s"] {' % th)
        for tok in themed:
            v = tok['value']
            if isinstance(v, dict) and th in v:
                out.append('  --%s: %s;' % (tok['name'], css_value(v[th])))
        out.append('}')
    out.append(':root {')
    for fam in ('spacing', 'radius', 'size'):
        for tok in t.get(fam, {}).get('tokens', []):
            note = (' /* %s */' % tok['usage']) if tok.get('usage') else ''
            out.append('  --%s: %s;%s' % (tok['name'], tok['value'], note))
    fams = t['type']['families']
    for name, stack in fams.items():
        out.append('  --font-%s: %s;' % (name, stack))
    classes = []
    for g in t['type']['groups']:
        for s in g['styles']:
            fam = s.get('family') or g['family']
            if fam not in fams:
                fam = g['family']
            w = s.get('fontWeight', 400)
            note = (' /* %s */' % s['usage']) if s.get('usage') else ''
            out.append('  --text-%s: %s %s/%s var(--font-%s);%s' % (s['name'], w, s['fontSize'], s['lineHeight'], fam, note))
            rule = ['.%s {' % s['name'], '  font-family: var(--font-%s);' % fam,
                    '  font-size: %s;' % s['fontSize'], '  line-height: %s;' % s['lineHeight'],
                    '  font-weight: %s;' % w, '  letter-spacing: %s;' % (s.get('letterSpacing') or '0')]
            if g['family'] == 'numeric':
                rule.append('  font-variant-numeric: tabular-nums;')
            rule.append('}')
            classes.append('\n'.join(rule))
    out.append('}')
    return '\n'.join(out + classes) + '\n'


# --------------------------------------------------------------------------- markdown
def inline(s):
    parts = re.split(r'(`[^`]+`)', s)
    res = []
    for p in parts:
        if p.startswith('`') and p.endswith('`') and len(p) > 1:
            res.append('<code>%s</code>' % esc(p[1:-1]))
            continue
        p = esc(p, quote=False)
        p = re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', r'<a href="\2">\1</a>', p)
        p = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', p)
        p = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', p)
        res.append(p)
    return ''.join(res)


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def md(text, shift=0):
    """Small Markdown renderer for the docs: headings, paragraphs, nested lists, tables, code, hr."""
    lines = text.split('\n')
    out, i = [], 0

    def list_block(i):
        stack = []  # (indent, tag)
        buf = []
        while i < len(lines):
            m = re.match(r'^(\s*)([-*]|\d+\.)\s+(.*)$', lines[i])
            if not m:
                if lines[i].strip() == '':
                    break
                if stack and lines[i].startswith('  '):  # continuation line
                    buf[-1] = buf[-1][:-5] + ' ' + inline(lines[i].strip()) + '</li>'
                    i += 1
                    continue
                break
            ind, mark, body = len(m.group(1)), m.group(2), m.group(3)
            tag = 'ol' if mark[0].isdigit() else 'ul'
            if not stack or ind > stack[-1][0]:
                if stack:
                    buf[-1] = buf[-1][:-5]  # reopen parent li
                stack.append((ind, tag))
                buf.append('<%s>' % tag)
            else:
                while stack and ind < stack[-1][0]:
                    buf.append('</%s></li>' % stack.pop()[1])
            buf.append('<li>%s</li>' % inline(body))
            i += 1
        while stack:
            t = stack.pop()[1]
            buf.append('</%s>' % t + ('</li>' if stack else ''))
        return i, ''.join(buf)

    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1
            continue
        if ln.startswith('<!--'):
            while i < len(lines) and '-->' not in lines[i]:
                i += 1
            i += 1
            continue
        m = re.match(r'^(#{1,6})\s+(.*)$', ln)
        if m:
            lvl = min(6, len(m.group(1)) + shift)
            out.append('<h%d id="%s">%s</h%d>' % (lvl, slug(m.group(2)), inline(m.group(2)), lvl))
            i += 1
            continue
        if ln.strip() == '---':
            out.append('<hr>')
            i += 1
            continue
        if ln.startswith('```'):
            lang = ln[3:].strip()
            i += 1
            code = []
            while i < len(lines) and not lines[i].startswith('```'):
                code.append(lines[i])
                i += 1
            i += 1
            out.append('<pre class="code" data-lang="%s"><code>%s</code></pre>' % (esc(lang), esc('\n'.join(code))))
            continue
        if ln.lstrip().startswith('|'):
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith('|'):
                rows.append(lines[i].strip())
                i += 1

            def cells(r):
                r = r.strip('|')
                return [c.strip().replace('\\|', '|') for c in re.split(r'(?<!\\)\|', r)]
            head = cells(rows[0])
            body = [cells(r) for r in rows[2:]]
            t = ['<div class="table-wrap"><table><thead><tr>']
            t += ['<th>%s</th>' % inline(c) for c in head]
            t.append('</tr></thead><tbody>')
            for r in body:
                t.append('<tr>' + ''.join('<td>%s</td>' % inline(c) for c in r) + '</tr>')
            t.append('</tbody></table></div>')
            out.append(''.join(t))
            continue
        if re.match(r'^\s*([-*]|\d+\.)\s+', ln):
            i, block = list_block(i)
            out.append(block)
            continue
        para = []
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#{1,6}\s|```|\||\s*([-*]|\d+\.)\s)', lines[i]):
            para.append(lines[i].strip())
            i += 1
        out.append('<p>%s</p>' % inline(' '.join(para)))
    return '\n'.join(out)


def split_sections(text, level=2):
    """Split markdown into (title, body) pairs at the given heading level."""
    pat = re.compile(r'^%s\s+(.*)$' % ('#' * level), re.M)
    pos = [(m.start(), m.group(1)) for m in pat.finditer(text)]
    intro = text[:pos[0][0]] if pos else text
    secs = []
    for k, (start, title) in enumerate(pos):
        end = pos[k + 1][0] if k + 1 < len(pos) else len(text)
        secs.append((title, text[start:end]))
    return intro, secs


# --------------------------------------------------------------------------- components
def read_components():
    comps = {}
    for name in sorted(os.listdir(os.path.join(DOCS, 'components'))):
        d = os.path.join(DOCS, 'components', name)
        if not os.path.isdir(d) or name == 'Cover':
            continue
        prev = open(os.path.join(d, 'preview.html')).read()
        card = re.match(r'<!--\s*@dsCard(.*?)-->', prev)
        attrs = {k: a or b for k, a, b in re.findall(r'(\w+)=(?:"([^"]*)"|(\S+))', card.group(1))}
        readme = open(os.path.join(d, 'README.md')).read() if os.path.exists(os.path.join(d, 'README.md')) else ''
        body = re.sub(r'^#\s+.*\n', '', readme, count=1).strip()
        first_para = body.split('\n\n')[0].strip()
        summary = re.split(r'(?<=[.!?])\s', first_para)[0]
        comps[name] = dict(name=name, group=attrs.get('group', 'Foundations'), height=int(attrs.get('height', 240)),
                           page=attrs.get('page') == 'true', preview=prev[card.end():].strip(),
                           readme=body, summary=summary)
    return comps


def order_components(comps, readme):
    order = []
    m = re.search(r'^## Components\n(.*?)\n\n', readme, re.S | re.M)
    if m:
        for line in m.group(1).split('\n'):
            for n in re.findall(r'[A-Z][A-Za-z]+', line.split(':', 1)[-1]):
                if n in comps and n not in order:
                    order.append(n)
    for n in ['Icon', 'Themes']:
        if n in comps and n not in order:
            order.insert(0, n)
    order += [n for n in sorted(comps) if n not in order]
    groups = []
    for g in GROUP_ORDER + sorted({c['group'] for c in comps.values()} - set(GROUP_ORDER)):
        items = [n for n in order if comps[n]['group'] == g]
        if g == 'Foundations':
            items = sorted(items, key=lambda n: n != 'Themes')
        if items:
            groups.append((g, items))
    return groups


def parse_props(dts):
    props = {}
    for m in re.finditer(r'export interface (\w+?)Props\s*\{', dts):
        i, depth = m.end(), 1
        while depth:
            depth += {'{': 1, '}': -1}.get(dts[i], 0)
            i += 1
        body = dts[m.end():i - 1]
        items, cur, d = [], '', 0
        for ch in body:
            if ch in '{([<':
                d += 1
            elif ch in '})]>':
                d -= 1
            if ch == ';' and d == 0:
                items.append(cur)
                cur = ''
            else:
                cur += ch
        items.append(cur)
        rows = []
        for it in items:
            it = it.strip()
            mm = re.match(r'^(\w+)(\??):\s*(.*)$', it, re.S)
            if mm and mm.group(1) not in ('className', 'style'):
                rows.append((mm.group(1), mm.group(2) != '?', ' '.join(mm.group(3).split())))
        props[m.group(1)] = rows
    return props


# --------------------------------------------------------------------------- page chrome
MARK = ('<svg class="mark" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">'
        '<rect x="1" y="1" width="8" height="8" rx="2"/><rect x="11" y="1" width="8" height="8" rx="2"/>'
        '<rect x="1" y="11" width="8" height="8" rx="2"/><rect x="11" y="11" width="8" height="8" rx="2"/></svg>')

THEME_BOOT = """<script>(function(){var r=document.documentElement;try{var m=localStorage.getItem('tessera-docs:mode');var t=JSON.parse(localStorage.getItem('tessera:theme')||'null')||{};
r.setAttribute('data-theme',m||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
r.setAttribute('data-accent',t.accent||'indigo');r.setAttribute('data-font',t.font||'geist');}catch(e){r.setAttribute('data-theme','light');}
window.addEventListener('message',function(e){var d=e.data&&e.data.tesseraTheme;if(!d||e.origin!==location.origin)return;['theme','accent','font'].forEach(function(k){if(d[k])r.setAttribute('data-'+k,d[k]);});});})();</script>"""


def page(title, body, prefix, active, nav, description=''):
    def link(href, label, key):
        cur = ' aria-current="page"' if key == active else ''
        return '<a href="%s%s"%s>%s</a>' % (prefix, href, cur, esc(label))
    side = ['<nav class="side" aria-label="Docs">',
            '<div class="side-group">', link('index.html', 'Overview', 'overview'),
            link('get-started.html', 'Get started', 'get-started'),
            link('foundations.html', 'Foundations', 'foundations'),
            link('tokens.html', 'Tokens', 'tokens'),
            link('components/index.html', 'Components', 'components'), '</div>']
    for g, items in nav:
        side.append('<div class="side-group"><p class="side-label">%s</p>' % esc(g))
        side += [link('components/%s.html' % n, n, n) for n in items]
        side.append('</div>')
    side.append('</nav>')
    links = []
    if FIGMA_URL:
        links.append('<a class="hdr-link" href="%s">Figma</a>' % FIGMA_URL)
    if REPO_URL:
        links.append('<a class="hdr-link" href="%s">GitHub</a>' % REPO_URL)
    foot = ['Tessera is designed and built by ',
            ('<a href="%s">Priyanka Parab</a>' % AUTHOR_URL) if AUTHOR_URL else 'Priyanka Parab',
            '. Open source under the MIT licence.']
    return """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
{boot}
<link rel="icon" href="{p}favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="{p}tessera/tokens.css">
<link rel="stylesheet" href="{p}tessera/bundle.css">
<link rel="stylesheet" href="{p}assets/docs.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="hdr">
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="side">Menu</button>
  <a class="brand" href="{p}index.html">{mark}<span>Tessera</span></a>
  <div class="hdr-tools">
    <label class="ctl"><span class="vh">Mode</span><select data-theme-ctl="theme"><option value="light">Light</option><option value="dark">Dark</option></select></label>
    <label class="ctl"><span class="vh">Accent</span><select data-theme-ctl="accent"><option value="indigo">Indigo</option><option value="cobalt">Cobalt</option><option value="teal">Teal</option><option value="graphite">Graphite</option></select></label>
    <label class="ctl"><span class="vh">Typeface</span><select data-theme-ctl="font"><option value="geist">Geist</option><option value="plex">IBM Plex</option><option value="inter">Inter</option><option value="system">System UI</option></select></label>
    {links}
  </div>
</header>
<div class="frame">
<div class="side-wrap" id="side">{side}</div>
<main id="main" class="main">
{body}
<footer class="foot">{foot}</footer>
</main>
</div>
<script src="{p}assets/docs.js"></script>
</body>
</html>
""".format(title=esc(title), desc=esc(description), boot=THEME_BOOT, p=prefix, mark=MARK,
           links=''.join(links), side=''.join(side), body=body, foot=''.join(foot))


def preview_doc(c, prefix='../'):
    return """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>{name} preview · Tessera</title>
{boot}
<link rel="stylesheet" href="{p}tessera/tokens.css">
<link rel="stylesheet" href="{p}tessera/bundle.css">
<style>html,body{{margin:0;background:var(--surface);color:var(--text);font:var(--text-ui);font-family:var(--font-sans)}}</style>
<script src="{react}"></script>
<script src="{react_dom}"></script>
<script src="{p}tessera/bundle.js"></script>
</head>
{body}
""".format(name=esc(c['name']), boot=THEME_BOOT, p=prefix, react=REACT, react_dom=REACT_DOM,
           body=strip_doc(c['preview']))


def strip_doc(s):
    """Keep a preview's own <style> and <body> contents; drop its doctype/head shell."""
    styles = ''.join(re.findall(r'<style[^>]*>.*?</style>', s, re.S))
    m = re.search(r'<body[^>]*>(.*)</body>', s, re.S)
    body = m.group(1) if m else s
    return '<body>\n%s\n%s\n</body>\n</html>' % (styles, body.strip())


def frame(c, prefix):
    return ('<div class="preview"><iframe src="%spreviews/%s.html" title="%s live preview" '
            'style="height:%dpx"></iframe><a class="preview-open" href="%spreviews/%s.html">Open preview on its own</a></div>'
            % (prefix, c['name'], esc(c['name']), c['height'], prefix, c['name']))


# --------------------------------------------------------------------------- pages
def swatch_rows(tokens, theme_ids, lookup):
    def res(x, th):
        m = re.fullmatch(r'\{([A-Za-z0-9_.-]+)\}', x or '')
        if not m:
            return x
        ref = lookup.get(m.group(1), {})
        return res(ref.get(th, ref.get(theme_ids[0], x)), th)
    rows = []
    for t in tokens:
        v = t['value'] if isinstance(t['value'], dict) else {theme_ids[0]: t['value']}
        light = res(v.get(theme_ids[0], ''), theme_ids[0])
        dark = res(v.get(theme_ids[1], v.get(theme_ids[0], '')), theme_ids[1]) if len(theme_ids) > 1 else ''
        rows.append('<tr><td><span class="sw" style="background:var(--%s)"></span><code>%s</code></td>'
                    '<td class="val"><code>%s</code></td><td class="val"><code>%s</code></td><td>%s</td></tr>'
                    % (t['name'], t['name'], esc(light), esc(dark), esc(t.get('usage', ''))))
    return rows


def tokens_page(t):
    ids = [th['id'] for th in t['color']['themes']]
    colors = t['color']['tokens']
    prim = [c for c in colors if re.match(r'^(gray|indigo|sky|green|amber|red|violet)-\d+$', c['name'])]
    sem = [c for c in colors if c not in prim]
    out = ['<h1 class="title-1">Tokens</h1>',
           '<p class="lede">Every value Tessera uses, as CSS variables in <code>tokens.css</code>. '
           'Swatches follow the mode and accent you pick in the header. Source: <code>tokens.json</code>.</p>',
           '<h2 id="semantic-colour">Semantic colour</h2>',
           '<p>Use these in product UI. They switch with <code>data-theme</code> and the accent options.</p>',
           '<div class="table-wrap"><table class="tok"><thead><tr><th>Token</th><th>Light</th><th>Dark</th><th>Usage</th></tr></thead><tbody>']
    lookup = {c['name']: (c['value'] if isinstance(c['value'], dict) else {ids[0]: c['value']}) for c in colors}
    out += swatch_rows(sem, ids, lookup)
    out.append('</tbody></table></div>')
    out.append('<h2 id="palette">Palette</h2><p>Ramps the semantic tokens point to. Reach for a semantic token first.</p><div class="ramps">')
    for ramp in ['gray', 'indigo', 'sky', 'green', 'amber', 'red', 'violet']:
        steps = [c for c in prim if c['name'].startswith(ramp + '-')]
        out.append('<div class="ramp"><p class="small-strong">%s</p>' % ramp)
        for c in steps:
            v = c['value'] if isinstance(c['value'], str) else c['value'][ids[0]]
            out.append('<div class="chip"><span class="sw lg" style="background:var(--%s)"></span><span><code>%s</code><br><span class="muted">%s</span></span></div>'
                       % (c['name'], c['name'], esc(v)))
        out.append('</div>')
    out.append('</div>')
    out.append('<h2 id="type">Type</h2><div class="table-wrap"><table class="tok"><thead><tr><th>Style</th><th>Size / line</th><th>Weight</th><th>Usage</th></tr></thead><tbody>')
    for g in t['type']['groups']:
        for s in g['styles']:
            if not s.get('usage'):
                continue
            sample = s.get('sample') or s['name']
            out.append('<tr><td><div class="%s">%s</div><code>%s</code></td><td><code>%s / %s</code></td><td><code>%s</code></td><td>%s</td></tr>'
                       % (s['name'], esc(sample), s['name'], s['fontSize'], s['lineHeight'], s.get('fontWeight', 400), esc(s['usage'])))
    out.append('</tbody></table></div>')
    for fam, title, demo in [('spacing', 'Spacing', 'space'), ('radius', 'Radius', 'radius'), ('shadow', 'Shadow', 'shadow'), ('size', 'Size', 'size')]:
        toks = t.get(fam, {}).get('tokens', [])
        out.append('<h2 id="%s">%s</h2><div class="table-wrap"><table class="tok"><thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead><tbody>' % (fam, title))
        for k in toks:
            v = k['value'] if isinstance(k['value'], str) else k['value'][ids[0]]
            if demo == 'space':
                vis = '<span class="bar" style="width:var(--%s)"></span>' % k['name']
            elif demo == 'radius':
                vis = '<span class="rad" style="border-radius:var(--%s)"></span>' % k['name']
            elif demo == 'shadow':
                vis = '<span class="shd" style="box-shadow:var(--%s)"></span>' % k['name']
            else:
                vis = ''
            out.append('<tr><td>%s<code>%s</code></td><td><code>%s</code></td><td>%s</td></tr>' % (vis, k['name'], esc(v), esc(k.get('usage', ''))))
        out.append('</tbody></table></div>')
    return '\n'.join(out)


def component_page(c, props, nav_pos):
    prev_n, next_n = nav_pos
    body = ['<p class="eyebrow">%s</p>' % esc(c['group']),
            '<h1 class="title-1">%s</h1>' % esc(c['name'])]
    body.append(frame(c, '../'))
    body.append('<div class="doc">%s</div>' % md(c['readme'], shift=0))
    rows = props.get(c['name'])
    if rows:
        body.append('<h2 id="props">Props</h2><div class="table-wrap"><table class="props"><thead><tr><th>Prop</th><th>Type</th></tr></thead><tbody>')
        for n, req, typ in rows:
            body.append('<tr><td><code>%s</code>%s</td><td><code>%s</code></td></tr>' % (n, ' <span class="req">required</span>' if req else '', esc(typ)))
        body.append('</tbody></table></div>')
    if not c['page']:
        body.append('<h2 id="use">Use</h2><pre class="code"><code>%s</code></pre>' %
                    esc("const { %s } = window.Tessera;\nconst el = React.createElement(%s, { /* props */ });" % (c['name'], c['name'])))
    pn = []
    if prev_n:
        pn.append('<a class="pn prev" href="%s.html"><span class="muted">Previous</span>%s</a>' % (prev_n, prev_n))
    if next_n:
        pn.append('<a class="pn next" href="%s.html"><span class="muted">Next</span>%s</a>' % (next_n, next_n))
    body.append('<div class="pager">%s</div>' % ''.join(pn))
    return '\n'.join(body)


def main():
    tokens = json.load(open(os.path.join(DIST, 'tokens.json')))
    open(os.path.join(DIST, 'tokens.css'), 'w').write(build_tokens_css(tokens))

    readme = open(os.path.join(DOCS, 'README.md')).read()
    comps = read_components()
    nav = order_components(comps, readme)
    flat = [n for _, items in nav for n in items]
    props = parse_props(open(os.path.join(DIST, 'index.d.ts')).read())

    shutil.rmtree(SITE, ignore_errors=True)
    for d in ['tessera', 'previews', 'components', 'assets']:
        os.makedirs(os.path.join(SITE, d))
    for f in ['tokens.css', 'tokens.json', 'bundle.css', 'bundle.js', 'index.d.ts']:
        shutil.copy(os.path.join(DIST, f), os.path.join(SITE, 'tessera', f))
    for f in os.listdir(os.path.join(ROOT, 'scripts', 'site-assets')):
        src = os.path.join(ROOT, 'scripts', 'site-assets', f)
        dst = os.path.join(SITE, f if f in ('favicon.svg', '_headers') else os.path.join('assets', f))
        shutil.copy(src, dst)

    def write(path, s):
        open(os.path.join(SITE, path), 'w').write(s)

    intro, secs = split_sections(readme)
    sec = dict(secs)

    # Overview
    cover = open(os.path.join(DOCS, 'components', 'Cover', 'preview.html')).read()
    svg = re.search(r'<svg.*?</svg>', cover, re.S).group(0)
    svg = re.sub(r'<!--.*?-->', '', svg, flags=re.S)
    svg = svg.replace('width="960" height="288"', 'preserveAspectRatio="xMaxYMid meet"')
    tagline = re.search(r'<p class="tag">(.*?)</p>', cover).group(1)
    n_comp = len([n for n in flat if not comps[n]['page']])
    overview = """
<section class="cover">{svg}<div class="cover-words"><h1 class="cover-name">Tessera</h1><p class="cover-tag">{tag}</p></div></section>
<div class="doc">{intro}</div>
<div class="cards">
  <a class="card" href="get-started.html"><span class="title-4">Get started</span><span class="muted">Add two stylesheets and a script. No build step.</span></a>
  <a class="card" href="foundations.html"><span class="title-4">Foundations</span><span class="muted">Content, colour, type, space, states and icons.</span></a>
  <a class="card" href="tokens.html"><span class="title-4">Tokens</span><span class="muted">Every colour, type style, space, radius and shadow.</span></a>
  <a class="card" href="components/index.html"><span class="title-4">{n} components</span><span class="muted">Live previews with when to use, do and don't.</span></a>
  <a class="card" href="components/Themes.html"><span class="title-4">Themes</span><span class="muted">Four accents and four typefaces, light and dark, all WCAG AA.</span></a>
</div>
""".format(svg=svg, tag=tagline, intro=md(intro), n=n_comp)
    write('index.html', page('Tessera — a design system for internal tools', overview, '', 'overview', nav, tagline))

    # Get started
    gs = """
<h1 class="title-1">Get started</h1>
<p class="lede">Tessera ships as plain files: <code>tokens.css</code>, <code>bundle.css</code> and <code>bundle.js</code>, which defines <code>window.Tessera</code>. It needs React 18 on the page. There is no package to install and no build step.</p>
<h2 id="add-to-a-page">Add it to a page</h2>
<pre class="code"><code>&lt;link rel="stylesheet" href="<span data-origin></span>/tessera/tokens.css"&gt;
&lt;link rel="stylesheet" href="<span data-origin></span>/tessera/bundle.css"&gt;
&lt;script src="{react}"&gt;&lt;/script&gt;
&lt;script src="{react_dom}"&gt;&lt;/script&gt;
&lt;script src="<span data-origin></span>/tessera/bundle.js"&gt;&lt;/script&gt;</code></pre>
<p>For anything you ship, copy the files from <code>dist/</code> in the repository into your project instead of linking this site.</p>
<h2 id="mount-a-component">Mount a component</h2>
<pre class="code"><code>const T = window.Tessera, h = React.createElement;
ReactDOM.createRoot(document.getElementById('root')).render(
  h(T.Button, {{ variant: 'primary', iconStart: 'plus' }}, 'Create case')
);</code></pre>
<p>Every component, with its props and guidelines, is in <a href="components/index.html">Components</a>. <code>index.d.ts</code> has the same guidance as TypeScript hover docs.</p>
<h2 id="theme">Theme</h2>
<pre class="code"><code>&lt;html data-theme="dark" data-accent="teal" data-font="geist"&gt;

// or at runtime
Tessera.setTheme({{ accent: 'teal', font: 'inter' }});</code></pre>
<p>Modes: <code>light</code>, <code>dark</code>. Accents: <code>indigo</code> (default), <code>cobalt</code>, <code>teal</code>, <code>graphite</code>. Typefaces: <code>geist</code> (default), <code>plex</code>, <code>inter</code>, <code>system</code>. See <a href="components/Themes.html">Themes</a>.</p>
<h2 id="files">Files</h2>
<div class="table-wrap"><table><thead><tr><th>File</th><th>What it is</th></tr></thead><tbody>
<tr><td><a href="tessera/tokens.css"><code>tokens.css</code></a></td><td>Every token as a CSS variable, light and dark, plus the type classes.</td></tr>
<tr><td><a href="tessera/bundle.css"><code>bundle.css</code></a></td><td>Component styles, accent and typeface options. Loads the fonts from Google Fonts.</td></tr>
<tr><td><a href="tessera/bundle.js"><code>bundle.js</code></a></td><td>The components, as <code>window.Tessera</code>. Needs <code>window.React</code> and <code>window.ReactDOM</code> 18.</td></tr>
<tr><td><a href="tessera/index.d.ts"><code>index.d.ts</code></a></td><td>Types and usage notes for every component.</td></tr>
<tr><td><a href="tessera/tokens.json"><code>tokens.json</code></a></td><td>The source of the tokens, for design tools and other platforms.</td></tr>
</tbody></table></div>
<h2 id="rules">Rules for building with Tessera</h2>
<div class="doc">{rules}</div>
""".format(react=REACT, react_dom=REACT_DOM, rules=md(sec.get('Rules for agents building with Tessera', '').split('\n', 1)[1]))
    write('get-started.html', page('Get started · Tessera', gs, '', 'get-started', nav, 'Add Tessera to a page and mount a component.'))

    # Foundations
    fparts = ['<h1 class="title-1">Foundations</h1>']
    toc = []
    for title in ['Content fundamentals', 'Visual foundations', 'Iconography']:
        if title in sec:
            fparts.append('<div class="doc">%s</div>' % md(sec[title]))
            toc.append('<a href="#%s">%s</a>' % (slug(title), esc(title)))
    fparts.insert(1, '<nav class="toc" aria-label="On this page">%s</nav>' % ''.join(toc))
    write('foundations.html', page('Foundations · Tessera', '\n'.join(fparts), '', 'foundations', nav, 'Content, colour, type, space, states and icons.'))

    # Tokens
    write('tokens.html', page('Tokens · Tessera', tokens_page(tokens), '', 'tokens', nav, 'Every Tessera token.'))

    # Components index
    ci = ['<h1 class="title-1">Components</h1>',
          '<p class="lede">%d components, mounted from <code>window.Tessera</code>. Each page has a live preview, when to use it, what to use instead, and do and don\'t.</p>' % n_comp]
    for g, items in nav:
        ci.append('<h2 id="%s">%s</h2><div class="cards">' % (slug(g), esc(g)))
        for n in items:
            ci.append('<a class="card" href="%s.html"><span class="title-4">%s</span><span class="muted">%s</span></a>' % (n, n, esc(comps[n]['summary'])))
        ci.append('</div>')
    for title in ['Picking a component']:
        if title in sec:
            ci.append('<div class="doc">%s</div>' % md(sec[title]))
    if 'Components' in sec:
        m = re.search(r'Choosing between look-alikes:\n(.*)', sec['Components'], re.S)
        if m:
            ci.append('<h2 id="look-alikes">Choosing between look-alikes</h2><div class="doc">%s</div>' % md(m.group(1)))
    write('components/index.html', page('Components · Tessera', '\n'.join(ci), '../', 'components', nav, 'Every Tessera component.'))

    for k, n in enumerate(flat):
        c = comps[n]
        nb = (flat[k - 1] if k else None, flat[k + 1] if k + 1 < len(flat) else None)
        write('components/%s.html' % n, page('%s · Tessera' % n, component_page(c, props, nb), '../', n, nav, c['summary']))
        write('previews/%s.html' % n, preview_doc(c))
    print('Built %d component pages into %s' % (len(flat), SITE))


if __name__ == '__main__':
    main()
