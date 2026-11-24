/* @ds-bundle: {"format":4,"namespace":"Tessera","components":[{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"ButtonGroup"},{"name":"SplitButton"},{"name":"ToggleButton"},{"name":"SegmentedControl"},{"name":"Link"},{"name":"CopyButton"},{"name":"TextField"},{"name":"TextArea"},{"name":"NumberField"},{"name":"PasswordField"},{"name":"SearchField"},{"name":"Select"},{"name":"Combobox"},{"name":"MultiSelect"},{"name":"Checkbox"},{"name":"CheckboxGroup"},{"name":"Radio"},{"name":"RadioGroup"},{"name":"Switch"},{"name":"Slider"},{"name":"Calendar"},{"name":"DatePicker"},{"name":"DateRangePicker"},{"name":"TimePicker"},{"name":"FileUpload"},{"name":"InlineEdit"},{"name":"Fieldset"},{"name":"Menu"},{"name":"MenuButton"},{"name":"Popover"},{"name":"Tooltip"},{"name":"Dialog"},{"name":"ConfirmDialog"},{"name":"Drawer"},{"name":"Toast"},{"name":"CommandPalette"},{"name":"Alert"},{"name":"Banner"},{"name":"ProgressBar"},{"name":"Spinner"},{"name":"Skeleton"},{"name":"EmptyState"},{"name":"AppHeader"},{"name":"SideNav"},{"name":"TopNav"},{"name":"Tabs"},{"name":"Breadcrumbs"},{"name":"Pagination"},{"name":"Stepper"},{"name":"Accordion"},{"name":"TreeView"},{"name":"Badge"},{"name":"Tag"},{"name":"TagGroup"},{"name":"Avatar"},{"name":"AvatarGroup"},{"name":"Kbd"},{"name":"CodeInline"},{"name":"CodeBlock"},{"name":"CopyInline"},{"name":"DescriptionList"},{"name":"Stat"},{"name":"Timeline"},{"name":"Comment"},{"name":"List"},{"name":"Card"},{"name":"Divider"},{"name":"Table"},{"name":"PageHeader"},{"name":"Toolbar"},{"name":"TableToolbar"},{"name":"FilterBar"},{"name":"FilterPanel"},{"name":"KanbanColumn"},{"name":"KanbanCard"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useMemo = React.useMemo;
  var useId = React.useId || function () { var r = React.useRef(null); if (!r.current) r.current = 'ts' + Math.random().toString(36).slice(2, 8); return r.current; };

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function txt(x) { return typeof x === 'string' || typeof x === 'number' ? String(x) : undefined; }

  /* ---------- Icons: 24px grid, 1.5px stroke, round caps, currentColor ---------- */
  var ICONS = {
    search: ['c:11,11,7', 'M16.5 16.5L21 21'],
    home: ['M3.5 10.5L12 3.5l8.5 7', 'M5.5 9v11h13V9', 'M10 20v-6h4v6'],
    'chevron-down': ['M6 9l6 6 6-6'],
    'chevron-up': ['M6 15l6-6 6 6'],
    'chevron-left': ['M15 6l-6 6 6 6'],
    'chevron-right': ['M9 6l6 6-6 6'],
    close: ['M6 6l12 12', 'M18 6L6 18'],
    check: ['M5 12.5l4.5 4.5L19 7.5'],
    plus: ['M12 5v14', 'M5 12h14'],
    minus: ['M5 12h14'],
    copy: ['r:8,8,12,12,2', 'M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3'],
    'more-vertical': ['d:12,5', 'd:12,12', 'd:12,19'],
    'more-horizontal': ['d:5,12', 'd:12,12', 'd:19,12'],
    menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
    user: ['c:12,8,4', 'M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5'],
    users: ['c:9,8,3.5', 'M2.5 20c1-3.2 3.4-5 6.5-5s5.5 1.8 6.5 5', 'M15.5 4.8a3.5 3.5 0 0 1 0 6.4', 'M17.5 15.2c2 .6 3.4 2.2 4 4.8'],
    'id-card': ['r:3,5,18,14,2', 'c:9,11,2', 'M5.8 16.5c.6-1.5 1.8-2.3 3.2-2.3s2.6.8 3.2 2.3', 'M14.5 10h4', 'M14.5 13.5h3'],
    filter: ['M4 5h16l-6 7.5V19l-4 1.5v-8L4 5z'],
    sliders: ['M4 7h10', 'M18 7h2', 'c:16,7,2', 'M4 17h4', 'M12 17h8', 'c:10,17,2'],
    calendar: ['r:4,5,16,15,2', 'M4 10h16', 'M8.5 3v4', 'M15.5 3v4'],
    clock: ['c:12,12,8.5', 'M12 7.5V12l3 2'],
    info: ['c:12,12,8.5', 'M12 11v5.5', 'd:12,7.75'],
    warning: ['M12 3.5L21.5 20h-19L12 3.5z', 'M12 10v4.5', 'd:12,17.25'],
    error: ['c:12,12,8.5', 'M12 7.5V13', 'd:12,16.25'],
    success: ['c:12,12,8.5', 'M8 12.5l2.8 2.8L16 10'],
    'external-link': ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
    download: ['M12 4v11', 'M7.5 10.5L12 15l4.5-4.5', 'M4.5 19.5h15'],
    upload: ['M12 15V4', 'M7.5 8.5L12 4l4.5 4.5', 'M4.5 19.5h15'],
    edit: ['M15.5 4.5l4 4L9 19H5v-4L15.5 4.5z', 'M13 7l4 4'],
    trash: ['M4.5 6.5h15', 'M9.5 6.5V4h5v2.5', 'M6.5 6.5l1 13h9l1-13', 'M10.5 10.5v6', 'M13.5 10.5v6'],
    bell: ['M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15l1.5-2z', 'M10 20.5a2 2 0 0 0 4 0'],
    'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
    'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
    refresh: ['M19.5 12a7.5 7.5 0 1 1-2.2-5.3', 'M19.5 4.5v4h-4'],
    sort: ['M8 4v16', 'M4.5 7.5L8 4l3.5 3.5', 'M16 20V4', 'M12.5 16.5L16 20l3.5-3.5'],
    eye: ['M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z', 'c:12,12,3'],
    lock: ['r:5,10.5,14,10,2', 'M8 10.5V8a4 4 0 0 1 8 0v2.5'],
    mail: ['r:3,5.5,18,13,2', 'M3.5 7l8.5 6 8.5-6'],
    grid: ['r:4,4,7,7,1.5', 'r:13,4,7,7,1.5', 'r:4,13,7,7,1.5', 'r:13,13,7,7,1.5'],
    'arrow-up': ['M12 19V5', 'M6 11l6-6 6 6'],
    'arrow-down': ['M12 5v14', 'M6 13l6 6 6-6'],
    'chevrons-up-down': ['M8 9l4-4 4 4', 'M8 15l4 4 4-4'],
    file: ['M6 3.5h8l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5z', 'M14 3.5V8h4'],
    folder: ['M3.5 6.5a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V6.5z'],
    message: ['M4 5.5h16v11H9l-5 4v-15z'],
    help: ['c:12,12,8.5', 'M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.5', 'd:12,16.75'],
    'eye-off': ['M3 3l18 18', 'M10.5 6a8.6 8.6 0 0 1 1.5-.1c6 0 9.5 6.1 9.5 6.1a16 16 0 0 1-2.6 3.3', 'M6.4 7.4C3.9 9.1 2.5 12 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.2-1.1', 'M9.9 9.9a3 3 0 0 0 4.2 4.2'],
    columns: ['r:3.5,4.5,17,15,2', 'M9.5 4.5v15', 'M14.5 4.5v15'],
    grip: ['d:9,6', 'd:15,6', 'd:9,12', 'd:15,12', 'd:9,18', 'd:15,18'],
    star: ['M12 3.8l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L12 3.8z'],
    command: ['M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6z'],
    list: ['M9 6h11', 'M9 12h11', 'M9 18h11', 'd:4.5,6', 'd:4.5,12', 'd:4.5,18'],
    board: ['r:3.5,4,5,16,1.5', 'r:9.5,4,5,11,1.5', 'r:15.5,4,5,8,1.5'],
    paperclip: ['M19 11.5l-7.3 7.3a4.5 4.5 0 0 1-6.4-6.4l7.6-7.6a3 3 0 0 1 4.2 4.2l-7.5 7.5a1.5 1.5 0 0 1-2.1-2.1l6.8-6.8'],
    link: ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1'],
    'log-out': ['M14 4.5h4.5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H14', 'M10 16l-4-4 4-4', 'M6 12h10'],
    placeholder: ['r:4,4,16,16,2', 'M4 4l16 16']
  };

  function iconParts(name) {
    var parts = ICONS[name] || ICONS.placeholder;
    return parts.map(function (p, i) {
      if (p.indexOf('c:') === 0) { var c = p.slice(2).split(','); return h('circle', { key: i, cx: c[0], cy: c[1], r: c[2] }); }
      if (p.indexOf('d:') === 0) { var d = p.slice(2).split(','); return h('circle', { key: i, cx: d[0], cy: d[1], r: 1.1, fill: 'currentColor', stroke: 'none' }); }
      if (p.indexOf('r:') === 0) { var r = p.slice(2).split(','); return h('rect', { key: i, x: r[0], y: r[1], width: r[2], height: r[3], rx: r[4] }); }
      return h('path', { key: i, d: p });
    });
  }

  function Icon(props) {
    var size = props.size || 20;
    return h('svg', {
      className: cx('ts-icon', props.className), width: size, height: size, viewBox: '0 0 24 24',
      fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
      'aria-hidden': props.label ? undefined : true, role: props.label ? 'img' : undefined, 'aria-label': props.label, style: props.style
    }, iconParts(props.name));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- Actions ---------- */
  function Button(props) {
    var variant = props.variant || 'secondary', size = props.size || 'md', tone = props.tone || 'neutral';
    var iconSize = size === 'lg' ? 20 : 16;
    return h('button', {
      type: props.type || 'button',
      className: cx('ts-btn', 'ts-btn--' + variant, 'ts-btn--' + size, tone === 'critical' && 'ts-btn--critical', props.loading && 'is-loading', props.block && 'ts-btn--block', props.className), title: props.title || txt(props.children),
      disabled: props.disabled || props.loading, onClick: props.onClick, onKeyDown: props.onKeyDown, id: props.id, 'aria-busy': props.loading || undefined,
      'aria-haspopup': props['aria-haspopup'], 'aria-expanded': props['aria-expanded'], 'aria-controls': props['aria-controls']
    },
      props.loading ? h(Spinner, { size: iconSize }) : (props.iconStart ? h(Icon, { name: props.iconStart, size: iconSize }) : null),
      h('span', { className: 'ts-btn__label' }, props.children),
      props.iconEnd && !props.loading ? h(Icon, { name: props.iconEnd, size: iconSize }) : null
    );
  }

  function IconButton(props) {
    var variant = props.variant || 'tertiary', size = props.size || 'md';
    return h('button', {
      type: 'button', className: cx('ts-btn', 'ts-iconbtn', 'ts-btn--' + variant, 'ts-btn--' + size, props.tone === 'critical' && 'ts-btn--critical', props.className),
      'aria-label': props.label, title: props.label, disabled: props.disabled, onClick: props.onClick, onKeyDown: props.onKeyDown, id: props.id,
      'aria-haspopup': props['aria-haspopup'], 'aria-expanded': props['aria-expanded'], 'aria-controls': props['aria-controls']
    }, h(Icon, { name: props.icon, size: size === 'lg' ? 20 : 16 }));
  }

  function Link(props) {
    return h('a', {
      className: cx('ts-link', props.subtle && 'ts-link--subtle', props.className), href: props.href || '#',
      target: props.external ? '_blank' : undefined, rel: props.external ? 'noreferrer' : undefined,
      'aria-current': props.current ? 'page' : undefined, onClick: props.onClick
    }, props.children, props.external ? h(Icon, { name: 'external-link', size: 14, className: 'ts-link__icon' }) : null);
  }

  function CopyButton(props) {
    var s = useState(false), copied = s[0], setCopied = s[1];
    function onClick() {
      try { navigator.clipboard && navigator.clipboard.writeText(String(props.value || '')); } catch (e) {}
      setCopied(true); setTimeout(function () { setCopied(false); }, 1600);
    }
    return h('button', {
      type: 'button', className: cx('ts-copy', copied && 'is-copied', props.className), onClick: onClick,
      'aria-label': copied ? 'Copied' : (props.label || 'Copy'), title: copied ? 'Copied' : (props.label || 'Copy')
    }, h(Icon, { name: copied ? 'check' : 'copy', size: 16 }), props.showLabel ? h('span', null, copied ? 'Copied' : 'Copy') : null);
  }

  /* ---------- Status ---------- */
  function Badge(props) {
    var tone = props.tone || 'neutral';
    return h('span', { className: cx('ts-badge', 'ts-badge--' + tone, props.size === 'lg' && 'ts-badge--lg', props.className), title: txt(props.children) },
      props.icon ? h(Icon, { name: props.icon, size: 14 }) : null, h('span', { className: 'ts-badge__label' }, props.children));
  }

  function Avatar(props) {
    var size = props.size || 32;
    var initials = props.initials || String(props.name || '?').split(/\s+/).map(function (p) { return p[0]; }).slice(0, 2).join('').toUpperCase();
    return h('span', { className: cx('ts-avatar', props.className), style: { width: size, height: size, fontSize: Math.round(size * 0.38) }, title: props.name, 'aria-label': props.name, role: 'img' },
      props.src ? h('img', { src: props.src, alt: '' }) : initials);
  }

  function Spinner(props) {
    var size = props.size || 20;
    return h('svg', { className: 'ts-spinner', width: size, height: size, viewBox: '0 0 24 24', fill: 'none', role: 'status', 'aria-label': props.label || 'Loading' },
      h('circle', { cx: 12, cy: 12, r: 9, stroke: 'currentColor', strokeOpacity: 0.25, strokeWidth: 2.5 }),
      h('path', { d: 'M21 12a9 9 0 0 0-9-9', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' }));
  }

  function Divider(props) {
    return h('hr', { className: cx('ts-divider', props.vertical && 'ts-divider--vertical', props.subtle && 'ts-divider--subtle', props.className) });
  }

  /* ---------- Forms ---------- */
  function Field(props, control, id) {
    return h('div', { className: cx('ts-field', props.error && 'has-error', props.className), style: props.style },
      props.label ? h('label', { className: 'ts-field__label', htmlFor: id }, props.label, props.required ? h('span', { className: 'ts-field__req', 'aria-hidden': true }, ' *') : null) : null,
      control,
      props.error ? h('div', { className: 'ts-field__error', id: id + '-msg' }, h(Icon, { name: 'error', size: 16 }), props.error)
        : props.description ? h('div', { className: 'ts-field__help', id: id + '-msg' }, props.description) : null
    );
  }

  function TextField(props) {
    var id = useId();
    var input = h('div', { className: cx('ts-input', 'ts-input--' + (props.size || 'md'), props.disabled && 'is-disabled', props.readOnly && 'is-readonly') },
      props.iconStart ? h(Icon, { name: props.iconStart, size: 16 }) : null,
      h('input', {
        id: id, type: props.type || 'text', placeholder: props.placeholder, defaultValue: props.defaultValue, value: props.value,
        onChange: props.onChange, disabled: props.disabled, readOnly: props.readOnly, required: props.required,
        'aria-invalid': props.error ? true : undefined, 'aria-describedby': (props.error || props.description) ? id + '-msg' : undefined
      }),
      props.suffix ? h('span', { className: 'ts-input__suffix' }, props.suffix) : null
    );
    return Field(props, input, id);
  }

  function SearchField(props) {
    var s = useState(props.defaultValue || ''), v = s[0], setV = s[1];
    var id = useId();
    var input = h('div', { className: cx('ts-input', 'ts-input--' + (props.size || 'md'), props.disabled && 'is-disabled'), role: 'search' },
      h(Icon, { name: 'search', size: 16 }),
      h('input', { id: id, type: 'search', placeholder: props.placeholder || 'Search', value: v, disabled: props.disabled, 'aria-label': props.label ? undefined : (props.placeholder || 'Search'), onChange: function (e) { setV(e.target.value); props.onChange && props.onChange(e.target.value); } }),
      v ? h('button', { type: 'button', className: 'ts-input__clear', 'aria-label': 'Clear search', onClick: function () { setV(''); props.onChange && props.onChange(''); } }, h(Icon, { name: 'close', size: 16 })) : null
    );
    return Field(props, input, id);
  }

  function Select(props) {
    var id = useId();
    var opts = props.options || [];
    var control = h('div', { className: cx('ts-input', 'ts-select', 'ts-input--' + (props.size || 'md'), props.disabled && 'is-disabled') },
      h('select', {
        id: id, defaultValue: props.defaultValue != null ? props.defaultValue : '', value: props.value, onChange: props.onChange, disabled: props.disabled, required: props.required,
        'aria-label': props.label ? undefined : props.placeholder, 'aria-invalid': props.error ? true : undefined, className: cx(!props.value && !props.defaultValue && 'is-placeholder')
      },
        props.placeholder ? h('option', { value: '', disabled: true }, props.placeholder) : null,
        opts.map(function (o) { var val = typeof o === 'string' ? o : o.value; var lab = typeof o === 'string' ? o : o.label; return h('option', { key: val, value: val }, lab); })
      ),
      h(Icon, { name: 'chevron-down', size: 16, className: 'ts-select__chev' })
    );
    return Field(props, control, id);
  }

  function Checkbox(props) {
    return h('label', { className: cx('ts-check', props.disabled && 'is-disabled', props.className) },
      h('input', { type: 'checkbox', defaultChecked: props.defaultChecked, checked: props.checked, onChange: props.onChange, disabled: props.disabled, 'aria-label': props['aria-label'],
        ref: function (el) { if (el) el.indeterminate = !!props.indeterminate; } }),
      h('span', { className: 'ts-check__box', 'aria-hidden': true }, h(Icon, { name: props.indeterminate ? 'minus' : 'check', size: 14 })),
      props.children ? h('span', { className: 'ts-check__label' }, props.children) : null
    );
  }

  function Switch(props) {
    return h('label', { className: cx('ts-switch', props.disabled && 'is-disabled', props.className) },
      h('input', { type: 'checkbox', role: 'switch', defaultChecked: props.defaultChecked, checked: props.checked, onChange: props.onChange, disabled: props.disabled }),
      h('span', { className: 'ts-switch__track', 'aria-hidden': true }, h('span', { className: 'ts-switch__thumb' })),
      props.children ? h('span', { className: 'ts-check__label' }, props.children) : null
    );
  }

  /* ---------- Navigation ---------- */
  function Tabs(props) {
    var items = props.items || [];
    var s = useState(props.defaultValue || (items[0] && items[0].id)), sel = s[0], setSel = s[1];
    var current = props.value != null ? props.value : sel;
    function choose(id) { setSel(id); props.onChange && props.onChange(id); }
    function onKey(e) {
      var en = items.filter(function (x) { return !x.disabled; }); var i = en.findIndex(function (x) { return x.id === current; }); var n = i;
      if (e.key === 'ArrowRight') n = (i + 1) % en.length; else if (e.key === 'ArrowLeft') n = (i - 1 + en.length) % en.length; else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = en.length - 1; else return;
      e.preventDefault(); choose(en[n].id); var el = e.currentTarget.querySelector('[data-id="' + en[n].id + '"]'); el && el.focus();
    }
    return h('div', { className: cx('ts-tabs', props.size === 'sm' && 'ts-tabs--sm', props.className), role: 'tablist', 'aria-label': props.label, onKeyDown: onKey },
      items.map(function (it) {
        var on = it.id === current;
        return h('button', {
          key: it.id, 'data-id': it.id, type: 'button', role: 'tab', 'aria-selected': on, disabled: it.disabled, title: txt(it.label),
          className: cx('ts-tab', on && 'is-selected'), tabIndex: on ? 0 : -1,
          onClick: function () { choose(it.id); }
        }, it.icon ? h(Icon, { name: it.icon, size: props.size === 'sm' ? 14 : 16 }) : null, h('span', { className: 'ts-tab__label' }, it.label),
          it.count != null ? h('span', { className: 'ts-tab__count' }, it.count) : null);
      })
    );
  }

  function Breadcrumbs(props) {
    var items = props.items || [];
    return h('nav', { className: cx('ts-crumbs', props.className), 'aria-label': 'Breadcrumb' },
      h('ol', null, items.map(function (it, i) {
        var last = i === items.length - 1;
        return h('li', { key: i },
          last ? h('span', { 'aria-current': 'page', className: 'ts-crumbs__current', title: txt(it.label) }, it.label) : h('a', { href: it.href || '#', className: 'ts-link ts-crumbs__link', title: txt(it.label) }, it.label),
          last ? null : h(Icon, { name: 'chevron-right', size: 16, className: 'ts-crumbs__sep' }));
      }))
    );
  }

  /* ---------- Containers ---------- */
  function Card(props) {
    var Tag = props.as || 'section';
    return h(Tag, { className: cx('ts-card', props.padding === 'compact' && 'ts-card--compact', props.flat && 'ts-card--flat', props.interactive && 'ts-card--interactive', props.className), style: props.style },
      (props.title || props.actions) ? h('header', { className: 'ts-card__header' },
        h('div', { className: 'ts-card__titles' },
          props.title ? h('h3', { className: 'ts-card__title' }, props.title) : null,
          props.subtitle ? h('p', { className: 'ts-card__subtitle' }, props.subtitle) : null),
        props.actions ? h('div', { className: 'ts-card__actions' }, props.actions) : null) : null,
      h('div', { className: 'ts-card__body' }, props.children),
      props.footer ? h('footer', { className: 'ts-card__footer' }, props.footer) : null
    );
  }

  var ALERT_ICON = { info: 'info', success: 'success', warning: 'warning', critical: 'error' };
  function Alert(props) {
    var tone = props.tone || 'info';
    var s = useState(true), open = s[0], setOpen = s[1];
    if (!open) return null;
    return h('div', { className: cx('ts-alert', 'ts-alert--' + tone, props.className), role: tone === 'critical' ? 'alert' : 'status' },
      h(Icon, { name: ALERT_ICON[tone], size: 16, className: 'ts-alert__icon' }),
      h('div', { className: 'ts-alert__content' },
        props.title ? h('div', { className: 'ts-alert__title' }, props.title) : null,
        props.children ? h('div', { className: 'ts-alert__body' }, props.children) : null,
        props.action ? h('div', { className: 'ts-alert__action' }, props.action) : null),
      props.dismissible ? h(IconButton, { icon: 'close', size: 'sm', label: 'Dismiss', onClick: function () { setOpen(false); } }) : null
    );
  }

  function Table(props) {
    var cols = props.columns || [];
    var ss = useState(props.defaultSort || null), sort = ss[0], setSort = ss[1];
    var sel = useState(props.defaultSelected || []), selected = sel[0], setSelected = sel[1];
    var rows = (props.rows || []).slice();
    if (sort) { var col = cols.find(function (c) { return c.key === sort.key; }); rows.sort(function (a, b) { var x = col && col.sortValue ? col.sortValue(a) : a[sort.key], y = col && col.sortValue ? col.sortValue(b) : b[sort.key]; return (x > y ? 1 : x < y ? -1 : 0) * (sort.dir === 'desc' ? -1 : 1); }); }
    var ids = rows.map(function (r, i) { return r.id || String(i); });
    var all = ids.length > 0 && ids.every(function (id) { return selected.indexOf(id) >= 0; });
    var some = !all && ids.some(function (id) { return selected.indexOf(id) >= 0; });
    function toggle(id) { var next = selected.indexOf(id) >= 0 ? selected.filter(function (x) { return x !== id; }) : selected.concat([id]); setSelected(next); props.onSelectionChange && props.onSelectionChange(next); }
    function toggleAll() { var next = all ? [] : ids.slice(); setSelected(next); props.onSelectionChange && props.onSelectionChange(next); }
    function sortBy(c) { if (!c.sortable) return; var next = !sort || sort.key !== c.key ? { key: c.key, dir: 'asc' } : sort.dir === 'asc' ? { key: c.key, dir: 'desc' } : null; setSort(next); }
    return h('div', { className: cx('ts-table-wrap', props.className) },
      h('table', { className: cx('ts-table', props.density === 'compact' && 'ts-table--compact') },
        h('thead', null, h('tr', null,
          props.selectable ? h('th', { className: 'ts-table__check', scope: 'col' }, h(Checkbox, { checked: all, indeterminate: some, onChange: toggleAll, 'aria-label': 'Select all rows' })) : null,
          cols.map(function (c) {
            var dir = sort && sort.key === c.key ? sort.dir : null;
            return h('th', { key: c.key, className: (c.numeric || (c.numeric !== false && c.align === 'right')) ? 'is-num' : undefined, style: { textAlign: c.align || 'left', width: c.width }, scope: 'col', 'aria-sort': dir ? (dir === 'asc' ? 'ascending' : 'descending') : undefined },
              c.sortable ? h('button', { type: 'button', className: cx('ts-table__sort', dir && 'is-sorted'), onClick: function () { sortBy(c); } }, c.label, h(Icon, { name: dir === 'asc' ? 'arrow-up' : dir === 'desc' ? 'arrow-down' : 'chevrons-up-down', size: 14 })) : c.label);
          }),
          props.rowActions ? h('th', { className: 'ts-table__actions', scope: 'col' }, h('span', { className: 'ts-sr' }, 'Actions')) : null)),
        h('tbody', null, rows.length ? rows.map(function (r, i) {
          var id = ids[i], isSel = selected.indexOf(id) >= 0 || r.selected;
          return h('tr', { key: id, className: isSel ? 'is-selected' : undefined },
            props.selectable ? h('td', { className: 'ts-table__check' }, h(Checkbox, { checked: isSel, onChange: function () { toggle(id); }, 'aria-label': 'Select row ' + (txt(cols[0] && r[cols[0].key]) || (i + 1)) })) : null,
            cols.map(function (c) { var v = c.render ? c.render(r) : r[c.key]; return h('td', { key: c.key, style: { textAlign: c.align || 'left', maxWidth: c.truncate ? (c.width || 240) : undefined }, className: cx(c.truncate && 'ts-table__truncate', (c.nowrap || c.align === 'right') && 'ts-table__nowrap', (c.numeric || (c.numeric !== false && c.align === 'right')) && 'is-num'), title: c.truncate ? txt(v) : undefined }, v); }),
            props.rowActions ? h('td', { className: 'ts-table__actions' }, h(IconButton, { icon: 'more-horizontal', size: 'sm', label: 'Row actions' })) : null);
        }) : h('tr', null, h('td', { colSpan: cols.length + (props.selectable ? 1 : 0) + (props.rowActions ? 1 : 0), className: 'ts-table__empty' }, props.emptyText || 'Nothing to show yet.')))
      ),
      props.footer ? h('div', { className: 'ts-table__footer' }, props.footer) : null
    );
  }

  /* ---------- App chrome ---------- */
  function Mark() {
    return h('svg', { className: 'ts-mark', width: 24, height: 24, viewBox: '0 0 24 24', 'aria-hidden': true },
      h('rect', { x: 3, y: 3, width: 8, height: 8, rx: 1.5 }), h('rect', { x: 13, y: 3, width: 8, height: 8, rx: 1.5, opacity: 0.55 }),
      h('rect', { x: 3, y: 13, width: 8, height: 8, rx: 1.5, opacity: 0.55 }), h('rect', { x: 13, y: 13, width: 8, height: 8, rx: 1.5 }));
  }

  function AppHeader(props) {
    return h('header', { className: cx('ts-appheader', props.className) },
      h('div', { className: 'ts-appheader__start' },
        props.onMenu ? h(IconButton, { icon: 'menu', label: 'Open navigation', onClick: props.onMenu }) : null,
        h('a', { className: 'ts-appheader__brand', href: props.homeHref || '#', title: txt(props.appName) }, props.logo || h(Mark), h('span', { className: 'ts-appheader__appname' }, props.appName || 'App name'))),
      props.search ? h('div', { className: 'ts-appheader__search' }, h(SearchField, { placeholder: props.searchPlaceholder || 'Search', size: 'sm' })) : h('div', { style: { flex: 1 } }),
      h('div', { className: 'ts-appheader__end' },
        props.tenant ? h('button', { type: 'button', className: 'ts-appheader__tenant', title: txt(props.tenant) }, h('span', { className: 'ts-appheader__tenantname' }, props.tenant), h(Icon, { name: 'chevron-down', size: 16 })) : null,
        props.actions || null,
        props.user ? h('button', { type: 'button', className: 'ts-appheader__user', title: txt(props.user) }, h('span', { className: 'ts-appheader__username' }, props.user), h(Avatar, { name: props.user, size: 28 })) : null)
    );
  }

  function SideNav(props) {
    var items = props.items || [];
    var s = useState(props.defaultValue || (items[0] && items[0].id)), sel = s[0], setSel = s[1];
    var current = props.value != null ? props.value : sel;
    return h('nav', { className: cx('ts-sidenav', props.collapsed && 'is-collapsed', props.className), 'aria-label': props.label || 'Main' },
      h('ul', null, items.map(function (it) {
        var on = it.id === current;
        return h('li', { key: it.id }, h('a', {
          href: it.href || '#', className: cx('ts-sidenav__item', on && 'is-selected'), 'aria-current': on ? 'page' : undefined,
          title: txt(it.label), 'aria-label': props.collapsed ? it.label : undefined,
          onClick: function (e) { if (!it.href) e.preventDefault(); setSel(it.id); props.onChange && props.onChange(it.id); }
        }, h(Icon, { name: it.icon || 'placeholder', size: 16 }), props.collapsed ? null : h('span', { className: 'ts-sidenav__label' }, it.label),
          !props.collapsed && it.count != null ? h('span', { className: 'ts-tab__count' }, it.count) : null));
      }))
    );
  }


  /* ===================== Shared helpers ===================== */
  function useControlled(value, defaultValue, onChange) {
    var s = useState(defaultValue); var isCtl = value !== undefined;
    return [isCtl ? value : s[0], function (v) { if (!isCtl) s[1](v); onChange && onChange(v); }];
  }
  function useOutside(ref, open, close) {
    useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) close(); }
      function onKey(e) { if (e.key === 'Escape') close(); }
      document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
    }, [open]);
  }

  /* Arrow-key navigation over a list of option values. Returns [active, setActive, onKeyDown]. */
  function useListNav(values, open, setOpen, onPick) {
    var a = useState(null), active = a[0], setActive = a[1];
    useEffect(function () { if (!open) setActive(null); }, [open]);
    function onKeyDown(e) {
      var i = values.indexOf(active);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (!open) { setOpen(true); setActive(values[0] != null ? values[0] : null); return; }
        var n = e.key === 'ArrowDown' ? Math.min(values.length - 1, i + 1) : Math.max(0, i - 1); setActive(values[n]);
      } else if (e.key === 'Home' && open) { e.preventDefault(); setActive(values[0]); }
      else if (e.key === 'End' && open) { e.preventDefault(); setActive(values[values.length - 1]); }
      else if (e.key === 'Enter' && open && active != null) { e.preventDefault(); onPick(active); }
      else if (e.key === 'Escape' && open) { e.preventDefault(); setOpen(false); }
    }
    return [active, setActive, onKeyDown];
  }
  function optId(listId, val) { return listId + '-o-' + String(val).replace(/[^A-Za-z0-9_-]/g, '_'); }

  /* ===================== Actions ===================== */
  function ButtonGroup(props) {
    return h('div', { className: cx('ts-btngroup', props.attached && 'is-attached', props.className), role: 'group', 'aria-label': props.label }, props.children);
  }

  function SplitButton(props) {
    var m = useMenuTrigger(props.open);
    var variant = props.variant || 'primary', size = props.size || 'md';
    return h('div', { className: 'ts-pop-anchor', ref: m.ref },
      h(ButtonGroup, { attached: true },
        h(Button, { variant: variant, size: size, onClick: props.onClick, disabled: props.disabled }, props.children),
        h(IconButton, Object.assign({ variant: variant, size: size, icon: 'chevron-down', label: props.menuLabel || 'More options', disabled: props.disabled }, m.triggerProps()))),
      m.open ? h('div', { className: 'ts-pop' }, h(Menu, { id: m.menuId, label: props.menuLabel || 'More options', items: props.items || [], autoFocus: !props.open, onClose: m.close, onSelect: function (id) { m.close(); props.onSelect && props.onSelect(id); } })) : null);
  }

  function ToggleButton(props) {
    var st = useControlled(props.pressed, !!props.defaultPressed, props.onChange), pressed = st[0], set = st[1];
    var size = props.size || 'md';
    return h('button', { type: 'button', 'aria-pressed': pressed, disabled: props.disabled, title: props.label || txt(props.children),
      'aria-label': props.children ? undefined : props.label,
      className: cx('ts-btn', 'ts-btn--secondary', 'ts-btn--' + size, 'ts-toggle', pressed && 'is-pressed', !props.children && 'ts-iconbtn'),
      onClick: function () { set(!pressed); } },
      props.icon ? h(Icon, { name: props.icon, size: size === 'lg' ? 20 : 16 }) : null, props.children ? h('span', { className: 'ts-btn__label' }, props.children) : null);
  }

  function SegmentedControl(props) {
    var items = props.items || [];
    var st = useControlled(props.value, props.defaultValue || (items[0] && items[0].id), props.onChange), val = st[0], set = st[1];
    function onKey(e) {
      var en = items.filter(function (x) { return !x.disabled; }); var i = en.findIndex(function (x) { return x.id === val; }); var n;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % en.length; else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + en.length) % en.length; else return;
      e.preventDefault(); set(en[n].id); var el = e.currentTarget.querySelector('[data-id="' + en[n].id + '"]'); el && el.focus();
    }
    return h('div', { className: cx('ts-seg', 'ts-seg--' + (props.size || 'md'), props.className), role: 'radiogroup', 'aria-label': props.label, onKeyDown: onKey },
      items.map(function (it) {
        var on = it.id === val;
        return h('button', { key: it.id, 'data-id': it.id, type: 'button', role: 'radio', 'aria-checked': on, tabIndex: on ? 0 : -1, className: cx('ts-seg__item', on && 'is-selected'), disabled: it.disabled,
          'aria-label': props.iconOnly ? it.label : undefined, title: txt(it.label),
          onClick: function () { set(it.id); } },
          it.icon ? h(Icon, { name: it.icon, size: 16 }) : null, props.iconOnly ? null : h('span', { className: 'ts-seg__label' }, it.label));
      }));
  }

  /* ===================== Forms ===================== */
  function FieldShell(props, id, control) {
    return h('div', { className: cx('ts-field', props.error && 'has-error', props.className), style: props.style },
      props.label ? h('div', { className: 'ts-field__top' },
        h('label', { className: 'ts-field__label', htmlFor: id }, props.label, props.required ? h('span', { className: 'ts-field__req', 'aria-hidden': true }, ' *') : null),
        props.labelAside ? h('span', { className: 'ts-field__aside' }, props.labelAside) : null) : null,
      control,
      props.error ? h('div', { className: 'ts-field__error', id: id + '-msg' }, h(Icon, { name: 'error', size: 16 }), props.error)
        : props.description ? h('div', { className: 'ts-field__help', id: id + '-msg' }, props.description) : null);
  }

  function TextArea(props) {
    var id = useId(); var st = useControlled(props.value, props.defaultValue || '', props.onChange), v = st[0], set = st[1];
    var aside = props.maxLength ? (v.length + ' / ' + props.maxLength) : null;
    return FieldShell(Object.assign({}, props, { labelAside: aside }), id,
      h('div', { className: cx('ts-input', 'ts-textarea', props.disabled && 'is-disabled') },
        h('textarea', { id: id, rows: props.rows || 4, placeholder: props.placeholder, value: v, maxLength: props.maxLength, disabled: props.disabled, readOnly: props.readOnly,
          'aria-invalid': props.error ? true : undefined, onChange: function (e) { set(e.target.value); } })));
  }

  function NumberField(props) {
    var id = useId(); var st = useControlled(props.value, props.defaultValue != null ? props.defaultValue : 0, props.onChange), v = st[0], set = st[1];
    var step = props.step || 1, min = props.min != null ? props.min : -Infinity, max = props.max != null ? props.max : Infinity;
    function clamp(n) { return Math.min(max, Math.max(min, n)); }
    return FieldShell(props, id,
      h('div', { className: cx('ts-input', 'ts-number', 'ts-input--' + (props.size || 'md'), props.disabled && 'is-disabled') },
        props.prefix ? h('span', { className: 'ts-input__suffix' }, props.prefix) : null,
        h('input', { id: id, type: 'text', inputMode: 'decimal', value: v, disabled: props.disabled, onChange: function (e) { var n = Number(e.target.value); if (!isNaN(n)) set(n); } }),
        props.suffix ? h('span', { className: 'ts-input__suffix' }, props.suffix) : null,
        h('div', { className: 'ts-number__steps' },
          h('button', { type: 'button', 'aria-label': 'Decrease', disabled: props.disabled || v <= min, onClick: function () { set(clamp(v - step)); } }, h(Icon, { name: 'minus', size: 16 })),
          h('button', { type: 'button', 'aria-label': 'Increase', disabled: props.disabled || v >= max, onClick: function () { set(clamp(v + step)); } }, h(Icon, { name: 'plus', size: 16 })))));
  }

  function PasswordField(props) {
    var s = useState(false), show = s[0], setShow = s[1]; var id = useId();
    return FieldShell(props, id,
      h('div', { className: cx('ts-input', 'ts-input--' + (props.size || 'md'), props.disabled && 'is-disabled') },
        h(Icon, { name: 'lock', size: 16 }),
        h('input', { id: id, type: show ? 'text' : 'password', defaultValue: props.defaultValue, placeholder: props.placeholder, disabled: props.disabled, autoComplete: 'current-password' }),
        h('button', { type: 'button', className: 'ts-input__clear', 'aria-label': show ? 'Hide password' : 'Show password', onClick: function () { setShow(!show); } }, h(Icon, { name: show ? 'eye-off' : 'eye', size: 16 }))));
  }

  function Radio(props) {
    return h('label', { className: cx('ts-check', 'ts-radio', props.disabled && 'is-disabled', props.className) },
      h('input', { type: 'radio', name: props.name, value: props.value, checked: props.checked, defaultChecked: props.defaultChecked, onChange: props.onChange, disabled: props.disabled }),
      h('span', { className: 'ts-radio__dot', 'aria-hidden': true }),
      props.children ? h('span', { className: 'ts-check__label' }, props.children, props.description ? h('span', { className: 'ts-check__desc' }, props.description) : null) : null);
  }

  function RadioGroup(props) {
    var name = useId(); var st = useControlled(props.value, props.defaultValue, props.onChange), v = st[0], set = st[1];
    return h('fieldset', { className: cx('ts-fieldset', 'ts-choicegroup', props.orientation === 'horizontal' && 'is-horizontal', props.className) },
      props.label ? h('legend', { className: 'ts-field__label' }, props.label) : null,
      props.description ? h('div', { className: 'ts-field__help' }, props.description) : null,
      h('div', { className: 'ts-choicegroup__items' }, (props.options || []).map(function (o) {
        return h(Radio, { key: o.value, name: name, value: o.value, checked: v === o.value, disabled: o.disabled || props.disabled, description: o.description, onChange: function () { set(o.value); } }, o.label);
      })),
      props.error ? h('div', { className: 'ts-field__error' }, h(Icon, { name: 'error', size: 16 }), props.error) : null);
  }

  function CheckboxGroup(props) {
    var st = useControlled(props.value, props.defaultValue || [], props.onChange), v = st[0], set = st[1];
    return h('fieldset', { className: cx('ts-fieldset', 'ts-choicegroup', props.orientation === 'horizontal' && 'is-horizontal') },
      props.label ? h('legend', { className: 'ts-field__label' }, props.label) : null,
      h('div', { className: 'ts-choicegroup__items' }, (props.options || []).map(function (o) {
        var on = v.indexOf(o.value) >= 0;
        return h(Checkbox, { key: o.value, checked: on, disabled: o.disabled, onChange: function () { set(on ? v.filter(function (x) { return x !== o.value; }) : v.concat([o.value])); } }, o.label);
      })));
  }

  function Fieldset(props) {
    return h('fieldset', { className: cx('ts-fieldset', 'ts-fieldset--section', props.className) },
      h('legend', { className: 'ts-fieldset__legend' }, props.legend),
      props.description ? h('p', { className: 'ts-fieldset__desc' }, props.description) : null,
      h('div', { className: cx('ts-fieldset__body', props.columns === 2 && 'is-2col') }, props.children));
  }

  function ListBox(props) {
    var opts = props.options || [];
    return h('ul', { className: 'ts-listbox', role: 'listbox', id: props.id, 'aria-label': props.label || 'Options', 'aria-multiselectable': props.multiple || undefined },
      opts.length ? opts.map(function (o) {
        var val = typeof o === 'string' ? o : o.value, lab = typeof o === 'string' ? o : o.label, on = props.isSelected && props.isSelected(val);
        return h('li', { key: val, id: props.id ? optId(props.id, val) : undefined, role: 'option', 'aria-selected': !!on, className: cx('ts-listbox__item', on && 'is-selected', props.active === val && 'is-active'),
          ref: props.active === val ? function (el) { el && el.scrollIntoView && el.scrollIntoView({ block: 'nearest' }); } : undefined,
          onMouseDown: function (e) { e.preventDefault(); props.onPick && props.onPick(val); } },
          props.multiple ? h('span', { className: cx('ts-check__box', 'ts-listbox__box', on && 'is-on') }, on ? h(Icon, { name: 'check', size: 14 }) : null) : null,
          h('span', { className: 'ts-listbox__label' }, lab),
          !props.multiple && on ? h(Icon, { name: 'check', size: 16, className: 'ts-listbox__tick' }) : null);
      }) : h('li', { className: 'ts-listbox__empty' }, props.emptyText || 'No matches'));
  }

  function Combobox(props) {
    var id = useId(); var ref = useRef(null);
    var st = useControlled(props.value, props.defaultValue || '', props.onChange), v = st[0], set = st[1];
    var q = useState(''), query = q[0], setQuery = q[1]; var o = useState(!!props.open), open = o[0], setOpen = o[1];
    useOutside(ref, open, function () { setOpen(false); });
    var opts = (props.options || []).filter(function (x) { var l = typeof x === 'string' ? x : x.label; return l.toLowerCase().indexOf(query.toLowerCase()) >= 0; });
    var label = (props.options || []).map(function (x) { return typeof x === 'string' ? { value: x, label: x } : x; }).find(function (x) { return x.value === v; });
    var listId = id + '-list'; var vals = opts.map(function (x) { return typeof x === 'string' ? x : x.value; });
    function pick(x) { set(x); setOpen(false); }
    var nav = useListNav(vals, open, setOpen, pick), active = nav[0];
    return FieldShell(props, id, h('div', { className: 'ts-pop-anchor', ref: ref },
      h('div', { className: cx('ts-input', 'ts-input--' + (props.size || 'md'), open && 'is-open') },
        h('input', { id: id, role: 'combobox', 'aria-expanded': open, 'aria-controls': listId, 'aria-autocomplete': 'list', 'aria-activedescendant': open && active != null ? optId(listId, active) : undefined,
          placeholder: label ? label.label : (props.placeholder || 'Search'), value: open ? query : (label ? label.label : ''), title: label ? label.label : undefined,
          onFocus: function () { setOpen(true); setQuery(''); }, onChange: function (e) { setQuery(e.target.value); setOpen(true); }, onKeyDown: nav[2] }),
        h(Icon, { name: 'chevrons-up-down', size: 16, className: 'ts-combobox__icon' })),
      open ? h('div', { className: 'ts-pop ts-pop--fill ts-pop--scroll' }, h(ListBox, { id: listId, label: props.label, options: opts, active: active, isSelected: function (x) { return x === v; }, onPick: pick })) : null));
  }

  function MultiSelect(props) {
    var id = useId(); var ref = useRef(null);
    var st = useControlled(props.value, props.defaultValue || [], props.onChange), v = st[0], set = st[1];
    var o = useState(!!props.open), open = o[0], setOpen = o[1]; var q = useState(''), query = q[0], setQuery = q[1];
    useOutside(ref, open, function () { setOpen(false); });
    var all = (props.options || []).map(function (x) { return typeof x === 'string' ? { value: x, label: x } : x; });
    var lab = function (val) { var f = all.find(function (x) { return x.value === val; }); return f ? f.label : val; };
    function toggle(val) { set(v.indexOf(val) >= 0 ? v.filter(function (x) { return x !== val; }) : v.concat([val])); }
    var shown = all.filter(function (x) { return x.label.toLowerCase().indexOf(query.toLowerCase()) >= 0; }); var listId = id + '-list';
    var nav = useListNav(shown.map(function (x) { return x.value; }), open, setOpen, toggle), active = nav[0];
    return FieldShell(props, id, h('div', { className: 'ts-pop-anchor', ref: ref },
      h('div', { className: cx('ts-input', 'ts-multi', open && 'is-open'), onClick: function () { setOpen(true); } },
        v.map(function (val) { return h(Tag, { key: val, size: 'sm', onRemove: function () { toggle(val); } }, lab(val)); }),
        h('input', { id: id, role: 'combobox', 'aria-expanded': open, 'aria-controls': listId, 'aria-autocomplete': 'list', 'aria-activedescendant': open && active != null ? optId(listId, active) : undefined,
          placeholder: v.length ? '' : (props.placeholder || 'Select'), value: query, onChange: function (e) { setQuery(e.target.value); setOpen(true); },
          onKeyDown: function (e) { if (e.key === 'Backspace' && !query && v.length) toggle(v[v.length - 1]); else nav[2](e); } }),
        h(Icon, { name: 'chevron-down', size: 16, className: 'ts-combobox__icon' })),
      open ? h('div', { className: 'ts-pop ts-pop--fill ts-pop--scroll' }, h(ListBox, { id: listId, label: props.label, multiple: true, options: shown, active: active, isSelected: function (x) { return v.indexOf(x) >= 0; }, onPick: toggle })) : null));
  }

  var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function fmtDate(d) { return d ? d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear() : ''; }
  function sameDay(a, b) { return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function pad2(n) { return String(n).padStart(2, '0'); }
  function withHM(d, hm) { if (!d) return d; var x = new Date(d); x.setHours(hm[0], hm[1], 0, 0); return x; }
  function fmtTime(d, hc) { var hh = d.getHours(), mm = pad2(d.getMinutes()); if (hc === 12) { var s = hh >= 12 ? 'PM' : 'AM'; return (hh % 12 || 12) + ':' + mm + ' ' + s; } return pad2(hh) + ':' + mm; }
  function fmtDT(d, time, hc) { return d ? fmtDate(d) + (time ? ', ' + fmtTime(d, hc) : '') : ''; }
  function parseHM(s, hc) {
    var m = String(s || '').trim().toLowerCase().match(/^(\d{1,2})(?::?(\d{2}))?\s*([ap])?\.?m?\.?$/); if (!m) return null;
    var hh = +m[1], mm = m[2] ? +m[2] : 0; if (m[3]) { if (hh < 1 || hh > 12) return null; hh = (hh % 12) + (m[3] === 'p' ? 12 : 0); }
    return hh > 23 || mm > 59 ? null : [hh, mm];
  }
  function hmOf(d, fallback) { return d ? [d.getHours(), d.getMinutes()] : fallback; }

  /* Relative ranges for DateRangePicker. Each returns [start, end] as whole days, ending today where open-ended. */
  var RANGE_PRESETS = {
    today: { label: 'Today', get: function (t) { return [t, t]; } },
    yesterday: { label: 'Yesterday', get: function (t) { var y = addDays(t, -1); return [y, y]; } },
    last7: { label: 'Last 7 days', get: function (t) { return [addDays(t, -6), t]; } },
    last30: { label: 'Last 30 days', get: function (t) { return [addDays(t, -29), t]; } },
    last90: { label: 'Last 90 days', get: function (t) { return [addDays(t, -89), t]; } },
    thisMonth: { label: 'This month', get: function (t) { return [new Date(t.getFullYear(), t.getMonth(), 1), t]; } },
    lastMonth: { label: 'Last month', get: function (t) { return [new Date(t.getFullYear(), t.getMonth() - 1, 1), new Date(t.getFullYear(), t.getMonth(), 0)]; } },
    thisQuarter: { label: 'This quarter', get: function (t) { return [new Date(t.getFullYear(), Math.floor(t.getMonth() / 3) * 3, 1), t]; } },
    lastQuarter: { label: 'Last quarter', get: function (t) { var q = Math.floor(t.getMonth() / 3) * 3; return [new Date(t.getFullYear(), q - 3, 1), new Date(t.getFullYear(), q, 0)]; } },
    thisYear: { label: 'Year to date', get: function (t) { return [new Date(t.getFullYear(), 0, 1), t]; } }
  };
  var DEFAULT_PRESETS = ['today', 'last7', 'last30', 'thisMonth', 'lastMonth', 'thisQuarter'];
  function resolvePresets(list, today) {
    return (list || DEFAULT_PRESETS).map(function (p) {
      if (typeof p === 'string') {
        var key = RANGE_PRESETS[p] ? p : Object.keys(RANGE_PRESETS).find(function (k) { return RANGE_PRESETS[k].label.toLowerCase() === p.toLowerCase(); });
        return key ? { id: key, label: RANGE_PRESETS[key].label, range: RANGE_PRESETS[key].get(today) } : null;
      }
      var r = typeof p.value === 'function' ? p.value(today) : p.value;
      return r && r[0] && r[1] ? { id: p.id || p.label, label: p.label, range: [startOfDay(r[0]), startOfDay(r[1])] } : null;
    }).filter(Boolean);
  }

  function Calendar(props) {
    var today = props.today || startOfDay(new Date());
    var anchor = props.rangeEnd || props.rangeStart || props.value || props.month || today;
    var m = useState(new Date(anchor.getFullYear(), anchor.getMonth(), 1)), month = m[0], setMonth = m[1];
    var ak = anchor.getFullYear() * 12 + anchor.getMonth(), seen = useRef(ak);
    useEffect(function () { if (seen.current !== ak) { seen.current = ak; setMonth(new Date(anchor.getFullYear(), anchor.getMonth(), 1)); } }, [ak]);
    var first = (month.getDay() + 6) % 7; var days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    var cells = []; for (var i = 0; i < first; i++) cells.push(null); for (var d = 1; d <= days; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
    var f = useState(props.value || props.rangeStart || (today.getMonth() === month.getMonth() ? today : month)), focus = f[0], setFocus = f[1];
    var kb = useRef(false); var gridRef = useRef(null);
    if (focus.getMonth() !== month.getMonth() || focus.getFullYear() !== month.getFullYear()) focus = new Date(month.getFullYear(), month.getMonth(), Math.min(focus.getDate(), days));
    useEffect(function () { if (kb.current && gridRef.current) { var el = gridRef.current.querySelector('[tabindex="0"]'); el && el.focus(); kb.current = false; } });
    function onKey(e) {
      var d = new Date(focus), k = e.key;
      if (k === 'ArrowRight') d.setDate(d.getDate() + 1); else if (k === 'ArrowLeft') d.setDate(d.getDate() - 1);
      else if (k === 'ArrowDown') d.setDate(d.getDate() + 7); else if (k === 'ArrowUp') d.setDate(d.getDate() - 7);
      else if (k === 'PageDown') d.setMonth(d.getMonth() + 1); else if (k === 'PageUp') d.setMonth(d.getMonth() - 1);
      else if (k === 'Home') d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); else if (k === 'End') d.setDate(d.getDate() + (6 - (d.getDay() + 6) % 7));
      else return;
      e.preventDefault(); kb.current = true; setFocus(d); if (d.getMonth() !== month.getMonth() || d.getFullYear() !== month.getFullYear()) setMonth(new Date(d.getFullYear(), d.getMonth(), 1));
    }
    var rs = props.rangeStart && startOfDay(props.rangeStart), re = props.rangeEnd && startOfDay(props.rangeEnd);
    function inRange(x) { return rs && re && x > rs && x < re; }
    return h('div', { className: 'ts-cal' },
      h('div', { className: 'ts-cal__head' },
        h(IconButton, { icon: 'chevron-left', size: 'sm', label: 'Previous month', onClick: function () { setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1)); } }),
        h('span', { className: 'ts-cal__title', 'aria-live': 'polite' }, MONTHS[month.getMonth()] + ' ' + month.getFullYear()),
        h(IconButton, { icon: 'chevron-right', size: 'sm', label: 'Next month', onClick: function () { setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1)); } })),
      h('div', { className: 'ts-cal__grid', role: 'group', 'aria-label': MONTHS[month.getMonth()] + ' ' + month.getFullYear(), ref: gridRef, onKeyDown: onKey },
        ['Mo','Tu','We','Th','Fr','Sa','Su'].map(function (w) { return h('span', { key: w, className: 'ts-cal__dow', 'aria-hidden': true }, w); }),
        cells.map(function (c, i) {
          if (!c) return h('span', { key: 'e' + i });
          var sel = sameDay(c, props.value) || sameDay(c, props.rangeStart) || sameDay(c, props.rangeEnd);
          return h('button', { key: i, type: 'button', className: cx('ts-cal__day', sel && 'is-selected', inRange(c) && 'is-inrange', sameDay(c, today) && 'is-today'),
            'aria-pressed': sel, 'aria-label': fmtDate(c), 'aria-current': sameDay(c, today) ? 'date' : undefined, tabIndex: sameDay(c, focus) ? 0 : -1,
            onClick: function () { setFocus(c); props.onChange && props.onChange(c); } }, c.getDate());
        })));
  }

  /* Time entry inside the date popovers: type 9, 930, 9:30 or 9:30 pm; arrow keys step by `step` minutes. */
  function TimeInput(props) {
    var hc = props.hourCycle || 24, step = props.step || 15;
    var shown = props.value ? fmtTime(withHM(new Date(2000, 0, 1), props.value), hc) : '';
    var s = useState(shown), text = s[0], setText = s[1]; var bad = useState(false), invalid = bad[0], setInvalid = bad[1];
    useEffect(function () { setText(shown); setInvalid(false); }, [shown]);
    function commit() { var v = parseHM(text, hc); if (v) { setInvalid(false); props.onChange(v); setText(fmtTime(withHM(new Date(2000, 0, 1), v), hc)); } else setInvalid(text !== ''); }
    function onKey(e) {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') { if (e.key === 'Enter') commit(); return; }
      e.preventDefault(); var v = (text !== shown && parseHM(text, hc)) || props.value || [0, 0]; var t = v[0] * 60 + v[1];
      t = e.key === 'ArrowUp' ? Math.floor(t / step) * step + step : Math.ceil(t / step) * step - step; t = Math.max(0, Math.min(1439, t));
      var n = [Math.floor(t / 60), t % 60]; props.onChange(n);
    }
    return h('label', { className: cx('ts-timein', invalid && 'has-error') },
      h('span', { className: 'ts-timein__label' }, props.label),
      h('span', { className: 'ts-input ts-input--sm' }, h(Icon, { name: 'clock', size: 14 }),
        h('input', { className: 'ts-num', value: text, inputMode: 'numeric', placeholder: hc === 12 ? '9:00 AM' : '09:00', 'aria-invalid': invalid || undefined,
          'aria-label': props.label, onChange: function (e) { setText(e.target.value); }, onBlur: commit, onKeyDown: onKey })));
  }

  /* Shared field: a trigger that opens the popover, plus a clear button once there is a value. */
  function PickerField(props, o) {
    var size = props.size || 'md';
    return h('div', { className: cx('ts-input', 'ts-input--' + size, 'ts-input--picker', o.open && 'is-open', props.disabled && 'is-disabled') },
      h('button', { id: o.id, ref: o.triggerRef, type: 'button', className: 'ts-input__trigger', disabled: props.disabled, 'aria-haspopup': 'dialog', 'aria-expanded': o.open,
        'aria-describedby': (props.error || props.description) ? o.id + '-msg' : undefined, 'aria-invalid': props.error ? true : undefined,
        onClick: function () { o.setOpen(!o.open); },
        onKeyDown: function (e) { if ((e.key === 'Delete' || e.key === 'Backspace') && o.hasValue && props.clearable !== false) { e.preventDefault(); o.clear(); } } },
        h(Icon, { name: 'calendar', size: 16 }),
        h('span', { className: o.hasValue ? 'ts-input__value ts-num' : 'ts-input__placeholder' }, o.hasValue ? o.text : o.placeholder)),
      o.hasValue && props.clearable !== false && !props.disabled ? h('button', { type: 'button', className: 'ts-input__clear', 'aria-label': o.clearLabel, tabIndex: -1,
        onClick: function () { o.clear(); o.triggerRef.current && o.triggerRef.current.focus(); } }, h(Icon, { name: 'close', size: 16 })) : null);
  }
  function usePopover(props) {
    var ref = useRef(null), triggerRef = useRef(null);
    var o = useState(!!props.open), open = o[0], setOpenRaw = o[1];
    function setOpen(v, refocus) { setOpenRaw(v); if (!v && refocus && triggerRef.current) triggerRef.current.focus(); }
    useEffect(function () {
      if (!open) return;
      function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpenRaw(false); }
      function onKey(e) { if (e.key === 'Escape') setOpen(false, true); }
      document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
    }, [open]);
    return { ref: ref, triggerRef: triggerRef, open: open, setOpen: setOpen };
  }
  function PopFooter(onCancel, onApply, canApply) {
    return h('div', { className: 'ts-datepop__foot' },
      h(Button, { size: 'sm', variant: 'secondary', onClick: onCancel }, 'Cancel'),
      h(Button, { size: 'sm', variant: 'primary', onClick: onApply, disabled: !canApply }, 'Apply'));
  }

  function DatePicker(props) {
    var id = useId(); var p = usePopover(props); var time = !!props.withTime, hc = props.hourCycle || 24;
    var st = useControlled(props.value, props.defaultValue || null, props.onChange), v = st[0], set = st[1];
    var dt = useState(v), draft = dt[0], setDraft = dt[1];
    var defHM = parseHM(props.defaultTime || '09:00') || [9, 0];
    useEffect(function () { if (p.open) setDraft(v); }, [p.open]);
    function pickDay(d) {
      if (!time) { set(startOfDay(d)); p.setOpen(false, true); return; }
      setDraft(withHM(d, hmOf(draft, defHM)));
    }
    var hasValue = !!v;
    return FieldShell(props, id, h('div', { className: 'ts-pop-anchor ts-picker ts-picker--date' + (time ? ' ts-picker--time' : ''), ref: p.ref },
      PickerField(props, { id: id, triggerRef: p.triggerRef, open: p.open, setOpen: p.setOpen, hasValue: hasValue, text: fmtDT(v, time, hc),
        placeholder: props.placeholder || (time ? 'Select date and time' : 'Select date'), clearLabel: 'Clear date', clear: function () { set(null); } }),
      p.open ? h('div', { className: 'ts-pop ts-datepop', role: 'dialog', 'aria-label': props.label || 'Choose date' },
        h('div', { className: 'ts-datepop__main' },
          h(Calendar, { value: time ? draft : v, today: props.today, onChange: pickDay }),
          time ? h('div', { className: 'ts-datepop__times' }, h(TimeInput, { label: 'Time', hourCycle: hc, step: props.timeStep, value: hmOf(draft, defHM),
            onChange: function (hm) { setDraft(withHM(draft || startOfDay(props.today || new Date()), hm)); } })) : null),
        time ? PopFooter(function () { p.setOpen(false, true); }, function () { set(draft); p.setOpen(false, true); }, !!draft) : null) : null));
  }

  function DateRangePicker(props) {
    var id = useId(); var p = usePopover(props); var time = !!props.withTime, hc = props.hourCycle || 24;
    var st = useControlled(props.value, props.defaultValue || [null, null], props.onChange), v = st[0] || [null, null], set = st[1];
    var dt = useState(v), draft = dt[0], setDraft = dt[1];
    var today = props.today || startOfDay(new Date());
    var sHM = parseHM(props.defaultStartTime || '00:00') || [0, 0], eHM = parseHM(props.defaultEndTime || '23:59') || [23, 59];
    useEffect(function () { if (p.open) setDraft(v); }, [p.open]);
    var cur = time ? draft : v;
    function commit(r) { set(r); p.setOpen(false, true); }
    function pick(d) {
      var r;
      if (!cur[0] || cur[1]) r = [withHM(d, time ? hmOf(cur[0], sHM) : [0, 0]), null];
      else if (startOfDay(d) < startOfDay(cur[0])) r = [withHM(d, time ? hmOf(cur[0], sHM) : [0, 0]), withHM(cur[0], time ? eHM : [0, 0])];
      else r = [cur[0], withHM(d, time ? eHM : [0, 0])];
      if (time) setDraft(r); else if (r[1]) commit(r); else set(r);
    }
    var presets = props.presets === false ? [] : resolvePresets(props.presets, today);
    function applyPreset(pr) { var r = [withHM(pr.range[0], time ? sHM : [0, 0]), withHM(pr.range[1], time ? eHM : [0, 0])]; if (time) setDraft(r); else commit(r); }
    var activePreset = presets.find(function (pr) { return sameDay(pr.range[0], cur[0]) && sameDay(pr.range[1], cur[1]); });
    var hasValue = !!v[0];
    var text = v[0] ? fmtDT(v[0], time, hc) + ' – ' + (v[1] ? fmtDT(v[1], time, hc) : '…') : '';
    return FieldShell(props, id, h('div', { className: 'ts-pop-anchor ts-picker ts-picker--range' + (presets.length ? ' has-presets' : '') + (time ? ' ts-picker--time' : ''), ref: p.ref },
      PickerField(props, { id: id, triggerRef: p.triggerRef, open: p.open, setOpen: p.setOpen, hasValue: hasValue, text: text,
        placeholder: props.placeholder || (time ? 'Select dates and times' : 'Select dates'), clearLabel: 'Clear dates', clear: function () { set([null, null]); } }),
      p.open ? h('div', { className: 'ts-pop ts-datepop ts-daterange', role: 'dialog', 'aria-label': props.label || 'Choose dates' },
        h('div', { className: 'ts-datepop__body' },
          presets.length ? h('ul', { className: 'ts-daterange__presets', 'aria-label': 'Quick ranges' }, presets.map(function (pr) {
            return h('li', { key: pr.id }, h('button', { type: 'button', className: cx(activePreset === pr && 'is-active'), 'aria-pressed': activePreset === pr, onClick: function () { applyPreset(pr); } }, pr.label));
          })) : null,
          h('div', { className: 'ts-datepop__main' },
            h(Calendar, { rangeStart: cur[0], rangeEnd: cur[1], today: today, onChange: pick }),
            time ? h('div', { className: 'ts-datepop__times' },
              h(TimeInput, { label: 'Start time', hourCycle: hc, step: props.timeStep, value: hmOf(cur[0], sHM), onChange: function (hm) { setDraft([cur[0] ? withHM(cur[0], hm) : null, cur[1]]); } }),
              h(TimeInput, { label: 'End time', hourCycle: hc, step: props.timeStep, value: hmOf(cur[1], eHM), onChange: function (hm) { setDraft([cur[0], cur[1] ? withHM(cur[1], hm) : null]); } })) : null)),
        time ? PopFooter(function () { p.setOpen(false, true); }, function () { var r = draft; if (r[0] && r[1] && r[1] < r[0]) r = [r[1], r[0]]; commit(r); }, !!(draft[0] && draft[1])) : null) : null));
  }

  function TimePicker(props) {
    var id = useId(); var ref = useRef(null);
    var st = useControlled(props.value, props.defaultValue || '', props.onChange), v = st[0], set = st[1];
    var o = useState(!!props.open), open = o[0], setOpen = o[1]; useOutside(ref, open, function () { setOpen(false); });
    var step = props.step || 30, opts = [];
    for (var m = (props.startHour || 8) * 60; m <= (props.endHour || 18) * 60; m += step) opts.push(String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'));
    var listId = id + '-list'; function pick(x) { set(x); setOpen(false); }
    var nav = useListNav(opts, open, setOpen, pick), active = nav[0];
    return FieldShell(props, id, h('div', { className: 'ts-pop-anchor', ref: ref },
      h('button', { id: id, type: 'button', className: cx('ts-input', 'ts-input--' + (props.size || 'md'), 'ts-input--button', open && 'is-open'), onClick: function () { setOpen(!open); },
        'aria-haspopup': 'listbox', 'aria-expanded': open, 'aria-controls': open ? listId : undefined, 'aria-activedescendant': open && active != null ? optId(listId, active) : undefined, onKeyDown: nav[2] },
        h(Icon, { name: 'clock', size: 16 }), h('span', { className: v ? 'ts-input__value ts-num' : 'ts-input__placeholder' }, v || (props.placeholder || 'Select time'))),
      open ? h('div', { className: 'ts-pop ts-pop--fill ts-pop--scroll ts-num', tabIndex: 0, onKeyDown: nav[2] }, h(ListBox, { id: listId, label: props.label || 'Times', options: opts, active: active, isSelected: function (x) { return x === v; }, onPick: pick })) : null));
  }

  function Slider(props) {
    var id = useId(); var st = useControlled(props.value, props.defaultValue != null ? props.defaultValue : 50, props.onChange), v = st[0], set = st[1];
    var min = props.min || 0, max = props.max != null ? props.max : 100; var pct = ((v - min) / (max - min)) * 100;
    return FieldShell(Object.assign({}, props, { labelAside: props.showValue === false ? null : (v + (props.unit || '')) }), id,
      h('input', { id: id, type: 'range', className: 'ts-slider', min: min, max: max, step: props.step || 1, value: v, disabled: props.disabled,
        style: { '--ts-fill': pct + '%' }, onChange: function (e) { set(Number(e.target.value)); } }));
  }

  function FileUpload(props) {
    var id = useId(); var s = useState(props.files || []), files = s[0], setFiles = s[1]; var d = useState(false), drag = d[0], setDrag = d[1];
    function add(list) { var next = files.concat(Array.prototype.map.call(list, function (f) { return { name: f.name, size: f.size }; })); setFiles(next); props.onChange && props.onChange(next); }
    function kb(n) { return n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.round(n / 1024) + ' KB'; }
    return FieldShell(props, id, h('div', { className: 'ts-upload' },
      h('label', { htmlFor: id, className: cx('ts-upload__zone', drag && 'is-drag', props.error && 'has-error'),
        onDragOver: function (e) { e.preventDefault(); setDrag(true); }, onDragLeave: function () { setDrag(false); }, onDrop: function (e) { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); } },
        h(Icon, { name: 'upload', size: 20 }),
        h('span', { className: 'ts-upload__title' }, h('span', { className: 'ts-upload__link' }, 'Choose files'), ' or drag them here'),
        props.hint ? h('span', { className: 'ts-upload__hint' }, props.hint) : null,
        h('input', { id: id, type: 'file', multiple: props.multiple, accept: props.accept, className: 'ts-sr', onChange: function (e) { add(e.target.files); } })),
      files.length ? h('ul', { className: 'ts-upload__list' }, files.map(function (f, i) {
        return h('li', { key: i, className: cx('ts-upload__file', f.error && 'has-error') },
          h(Icon, { name: 'file', size: 16 }),
          h('span', { className: 'ts-upload__name' }, h('span', { className: 'ts-upload__filename', title: f.name }, f.name), h('span', { className: 'ts-upload__meta' }, f.error ? f.error : f.progress != null && f.progress < 100 ? 'Uploading… ' + f.progress + '%' : kb(f.size || 0))),
          f.progress != null && f.progress < 100 ? h(ProgressBar, { value: f.progress, size: 'sm', label: 'Upload progress' }) : null,
          h(IconButton, { icon: 'close', size: 'sm', label: 'Remove ' + f.name, onClick: function () { var n = files.filter(function (_, j) { return j !== i; }); setFiles(n); props.onChange && props.onChange(n); } }));
      })) : null));
  }

  function InlineEdit(props) {
    var st = useControlled(props.value, props.defaultValue || '', props.onChange), v = st[0], set = st[1];
    var e = useState(!!props.editing), editing = e[0], setEditing = e[1]; var d = useState(v), draft = d[0], setDraft = d[1];
    if (!editing) return h('button', { type: 'button', className: cx('ts-inline-edit', props.className), onClick: function () { setDraft(v); setEditing(true); }, 'aria-label': (v || props.placeholder || 'Add a value') + ', edit ' + (props.label || 'value'), title: v || undefined },
      h('span', { className: cx('ts-inline-edit__value', !v && 'ts-input__placeholder') }, v || props.placeholder || 'Add a value'), h(Icon, { name: 'edit', size: 16, className: 'ts-inline-edit__icon' }));
    return h('div', { className: 'ts-inline-edit is-editing' },
      h('div', { className: 'ts-input ts-input--sm' }, h('input', { autoFocus: true, value: draft, 'aria-label': props.label, onChange: function (ev) { setDraft(ev.target.value); },
        onKeyDown: function (ev) { if (ev.key === 'Enter') { set(draft); setEditing(false); } if (ev.key === 'Escape') setEditing(false); } })),
      h(IconButton, { icon: 'check', size: 'sm', variant: 'secondary', label: 'Save', onClick: function () { set(draft); setEditing(false); } }),
      h(IconButton, { icon: 'close', size: 'sm', variant: 'secondary', label: 'Cancel', onClick: function () { setEditing(false); } }));
  }

  /* ===================== Overlays ===================== */
  function Menu(props) {
    var items = props.items || []; var ref = useRef(null);
    var hasCheck = items.some(function (it) { return it.checked != null; });
    var hasIcon = items.some(function (it) { return it.icon; });
    var firstEnabled = items.findIndex(function (it) { return !it.divider && !it.section && !it.disabled; });
    useEffect(function () { if (props.autoFocus && ref.current) { var el = ref.current.querySelector('[role^="menuitem"]:not(:disabled)'); el && el.focus(); } }, []);
    function onKey(e) {
      var list = Array.prototype.slice.call(ref.current.querySelectorAll('[role^="menuitem"]:not(:disabled)')); var i = list.indexOf(document.activeElement), n = null;
      if (e.key === 'ArrowDown') n = (i + 1) % list.length; else if (e.key === 'ArrowUp') n = (i - 1 + list.length) % list.length;
      else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = list.length - 1;
      else if (e.key === 'Escape' || e.key === 'Tab') { if (props.onClose) { if (e.key === 'Escape') e.preventDefault(); props.onClose(e.key); } return; }
      else if (e.key.length === 1 && /\S/.test(e.key)) { var k = e.key.toLowerCase(); for (var j = 1; j <= list.length; j++) { var c = list[(i + j) % list.length]; if ((c.textContent || '').trim().toLowerCase().indexOf(k) === 0) { n = (i + j) % list.length; break; } } }
      if (n == null) return; e.preventDefault(); list[n] && list[n].focus();
    }
    return h('div', { className: cx('ts-menu', props.className), role: 'menu', ref: ref, id: props.id, 'aria-label': props.label, onKeyDown: onKey, style: props.width ? { width: props.width } : undefined },
      items.map(function (it, i) {
        if (it.divider) return h('div', { key: 'd' + i, className: 'ts-menu__divider', role: 'separator' });
        if (it.section) return h('div', { key: 's' + i, className: 'ts-menu__section', role: 'presentation' }, it.section);
        return h('button', { key: it.id || i, type: 'button', role: it.checked != null ? 'menuitemcheckbox' : 'menuitem', 'aria-checked': it.checked != null ? !!it.checked : undefined,
          'aria-haspopup': it.submenu ? 'menu' : undefined, tabIndex: i === firstEnabled ? 0 : -1, title: txt(it.label),
          disabled: it.disabled, className: cx('ts-menu__item', it.tone === 'critical' && 'is-critical', it.active && 'is-active'),
          onClick: function () { it.onSelect && it.onSelect(); props.onSelect && props.onSelect(it.id); } },
          hasCheck ? h('span', { className: 'ts-menu__check' }, it.checked ? h(Icon, { name: 'check', size: 16 }) : null) : null,
          it.icon ? h(Icon, { name: it.icon, size: 16 }) : hasIcon ? h('span', { className: 'ts-menu__iconspace', 'aria-hidden': true }) : null,
          h('span', { className: 'ts-menu__label' }, h('span', { className: 'ts-menu__text' }, it.label), it.description ? h('span', { className: 'ts-menu__desc' }, it.description) : null),
          it.shortcut ? h(Kbd, null, it.shortcut) : null,
          it.submenu ? h(Icon, { name: 'chevron-right', size: 16, className: 'ts-menu__sub' }) : null);
      }));
  }

  function useMenuTrigger(initial) {
    var s = useState(!!initial), open = s[0], setOpen = s[1]; var ref = useRef(null); var menuId = useId() + '-menu';
    useOutside(ref, open, function () { setOpen(false); });
    function focusTrigger() { var b = ref.current && ref.current.querySelector('button[aria-haspopup="menu"]'); b && b.focus(); }
    function close(why) { setOpen(false); if (why !== 'Tab') setTimeout(focusTrigger, 0); }
    function triggerProps() { return { 'aria-haspopup': 'menu', 'aria-expanded': open, 'aria-controls': open ? menuId : undefined,
      onClick: function () { setOpen(!open); }, onKeyDown: function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); } } }; }
    return { open: open, setOpen: setOpen, ref: ref, menuId: menuId, close: close, triggerProps: triggerProps };
  }
  function MenuButton(props) {
    var m = useMenuTrigger(props.open);
    return h('div', { className: 'ts-pop-anchor', ref: m.ref },
      props.icon && !props.children ? h(IconButton, Object.assign({ icon: props.icon, label: props.label || 'More actions', variant: props.variant || 'tertiary', size: props.size }, m.triggerProps()))
        : h(Button, Object.assign({ variant: props.variant || 'secondary', size: props.size, iconEnd: 'chevron-down', iconStart: props.icon }, m.triggerProps()), props.children),
      m.open ? h('div', { className: cx('ts-pop', props.align === 'end' && 'ts-pop--end') }, h(Menu, { id: m.menuId, label: props.label || txt(props.children), items: props.items, autoFocus: !props.open, onClose: m.close, onSelect: function (id) { m.close(); props.onSelect && props.onSelect(id); } })) : null);
  }

  function Popover(props) {
    var s = useState(!!props.open), open = s[0], setOpen = s[1]; var ref = useRef(null);
    useOutside(ref, open, function () { setOpen(false); });
    return h('div', { className: 'ts-pop-anchor', ref: ref },
      h('span', { onClick: function () { setOpen(!open); } }, props.trigger),
      open ? h('div', { className: cx('ts-pop', 'ts-popover', props.align === 'end' && 'ts-pop--end'), role: 'dialog', 'aria-label': props.title, style: props.width ? { width: props.width } : undefined },
        props.title ? h('div', { className: 'ts-popover__title' }, props.title) : null,
        h('div', { className: 'ts-popover__body' }, props.children),
        props.footer ? h('div', { className: 'ts-popover__footer' }, props.footer) : null) : null);
  }

  function Tooltip(props) {
    var id = useId();
    return h('span', { className: cx('ts-tip-anchor', props.open && 'is-open') },
      React.cloneElement(React.Children.only(props.children), { 'aria-describedby': id }),
      h('span', { id: id, role: 'tooltip', className: cx('ts-tip', 'ts-tip--' + (props.placement || 'top')) }, props.content, props.shortcut ? h(Kbd, { inverse: true }, props.shortcut) : null));
  }

  function Dialog(props) {
    if (props.open === false) return null;
    var size = props.size || 'md';
    var panel = h('div', { className: cx('ts-dialog', 'ts-dialog--' + size), role: props.role || 'dialog', 'aria-modal': true, 'aria-labelledby': 'dlg-title' },
      h('header', { className: 'ts-dialog__header' },
        props.icon ? h('span', { className: cx('ts-dialog__icon', props.tone && 'is-' + props.tone) }, h(Icon, { name: props.icon, size: 16 })) : null,
        h('div', { className: 'ts-dialog__titles' }, h('h2', { id: 'dlg-title', className: 'ts-dialog__title' }, props.title), props.subtitle ? h('p', { className: 'ts-dialog__subtitle' }, props.subtitle) : null),
        props.onClose !== null ? h(IconButton, { icon: 'close', size: 'sm', label: 'Close', onClick: props.onClose }) : null),
      h('div', { className: 'ts-dialog__body' }, props.children),
      props.footer ? h('footer', { className: 'ts-dialog__footer' }, props.footer) : null);
    return h('div', { className: cx('ts-scrim', props.inline && 'is-inline') }, panel);
  }

  function ConfirmDialog(props) {
    var tone = props.tone || 'critical';
    return h(Dialog, { open: props.open, inline: props.inline, size: 'sm', role: 'alertdialog', title: props.title, onClose: null, icon: tone === 'critical' ? 'warning' : 'info', tone: tone,
      footer: [h(Button, { key: 'c', onClick: props.onCancel }, props.cancelLabel || 'Cancel'),
               h(Button, { key: 'k', variant: 'primary', tone: tone === 'critical' ? 'critical' : 'neutral', onClick: props.onConfirm }, props.confirmLabel || 'Confirm')] }, props.children);
  }

  function Drawer(props) {
    if (props.open === false) return null;
    return h('div', { className: cx('ts-scrim', 'ts-scrim--drawer', props.inline && 'is-inline') },
      h('div', { className: 'ts-drawer', role: 'dialog', 'aria-modal': true, 'aria-label': props.title, style: { width: props.width || 440 } },
        h('header', { className: 'ts-dialog__header ts-drawer__header' }, h('div', { className: 'ts-dialog__titles' }, h('h2', { className: 'ts-dialog__title' }, props.title), props.subtitle ? h('p', { className: 'ts-dialog__subtitle' }, props.subtitle) : null),
          h(IconButton, { icon: 'close', size: 'sm', label: 'Close', onClick: props.onClose })),
        h('div', { className: 'ts-drawer__body' }, props.children),
        props.footer ? h('footer', { className: 'ts-dialog__footer' }, props.footer) : null));
  }

  var TOAST_ICON = { neutral: 'info', success: 'success', warning: 'warning', critical: 'error', info: 'info' };
  function Toast(props) {
    var tone = props.tone || 'neutral';
    return h('div', { className: cx('ts-toast', 'ts-toast--' + tone), role: tone === 'critical' ? 'alert' : 'status' },
      h(Icon, { name: TOAST_ICON[tone], size: 16, className: 'ts-toast__icon' }),
      h('div', { className: 'ts-toast__content' }, h('div', { className: 'ts-toast__title' }, props.title), props.children ? h('div', { className: 'ts-toast__body' }, props.children) : null),
      props.action ? h('button', { type: 'button', className: 'ts-toast__action', onClick: props.onAction, title: txt(props.action) }, props.action) : null,
      h('button', { type: 'button', className: 'ts-toast__close', 'aria-label': 'Dismiss', onClick: props.onClose }, h(Icon, { name: 'close', size: 16 })));
  }

  function CommandPalette(props) {
    var q = useState(props.defaultQuery || ''), query = q[0], setQuery = q[1];
    var groups = (props.groups || []).map(function (g) { return { title: g.title, items: g.items.filter(function (i) { return i.label.toLowerCase().indexOf(query.toLowerCase()) >= 0; }) }; }).filter(function (g) { return g.items.length; });
    var first = groups[0] && groups[0].items[0];
    var panel = h('div', { className: 'ts-cmdk', role: 'dialog', 'aria-label': 'Command palette' },
      h('div', { className: 'ts-cmdk__search' }, h(Icon, { name: 'search', size: 16 }), h('input', { autoFocus: !props.inline, placeholder: props.placeholder || 'Search or jump to…', value: query, onChange: function (e) { setQuery(e.target.value); } }), h(Kbd, null, 'Esc')),
      h('div', { className: 'ts-cmdk__list' }, groups.length ? groups.map(function (g) {
        return h('div', { key: g.title, className: 'ts-cmdk__group' }, h('div', { className: 'ts-menu__section' }, g.title),
          g.items.map(function (it) { return h('button', { key: it.id || it.label, type: 'button', className: cx('ts-menu__item', it === first && 'is-active'), title: txt(it.label) }, it.icon ? h(Icon, { name: it.icon, size: 16 }) : null, h('span', { className: 'ts-menu__label' }, it.label), it.shortcut ? h(Kbd, null, it.shortcut) : null); }));
      }) : h('div', { className: 'ts-cmdk__empty' }, 'No results for “' + query + '”')),
      h('div', { className: 'ts-cmdk__foot' }, h('span', null, h(Kbd, null, '↑'), h(Kbd, null, '↓'), ' to move'), h('span', null, h(Kbd, null, '↵'), ' to open')));
    return h('div', { className: cx('ts-scrim', 'ts-scrim--top', props.inline && 'is-inline') }, panel);
  }

  /* ===================== Feedback ===================== */
  var BANNER_ICON = { info: 'info', success: 'success', warning: 'warning', critical: 'error' };
  function Banner(props) {
    var tone = props.tone || 'info'; var s = useState(true), open = s[0], setOpen = s[1];
    if (!open) return null;
    return h('div', { className: cx('ts-banner', 'ts-banner--' + tone), role: tone === 'critical' ? 'alert' : 'status' },
      h(Icon, { name: BANNER_ICON[tone], size: 16, className: 'ts-banner__icon' }),
      h('div', { className: 'ts-banner__text' }, props.title ? h('strong', null, props.title, ' ') : null, props.children),
      props.action ? h('div', { className: 'ts-banner__action' }, props.action) : null,
      props.dismissible ? h(IconButton, { icon: 'close', size: 'sm', label: 'Dismiss', onClick: function () { setOpen(false); } }) : null);
  }

  function ProgressBar(props) {
    var max = props.max || 100, pct = Math.max(0, Math.min(100, ((props.value || 0) / max) * 100));
    return h('div', { className: cx('ts-progress', 'ts-progress--' + (props.size || 'md'), props.tone && 'is-' + props.tone, props.indeterminate && 'is-indeterminate', props.className) },
      props.label && props.showLabel !== false && props.size !== 'sm' ? h('div', { className: 'ts-progress__top' }, h('span', null, props.label), props.indeterminate ? null : h('span', { className: 'ts-progress__value' }, Math.round(pct) + '%')) : null,
      h('div', { className: 'ts-progress__track', role: 'progressbar', 'aria-label': props.label, 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': props.indeterminate ? undefined : props.value },
        h('div', { className: 'ts-progress__fill', style: props.indeterminate ? undefined : { width: pct + '%' } })),
      props.description ? h('div', { className: 'ts-field__help' }, props.description) : null);
  }

  function Skeleton(props) {
    var v = props.variant || 'text';
    if (v === 'text' && props.lines > 1) return h('div', { className: 'ts-skel-lines', 'aria-hidden': true }, Array.from({ length: props.lines }, function (_, i) { return h('span', { key: i, className: 'ts-skel ts-skel--text', style: { width: i === props.lines - 1 ? '60%' : '100%' } }); }));
    return h('span', { className: cx('ts-skel', 'ts-skel--' + v), 'aria-hidden': true, style: { width: props.width, height: props.height } });
  }

  function EmptyState(props) {
    return h('div', { className: cx('ts-empty', props.size === 'sm' && 'ts-empty--sm', props.className) },
      h('span', { className: 'ts-empty__icon' }, h(Icon, { name: props.icon || 'folder', size: 20 })),
      h('h3', { className: 'ts-empty__title' }, props.title),
      props.children ? h('p', { className: 'ts-empty__body' }, props.children) : null,
      props.action || props.secondaryAction ? h('div', { className: 'ts-empty__actions' }, props.action, props.secondaryAction) : null);
  }

  /* ===================== Navigation ===================== */
  function TopNav(props) {
    var items = props.items || []; var st = useControlled(props.value, props.defaultValue || (items[0] && items[0].id), props.onChange), v = st[0], set = st[1];
    return h('nav', { className: cx('ts-topnav', props.className), 'aria-label': props.label || 'Section' },
      items.map(function (it) { var on = it.id === v; return h('a', { key: it.id, href: it.href || '#', title: txt(it.label), className: cx('ts-topnav__item', on && 'is-selected'), 'aria-current': on ? 'page' : undefined, onClick: function (e) { if (!it.href) e.preventDefault(); set(it.id); } }, h('span', { className: 'ts-topnav__label' }, it.label)); }));
  }

  function Pagination(props) {
    var count = props.pageCount || 1; var st = useControlled(props.page, props.defaultPage || 1, props.onChange), p = st[0], set = st[1];
    var pages = []; var push = function (x) { if (pages[pages.length - 1] !== x) pages.push(x); };
    for (var i = 1; i <= count; i++) { if (i === 1 || i === count || Math.abs(i - p) <= 1) push(i); else push('…'); }
    var size = props.pageSize || 25, total = props.total;
    return h('nav', { className: cx('ts-pagination', props.className), 'aria-label': props.label || 'Pagination' },
      total != null ? h('span', { className: 'ts-pagination__summary' }, ((p - 1) * size + 1) + '–' + Math.min(p * size, total) + ' of ' + total) : null,
      h('div', { className: 'ts-pagination__pages' },
        h(IconButton, { icon: 'chevron-left', size: 'sm', label: 'Previous page', disabled: p <= 1, onClick: function () { set(p - 1); } }),
        pages.map(function (x, i) { return x === '…' ? h('span', { key: 'g' + i, className: 'ts-pagination__gap' }, '…')
          : h('button', { key: x, type: 'button', className: cx('ts-pagination__page', x === p && 'is-current'), 'aria-current': x === p ? 'page' : undefined, onClick: function () { set(x); } }, x); }),
        h(IconButton, { icon: 'chevron-right', size: 'sm', label: 'Next page', disabled: p >= count, onClick: function () { set(p + 1); } })));
  }

  function Stepper(props) {
    var steps = props.steps || [], cur = props.current || 0;
    return h('ol', { className: cx('ts-stepper', props.orientation === 'vertical' && 'is-vertical', props.className) },
      steps.map(function (s, i) {
        var state = s.error ? 'error' : i < cur ? 'done' : i === cur ? 'current' : 'upcoming';
        return h('li', { key: i, className: cx('ts-step', 'is-' + state), 'aria-current': state === 'current' ? 'step' : undefined },
          h('span', { className: 'ts-step__marker' }, state === 'done' ? h(Icon, { name: 'check', size: 14 }) : state === 'error' ? h(Icon, { name: 'close', size: 14 }) : i + 1),
          h('span', { className: 'ts-step__text', title: props.orientation === 'vertical' ? undefined : txt(s.label) }, h('span', { className: 'ts-step__label' }, s.label), s.description ? h('span', { className: 'ts-step__desc' }, s.description) : null));
      }));
  }

  function Accordion(props) {
    var items = props.items || []; var st = useControlled(props.open, props.defaultOpen || [], props.onOpenChange), open = st[0], setOpen = st[1];
    var base = useId(); var sm = props.size === 'sm';
    function toggle(id) { var on = open.indexOf(id) >= 0; setOpen(on ? open.filter(function (x) { return x !== id; }) : props.multiple === false ? [id] : open.concat([id])); }
    return h('div', { className: cx('ts-accordion', 'ts-accordion--' + (sm ? 'sm' : 'md'), props.variant && props.variant !== 'default' && 'is-' + props.variant, props.className) },
      items.map(function (it) {
        var on = open.indexOf(it.id) >= 0 && !it.disabled; var pid = base + '-' + it.id;
        var meta = it.meta == null ? null : (typeof it.meta === 'string' || typeof it.meta === 'number') ? h('span', { className: 'ts-accordion__meta', title: String(it.meta) }, it.meta) : h('span', { className: 'ts-accordion__metaslot' }, it.meta);
        return h('div', { key: it.id, className: cx('ts-accordion__item', on && 'is-open', it.disabled && 'is-disabled') },
          h('div', { className: 'ts-accordion__header' },
            h('button', { type: 'button', id: pid + '-t', className: 'ts-accordion__trigger', 'aria-expanded': on, 'aria-controls': pid, disabled: it.disabled, onClick: function () { toggle(it.id); } },
              h(Icon, { name: 'chevron-right', size: 16, className: 'ts-accordion__chev' }),
              it.icon ? h(Icon, { name: it.icon, size: sm ? 14 : 16, className: 'ts-accordion__icon' }) : null,
              h('span', { className: 'ts-accordion__titles' }, h('span', { className: 'ts-accordion__title' }, it.title), it.subtitle ? h('span', { className: 'ts-accordion__subtitle' }, it.subtitle) : null),
              meta),
            it.actions ? h('div', { className: 'ts-accordion__actions' }, it.actions) : null),
          on ? h('div', { className: 'ts-accordion__panel', id: pid, role: 'region', 'aria-labelledby': pid + '-t' }, it.content) : null);
      }));
  }

  function TreeView(props) {
    var s = useState(props.defaultExpanded || []), exp = s[0], setExp = s[1];
    var st = useControlled(props.value, props.defaultValue, props.onChange), sel = st[0], setSel = st[1];
    var flat = []; var parent = {};
    (function walk(nodes, p) { nodes.forEach(function (n) { flat.push(n); parent[n.id] = p; if (n.children && n.children.length && exp.indexOf(n.id) >= 0) walk(n.children, n.id); }); })(props.items || [], null);
    var f = useState(null), focusId = f[0], setFocusId = f[1]; var cur = focusId && flat.some(function (n) { return n.id === focusId; }) ? focusId : (sel && flat.some(function (n) { return n.id === sel; }) ? sel : flat[0] && flat[0].id);
    var root = useRef(null);
    function focusOn(id) { setFocusId(id); setTimeout(function () { var el = root.current && root.current.querySelector('[data-id="' + id + '"]'); el && el.focus(); }, 0); }
    function toggleExp(id, on) { setExp(on ? exp.filter(function (x) { return x !== id; }) : exp.concat([id])); }
    function onKey(e, n) {
      var i = flat.indexOf(n), hasKids = n.children && n.children.length, on = exp.indexOf(n.id) >= 0;
      if (e.key === 'ArrowDown' && i < flat.length - 1) focusOn(flat[i + 1].id);
      else if (e.key === 'ArrowUp' && i > 0) focusOn(flat[i - 1].id);
      else if (e.key === 'ArrowRight' && hasKids) { if (!on) toggleExp(n.id, false); else focusOn(n.children[0].id); }
      else if (e.key === 'ArrowLeft') { if (hasKids && on) toggleExp(n.id, true); else if (parent[n.id]) focusOn(parent[n.id]); }
      else if (e.key === 'Home') focusOn(flat[0].id); else if (e.key === 'End') focusOn(flat[flat.length - 1].id);
      else if (e.key === 'Enter' || e.key === ' ') { setSel(n.id); if (hasKids) toggleExp(n.id, on); }
      else return;
      e.preventDefault(); e.stopPropagation();
    }
    function render(nodes, depth) {
      return h('ul', { role: depth ? 'group' : 'tree', 'aria-label': depth ? undefined : (props.label || 'Tree'), className: 'ts-tree__list' }, nodes.map(function (n) {
        var hasKids = n.children && n.children.length, on = exp.indexOf(n.id) >= 0;
        return h('li', { key: n.id, 'data-id': n.id, role: 'treeitem', 'aria-expanded': hasKids ? on : undefined, 'aria-selected': sel === n.id, 'aria-level': depth + 1, tabIndex: n.id === cur ? 0 : -1, className: 'ts-tree__item',
            onKeyDown: function (e) { onKey(e, n); }, onFocus: function (e) { if (e.target === e.currentTarget) setFocusId(n.id); } },
          h('div', { className: cx('ts-tree__row', sel === n.id && 'is-selected'), style: { paddingLeft: 8 + depth * 20 }, title: txt(n.label), onClick: function () { setSel(n.id); setFocusId(n.id); if (hasKids) toggleExp(n.id, on); } },
            hasKids ? h(Icon, { name: on ? 'chevron-down' : 'chevron-right', size: 16, className: 'ts-tree__chev' }) : h('span', { className: 'ts-tree__spacer' }),
            h(Icon, { name: n.icon || (hasKids ? 'folder' : 'file'), size: 16 }), h('span', { className: 'ts-tree__label' }, n.label),
            n.count != null ? h('span', { className: 'ts-tab__count' }, n.count) : null),
          hasKids && on ? render(n.children, depth + 1) : null);
      }));
    }
    return h('div', { className: cx('ts-tree', props.className), ref: root }, render(props.items || [], 0));
  }

  /* ===================== Data display ===================== */
  function Tag(props) {
    return h('span', { className: cx('ts-tag', 'ts-tag--' + (props.size || 'md'), props.tone && 'ts-tag--' + props.tone, props.selected && 'is-selected', props.className), title: txt(props.children) },
      props.icon ? h(Icon, { name: props.icon, size: 14 }) : null, props.avatar ? h(Avatar, { name: props.avatar, size: 18 }) : null,
      h('span', { className: 'ts-tag__label' }, props.children),
      props.onRemove ? h('button', { type: 'button', className: 'ts-tag__remove', 'aria-label': 'Remove ' + (typeof props.children === 'string' ? props.children : ''), onClick: function (e) { e.stopPropagation(); props.onRemove(); } }, h(Icon, { name: 'close', size: 14 })) : null);
  }

  function TagGroup(props) { return h('div', { className: cx('ts-taggroup', props.className), role: 'list', 'aria-label': props.label }, React.Children.map(props.children, function (c) { return c == null || c === false ? c : h('span', { role: 'listitem', className: 'ts-taggroup__item' }, c); })); }

  function AvatarGroup(props) {
    var names = props.names || [], max = props.max || 4, size = props.size || 28; var shown = names.slice(0, max), extra = names.length - shown.length;
    return h('div', { className: 'ts-avgroup', 'aria-label': names.join(', ') },
      shown.map(function (n) { return h(Avatar, { key: n, name: n, size: size }); }),
      extra > 0 ? h('span', { className: 'ts-avatar ts-avgroup__more', style: { width: size, height: size, fontSize: Math.round(size * 0.38) } }, '+' + extra) : null);
  }

  function Kbd(props) { return h('kbd', { className: cx('ts-kbd', props.inverse && 'is-inverse') }, props.children); }
  function CodeInline(props) { return h('code', { className: 'ts-code-inline' }, props.children); }
  function CodeBlock(props) {
    return h('div', { className: 'ts-codeblock' },
      h('div', { className: 'ts-codeblock__head' }, h('span', null, props.title || props.language || 'Code'), h(CopyButton, { value: props.code, label: 'Copy code' })),
      h('pre', null, h('code', null, (props.code || '').split('\n').map(function (ln, i) { return h('span', { key: i, className: 'ts-codeblock__line' }, props.lineNumbers ? h('span', { className: 'ts-codeblock__num' }, i + 1) : null, ln + '\n'); }))));
  }

  function CopyInline(props) {
    return h('span', { className: cx('ts-copyinline', props.mono !== false && 'is-mono') }, h('span', { className: 'ts-copyinline__value', title: props.value }, props.display || props.value), h(CopyButton, { value: props.value, label: props.label || 'Copy' }));
  }

  function DescriptionList(props) {
    return h('dl', { className: cx('ts-dl', props.layout === 'stacked' ? 'is-stacked' : 'is-inline', props.columns === 2 && 'is-2col', props.size === 'sm' && 'ts-dl--sm', props.className) },
      (props.items || []).map(function (it, i) { return h('div', { key: i, className: 'ts-dl__row' }, h('dt', null, it.term), h('dd', null, it.description)); }));
  }

  function Stat(props) {
    var trend = props.trend || (props.delta && String(props.delta).trim()[0] === '-' ? 'down' : 'up');
    var good = props.positive === undefined ? trend === 'up' : props.positive;
    return h('div', { className: cx('ts-stat', props.bordered !== false && 'is-bordered', props.className) },
      h('div', { className: 'ts-stat__label' }, props.label, props.help ? h(Tooltip, { content: props.help }, h('button', { type: 'button', className: 'ts-stat__help', 'aria-label': 'About ' + props.label }, h(Icon, { name: 'help', size: 14 }))) : null),
      h('div', { className: 'ts-stat__value', title: txt(props.value) }, props.value),
      props.delta ? h('div', { className: cx('ts-stat__delta', trend === 'flat' ? 'is-flat' : good ? 'is-good' : 'is-bad') },
        h(Icon, { name: trend === 'down' ? 'arrow-down' : trend === 'flat' ? 'minus' : 'arrow-up', size: 14 }), h('span', null, props.delta), props.period ? h('span', { className: 'ts-stat__period' }, props.period) : null) : null);
  }

  function Timeline(props) {
    var hz = props.orientation === 'horizontal';
    return h('ol', { className: cx('ts-timeline', hz && 'is-horizontal', props.size === 'sm' && 'ts-timeline--sm', props.className), 'aria-label': props.label }, (props.items || []).map(function (it, i) {
      var marker = h('span', { className: cx('ts-timeline__marker', it.tone && 'is-' + it.tone) }, it.avatar ? h(Avatar, { name: it.avatar, size: 24 }) : h(Icon, { name: it.icon || 'clock', size: 14 }));
      return h('li', { key: it.id || i, className: cx('ts-timeline__item', it.upcoming && 'is-upcoming', it.current && 'is-current'), 'aria-current': it.current ? 'step' : undefined },
        hz ? h('div', { className: 'ts-timeline__rail', 'aria-hidden': false }, marker) : marker,
        h('div', { className: 'ts-timeline__content' },
          h('div', { className: 'ts-timeline__title' }, h('span', { className: 'ts-timeline__text' }, it.title), it.time ? h('span', { className: 'ts-timeline__time', title: txt(it.time) }, it.time) : null),
          it.body ? h('div', { className: 'ts-timeline__body' }, it.body) : null));
    }));
  }

  function Comment(props) {
    return h('article', { className: cx('ts-comment', props.className) },
      h(Avatar, { name: props.author, size: 24 }),
      h('div', { className: 'ts-comment__main' },
        h('header', { className: 'ts-comment__head' }, h('strong', { className: 'ts-comment__author' }, props.author), props.role ? h(Badge, { tone: 'neutral' }, props.role) : null, h('span', { className: 'ts-comment__time' }, props.time), props.edited ? h('span', { className: 'ts-comment__time' }, '· Edited') : null),
        h('div', { className: 'ts-comment__body' }, props.children),
        h('div', { className: 'ts-comment__actions' }, (props.actions || ['Reply', 'Edit']).map(function (a) { return h('button', { key: a, type: 'button', className: 'ts-comment__action' }, a); }))));
  }

  function List(props) {
    var items = props.items || []; var sm = props.size === 'sm'; var sel = props.selectable;
    var f = useState(Math.max(0, items.findIndex(function (x) { return x.selected; }))), focus = f[0], setFocus = f[1]; var refs = useRef([]);
    function pick(it, i) { setFocus(i); props.onSelect && props.onSelect(it.id != null ? it.id : i); }
    function onKey(e, i) {
      var n; if (e.key === 'ArrowDown') n = Math.min(items.length - 1, i + 1); else if (e.key === 'ArrowUp') n = Math.max(0, i - 1); else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = items.length - 1;
      else if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) { e.preventDefault(); pick(items[i], i); return; } else return;
      e.preventDefault(); setFocus(n); refs.current[n] && refs.current[n].focus();
    }
    return h('ul', { className: cx('ts-list', props.bordered && 'is-bordered', sm && 'ts-list--sm', props.className), role: sel ? 'listbox' : undefined, 'aria-label': props.label || (sel ? 'Options' : undefined) }, items.map(function (it, i) {
      return h('li', { key: it.id || i, ref: function (el) { refs.current[i] = el; }, className: cx('ts-list__item', it.selected && 'is-selected', sel && 'is-interactive'), role: sel ? 'option' : undefined, 'aria-selected': sel ? !!it.selected : undefined,
          tabIndex: sel ? (i === focus ? 0 : -1) : undefined, onClick: sel ? function () { pick(it, i); } : undefined, onKeyDown: sel ? function (e) { onKey(e, i); } : undefined },
        it.avatar ? h(Avatar, { name: it.avatar, size: sm ? 24 : 32 }) : it.icon ? h('span', { className: 'ts-list__icon' }, h(Icon, { name: it.icon, size: 16 })) : null,
        h('div', { className: 'ts-list__text' }, h('span', { className: 'ts-list__title' }, it.title), it.description ? h('span', { className: 'ts-list__desc' }, it.description) : null),
        it.meta ? h('span', { className: 'ts-list__meta' }, it.meta) : null,
        it.action || null);
    }));
  }

  /* ===================== Patterns ===================== */
  function PageHeader(props) {
    return h('header', { className: cx('ts-pagehead', props.className) },
      props.breadcrumbs ? h(Breadcrumbs, { items: props.breadcrumbs }) : null,
      h('div', { className: 'ts-pagehead__row' },
        props.back ? h(IconButton, { icon: 'arrow-left', variant: 'secondary', size: 'sm', label: 'Back' }) : null,
        h('div', { className: 'ts-pagehead__titles' },
          h('div', { className: 'ts-pagehead__titleline' }, h('h1', { className: 'ts-pagehead__title' }, props.title), props.badge || null),
          props.description ? h('p', { className: 'ts-pagehead__desc' }, props.description) : null,
          props.meta ? h('div', { className: 'ts-pagehead__meta' }, props.meta) : null),
        props.actions ? h('div', { className: 'ts-pagehead__actions' }, props.actions) : null),
      props.tabs || null);
  }

  function Toolbar(props) {
    return h('div', { className: cx('ts-toolbar', props.className), role: 'toolbar', 'aria-label': props.label },
      h('div', { className: 'ts-toolbar__start' }, props.start || props.children), props.end ? h('div', { className: 'ts-toolbar__end' }, props.end) : null);
  }

  function TableToolbar(props) {
    if (props.selectedCount) return h('div', { className: 'ts-toolbar ts-toolbar--bulk', role: 'toolbar', 'aria-label': 'Bulk actions' },
      h('div', { className: 'ts-toolbar__start' }, h('strong', null, props.selectedCount + ' selected'), h('button', { type: 'button', className: 'ts-link', onClick: props.onClearSelection }, 'Clear')),
      h('div', { className: 'ts-toolbar__end' }, props.bulkActions));
    return h(Toolbar, { start: props.start, end: props.end, label: props.label || 'Table tools' });
  }

  function FilterBar(props) {
    var chips = props.chips || [];
    return h('div', { className: cx('ts-filterbar', props.className) },
      h('div', { className: 'ts-filterbar__row' },
        h(SearchField, { placeholder: props.searchPlaceholder || 'Search', className: 'ts-filterbar__search' }),
        (props.filters || []).map(function (f) { return h(Select, { key: f.id, placeholder: f.label, options: f.options, className: 'ts-filterbar__select' }); }),
        props.moreFilters ? h(Button, { variant: 'secondary', iconStart: 'sliders' }, 'More filters') : null,
        props.end || null),
      chips.length ? h('div', { className: 'ts-filterbar__chips' },
        h('span', { className: 'ts-filterbar__chiplabel' }, 'Filtered by'),
        chips.map(function (c) { return h(Tag, { key: c, size: 'sm', onRemove: function () {} }, c); }),
        h('button', { type: 'button', className: 'ts-link', onClick: props.onClear }, 'Clear all')) : null);
  }

  function FilterPanel(props) {
    return h('aside', { className: cx('ts-filterpanel', props.className), 'aria-label': 'Filters' },
      h('header', { className: 'ts-filterpanel__head' }, h('h2', { className: 'ts-card__title' }, props.title || 'Filters'), h('button', { type: 'button', className: 'ts-link' }, 'Reset')),
      h(Accordion, { variant: 'flush', defaultOpen: (props.groups || []).map(function (g) { return g.id; }), items: (props.groups || []).map(function (g) {
        return { id: g.id, title: g.title, meta: g.selected && g.selected.length ? String(g.selected.length) : null, content: h(CheckboxGroup, { options: g.options.map(function (o) { return { value: o, label: o }; }), defaultValue: g.selected }) };
      }) }),
      h('footer', { className: 'ts-filterpanel__foot' }, h(Button, { variant: 'secondary' }, 'Cancel'), h(Button, { variant: 'primary' }, 'Apply filters')));
  }

  var PRIORITY_TONE = { Low: 'neutral', Medium: 'warning', High: 'critical', Urgent: 'critical' };
  function KanbanCard(props) {
    return h('div', { className: cx('ts-kcard', props.selected && 'is-selected', props.className), tabIndex: 0 },
      h('div', { className: 'ts-kcard__top' }, h(Link, { href: '#', className: 'ts-kcard__key' }, props.id), props.priority ? h(Badge, { tone: PRIORITY_TONE[props.priority] || 'neutral' }, props.priority) : null),
      h('div', { className: 'ts-kcard__title' }, props.title),
      props.fields ? h(DescriptionList, { items: props.fields }) : null,
      h('div', { className: 'ts-kcard__foot' }, h('span', null, props.updated), props.assignee ? h(Avatar, { name: props.assignee, size: 24 }) : null));
  }

  function KanbanColumn(props) {
    var n = React.Children.count(props.children);
    return h('section', { className: cx('ts-kcol', props.className), 'aria-label': props.title },
      h('header', { className: 'ts-kcol__head' }, props.tone ? h('span', { className: 'ts-kcol__dot is-' + props.tone }) : null, h('h3', { title: txt(props.title) }, props.title), h('span', { className: 'ts-tab__count' }, props.count != null ? props.count : n),
        h('div', { className: 'ts-kcol__actions' }, h(IconButton, { icon: 'plus', size: 'sm', label: 'Add to ' + props.title }))),
      h('div', { className: 'ts-kcol__body' }, n ? props.children : h('div', { className: 'ts-kcol__empty' }, props.emptyText || 'Nothing here yet')));
  }
  var api = {
    Icon: Icon, Button: Button, IconButton: IconButton, ButtonGroup: ButtonGroup, SplitButton: SplitButton, ToggleButton: ToggleButton, SegmentedControl: SegmentedControl, Link: Link, CopyButton: CopyButton,
    TextField: TextField, TextArea: TextArea, NumberField: NumberField, PasswordField: PasswordField, SearchField: SearchField, Select: Select, Combobox: Combobox, MultiSelect: MultiSelect,
    Checkbox: Checkbox, CheckboxGroup: CheckboxGroup, Radio: Radio, RadioGroup: RadioGroup, Switch: Switch, Slider: Slider, Calendar: Calendar, DatePicker: DatePicker, DateRangePicker: DateRangePicker, TimePicker: TimePicker,
    FileUpload: FileUpload, InlineEdit: InlineEdit, Fieldset: Fieldset,
    Menu: Menu, MenuButton: MenuButton, Popover: Popover, Tooltip: Tooltip, Dialog: Dialog, ConfirmDialog: ConfirmDialog, Drawer: Drawer, Toast: Toast, CommandPalette: CommandPalette,
    Alert: Alert, Banner: Banner, ProgressBar: ProgressBar, Spinner: Spinner, Skeleton: Skeleton, EmptyState: EmptyState,
    AppHeader: AppHeader, SideNav: SideNav, TopNav: TopNav, Tabs: Tabs, Breadcrumbs: Breadcrumbs, Pagination: Pagination, Stepper: Stepper, Accordion: Accordion, TreeView: TreeView,
    Badge: Badge, Tag: Tag, TagGroup: TagGroup, Avatar: Avatar, AvatarGroup: AvatarGroup, Kbd: Kbd, CodeInline: CodeInline, CodeBlock: CodeBlock, CopyInline: CopyInline,
    DescriptionList: DescriptionList, Stat: Stat, Timeline: Timeline, Comment: Comment, List: List, Card: Card, Divider: Divider, Table: Table,
    PageHeader: PageHeader, Toolbar: Toolbar, TableToolbar: TableToolbar, FilterBar: FilterBar, FilterPanel: FilterPanel, KanbanColumn: KanbanColumn, KanbanCard: KanbanCard
  };
  window.Tessera = window.Tessera || {};
  Object.assign(window.Tessera, api);
  /* Theme options: accent colour and typeface, orthogonal to light/dark (data-theme). */
  var THEME_KEY = 'tessera:theme';
  var THEMES = {
    accents: [{ id: 'indigo', label: 'Indigo' }, { id: 'cobalt', label: 'Cobalt' }, { id: 'teal', label: 'Teal' }, { id: 'graphite', label: 'Graphite' }],
    fonts: [{ id: 'geist', label: 'Geist' }, { id: 'plex', label: 'IBM Plex' }, { id: 'inter', label: 'Inter' }, { id: 'system', label: 'System UI' }],
    modes: [{ id: 'light', label: 'Light' }, { id: 'dark', label: 'Dark' }]
  };
  function valid(kind, v) { return THEMES[kind].some(function (o) { return o.id === v; }); }
  function applyTheme(t, el) {
    el = el || document.documentElement; t = t || {};
    if (t.accent && valid('accents', t.accent)) el.setAttribute('data-accent', t.accent);
    if (t.font && valid('fonts', t.font)) el.setAttribute('data-font', t.font);
    if (t.mode && valid('modes', t.mode)) el.setAttribute('data-theme', t.mode);
  }
  function getTheme(el) {
    el = el || document.documentElement;
    return { accent: el.getAttribute('data-accent') || 'indigo', font: el.getAttribute('data-font') || 'geist', mode: el.getAttribute('data-theme') || 'light' };
  }
  function setTheme(t, opts) {
    opts = opts || {}; t = t || {};
    applyTheme(t, opts.target);
    if (opts.persist === false || opts.target) return getTheme(opts.target);
    try {
      var cur = JSON.parse(window.localStorage.getItem(THEME_KEY) || '{}') || {};
      if (t.accent) cur.accent = t.accent; if (t.font) cur.font = t.font;
      window.localStorage.setItem(THEME_KEY, JSON.stringify(cur));
    } catch (e) { /* storage unavailable: the attributes still apply */ }
    return getTheme();
  }
  try {
    var saved = JSON.parse(window.localStorage.getItem(THEME_KEY) || 'null');
    if (saved) {
      var root = document.documentElement;
      applyTheme({ accent: root.hasAttribute('data-accent') ? null : saved.accent, font: root.hasAttribute('data-font') ? null : saved.font });
    }
    window.addEventListener('storage', function (e) { if (e.key === THEME_KEY) { try { applyTheme(JSON.parse(e.newValue || '{}')); } catch (x) {} } });
  } catch (e) { /* no storage: defaults apply */ }
  window.Tessera.setTheme = setTheme;
  window.Tessera.getTheme = getTheme;
  window.Tessera.themes = THEMES;
})();
