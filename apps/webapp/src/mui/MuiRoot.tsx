import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import './mui.css';

/* ── Theme presets ──────────────────────────────── */
const PRESETS = [
    { id: 'blue-rose',     label: 'Blue / Rose',     primary: '#3b82f6', secondary: '#f43f5e' },
    { id: 'indigo-pink',   label: 'Indigo / Pink',   primary: '#6366f1', secondary: '#ec4899' },
    { id: 'teal-orange',   label: 'Teal / Orange',   primary: '#14b8a6', secondary: '#f97316' },
    { id: 'violet-amber',  label: 'Violet / Amber',  primary: '#8b5cf6', secondary: '#f59e0b' },
    { id: 'green-red',     label: 'Green / Red',     primary: '#22c55e', secondary: '#ef4444' },
    { id: 'cyan-blue',     label: 'Cyan / Deep Blue', primary: '#06b6d4', secondary: '#1d4ed8' },
] as const;

const ModeCtx = React.createContext<'light' | 'dark'>('light');

/* ── Layout helpers ─────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    const mode = React.useContext(ModeCtx);
    const dark = mode === 'dark';
    return (
        <section className={dark ? 'rounded-xl bg-gray-800 border border-gray-700 shadow-sm' : 'rounded-xl bg-white border border-gray-100 shadow-sm'}>
            <div className={dark ? 'px-5 py-3 border-b border-gray-700 bg-gray-900/40 rounded-t-xl' : 'px-5 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl'}>
                <h2 className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h2>
            </div>
            <div className='p-5 space-y-4'>
                {children}
            </div>
        </section>
    );
}

const ExpandIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
);

/* ── Buttons ────────────────────────────────────── */
function Buttons() {
    return (
        <Section title='Buttons'>
            {/* contained */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button variant='contained'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' disabled>Disabled</Button>
            </div>
            {/* outlined */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button variant='outlined'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' disabled>Disabled</Button>
            </div>
            {/* text */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button variant='text'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='inherit'>Inherit</Button>
            </div>
            {/* sizes */}
            <div className='flex flex-wrap gap-3 items-center'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </div>
            {/* ButtonGroup */}
            <div className='flex flex-wrap gap-4 items-center'>
                <ButtonGroup variant='outlined'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant='contained' color='secondary'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
        </Section>
    );
}

/* ── Text Fields ────────────────────────────────── */
function TextFields() {
    return (
        <Section title='Text Fields'>
            <div className='flex flex-wrap gap-5 items-start'>
                <TextField label='Outlined' variant='outlined' size='small' />
                <TextField label='Filled' variant='filled' size='small' />
                <TextField label='Standard' variant='standard' />
                <TextField label='With placeholder' placeholder='Enter value' variant='outlined' size='small' />
                <TextField label='Error state' defaultValue='wrong' error helperText='Incorrect entry.' variant='outlined' size='small' />
                <TextField label='Disabled' defaultValue='Read only' disabled variant='outlined' size='small' />
                <TextField label='Multiline' multiline rows={3} variant='outlined' size='small' placeholder='Your message...' sx={{ minWidth: 220 }} />
                <TextField label='Password' type='password' defaultValue='secret' variant='outlined' size='small' />
            </div>
            <div className='flex flex-wrap gap-5 items-start'>
                <FormControl size='small' sx={{ minWidth: 160 }}>
                    <InputLabel>Role</InputLabel>
                    <Select label='Role' defaultValue='editor'>
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='editor'>Editor</MenuItem>
                        <MenuItem value='viewer'>Viewer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size='small' sx={{ minWidth: 160 }}>
                    <InputLabel>Status</InputLabel>
                    <Select label='Status' defaultValue='active'>
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='inactive'>Inactive</MenuItem>
                        <MenuItem value='pending'>Pending</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Section>
    );
}

/* ── Form Controls ──────────────────────────────── */
function FormControls() {
    const [radio, setRadio] = React.useState('email');
    return (
        <Section title='Checkboxes, Radio & Switch'>
            <div className='flex flex-wrap gap-10'>
                {/* Checkboxes */}
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Notifications</FormLabel>
                    <div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label='Email' />
                        <FormControlLabel control={<Checkbox />} label='SMS' />
                        <FormControlLabel control={<Checkbox color='secondary' />} label='Push (secondary)' />
                        <FormControlLabel control={<Checkbox disabled />} label='Disabled' />
                    </div>
                </FormControl>
                {/* Radio */}
                <FormControl>
                    <FormLabel>Delivery</FormLabel>
                    <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
                        <FormControlLabel value='email' control={<Radio />} label='Email' />
                        <FormControlLabel value='sms' control={<Radio />} label='SMS' />
                        <FormControlLabel value='push' control={<Radio />} label='Push' />
                        <FormControlLabel value='off' control={<Radio color='secondary' />} label='None (secondary)' />
                    </RadioGroup>
                </FormControl>
                {/* Switches */}
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Toggles</FormLabel>
                    <div>
                        <FormControlLabel control={<Switch defaultChecked />} label='Dark mode' />
                        <FormControlLabel control={<Switch color='secondary' defaultChecked />} label='Notifications (secondary)' />
                        <FormControlLabel control={<Switch />} label='Auto-save' />
                        <FormControlLabel control={<Switch disabled />} label='Disabled' />
                    </div>
                </FormControl>
            </div>
        </Section>
    );
}

/* ── Slider ─────────────────────────────────────── */
function Sliders() {
    const [val, setVal] = React.useState<number>(40);
    const [range, setRange] = React.useState<number[]>([20, 80]);
    return (
        <Section title='Slider'>
            <div className='max-w-sm space-y-6'>
                <div>
                    <p className='text-sm text-gray-500 mb-2'>Continuous — {val}</p>
                    <Slider value={val} onChange={(_, v) => setVal(v as number)} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-2'>Range — [{range[0]}, {range[1]}]</p>
                    <Slider value={range} onChange={(_, v) => setRange(v as number[])} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-2'>With marks</p>
                    <Slider defaultValue={60} step={10} marks min={0} max={100} valueLabelDisplay='auto' />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-2'>Secondary color, disabled</p>
                    <Slider defaultValue={30} color='secondary' />
                    <Slider defaultValue={50} disabled />
                </div>
            </div>
        </Section>
    );
}

/* ── Rating ─────────────────────────────────────── */
function Ratings() {
    const [value, setValue] = React.useState<number | null>(3);
    return (
        <Section title='Rating'>
            <div className='flex flex-wrap gap-8 items-center'>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Controlled — {value ?? 'null'}</p>
                    <Rating value={value} onChange={(_, v) => setValue(v)} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Read-only</p>
                    <Rating value={4} readOnly />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Size large</p>
                    <Rating defaultValue={2} size='large' />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>10 stars</p>
                    <Rating defaultValue={7} max={10} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Disabled</p>
                    <Rating defaultValue={3} disabled />
                </div>
            </div>
        </Section>
    );
}

/* ── Chips ──────────────────────────────────────── */
function Chips() {
    const [chips, setChips] = React.useState(['React', 'TypeScript', 'Tailwind', 'MUI']);
    return (
        <Section title='Chips'>
            <div className='flex flex-wrap gap-3'>
                <Chip label='Default' />
                <Chip label='Clickable' onClick={() => {}} />
                <Chip label='Primary' color='primary' />
                <Chip label='Secondary' color='secondary' />
                <Chip label='Success' color='success' />
                <Chip label='Error' color='error' />
                <Chip label='Warning' color='warning' />
            </div>
            <div className='flex flex-wrap gap-3'>
                <Chip label='Outlined' variant='outlined' />
                <Chip label='Primary outlined' variant='outlined' color='primary' />
                <Chip label='Secondary outlined' variant='outlined' color='secondary' />
                <Chip label='Disabled' disabled />
            </div>
            <div className='flex flex-wrap gap-3 items-center'>
                <p className='text-sm text-gray-500'>Deletable tags:</p>
                {chips.map((c) => (
                    <Chip key={c} label={c} onDelete={() => setChips((prev) => prev.filter((x) => x !== c))} />
                ))}
            </div>
            <div className='flex flex-wrap gap-3'>
                <Chip avatar={<Avatar>A</Avatar>} label='Avatar A' />
                <Chip avatar={<Avatar sx={{ bgcolor: '#3b82f6' }}>B</Avatar>} label='Avatar B' color='primary' />
            </div>
        </Section>
    );
}

/* ── Alerts ─────────────────────────────────────── */
function Alerts() {
    return (
        <Section title='Alerts'>
            <div className='flex flex-col gap-3 max-w-xl'>
                <Alert severity='success'>Your changes have been saved successfully.</Alert>
                <Alert severity='info'>A new software update is available. Check it out!</Alert>
                <Alert severity='warning'>Your subscription will expire in 3 days.</Alert>
                <Alert severity='error'>There was an error processing your request.</Alert>
                <Alert severity='success' variant='filled'>Filled success alert.</Alert>
                <Alert severity='info' variant='filled'>Filled info alert.</Alert>
                <Alert severity='warning' variant='outlined'>Outlined warning alert.</Alert>
                <Alert severity='error' variant='outlined'>Outlined error alert.</Alert>
            </div>
        </Section>
    );
}

/* ── Progress ───────────────────────────────────── */
function Progress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((p) => (p >= 100 ? 0 : p + 5));
        }, 400);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section title='Progress'>
            <div className='space-y-5 max-w-sm'>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Animated — {progress}%</p>
                    <LinearProgress variant='determinate' value={progress} />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Indeterminate</p>
                    <LinearProgress />
                </div>
                <div>
                    <p className='text-sm text-gray-500 mb-1'>Secondary</p>
                    <LinearProgress color='secondary' variant='determinate' value={65} />
                </div>
            </div>
            <div className='flex flex-wrap gap-6 items-center'>
                <div className='text-center'>
                    <CircularProgress />
                    <p className='text-xs text-gray-500 mt-2'>Indeterminate</p>
                </div>
                <div className='text-center'>
                    <CircularProgress variant='determinate' value={progress} />
                    <p className='text-xs text-gray-500 mt-2'>{progress}%</p>
                </div>
                <div className='text-center'>
                    <CircularProgress color='secondary' size={48} />
                    <p className='text-xs text-gray-500 mt-2'>Secondary lg</p>
                </div>
                <div className='text-center'>
                    <CircularProgress size={24} />
                    <p className='text-xs text-gray-500 mt-2'>Small</p>
                </div>
            </div>
        </Section>
    );
}

