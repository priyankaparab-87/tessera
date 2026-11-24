import * as React from 'react';
export interface IconProps { name: string; size?: 16 | 20 | 24 | number; label?: string; className?: string; style?: React.CSSProperties }
/** Use: Reinforce meaning next to text, or stand alone inside an IconButton.
 * Instead: Status → Badge with an icon. Decoration → leave it out.
 * Do: Use 16 in default controls, 14 in small ones, 20 only in large buttons and empty states.
 * Do: Pass `label` when the icon carries meaning on its own.
 * Don't: Don't use icons from other libraries, emoji or unicode glyphs.
 * Don't: Don't recolour icons outside the token palette.
 */
export declare const Icon: React.FC<IconProps>;
export interface ButtonProps { variant?: 'primary' | 'secondary' | 'tertiary'; tone?: 'neutral' | 'critical'; size?: 'sm' | 'md' | 'lg'; iconStart?: string; iconEnd?: string; loading?: boolean; disabled?: boolean; type?: 'button' | 'submit'; onClick?: () => void; children: React.ReactNode; block?: boolean; title?: string; className?: string }
/** Use: Trigger an action: submit, save, create, open a dialog.
 * Instead: Navigating to another page → Link. Icon-only action → IconButton. On/off state → ToggleButton or Switch. Several related actions behind one control → MenuButton or SplitButton.
 * Do: Start the label with a verb that names the result: “Export report”, “Delete case”.
 * Do: Use one `primary` button per view, for the main thing the page or dialog is for.
 * Do: Put the primary button last (right) in a group; Cancel sits to its left.
 * Do: Use `tone="critical"` for destructive actions and confirm with ConfirmDialog first.
 * Do: Use `loading` while the action runs; keep the label.
 * Don't: Don't use generic labels: “OK”, “Submit”, “Click here”, “Yes”.
 * Don't: Don't put two primary buttons side by side.
 * Don't: Don't use a button to navigate between pages.
 * Don't: Don't disable a button without saying why nearby (helper text or tooltip).
 * Don't: Don't add an icon to every button; use icons only when they speed up scanning.
 */
export declare const Button: React.FC<ButtonProps>;
export interface IconButtonProps { icon: string; label: string; variant?: 'primary' | 'secondary' | 'tertiary'; tone?: 'neutral' | 'critical'; size?: 'sm' | 'md' | 'lg'; disabled?: boolean; onClick?: () => void; className?: string }
/** Use: A compact, frequent action where the icon is universally understood: close, more, edit, delete in a row.
 * Instead: The action needs words to be understood → Button with a label. Toggles a state → ToggleButton (icon only).
 * Do: Always pass `label`; it becomes the tooltip and the accessible name.
 * Do: Use `tertiary` in tables, toolbars and card headers; `secondary` when it must stand out.
 * Do: Use the Critical variant (Figma) / `tone="critical"` for delete icons.
 * Don't: Don't invent meanings for icons; if you have to explain it, use a labelled Button.
 * Don't: Don't use `primary` icon buttons except a single floating create action.
 * Don't: Don't put more than 4 icon buttons in a row; move the rest into a MenuButton (⋯).
 */
export declare const IconButton: React.FC<IconButtonProps>;
export interface LinkProps { href?: string; external?: boolean; subtle?: boolean; current?: boolean; onClick?: (e: any) => void; children: React.ReactNode; className?: string }
/** Use: Navigate to another page or record, or open an external resource.
 * Instead: Performing an action → Button (or Button `variant="tertiary"`).
 * Do: Make the link text describe the destination: “View invoice INV-2207”.
 * Do: Use `external` for links that leave the app; the icon tells people a new tab opens.
 * Do: Use `subtle` inside dense tables only when many links sit together.
 * Don't: Don't write “click here” or “learn more” without context.
 * Don't: Don't style a link as a button or a button as a link.
 */
export declare const Link: React.FC<LinkProps>;
export interface CopyButtonProps { value: string; label?: string; showLabel?: boolean; className?: string }
/** Use: Copy an ID, key, URL or code sample in one click.
 * Instead: A value shown inline with its copy action → CopyInline.
 * Do: Place it right after the value it copies.
 * Do: Set `label` to say what is copied (“Copy order ID”).
 * Don't: Don't use it for long text the user may want to edit first.
 */
export declare const CopyButton: React.FC<CopyButtonProps>;
export interface BadgeProps { tone?: 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'critical' | 'new'; size?: 'md' | 'lg'; icon?: string; children: React.ReactNode; className?: string }
export interface AvatarProps { name: string; initials?: string; src?: string; size?: number; className?: string }
/** Use: Represent a person: assignee, author, user menu.
 * Instead: Several people → AvatarGroup.
 * Do: Always pass `name` (initials and accessible label).
 * Don't: Don't use avatars for companies or objects; use an Icon.
 */
export declare const Avatar: React.FC<AvatarProps>;
export interface SpinnerProps { size?: number; label?: string; className?: string }
/** Use: A short wait (under ~3s) in a small area: inside a button, a panel refresh.
 * Instead: Loading layout content → Skeleton. Long task → ProgressBar.
 * Do: Give it a `label` for screen readers.
 * Don't: Don't cover a whole page with a spinner.
 */
export declare const Spinner: React.FC<SpinnerProps>;
export interface DividerProps { vertical?: boolean; subtle?: boolean; className?: string }
/** Use: Separate groups of content inside a surface.
 * Instead: Space alone often works; use gap before adding lines.
 * Do: Use `subtle` inside cards.
 * Don't: Don't use dividers between every row of a list; List and Table already have them.
 */
export declare const Divider: React.FC<DividerProps>;
export interface TextFieldProps { label?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; description?: string; error?: string; required?: boolean; disabled?: boolean; readOnly?: boolean; size?: 'sm' | 'md' | 'lg'; iconStart?: string; suffix?: string; type?: string; className?: string }
/** Use: Single-line free text: names, IDs, emails, short answers.
 * Instead: Multiple lines → TextArea. Numbers with steps → NumberField. Choose from a known list → Select or Combobox. Search a list → SearchField. Secret → PasswordField.
 * Do: Always give a visible `label`; placeholders are examples, not labels.
 * Do: Put format hints in `description` (“Format: ORD-12345”).
 * Do: Write `error` as one instruction to fix it (“Enter an email like name@company.com”).
 * Do: Match the field width to the expected content.
 * Don't: Don't use placeholder text as the only label.
 * Don't: Don't validate on every keystroke; validate on blur or submit.
 * Don't: Don't mark optional fields; mark required ones with `required`.
 */
