import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Password } from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { InputSwitch } from 'primereact/inputswitch';
import { Slider } from 'primereact/slider';
import { Rating } from 'primereact/rating';
import { Chips } from 'primereact/chips';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';
import { Message } from 'primereact/message';
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';
import { TabView, TabPanel } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Tooltip } from 'primereact/tooltip';
import 'primeicons/primeicons.css';
import './prime.css';

/* ── Layout helpers ─────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className='rounded-xl bg-white border border-gray-100 shadow-sm'>
            <div className='px-5 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl'>
                <h2 className='text-sm font-semibold text-gray-600 uppercase tracking-wide'>{title}</h2>
            </div>
            <div className='p-5 space-y-4'>
                {children}
            </div>
        </section>
    );
}

/* ── Buttons ────────────────────────────────────── */
function Buttons() {
    const [loading, setLoading] = React.useState(false);
    return (
        <Section title='Buttons'>
            {/* severity */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button label='Primary' />
                <Button label='Secondary' severity='secondary' />
                <Button label='Success' severity='success' />
                <Button label='Info' severity='info' />
                <Button label='Warning' severity='warning' />
                <Button label='Danger' severity='danger' />
                <Button label='Help' severity='help' />
            </div>
            {/* outlined */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button label='Primary' outlined />
                <Button label='Secondary' severity='secondary' outlined />
                <Button label='Success' severity='success' outlined />
                <Button label='Danger' severity='danger' outlined />
                <Button label='Disabled' disabled />
            </div>
            {/* text / rounded / loading */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button label='Text' text />
                <Button label='Rounded' rounded />
                <Button label='Raised' raised />
                <Button
                    label='Loading'
                    loading={loading}
                    onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
                />
            </div>
            {/* sizes */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button label='Small' size='small' />
                <Button label='Normal' />
                <Button label='Large' size='large' />
            </div>
            {/* icon buttons */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button icon='pi pi-check' label='Save' />
                <Button icon='pi pi-trash' label='Delete' severity='danger' />
                <Button icon='pi pi-search' rounded outlined />
                <Button icon='pi pi-heart' rounded severity='danger' />
                <Button icon='pi pi-cog' text rounded severity='secondary' />
            </div>
            {/* ButtonGroup */}
            <div className='flex flex-wrap gap-4 items-center'>
                <ButtonGroup>
                    <Button label='Day' />
                    <Button label='Week' severity='secondary' outlined />
                    <Button label='Month' severity='secondary' outlined />
                </ButtonGroup>
                <ButtonGroup>
                    <Button icon='pi pi-align-left' severity='secondary' outlined />
                    <Button icon='pi pi-align-center' severity='secondary' outlined />
                    <Button icon='pi pi-align-right' severity='secondary' outlined />
                </ButtonGroup>
            </div>
        </Section>
    );
}

/* ── Inputs ─────────────────────────────────────── */
function Inputs() {
    const [text, setText] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [num, setNum] = React.useState<number | null>(42);
    const [role, setRole] = React.useState<string | null>(null);
    const roles = [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
    ];
    return (
        <Section title='Inputs'>
            <div className='flex flex-wrap gap-5 items-start'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Text</label>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text…' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Invalid</label>
                    <InputText defaultValue='wrong' invalid className='w-44' />
                    <small className='text-red-500'>This field is required.</small>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Disabled</label>
                    <InputText value='Read only' disabled />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Password</label>
                    <Password value={pwd} onChange={(e) => setPwd(e.target.value)} toggleMask feedback={false} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Number</label>
                    <InputNumber value={num} onValueChange={(e) => setNum(e.value ?? null)} min={0} max={100} showButtons />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-700'>Role</label>
                    <Dropdown
                        value={role} onChange={(e) => setRole(e.value)}
                        options={roles} optionLabel='label' placeholder='Select role'
                        className='w-44'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-1 max-w-sm'>
                <label className='text-sm font-medium text-gray-700'>Textarea</label>
                <InputTextarea rows={3} placeholder='Your message…' className='w-full' autoResize />
            </div>
        </Section>
    );
}

/* ── Form Controls ──────────────────────────────── */
function FormControls() {
    const [checks, setChecks] = React.useState<string[]>(['Email']);
    const [radio, setRadio] = React.useState('standard');
    const [switches, setSwitches] = React.useState({ dark: false, notifs: true, save: true });

    const toggleCheck = (val: string) =>
        setChecks((prev) => prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]);

    return (
        <Section title='Checkboxes, Radio & Switch'>
            <div className='flex flex-wrap gap-10'>
                {/* Checkboxes */}
                <fieldset>
                    <legend className='text-sm font-medium text-gray-700 mb-2'>Notifications</legend>
                    <div className='flex flex-col gap-2'>
                        {['Email', 'SMS', 'Push'].map((opt) => (
                            <div key={opt} className='flex items-center gap-2'>
                                <Checkbox inputId={`chk-${opt}`} value={opt}
                                    checked={checks.includes(opt)} onChange={() => toggleCheck(opt)} />
                                <label htmlFor={`chk-${opt}`} className='text-sm text-gray-700 cursor-pointer'>{opt}</label>
                            </div>
                        ))}
                        <div className='flex items-center gap-2'>
                            <Checkbox inputId='chk-disabled' disabled checked />
                            <label htmlFor='chk-disabled' className='text-sm text-gray-400'>Disabled</label>
                        </div>
                    </div>
                </fieldset>
                {/* Radio */}
                <fieldset>
                    <legend className='text-sm font-medium text-gray-700 mb-2'>Delivery</legend>
                    <div className='flex flex-col gap-2'>
                        {[
                            { id: 'standard', label: 'Standard — Free' },
                            { id: 'express', label: 'Express — $4.99' },
                            { id: 'nextday', label: 'Next Day — $9.99' },
                        ].map((opt) => (
                            <div key={opt.id} className='flex items-center gap-2'>
                                <RadioButton inputId={`del-${opt.id}`} value={opt.id}
                                    checked={radio === opt.id} onChange={() => setRadio(opt.id)} />
                                <label htmlFor={`del-${opt.id}`} className='text-sm text-gray-700 cursor-pointer'>{opt.label}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                {/* Switches */}
                <fieldset>
                    <legend className='text-sm font-medium text-gray-700 mb-2'>Toggles</legend>
                    <div className='flex flex-col gap-3'>
                        {(Object.keys(switches) as Array<keyof typeof switches>).map((key) => (
                            <div key={key} className='flex items-center gap-3'>
                                <InputSwitch
                                    checked={switches[key]}
                                    onChange={(e) => setSwitches((p) => ({ ...p, [key]: e.value }))}
                                />
                                <span className='text-sm text-gray-700 capitalize'>{key === 'notifs' ? 'Notifications' : key === 'save' ? 'Auto-save' : 'Dark mode'}</span>
                            </div>
                        ))}
                        <div className='flex items-center gap-3'>
                            <InputSwitch checked disabled />
                            <span className='text-sm text-gray-400'>Disabled</span>
                        </div>
                    </div>
                </fieldset>
            </div>
        </Section>
    );
}

/* ── Slider & Rating ────────────────────────────── */
function SliderRating() {
    const [val, setVal] = React.useState(40);
    const [range, setRange] = React.useState<[number, number]>([20, 70]);
    const [stars, setStars] = React.useState<number | undefined>(3);
    return (
        <Section title='Slider & Rating'>
            <div className='flex flex-wrap gap-10'>
                <div className='flex flex-col gap-4 min-w-48 max-w-xs flex-1'>
                    <div>
                        <p className='text-sm text-gray-500 mb-2'>Continuous — {val}</p>
                        <Slider value={val} onChange={(e) => setVal(e.value as number)} />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 mb-2'>Range — [{range[0]}, {range[1]}]</p>
                        <Slider value={range} onChange={(e) => setRange(e.value as [number, number])} range />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 mb-2'>Step 10 · vertical</p>
                        <Slider defaultValue={60} step={10} min={0} max={100} orientation='vertical' style={{ height: 80 }} />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Controlled — {stars ?? 'none'}</p>
                        <Rating value={stars} onChange={(e) => setStars(e.value ?? undefined)} />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Read-only</p>
                        <Rating value={4} readOnly cancel={false} />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>10 stars</p>
                        <Rating value={7} stars={10} cancel={false} readOnly />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 mb-1'>Disabled</p>
                        <Rating value={3} disabled />
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Tags & Chips ───────────────────────────────── */
function TagsChips() {
    const [tags, setTags] = React.useState<string[]>(['React', 'TypeScript', 'Tailwind']);
    return (
        <Section title='Tags & Chips'>
            {/* Tag — badge-like */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Tag value='Primary' />
                <Tag value='Secondary' severity='secondary' />
                <Tag value='Success' severity='success' />
                <Tag value='Info' severity='info' />
                <Tag value='Warning' severity='warning' />
                <Tag value='Danger' severity='danger' />
            </div>
            <div className='flex flex-wrap gap-3 items-center'>
                <Tag value='Rounded' rounded />
                <Tag value='Success' severity='success' rounded />
                <Tag value='With icon' icon='pi pi-check' severity='success' />
                <Tag value='Live' icon='pi pi-circle-fill' severity='danger' />
                <Tag value='Beta' icon='pi pi-star' severity='warning' />
            </div>
            {/* Chip — closable label */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Chip label='Default' />
                <Chip label='With icon' icon='pi pi-user' />
                <Chip label='Removable' removable />
                <Chip label='Image' image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png' removable />
            </div>
            {/* Chips — tag input */}
            <div className='flex flex-col gap-1 max-w-sm'>
                <label className='text-sm font-medium text-gray-700'>Tag input (press Enter)</label>
                <Chips value={tags} onChange={(e) => setTags(e.value ?? [])} placeholder='Add tag…' />
            </div>
        </Section>
    );
}

/* ── Messages ───────────────────────────────────── */
function Messages() {
    return (
        <Section title='Messages'>
            <div className='flex flex-col gap-3 max-w-xl'>
                <Message severity='success' text='Your changes have been saved successfully.' />
                <Message severity='info' text='A new software update is available. Check it out!' />
                <Message severity='warn' text='Your subscription will expire in 3 days.' />
                <Message severity='error' text='There was an error processing your request.' />
            </div>
        </Section>
    );
}

/* ── Progress ───────────────────────────────────── */
function Progress() {
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
        const t = setInterval(() => setVal((p) => (p >= 100 ? 0 : p + 5)), 400);
        return () => clearInterval(t);
    }, []);
    return (
        <Section title='Progress'>
            <div className='flex flex-col gap-5 max-w-sm'>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Animated — {val}%</p>
                    <ProgressBar value={val} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Indeterminate</p>
                    <ProgressBar mode='indeterminate' style={{ height: 6 }} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>No label</p>
                    <ProgressBar value={65} showValue={false} style={{ height: 8 }} />
                </div>
            </div>
            <div className='flex flex-wrap gap-6 items-center mt-2'>
                <div className='text-center'>
                    <ProgressSpinner style={{ width: 50, height: 50 }} strokeWidth='4' />
                    <p className='text-xs text-gray-500 mt-1'>Default</p>
                </div>
                <div className='text-center'>
                    <ProgressSpinner style={{ width: 50, height: 50 }} strokeWidth='8' animationDuration='.5s' />
                    <p className='text-xs text-gray-500 mt-1'>Fast</p>
                </div>
                <div className='text-center'>
                    <ProgressSpinner style={{ width: 30, height: 30 }} strokeWidth='6' />
                    <p className='text-xs text-gray-500 mt-1'>Small</p>
                </div>
            </div>
        </Section>
    );
}

/* ── Avatars & Badges ───────────────────────────── */
function Avatars() {
    const items = [
        { label: 'A', style: { backgroundColor: '#3b82f6', color: '#fff' } },
        { label: 'B', style: { backgroundColor: '#f43f5e', color: '#fff' } },
        { label: 'C', style: { backgroundColor: '#10b981', color: '#fff' } },
        { label: 'D', style: { backgroundColor: '#f59e0b', color: '#fff' } },
        { label: 'E', style: { backgroundColor: '#8b5cf6', color: '#fff' } },
    ];
    return (
        <Section title='Avatars & Badges'>
            <div className='flex flex-wrap gap-6 items-center'>
                {/* letter avatars */}
                <div className='flex gap-2'>
                    {items.map((av) => (
                        <Avatar key={av.label} label={av.label} shape='circle' style={av.style} />
                    ))}
                </div>
                {/* AvatarGroup */}
                <AvatarGroup>
                    {items.map((av) => (
                        <Avatar key={av.label} label={av.label} shape='circle' style={av.style} />
                    ))}
                </AvatarGroup>
                {/* sizes */}
                <div className='flex gap-2 items-center'>
                    <Avatar label='S' shape='circle' size='normal' style={{ backgroundColor: '#3b82f6', color: '#fff', width: 24, height: 24, fontSize: 11 }} />
                    <Avatar label='M' shape='circle' style={{ backgroundColor: '#3b82f6', color: '#fff' }} />
                    <Avatar label='L' shape='circle' size='large' style={{ backgroundColor: '#3b82f6', color: '#fff' }} />
                    <Avatar label='XL' shape='circle' size='xlarge' style={{ backgroundColor: '#3b82f6', color: '#fff' }} />
                </div>
                {/* square */}
                <div className='flex gap-2 items-center'>
                    <Avatar icon='pi pi-user' size='large' style={{ backgroundColor: '#e2e8f0' }} />
                    <Avatar icon='pi pi-cog' size='large' style={{ backgroundColor: '#dbeafe', color: '#1d4ed8' }} />
                </div>
            </div>
            {/* Overlay badges */}
            <div className='flex flex-wrap gap-8 items-center'>
                <div className='relative inline-flex'>
                    <Avatar label='N' shape='circle' style={{ backgroundColor: '#3b82f6', color: '#fff' }} />
                    <Badge value='4' />
                </div>
                <div className='relative inline-flex'>
                    <Avatar label='M' shape='circle' style={{ backgroundColor: '#f43f5e', color: '#fff' }} />
                    <Badge value='99+' severity='danger' />
                </div>
                <div className='relative inline-flex'>
                    <Avatar icon='pi pi-bell' size='large' style={{ backgroundColor: '#e2e8f0' }} />
                    <Badge severity='success' />
                </div>
                {/* standalone badges */}
                <Badge value='8' />
                <Badge value='2' severity='warning' />
                <Badge value='!' severity='danger' />
            </div>
        </Section>
    );
}

/* ── TabView ────────────────────────────────────── */
function PrimeTabs() {
    return (
        <Section title='TabView'>
            <div className='max-w-xl'>
                <TabView>
                    <TabPanel header='Profile'>
                        <p className='text-sm text-gray-600'>Manage your public profile information, avatar, and bio.</p>
                    </TabPanel>
                    <TabPanel header='Account'>
                        <p className='text-sm text-gray-600'>Update your account email, username, and connected services.</p>
                    </TabPanel>
                    <TabPanel header='Security'>
                        <p className='text-sm text-gray-600'>Configure two-factor authentication and active sessions.</p>
                    </TabPanel>
                    <TabPanel header='Notifications' leftIcon='pi pi-bell mr-2'>
                        <p className='text-sm text-gray-600'>Choose what events you want to be notified about and how.</p>
                    </TabPanel>
                </TabView>
            </div>
        </Section>
    );
}

/* ── Accordion ──────────────────────────────────── */
function PrimeAccordion() {
    return (
        <Section title='Accordion'>
            <div className='max-w-xl'>
                <Accordion multiple>
                    <AccordionTab header='What is PrimeReact?'>
                        <p className='text-sm text-gray-600'>
                            PrimeReact is a rich UI component library for React, offering 90+ components built on top of PrimeFlex and PrimeIcons.
                        </p>
                    </AccordionTab>
                    <AccordionTab header='How do I apply a theme?'>
                        <p className='text-sm text-gray-600'>
                            Import a theme CSS from <code>primereact/resources/themes/</code> or use the new Design Tokens API (v10+) for full customisation.
                        </p>
                    </AccordionTab>
                    <AccordionTab header='Can I use PrimeReact with Tailwind?'>
                        <p className='text-sm text-gray-600'>
                            Yes. Use PrimeReact for interactive components and Tailwind for layout and spacing. Scope Tailwind's Preflight to avoid style conflicts.
                        </p>
                    </AccordionTab>
                    <AccordionTab header='Disabled tab' disabled>
                        <p className='text-sm text-gray-600'>This tab is disabled.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </Section>
    );
}

/* ── DataTable ──────────────────────────────────── */
function PrimeTable() {
    const rows = [
        { name: 'Nandor the Relentless', role: 'Vampire Warrior', since: 1262, status: 'Active' },
        { name: 'Laszlo Cravensworth', role: 'Vampire Gentleman', since: 1678, status: 'Active' },
        { name: 'Nadja', role: 'Vampire Seductress', since: 1593, status: 'Active' },
        { name: 'Colin Robinson', role: 'Energy Vampire', since: 1971, status: 'Active' },
        { name: 'Guillermo de la Cruz', role: 'Familiar / Hunter', since: 1991, status: 'Inactive' },
    ];

    const statusBody = (row: typeof rows[number]) => (
        <Tag
            value={row.status}
            severity={row.status === 'Active' ? 'success' : 'danger'}
            rounded
        />
    );

    return (
        <Section title='DataTable'>
            <DataTable value={rows} stripedRows size='small' style={{ maxWidth: 700 }}>
                <Column field='name' header='Name' />
                <Column field='role' header='Role' />
                <Column field='since' header='Since' />
                <Column header='Status' body={statusBody} />
            </DataTable>
        </Section>
    );
}

/* ── Panel & Tooltip ────────────────────────────── */
function PanelTooltip() {
    return (
        <Section title='Panel & Tooltip'>
            <div className='flex flex-wrap gap-6 items-start'>
                <div className='max-w-sm'>
                    <Panel header='Collapsible Panel' toggleable>
                        <p className='text-sm text-gray-600'>
                            This panel can be collapsed and expanded. Click the toggle button in the header to hide/show content.
                        </p>
                    </Panel>
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-3'>Hover the buttons to see tooltips:</p>
                    <div className='flex flex-wrap gap-3 items-center'>
                        <Tooltip target='.tt-top' position='top' />
                        <Button className='tt-top' data-pr-tooltip='Tooltip — top' label='Top' outlined size='small' />

                        <Tooltip target='.tt-right' position='right' />
                        <Button className='tt-right' data-pr-tooltip='Tooltip — right' label='Right' outlined size='small' />

                        <Tooltip target='.tt-bottom' position='bottom' />
                        <Button className='tt-bottom' data-pr-tooltip='Tooltip — bottom' label='Bottom' outlined size='small' />

                        <Tooltip target='.tt-left' position='left' />
                        <Button className='tt-left' data-pr-tooltip='Tooltip — left' label='Left' outlined size='small' />
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Root ───────────────────────────────────────── */
function PrimeRoot() {
    return (
        <PrimeReactProvider>
            <div className='min-h-screen bg-gray-50 text-gray-900 font-sans'>
                <header className='sticky top-0 z-50 bg-white border-b shadow-sm'>
                    <div className='mx-auto max-w-5xl px-6 py-3 flex items-center justify-between'>
                        <div>
                            <span className='font-bold'>PrimeReact</span>
                            <span className='ml-2 text-sm text-gray-500'>v10 · Component Showcase</span>
                        </div>
                        <a href='/' className='text-sm text-gray-500 hover:text-gray-900 transition-colors'>← Back</a>
                    </div>
                </header>
                <main className='mx-auto max-w-5xl px-6 py-10 space-y-12'>
                    <Buttons />
                    <Inputs />
                    <FormControls />
                    <SliderRating />
                    <TagsChips />
                    <Messages />
                    <Progress />
                    <Avatars />
                    <PrimeTabs />
                    <PrimeAccordion />
                    <PrimeTable />
                    <PanelTooltip />
                </main>
            </div>
        </PrimeReactProvider>
    );
}

export default PrimeRoot;