/* ── Avatars & Badges ───────────────────────────── */
function Avatars() {
    const colors = ['#3b82f6', '#f43f5e', '#10b981', '#f59e0b', '#8b5cf6'];
    const names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
    return (
        <Section title='Avatars & Badges'>
            <div className='flex flex-wrap gap-6 items-center'>
                {/* letter avatars */}
                <div className='flex gap-2'>
                    {names.map((n, i) => (
                        <Tooltip key={n} title={n}>
                            <Avatar sx={{ bgcolor: colors[i] }}>{n[0]}</Avatar>
                        </Tooltip>
                    ))}
                </div>
                {/* AvatarGroup */}
                <AvatarGroup max={4}>
                    {names.map((n, i) => (
                        <Avatar key={n} sx={{ bgcolor: colors[i] }}>{n[0]}</Avatar>
                    ))}
                </AvatarGroup>
                {/* sizes */}
                <div className='flex gap-2 items-center'>
                    <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>S</Avatar>
                    <Avatar>M</Avatar>
                    <Avatar sx={{ width: 56, height: 56, fontSize: 24 }}>L</Avatar>
                </div>
            </div>
            <div className='flex flex-wrap gap-8 items-center'>
                <Badge badgeContent={4} color='primary'>
                    <Avatar sx={{ bgcolor: '#3b82f6' }}>N</Avatar>
                </Badge>
                <Badge badgeContent={99} color='secondary'>
                    <Avatar sx={{ bgcolor: '#f43f5e' }}>M</Avatar>
                </Badge>
                <Badge variant='dot' color='success'>
                    <Avatar>O</Avatar>
                </Badge>
                <Badge badgeContent={0} showZero color='primary'>
                    <Avatar>Z</Avatar>
                </Badge>
            </div>
        </Section>
    );
}