export declare const TextField: React.FC<TextFieldProps>;
export interface SearchFieldProps { placeholder?: string; label?: string; defaultValue?: string; onChange?: (value: string) => void; size?: 'sm' | 'md' | 'lg'; disabled?: boolean; className?: string }
/** Use: Filter or search a list, table or the app.
 * Instead: Pick a single value from options → Combobox.
 * Do: Placeholder names what is searched (“Search orders”).
 * Do: Filter as people type for local lists; search on Enter for server queries.
 * Don't: Don't put more than one SearchField on a page region.
 */
export declare const SearchField: React.FC<SearchFieldProps>;
export interface SelectProps { options: Array<string | { value: string; label: string }>; label?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; description?: string; error?: string; required?: boolean; disabled?: boolean; size?: 'sm' | 'md' | 'lg'; className?: string }
/** Use: Pick one option from a known list of about 3–15 items.
 * Instead: 2–6 options that should be visible → RadioGroup. Long list or needs typing → Combobox. Several values → MultiSelect or CheckboxGroup.
 * Do: Order options logically (frequency, alphabetical or natural order).
 * Do: Use a `placeholder` like “Select a status” when there is no default.
 * Don't: Don't use it for yes/no; use Switch or Checkbox.
 * Don't: Don't hide a critical choice inside a Select if comparing options matters.
 */
export declare const Select: React.FC<SelectProps>;
export interface CheckboxProps { checked?: boolean; defaultChecked?: boolean; indeterminate?: boolean; onChange?: (e: any) => void; disabled?: boolean; children?: React.ReactNode; className?: string }
/** Use: Turn one option on or off as part of a form that's saved later; agree to terms.
 * Instead: Setting that applies immediately → Switch. One choice from a set → Radio. Several related options → CheckboxGroup.
 * Do: Write the label as what becomes true (“Notify the assignee”).
 * Do: Use `indeterminate` for a parent with partly selected children.
 * Don't: Don't use negative labels (“Don't send email”).
 * Don't: Don't use a checkbox to trigger an action.
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export interface SwitchProps { checked?: boolean; defaultChecked?: boolean; onChange?: (e: any) => void; disabled?: boolean; children?: React.ReactNode; className?: string }
/** Use: Turn a setting on or off with immediate effect.
 * Instead: Saved with a form → Checkbox. View toggle in a toolbar → ToggleButton.
 * Do: Label the setting, not the state (“Email notifications”).
 * Do: Apply the change right away and confirm it if it matters.
 * Don't: Don't require a Save button after a Switch.
 * Don't: Don't use on/off text inside the label.
 */
export declare const Switch: React.FC<SwitchProps>;
export interface TabsProps { items: Array<{ id: string; label: string; count?: number; icon?: string; disabled?: boolean }>; value?: string; defaultValue?: string; onChange?: (id: string) => void; label?: string; size?: 'sm' | 'md'; className?: string }
/** Use: Switch between sections of the same page or record: Orders / Notes / Cases.
 * Instead: App-level sections → SideNav or TopNav. Views of the same data → SegmentedControl. Steps in order → Stepper.
 * Do: Keep labels to one or two nouns; add `count` when helpful.
 * Do: Use `size="sm"` inside cards and panels.
 * Don't: Don't wrap tabs onto two rows.
 * Don't: Don't use tabs for sequential steps.
 */
export declare const Tabs: React.FC<TabsProps>;
export interface BreadcrumbsProps { items: Array<{ label: string; href?: string }>; className?: string }
/** Use: Show where a page sits in a hierarchy and link back up.
 * Instead: Flat apps with no hierarchy → omit.
 * Do: Put it above the page title; the last item is the current page.
 * Don't: Don't use it as the main navigation.
 * Don't: Don't repeat the app name as the first crumb.
 */
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export interface CardProps { title?: React.ReactNode; subtitle?: React.ReactNode; actions?: React.ReactNode; footer?: React.ReactNode; padding?: 'default' | 'compact'; flat?: boolean; interactive?: boolean; as?: string; children?: React.ReactNode; className?: string }
/** Use: Group related content on a page into a bordered surface with an optional title and actions.
 * Instead: Whole-page sections → PageHeader + plain layout. Clickable record in a board → KanbanCard.
 * Do: Use `padding="compact"` for dense grids; `flat` inside another surface.
 * Don't: Don't nest shadowed cards.
 * Don't: Don't make the whole card clickable and also put buttons in it.
 */
export declare const Card: React.FC<CardProps>;
export interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'critical'; title?: React.ReactNode; action?: React.ReactNode; dismissible?: boolean; children?: React.ReactNode; className?: string }
/** Use: A message about a section or form: validation summary, warning about this record.
 * Instead: Whole page or app → Banner. Result of the user's action → Toast. Field-level error → the field's `error`.
 * Do: Title says what happened; body says what to do next.
 * Do: Match `tone` to severity.
 * Don't: Don't stack several alerts; combine them.
 * Don't: Don't use critical tone for information.
 */
export declare const Alert: React.FC<AlertProps>;
export interface TableProps { columns: Array<{ key: string; label: string; render?: (row: any) => React.ReactNode; align?: 'left' | 'right' | 'center'; width?: number | string; sortable?: boolean; truncate?: boolean; nowrap?: boolean; /** Figures in the numeric font with tabular digits; defaults to true for right-aligned columns. */ numeric?: boolean; sortValue?: (row: any) => any }>; rows: Array<object & { id?: string; selected?: boolean }>; selectable?: boolean; defaultSelected?: string[]; onSelectionChange?: (ids: string[]) => void; defaultSort?: { key: string; dir: 'asc' | 'desc' }; rowActions?: boolean; footer?: React.ReactNode; density?: 'default' | 'compact'; emptyText?: string; className?: string }
export interface AppHeaderProps { appName: string; logo?: React.ReactNode; homeHref?: string; search?: boolean; searchPlaceholder?: string; tenant?: string; user?: string; actions?: React.ReactNode; onMenu?: () => void; className?: string }
/** Use: The top bar of every app: brand, global search, tenant switcher, user menu.
 * Instead: Page title and actions → PageHeader.
 * Do: Use one per app, fixed at the top.
 * Don't: Don't put page-specific actions in the AppHeader.
 */
export declare const AppHeader: React.FC<AppHeaderProps>;
export interface SideNavProps { items: Array<{ id: string; label: string; icon: string; href?: string; count?: number }>; value?: string; defaultValue?: string; onChange?: (id: string) => void; collapsed?: boolean; label?: string; className?: string }
/** Use: Main app navigation with icons; collapses to a rail.
 * Instead: Few sections → TopNav. In-page → Tabs.
 * Do: Give every item an icon and a short label.
 * Do: Use `count` only for items that need attention.
 * Don't: Don't put actions (Create…) in the nav.
 */
export declare const SideNav: React.FC<SideNavProps>;
type MenuItem = { id?: string; label?: string; icon?: string; shortcut?: string; description?: string; tone?: 'critical'; checked?: boolean; disabled?: boolean; submenu?: boolean; divider?: boolean; section?: string; onSelect?: () => void };
type Crumb = { label: string; href?: string };
type TreeNode = { id: string; label: string; icon?: string; count?: number; children?: TreeNode[] };
export interface ButtonGroupProps { attached?: boolean; label?: string; children: React.ReactNode; className?: string }
export interface SplitButtonProps { variant?: 'primary' | 'secondary'; size?: 'sm' | 'md' | 'lg'; items: MenuItem[]; onClick?: () => void; menuLabel?: string; disabled?: boolean; children: React.ReactNode; onSelect?: (id: string) => void; className?: string }
export interface ToggleButtonProps { pressed?: boolean; defaultPressed?: boolean; onChange?: (pressed: boolean) => void; icon?: string; label?: string; size?: 'sm' | 'md'; disabled?: boolean; children?: React.ReactNode; className?: string }
export interface SegmentedControlProps { items: Array<{ id: string; label: string; icon?: string; disabled?: boolean }>; value?: string; defaultValue?: string; onChange?: (id: string) => void; size?: 'sm' | 'md'; iconOnly?: boolean; label?: string; className?: string }
export interface TextAreaProps { label?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (v: string) => void; rows?: number; maxLength?: number; description?: string; error?: string; required?: boolean; disabled?: boolean; readOnly?: boolean; className?: string }
export interface NumberFieldProps { label?: string; value?: number; defaultValue?: number; onChange?: (n: number) => void; min?: number; max?: number; step?: number; prefix?: string; suffix?: string; size?: 'sm' | 'md'; description?: string; error?: string; disabled?: boolean; className?: string }
export interface PasswordFieldProps { label?: string; defaultValue?: string; placeholder?: string; description?: string; error?: string; disabled?: boolean; className?: string }
export interface RadioGroupProps { label?: string; options: Array<{ value: string; label: string; description?: string; disabled?: boolean }>; value?: string; defaultValue?: string; onChange?: (v: string) => void; orientation?: 'vertical' | 'horizontal'; description?: string; error?: string; className?: string }
export interface RadioProps { name?: string; value?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (e: any) => void; disabled?: boolean; description?: string; children?: React.ReactNode; className?: string }
export interface CheckboxGroupProps { label?: string; options: Array<{ value: string; label: string; disabled?: boolean }>; value?: string[]; defaultValue?: string[]; onChange?: (v: string[]) => void; orientation?: 'vertical' | 'horizontal'; className?: string }
export interface FieldsetProps { legend: string; description?: string; columns?: 1 | 2; children: React.ReactNode; className?: string }
export interface ComboboxProps { label?: string; options: Array<string | { value: string; label: string }>; value?: string; defaultValue?: string; onChange?: (v: string) => void; placeholder?: string; open?: boolean; description?: string; error?: string; className?: string }
export interface MultiSelectProps { label?: string; options: Array<string | { value: string; label: string }>; value?: string[]; defaultValue?: string[]; onChange?: (v: string[]) => void; placeholder?: string; open?: boolean; className?: string }
export interface CalendarProps { value?: Date; rangeStart?: Date; rangeEnd?: Date; onChange?: (d: Date) => void; today?: Date; className?: string }
export interface DatePickerProps { label?: string; value?: Date | null; defaultValue?: Date | null; onChange?: (d: Date | null) => void; placeholder?: string; open?: boolean; description?: string; error?: string; disabled?: boolean; required?: boolean; size?: 'sm' | 'md' | 'lg';
  /** Show the × clear button once there is a value (default true). */ clearable?: boolean;
  /** Add a time input and Cancel / Apply buttons; the value then carries hours and minutes. */ withTime?: boolean;
  /** Minutes per ↑ ↓ step in the time input (default 15). */ timeStep?: number;
  /** 24 (default) or 12 for AM/PM. */ hourCycle?: 12 | 24;
  /** Time given to a newly picked date when withTime is on, "HH:MM" (default "09:00"). */ defaultTime?: string;
  /** Override today's date (highlight and presets); defaults to the current date. */ today?: Date; className?: string }
/** A preset id ('today' | 'yesterday' | 'last7' | 'last30' | 'last90' | 'thisMonth' | 'lastMonth' | 'thisQuarter' | 'lastQuarter' | 'thisYear') or your own range. */
export type DateRangePreset = 'today' | 'yesterday' | 'last7' | 'last30' | 'last90' | 'thisMonth' | 'lastMonth' | 'thisQuarter' | 'lastQuarter' | 'thisYear' | { label: string; value: [Date, Date] | ((today: Date) => [Date, Date]) };
export interface DateRangePickerProps { label?: string; value?: [Date | null, Date | null]; defaultValue?: [Date | null, Date | null]; onChange?: (range: [Date | null, Date | null]) => void; placeholder?: string; open?: boolean; description?: string; error?: string; disabled?: boolean; required?: boolean; size?: 'sm' | 'md' | 'lg';
  /** Quick ranges on the left. Defaults to Today, Last 7 days, Last 30 days, This month, Last month, This quarter; false hides them. */ presets?: DateRangePreset[] | false;
  /** Show the × clear button once there is a value (default true). */ clearable?: boolean;
  /** Add Start time and End time inputs and Cancel / Apply buttons. */ withTime?: boolean;
  timeStep?: number; hourCycle?: 12 | 24;
  /** Times given to a new range when withTime is on (defaults "00:00" and "23:59"). */ defaultStartTime?: string; defaultEndTime?: string;
  today?: Date; className?: string }