/* ── Tabs ───────────────────────────────────────── */
function MuiTabs() {
    const [tab, setTab] = React.useState(0);
    const content = [
        'Manage your public profile information, avatar, and bio.',
        'Update your account email, username, and connected services.',
        'Configure two-factor authentication and active sessions.',
        'Choose what events you want to be notified about and how.',
    ];
    return (
        <Section title='Tabs'>
            <div className='max-w-xl'>
                <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                    <Tab label='Profile' />
                    <Tab label='Account' />
                    <Tab label='Security' />
                    <Tab label='Notifications' />
                </Tabs>
                <Divider />
                <p className='mt-4 text-sm text-gray-600'>{content[tab]}</p>
            </div>
            <div className='max-w-xs'>
                <Tabs value={tab} onChange={(_, v) => setTab(v)} variant='scrollable' scrollButtons='auto'>
                    <Tab label='Profile' />
                    <Tab label='Account' />
                    <Tab label='Security' />
                    <Tab label='Notifications' />
                </Tabs>
            </div>
        </Section>
    );
}

/* ── Accordion ──────────────────────────────────── */
function Accordions() {
    return (
        <Section title='Accordion'>
            <div className='max-w-xl'>
                {[
                    {
                        title: 'What is Material UI?',
                        body: 'Material UI is an open-source React component library that implements Google\'s Material Design. It includes a comprehensive collection of prebuilt components.',
                    },
                    {
                        title: 'How do I customize the theme?',
                        body: 'Use createTheme() to override palette, typography, spacing, and component-level defaults, then wrap your app with ThemeProvider.',
                    },
                    {
                        title: 'Can I use MUI with Tailwind CSS?',
                        body: 'Yes. Use MUI components for interactive UI elements and Tailwind for page layout and spacing. Disable Tailwind\'s Preflight or scope it to avoid conflicts with MUI\'s baseline styles.',
                    },
                ].map((item) => (
                    <Accordion key={item.title}>
                        <AccordionSummary expandIcon={<ExpandIcon />}>
                            <span className='font-medium text-sm'>{item.title}</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-sm text-gray-600'>{item.body}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </Section>
    );
}

/* ── Table ──────────────────────────────────────── */
function DataTable() {
    const rows = [
        { name: 'Nandor the Relentless', role: 'Vampire Warrior', status: 'Active', since: 1262 },
        { name: 'Laszlo Cravensworth', role: 'Vampire Gentleman', status: 'Active', since: 1678 },
        { name: 'Nadja', role: 'Vampire Seductress', status: 'Active', since: 1593 },
        { name: 'Colin Robinson', role: 'Energy Vampire', status: 'Active', since: 1971 },
        { name: 'Guillermo de la Cruz', role: 'Familiar / Hunter', status: 'Inactive', since: 1991 },
    ];
    const statusColor = (s: string) => s === 'Active' ? 'success' : 'error';
    return (
        <Section title='Table'>
            <TableContainer component={Paper} sx={{ maxWidth: 700 }} variant='outlined'>
                <Table size='small'>
                    <TableHead>
                        <TableRow sx={{ '& th': { fontWeight: 700, bgcolor: 'grey.50' } }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Since</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((r) => (
                            <TableRow key={r.name} hover>
                                <TableCell>{r.name}</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }}>{r.role}</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }}>{r.since}</TableCell>
                                <TableCell>
                                    <Chip label={r.status} color={statusColor(r.status)} size='small' variant='outlined' />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Section>
    );
}

/* ── Tooltips ───────────────────────────────────── */
function Tooltips() {
    const placements = ['top', 'right', 'bottom', 'left'] as const;
    return (
        <Section title='Tooltips'>
            <div className='flex flex-wrap gap-4 items-center'>
                {placements.map((p) => (
                    <Tooltip key={p} title={`Tooltip — ${p}`} placement={p} arrow>
                        <Button variant='outlined' size='small'>{p}</Button>
                    </Tooltip>
                ))}
                <Tooltip title='Always visible' open arrow>
                    <Button variant='contained' size='small'>Always open</Button>
                </Tooltip>
                <Tooltip title='Disabled' disableHoverListener>
                    <span>
                        <Button variant='outlined' size='small' disabled>Disabled</Button>
                    </span>
                </Tooltip>
            </div>
        </Section>
    );
}

/* ── Root ───────────────────────────────────────── */
function MuiRoot() {
    const [preset, setPreset] = React.useState<typeof PRESETS[number]>(PRESETS[0]);
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode,
            primary:   { main: preset.primary },
            secondary: { main: preset.secondary },
        },
    }), [preset, mode]);

    const isDark = mode === 'dark';

    return (
        <ModeCtx.Provider value={mode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={isDark ? 'min-h-screen bg-gray-900 text-gray-100 font-sans' : 'min-h-screen bg-gray-50 text-gray-900 font-sans'}>
                <header className={isDark ? 'sticky top-0 z-50 bg-gray-800 border-b border-gray-700 shadow-sm' : 'sticky top-0 z-50 bg-white border-b shadow-sm'}>
                    <div className='mx-auto max-w-5xl px-6 py-3 flex items-center gap-4'>
                        <div className='mr-auto'>
                            <span className='font-bold'>MUI</span>
                            <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Material UI v7 · Component Showcase</span>
                        </div>
                        {/* Color presets */}
                        <div className='flex items-center gap-1.5'>
                            {PRESETS.map((p) => (
                                <button
                                    key={p.id}
                                    title={p.label}
                                    onClick={() => setPreset(p)}
                                    className='size-5 rounded-full transition-transform hover:scale-110 focus:outline-none'
                                    style={{
                                        background: `linear-gradient(135deg, ${p.primary} 50%, ${p.secondary} 50%)`,
                                        outline: preset.id === p.id ? `2px solid ${p.primary}` : 'none',
                                        outlineOffset: '2px',
                                    }}
                                />
                            ))}
                        </div>
                        {/* Light / Dark */}
                        <button
                            onClick={() => setMode(isDark ? 'light' : 'dark')}
                            className={`px-3 py-1 text-sm rounded border transition-colors ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                        >
                            {isDark ? '☀ Light' : '☾ Dark'}
                        </button>
                        <a href='/' className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'}`}>← Back</a>
                    </div>
                </header>
                <main className='mx-auto max-w-5xl px-6 py-10 space-y-12'>
                    <Buttons />
                    <TextFields />
                    <FormControls />
                    <Sliders />
                    <Ratings />
                    <Chips />
                    <Alerts />
                    <Progress />
                    <Avatars />
                    <MuiTabs />
                    <Accordions />
                    <DataTable />
                    <Tooltips />
                </main>
            </div>
        </ThemeProvider>
        </ModeCtx.Provider>
    );
}

export default MuiRoot;