export interface TimePickerProps { label?: string; value?: string; defaultValue?: string; onChange?: (t: string) => void; step?: number; startHour?: number; endHour?: number; open?: boolean; className?: string }
export interface SliderProps { label?: string; value?: number; defaultValue?: number; onChange?: (n: number) => void; min?: number; max?: number; step?: number; unit?: string; showValue?: boolean; disabled?: boolean; className?: string }
export interface FileUploadProps { label?: string; multiple?: boolean; accept?: string; hint?: string; files?: Array<{ name: string; size?: number; progress?: number; error?: string }>; onChange?: (files: any) => void; error?: string; className?: string }
export interface InlineEditProps { label: string; value?: string; defaultValue?: string; onChange?: (v: string) => void; placeholder?: string; editing?: boolean; className?: string }
export interface MenuProps { items: MenuItem[]; onSelect?: (id: string) => void; onClose?: (reason: string) => void; autoFocus?: boolean; label?: string; id?: string; width?: number; className?: string }
export interface MenuButtonProps { items: MenuItem[]; icon?: string; label?: string; variant?: 'primary' | 'secondary' | 'tertiary'; size?: 'sm' | 'md'; align?: 'start' | 'end'; open?: boolean; children?: React.ReactNode; onSelect?: (id: string) => void; className?: string }
export interface PopoverProps { trigger: React.ReactNode; title?: string; footer?: React.ReactNode; open?: boolean; align?: 'start' | 'end'; width?: number; children: React.ReactNode; className?: string }
export interface TooltipProps { content: React.ReactNode; shortcut?: string; placement?: 'top' | 'bottom' | 'left' | 'right'; open?: boolean; children: React.ReactElement; className?: string }
export interface DialogProps { open?: boolean; title: string; subtitle?: string; size?: 'sm' | 'md' | 'lg'; footer?: React.ReactNode; onClose?: () => void; inline?: boolean; children: React.ReactNode; className?: string }
export interface ConfirmDialogProps { open?: boolean; title: string; tone?: 'critical' | 'neutral'; confirmLabel?: string; cancelLabel?: string; onConfirm?: () => void; onCancel?: () => void; inline?: boolean; children: React.ReactNode; className?: string }
export interface DrawerProps { open?: boolean; title: string; subtitle?: string; width?: number; footer?: React.ReactNode; onClose?: () => void; inline?: boolean; children: React.ReactNode; className?: string }
export interface ToastProps { tone?: 'neutral' | 'success' | 'warning' | 'critical'; title: string; action?: string; onAction?: () => void; onClose?: () => void; children?: React.ReactNode; className?: string }
export interface CommandPaletteProps { groups: Array<{ title: string; items: Array<{ label: string; icon?: string; shortcut?: string }> }>; placeholder?: string; inline?: boolean; className?: string }
export interface BannerProps { tone?: 'info' | 'success' | 'warning' | 'critical'; title?: string; action?: React.ReactNode; dismissible?: boolean; children: React.ReactNode; className?: string }
export interface ProgressBarProps { value?: number; max?: number; label?: string; description?: string; tone?: 'accent' | 'success' | 'warning' | 'critical'; size?: 'sm' | 'md'; indeterminate?: boolean; className?: string }
export interface SkeletonProps { variant?: 'text' | 'circle' | 'rect'; width?: number | string; height?: number | string; lines?: number; className?: string }
export interface EmptyStateProps { title: string; icon?: string; action?: React.ReactNode; secondaryAction?: React.ReactNode; size?: 'sm' | 'md'; children?: React.ReactNode; className?: string }
export interface TopNavProps { items: Array<{ id: string; label?: string; href?: string }>; value?: string; defaultValue?: string; onChange?: (id: string) => void; className?: string }
export interface PaginationProps { page?: number; defaultPage?: number; pageCount: number; onChange?: (page: number) => void; total?: number; pageSize?: number; label?: string; className?: string }
export interface StepperProps { steps: Array<{ label: string; description?: string; error?: boolean }>; current: number; orientation?: 'horizontal' | 'vertical'; className?: string }
export interface AccordionProps { items: Array<{ id: string; title: React.ReactNode; subtitle?: React.ReactNode; icon?: string; meta?: React.ReactNode; actions?: React.ReactNode; disabled?: boolean; content: React.ReactNode }>; defaultOpen?: string[]; multiple?: boolean; variant?: 'default' | 'flush' | 'separated'; size?: 'sm' | 'md'; open?: string[]; onOpenChange?: (open: string[]) => void; className?: string }
export interface TreeViewProps { items: TreeNode[]; defaultExpanded?: string[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; label?: string; className?: string }
export interface TagProps { tone?: 'neutral' | 'accent'; size?: 'sm' | 'md'; icon?: string; avatar?: string; selected?: boolean; onRemove?: () => void; children: React.ReactNode; className?: string }
export interface TagGroupProps { label?: string; children: React.ReactNode; className?: string }
export interface AvatarGroupProps { names: string[]; max?: number; size?: number; className?: string }
export interface KbdProps { inverse?: boolean; children: React.ReactNode; className?: string }
export interface CodeInlineProps { children: React.ReactNode; className?: string }
export interface CodeBlockProps { code: string; title?: string; language?: string; lineNumbers?: boolean; className?: string }
export interface CopyInlineProps { value: string; display?: string; mono?: boolean; label?: string; className?: string }
export interface DescriptionListProps { items: Array<{ term: React.ReactNode; description: React.ReactNode }>; layout?: 'inline' | 'stacked'; columns?: 1 | 2; size?: 'sm' | 'md'; className?: string }
export interface StatProps { label: string; value: React.ReactNode; delta?: string; trend?: 'up' | 'down' | 'flat'; positive?: boolean; period?: string; help?: string; bordered?: boolean; className?: string }
export interface TimelineProps { items: Array<{ id?: string; title: React.ReactNode; time?: string; icon?: string; avatar?: string; tone?: 'accent' | 'success' | 'warning' | 'critical'; current?: boolean; upcoming?: boolean; body?: React.ReactNode }>; orientation?: 'vertical' | 'horizontal'; size?: 'sm' | 'md'; label?: string; className?: string }
export interface CommentProps { author: string; role?: string; time: string; edited?: boolean; actions?: string[]; children: React.ReactNode; className?: string }
export interface ListProps { items: Array<{ id?: string; title: string; description?: string; meta?: string; icon?: string; avatar?: string; selected?: boolean; action?: React.ReactNode }>; bordered?: boolean; selectable?: boolean; size?: 'sm' | 'md'; onSelect?: (id: string | number) => void; label?: string; className?: string }
export interface PageHeaderProps { title: string; breadcrumbs?: Crumb[]; badge?: React.ReactNode; description?: string; meta?: React.ReactNode; actions?: React.ReactNode; tabs?: React.ReactNode; back?: boolean; className?: string }
export interface ToolbarProps { start?: React.ReactNode; end?: React.ReactNode; label?: string; className?: string }
export interface TableToolbarProps { selectedCount?: number; bulkActions?: React.ReactNode; onClearSelection?: () => void; start?: React.ReactNode; end?: React.ReactNode; className?: string }
export interface FilterBarProps { searchPlaceholder?: string; filters?: Array<{ id: string; label: string; options: string[] }>; chips?: string[]; moreFilters?: boolean; onClear?: () => void; end?: React.ReactNode; className?: string }
export interface FilterPanelProps { groups: Array<{ id: string; title: string; options: string[]; selected?: string[] }>; title?: string; applyLabel?: string; className?: string }
export interface KanbanColumnProps { title: string; tone?: 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'critical'; count?: number; emptyText?: string; children?: React.ReactNode; className?: string }
export interface KanbanCardProps { id: string; title: string; priority?: 'Low' | 'Medium' | 'High' | 'Urgent'; fields?: Array<{ term: string; description: React.ReactNode }>; updated?: string; assignee?: string; selected?: boolean; className?: string }
/** Use: Keep two or more related buttons together with consistent spacing (dialog footers, form actions).
 * Instead: Exactly one option is selected at a time → SegmentedControl. Many actions → MenuButton.
 * Do: Order least to most important; the primary action is on the right.
 * Do: Use `attached` only for a few equal-weight actions that act on the same object.
 * Don't: Don't mix sizes within a group.
 * Don't: Don't use an attached group to show selection; that is SegmentedControl.
 */
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
/** Use: One main action with a few close alternatives: “Save” + “Save as draft”, “Export CSV” + other formats.
 * Instead: No obvious default → MenuButton. Alternatives are unrelated actions → separate Buttons or MenuButton.
 * Do: Make the main half the most common choice.
 * Do: Keep the menu to 2–5 variations of the same action.
 * Don't: Don't hide destructive actions in the split menu.
 * Don't: Don't use it for navigation.
 */
export declare const SplitButton: React.FC<SplitButtonProps>;
/** Use: Switch a view option on or off right away: bold, show archived, pin, favourite.
 * Instead: A setting saved with a form → Checkbox. A system setting → Switch. Pick one of several views → SegmentedControl.
 * Do: Label the thing being toggled, not the action (“Archived”, not “Show archived”).
 * Do: Give icon-only toggles a `label` for the tooltip.
 * Don't: Don't use it for actions that fire once; that's a Button.
 * Don't: Don't group toggles that are mutually exclusive; use SegmentedControl.
 */
export declare const ToggleButton: React.FC<ToggleButtonProps>;
/** Use: Switch between 2–5 views of the same content: List / Board / Calendar, Day / Week / Month.
 * Instead: Switching different content or pages → Tabs. Choosing a form value → RadioGroup. More than 5 options → Select.
 * Do: Keep labels to one or two words and equal in importance.
 * Do: Use `iconOnly` only with well-known icons, and pass labels for tooltips.
 * Don't: Don't use it for actions; every segment is a state.
 * Don't: Don't put it in a form as an input; use RadioGroup.
 */
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
/** Use: Multi-line text: notes, descriptions, messages.
 * Instead: One line → TextField. Rich formatting → not covered by Tessera; ask before adding.
 * Do: Set `rows` to the expected length (4 by default).
 * Do: Use `maxLength` when there is a hard limit; the counter appears automatically.
 * Don't: Don't use it for structured data that could be separate fields.
 */
export declare const TextArea: React.FC<TextAreaProps>;
/** Use: Whole or decimal numbers that people adjust in small steps: quantity, percentage, days.
 * Instead: IDs, phone numbers, card numbers → TextField (they're not quantities). A rough value in a range → Slider.
 * Do: Set `min`, `max` and `step`.
 * Do: Put units in `prefix`/`suffix` (EUR, %, days), not in the label.
 * Don't: Don't use it for values that are never incremented (postal codes, IDs).
 */
export declare const NumberField: React.FC<NumberFieldProps>;
/** Use: Secrets: passwords, API secrets.
 * Instead: Visible tokens people need to copy → CopyInline.
 * Do: Explain the rules in `description` before people type.
 * Do: Keep the show/hide toggle.
 * Don't: Don't block paste.
 * Don't: Don't show strength rules only after an error.
 */
export declare const PasswordField: React.FC<PasswordFieldProps>;
/** Use: Pick exactly one of 2–6 options that people should compare before choosing.
 * Instead: More options → Select. View switching → SegmentedControl. On/off → Switch.
 * Do: Preselect the safest or most common option when there is one.
 * Do: Keep option labels parallel in grammar and length.
 * Don't: Don't use horizontal layout for long labels.
 */
export declare const RadioGroup: React.FC<RadioGroupProps>;
/** Use: One option inside a RadioGroup.
 * Instead: Standalone → always use RadioGroup.
 * Do: Use `description` for a one-line consequence of the option.
 * Don't: Don't use a single radio on its own; it can't be unselected.
 */
export declare const Radio: React.FC<RadioProps>;
/** Use: Pick any number of options from a short list (up to ~8) that stay visible.
 * Instead: Exactly one option → RadioGroup. Long list → MultiSelect.
 * Do: Give the group a `label` (legend).
 * Do: Stack vertically unless there are 2–3 short options.
 * Don't: Don't nest groups more than one level.
 */
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
/** Use: Group related fields in a long form under a heading (Shipping address, Billing).
 * Instead: Short form with 3–4 fields → no Fieldset needed.
 * Do: Give each section a clear `legend` and optional one-line `description`.
 * Do: Use `columns={2}` only for short, related fields (City / Postcode).
 * Don't: Don't nest Fieldsets.
 */
export declare const Fieldset: React.FC<FieldsetProps>;
/** Use: Pick one option from a long list (15+) by typing: customers, countries, assignees.
 * Instead: Short list → Select. Several values → MultiSelect.
 * Do: Match anywhere in the label, not only the start.
 * Do: Show an empty state (“No matches”) when nothing fits.
 * Don't: Don't allow free text unless the field really accepts new values.
 */
export declare const Combobox: React.FC<ComboboxProps>;
/** Use: Pick several options from a list of 8+ items: tags, channels, assignees.
 * Instead: Fewer than ~8 options → CheckboxGroup (all visible). One value → Select or Combobox.
 * Do: Show chosen values as removable tags.
 * Do: Let Backspace remove the last tag.
 * Don't: Don't use it when every option should stay visible for comparison.
 */
export declare const MultiSelect: React.FC<MultiSelectProps>;
/** Use: Inline month view for picking dates where the calendar should stay visible (scheduling panels).
 * Instead: A date in a form → DatePicker. A range → DateRangePicker.
 * Do: Highlight today; disable dates that can't be chosen.
 * Don't: Don't use it as a read-only events calendar; it's an input.
 */
export declare const Calendar: React.FC<CalendarProps>;
/** Use: One date in a form: due date, delivery date. With withTime: one moment, such as a publish time.
 * Instead: A start and end → DateRangePicker. A time of day on its own → TimePicker.
 * Do: Show dates as “2 Sep 2026”.
 * Do: Default to today or the most likely date when it helps.
 * Do: Use withTime only when the time matters.
 * Don't: Don't ask people to type dates in an ambiguous format.
 * Don't: Don't pair a DatePicker with a separate TimePicker for one moment; use withTime.
 */
export declare const DatePicker: React.FC<DatePickerProps>;
/** Use: Start and end dates: reporting periods, filters, bookings. With withTime: maintenance windows, log searches, shifts.
 * Instead: One date → DatePicker.
 * Do: Offer presets for common ranges (Last 7 days, This quarter).
 * Do: Keep the default 00:00–23:59 times for filters so the end day is included.
 * Don't: Don't use two separate DatePickers for one range.
 * Don't: Don't offer more than about eight presets.
 */
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
/** Use: A time of day in a form: pickup slot, reminder.
 * Instead: Durations → NumberField with a unit.
 * Do: Set `step` to the real granularity (15 or 30 minutes).
 * Do: Limit `startHour`/`endHour` to valid hours.
 * Don't: Don't show 24 hours of 1-minute steps.
 */
export declare const TimePicker: React.FC<TimePickerProps>;
/** Use: Choose an approximate value in a range where relative position matters: max price, volume.
 * Instead: Exact values → NumberField.
 * Do: Show the current value (`showValue`) with its `unit`.
 * Do: Pair with a NumberField when precision matters.
 * Don't: Don't use it for ranges with more than ~100 meaningful steps.
 */
export declare const Slider: React.FC<SliderProps>;
/** Use: Attach one or more files with drag and drop.
 * Instead: Pick from files already in the system → Combobox or List.
 * Do: Say accepted types and size limits in `hint`.
 * Do: Show progress and per-file errors in the list.
 * Don't: Don't clear the list when one file fails.
 */
export declare const FileUpload: React.FC<FileUploadProps>;
/** Use: Edit one value in place on a detail page: title, name, reference.
 * Instead: Several fields at once → a Dialog or Drawer with a form.
 * Do: Save on Enter, cancel on Esc.
 * Do: Pass `label` so the edit button says what it edits.
 * Don't: Don't use it for values that need validation across fields.
 */
export declare const InlineEdit: React.FC<InlineEditProps>;
/** Use: A list of actions on an object, opened from MenuButton, SplitButton or a row's ⋯.
 * Instead: Choosing a form value → Select. Navigation → SideNav, TopNav or Tabs.
 * Do: Start items with verbs; keep them short.
 * Do: Group with `section` and `divider`; put destructive items last with `tone: 'critical'`.
 * Do: Show shortcuts with `shortcut` when they exist.
 * Don't: Don't nest submenus more than one level.
 * Don't: Don't put more than ~10 items; split into sections or a dialog.
 */
export declare const Menu: React.FC<MenuProps>;
/** Use: A button that opens a Menu of related actions (Export ▾, ⋯ more actions).
 * Instead: One main action plus variations → SplitButton. Two or three visible actions → separate Buttons.
 * Do: Use an icon-only ⋯ trigger in rows and cards, a labelled trigger in toolbars.
 * Don't: Don't hide the page's primary action inside a MenuButton.
 */
export declare const MenuButton: React.FC<MenuButtonProps>;
/** Use: A small, focused task anchored to its trigger: snooze until, quick edit, filter options.
 * Instead: Read-only hint → Tooltip. Larger task or form → Dialog or Drawer. List of actions → Menu.
 * Do: Keep it to a few controls and one primary action in the footer.
 * Do: Close on Esc and click outside.
 * Don't: Don't put a Popover inside another Popover.
 */
export declare const Popover: React.FC<PopoverProps>;
/** Use: A short label or hint for an icon or truncated text, shown on hover and focus.
 * Instead: Information people must read → helper text or Alert. Interactive content → Popover.
 * Do: Keep it to a few words; add a `shortcut` when one exists.
 * Do: Use it on every IconButton (built in).
 * Don't: Don't put links or buttons in a tooltip.
 * Don't: Don't hide essential instructions in a tooltip.
 */
export declare const Tooltip: React.FC<TooltipProps>;
/** Use: A focused task or decision that blocks the page until done: edit details, create a record.
 * Instead: Keep the list in view while working → Drawer. Simple yes/no → ConfirmDialog. Small anchored task → Popover.
 * Do: Title states the task (“Edit case details”).
 * Do: Footer: Cancel then the primary action named after the result.
 * Do: Pick `size` by content: sm for short forms, lg for tables.
 * Don't: Don't open a dialog from a dialog.
 * Don't: Don't use dialogs for messages that could be inline Alerts.
 */
export declare const Dialog: React.FC<DialogProps>;
/** Use: Confirm a destructive or irreversible action before it happens.
 * Instead: Reversible actions → just do it and offer Undo in a Toast.
 * Do: Say exactly what will happen and what can't be undone.
 * Do: Name the confirm button after the action (“Delete case”), never “Yes”.
 * Don't: Don't confirm routine, reversible actions.
 * Don't: Don't make the destructive button the default focus.
 */
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
/** Use: Show or edit details of an item while keeping the list or page behind it in view.
 * Instead: Blocking task → Dialog. Full detail with tabs and history → its own page.
 * Do: Use 400–560px width; put actions in the footer.
 * Do: Keep the title as the item's name or ID.
 * Don't: Don't stack drawers.
 */
export declare const Drawer: React.FC<DrawerProps>;
/** Use: Confirm the result of the user's own action, briefly, with an optional Undo.
 * Instead: System state that persists → Banner. A problem in a section → Alert. Needs a decision → Dialog.
 * Do: Keep the title to a few words (“Case closed”).
 * Do: Offer one short action (Undo, View).
 * Don't: Don't use toasts for errors people must act on.
 * Don't: Don't show more than one toast at a time.
 */
export declare const Toast: React.FC<ToastProps>;
/** Use: Keyboard-first jump to any page or action (⌘K).
 * Instead: Searching records in a list → SearchField.
 * Do: Group results (Go to, Actions) and show shortcuts.
 * Don't: Don't make it the only way to reach a feature.
 */
export declare const CommandPalette: React.FC<CommandPaletteProps>;
/** Use: Page- or app-wide state: maintenance, trial ending, payments failing.
 * Instead: One section → Alert. Confirmation of an action → Toast.
 * Do: Place it at the top of the content, full width.
 * Do: Offer one action that resolves it.
 * Don't: Don't show more than one banner at a time.
 * Don't: Don't use banners for marketing.
 */
export declare const Banner: React.FC<BannerProps>;
/** Use: Show progress of a task with a known end: upload, import, setup completion.
 * Instead: Unknown duration and short → Spinner. Loading page content → Skeleton.
 * Do: Label what is progressing; show the percentage.
 * Do: Use `indeterminate` only while the size is unknown.
 * Don't: Don't use it as a static meter of a quantity; use Stat.
 */
export declare const ProgressBar: React.FC<ProgressBarProps>;
/** Use: Placeholder for content that is loading, in the shape of the final layout.
 * Instead: Short action wait → Spinner.
 * Do: Match the real layout (lines, avatar, table rows).
 * Don't: Don't show skeletons for more than a few seconds without a message.
 */
export declare const Skeleton: React.FC<SkeletonProps>;
/** Use: Explain why a list, table or page is empty and how to fill it.
 * Instead: Error loading data → Alert with a retry.
 * Do: Say why it's empty in one sentence and give the action that fills it.
 * Do: Differentiate “no data yet” from “no results for this filter” (offer Clear filters).
 * Don't: Don't use illustrations or jokes; one icon is enough.
 */
export declare const EmptyState: React.FC<EmptyStateProps>;
/** Use: Section navigation for products with a few (≤6) top-level areas.
 * Instead: More sections or nested areas → SideNav. In-page sections → Tabs.
 * Do: Highlight the current section; keep labels short.
 * Don't: Don't combine TopNav and SideNav for the same level.
 */
export declare const TopNav: React.FC<TopNavProps>;
/** Use: Move through pages of a long table or list (100+ rows).
 * Instead: Short lists → show all rows. Feeds → load more on scroll.
 * Do: Show the range summary when the total is known.
 * Do: Place it below the table, aligned right.
 * Don't: Don't paginate lists under ~50 items.
 */
export declare const Pagination: React.FC<PaginationProps>;
/** Use: Guide people through a multi-step form or setup in order.
 * Instead: Tracking real-world progress (order, shipment) → Timeline horizontal. Independent sections → Tabs.
 * Do: Keep to 3–6 steps with short labels.
 * Do: Mark errors on the step that has them.
 * Don't: Don't let people skip required steps without saying so.
 */
export declare const Stepper: React.FC<StepperProps>;
/** Use: Hide secondary or optional detail under headings people expand when needed: FAQs, filter groups, line-item details.
 * Instead: Content everyone needs → show it. Switching between peer views → Tabs.
 * Do: Use `size="sm"` and `variant="flush"` in dense side panels.
 * Do: Show a `meta` count or badge so people know what's inside.
 * Do: Put item actions in `actions`, not inside the title.
 * Don't: Don't hide required form fields inside a collapsed item.
 * Don't: Don't nest accordions.
 */
export declare const Accordion: React.FC<AccordionProps>;
/** Use: Navigate or pick from a hierarchy: folders, categories, org structure.
 * Instead: Flat list → List. Two levels → grouped List or Accordion.
 * Do: Keep to 4 levels or fewer.
 * Do: Pass `label` for screen readers.
 * Don't: Don't use it for tabular data; use Table.
 */
export declare const TreeView: React.FC<TreeViewProps>;
/** Use: Labels people add or remove: categories, applied filters, selected values.
 * Instead: System status → Badge.
 * Do: Use `onRemove` for applied filters; `selected` for toggleable filter chips.
 * Don't: Don't use tags for status.
 */
export declare const Tag: React.FC<TagProps>;
/** Use: A wrapping set of Tags.
 * Instead: One tag → Tag.
 * Do: Give it a `label` when the meaning isn't obvious.
 * Don't: Don't show more than ~10 tags; summarise as “+N”.
 */
export declare const TagGroup: React.FC<TagGroupProps>;
/** Use: Show several participants or watchers compactly.
 * Instead: One person → Avatar.
 * Do: Keep `max` at 3–5; the rest become “+N”.
 * Don't: Don't use it when people need to see every name; use a List.
 */
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
/** Use: Show a keyboard key or shortcut.
 * Instead: Code values → CodeInline.
 * Do: One Kbd per key (⌘ K).
 * Don't: Don't use it for buttons or labels.
 */
export declare const Kbd: React.FC<KbdProps>;
/** Use: Code, field names or literal values inside a sentence.
 * Instead: Multi-line code → CodeBlock. IDs people copy → CopyInline.
 * Do: Keep it short.
 * Don't: Don't use it for emphasis.
 */
export declare const CodeInline: React.FC<CodeInlineProps>;
/** Use: Multi-line code, payloads, configuration or logs with a copy button.
 * Instead: One value in a sentence → CodeInline.
 * Do: Set `title` or `language`; turn on `lineNumbers` for longer snippets.
 * Don't: Don't wrap long lines; let them scroll.
 */
export declare const CodeBlock: React.FC<CodeBlockProps>;
/** Use: Show an ID, key or URL with a copy action next to it.
 * Instead: Copy button alone → CopyButton.
 * Do: Use `mono` for IDs; use `display` to shorten long values while copying the full one.
 * Don't: Don't use it for secrets; use PasswordField.
 */
export declare const CopyInline: React.FC<CopyInlineProps>;
/** Use: Read-only key–value details of a record: Order ID, Customer, Status.
 * Instead: Editable values → form fields or InlineEdit. Comparing many records → Table.
 * Do: Use `inline` in wide panels, `stacked` with `columns={2}` in narrow ones, `size="sm"` in cards.
 * Do: Values can be any component (Badge, Link, CopyInline).
 * Don't: Don't use it for more than ~12 pairs; split into Cards or Fieldset-like sections.
 */
export declare const DescriptionList: React.FC<DescriptionListProps>;
/** Use: A single key metric with an optional trend: open orders, revenue, SLA.
 * Instead: Progress toward a goal → ProgressBar. Many numbers to compare → Table.
 * Do: Show the period the delta compares to (“vs last week”).
 * Do: Set `positive={false}` when going up is bad (refunds, errors).
 * Don't: Don't show more than 4–6 stats in a row.
 */
export declare const Stat: React.FC<StatProps>;
/** Use: Vertical: activity history of a record, newest first. Horizontal: progress through known milestones (order placed → delivered).
 * Instead: A form flow people complete → Stepper. Comments with replies → Comment.
 * Do: Vertical: say who did what and when.
 * Do: Horizontal: mark `current` and `upcoming` steps; keep titles to 2–3 words.
 * Don't: Don't mix activity events and milestones in one timeline.
 */
export declare const Timeline: React.FC<TimelineProps>;
/** Use: Messages in a case or record thread, including internal notes.
 * Instead: System events → Timeline.
 * Do: Show author, role and time; mark edited comments.
 * Do: Make internal notes visually distinct from customer-visible replies.
 * Don't: Don't nest replies more than one level.
 */
export declare const Comment: React.FC<CommentProps>;
/** Use: Simple records with a title, description and one action: people, files, settings.
 * Instead: Comparing values across columns → Table. Status workflow → Kanban.
 * Do: Use `selectable` with `onSelect` for master–detail layouts.
 * Do: Use `size="sm"` in side panels.
 * Don't: Don't put more than one action per row; use a MenuButton.
 */
export declare const List: React.FC<ListProps>;
/** Use: The top of every page: breadcrumbs, title, description, primary actions, optional tabs.
 * Instead: Section headings inside a page → Card titles or Fieldset legends.
 * Do: One primary action at most; put extra actions in a MenuButton.
 * Do: Use the `badge` for a count or status of the page's subject.
 * Don't: Don't repeat the page title in the content below.
 */
export declare const PageHeader: React.FC<PageHeaderProps>;
/** Use: A row of actions and controls above content: editor tools, view options.
 * Instead: Table-specific search, filters and bulk actions → TableToolbar.
 * Do: Group related controls; put the most used on the left.
 * Don't: Don't overflow the row; move extras into a MenuButton.
 */
export declare const Toolbar: React.FC<ToolbarProps>;
/** Use: The bar above a Table: search, filters, column options, export; bulk actions when rows are selected.
 * Instead: General page actions → PageHeader.
 * Do: Show `selectedCount` and bulk actions only while rows are selected.
 * Don't: Don't put row-specific actions here.
 */
export declare const TableToolbar: React.FC<TableToolbarProps>;
/** Use: 2–4 inline filters plus search above a list or table, with applied filters as chips.
 * Instead: 5+ filters or grouped filters → FilterPanel.
 * Do: Show applied filters as removable Tags with “Clear all”.
 * Don't: Don't hide the search inside “More filters”.
 */
export declare const FilterBar: React.FC<FilterBarProps>;
/** Use: Many grouped filters in a side panel for data-heavy pages.
 * Instead: A few filters → FilterBar.
 * Do: Group filters with titles and counts; put Apply in the footer.
 * Don't: Don't apply filters on every click and also show an Apply button; pick one model.
 */
export declare const FilterPanel: React.FC<FilterPanelProps>;
/** Use: A status column on a board, holding KanbanCards.
 * Instead: Comparing many fields → Table.
 * Do: Name columns after statuses; show the count.
 * Do: Show an empty message in empty columns.
 * Don't: Don't use more than ~6 columns.
 */
export declare const KanbanColumn: React.FC<KanbanColumnProps>;
/** Use: A record on a board: key, title, priority, a few fields, assignee.
 * Instead: Rich content → Card. Rows in a list → List.
 * Do: Keep to the key, a two-line title and up to 3 fields.
 * Don't: Don't put buttons inside the card; open details in a Drawer.
 */
export declare const KanbanCard: React.FC<KanbanCardProps>;
/** Use: Show read-only status, priority or a count: Paid, High, Beta.
 * Instead: User-added labels or removable filters → Tag.
 * Do: Use one or two words; the word carries the meaning.
 * Do: Use tones consistently: success = done, warning = needs attention, critical = blocking.
 * Don't: Don't make badges clickable.
 * Don't: Don't use status colours for decoration.
 */
export declare const Badge: React.FC<BadgeProps>;
/** Use: Compare many records across columns; sort, select and act in bulk.
 * Instead: Few fields per record → List. Status workflow → Kanban. One record's details → DescriptionList.
 * Do: Right-align numbers and money; keep IDs `nowrap`.
 * Do: Use `selectable` with TableToolbar for bulk actions; `density="compact"` for long lists.
 * Do: Give `emptyText` that says why it's empty.
 * Don't: Don't put more than one or two actions in a row; use the ⋯ row action.
 * Don't: Don't nest tables.
 */
export declare const Table: React.FC<TableProps>;

/** Accent colour option. Every accent passes WCAG AA in light and dark. */
export type TesseraAccent = 'indigo' | 'cobalt' | 'teal' | 'graphite';
/** Typeface option: Geist with IBM Plex Sans figures and Geist Mono (default), IBM Plex, Inter with JetBrains Mono, or the system UI fonts. */
export type TesseraFont = 'geist' | 'plex' | 'inter' | 'system';
export type TesseraMode = 'light' | 'dark';
export interface TesseraTheme { accent?: TesseraAccent; font?: TesseraFont; mode?: TesseraMode; }
export interface SetThemeOptions {
  /** Theme only this element (sets the data attributes on it) instead of <html>. Not remembered. */
  target?: HTMLElement;
  /** Remember accent and font in this browser (default true). Mode is never remembered. */
  persist?: boolean;
}
/** Use: switch accent, typeface or mode at runtime. Same as setting data-accent, data-font and data-theme on <html>. */
export declare function setTheme(theme: TesseraTheme, options?: SetThemeOptions): Required<TesseraTheme>;
/** Returns the current accent, font and mode of <html> (or of `el`). */
export declare function getTheme(el?: HTMLElement): Required<TesseraTheme>;
/** The available options, for building a switcher. */
export declare const themes: {
  accents: { id: TesseraAccent; label: string }[];
  fonts: { id: TesseraFont; label: string }[];
  modes: { id: TesseraMode; label: string }[];
};
