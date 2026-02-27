import React from 'react';
import './tw.css';

/* HyperUI — Application components
   https://www.hyperui.dev/components/application
   HTML converted to JSX, wrapped in simple React components */

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

/* ── Badges ─────────────────────────────────────── */
function Badges() {
    return (
        <Section title='Badges'>
            <div className='flex flex-wrap gap-3'>
                {/* plain */}
                <span className='rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700'>Live</span>
                <span className='rounded-full border border-purple-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700'>Live</span>
                {/* with icon */}
                <span className='inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='-ms-1 me-1.5 size-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    <p className='text-sm whitespace-nowrap'>Euro</p>
                </span>
                {/* dismissible */}
                <span className='inline-flex items-center justify-center rounded-full bg-green-100 px-2.5 py-0.5 text-green-700'>
                    <p className='text-sm whitespace-nowrap'>Active</p>
                    <button className='ms-1.5 -me-1 inline-block rounded-full bg-green-200 p-0.5 text-green-700 transition hover:bg-green-300'>
                        <span className='sr-only'>Remove badge</span>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-3'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                </span>
                <span className='rounded-full bg-red-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-red-700'>Deprecated</span>
                <span className='rounded-full bg-yellow-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-yellow-700'>Beta</span>
            </div>
        </Section>
    );
}

/* ── Button Groups ───────────────────────────────── */
function ButtonGroups() {
    // HyperUI pattern: left button gets rounded-l, middle/right buttons get -ml-px
    // to collapse double borders. NO overflow-hidden, NO border-r-0.
    const base = 'border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none';
    const iconBase = 'border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none';
    return (
        <Section title='Button Groups'>
            <div className='flex flex-wrap gap-4'>
                {/* text buttons */}
                <div className='inline-flex'>
                    <button className={`${base} rounded-l-sm`}>View</button>
                    <button className={`${base} -ml-px`}>Edit</button>
                    <button className={`${base} -ml-px rounded-r-sm`}>Delete</button>
                </div>
                {/* active state */}
                <div className='inline-flex'>
                    <button className={`${base} rounded-l-sm bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:text-white`}>Day</button>
                    <button className={`${base} -ml-px`}>Week</button>
                    <button className={`${base} -ml-px rounded-r-sm`}>Month</button>
                </div>
                {/* icon buttons */}
                <div className='inline-flex'>
                    <button className={`${iconBase} rounded-l-sm`} title='Download'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' />
                        </svg>
                    </button>
                    <button className={`${iconBase} -ml-px`} title='Edit'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z' />
                        </svg>
                    </button>
                    <button className={`${iconBase} -ml-px rounded-r-sm`} title='Delete'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                        </svg>
                    </button>
                </div>
            </div>
        </Section>
    );
}

/* ── Inputs ─────────────────────────────────────── */
function Inputs() {
    return (
        <Section title='Inputs'>
            <div className='flex flex-wrap gap-6'>
                {/* basic */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Email</span>
                    <input type='email' placeholder='you@example.com'
                        className='rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none' />
                </label>
                {/* with trailing icon */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Search</span>
                    <div className='relative'>
                        <input type='search' placeholder='Search...'
                            className='rounded border border-gray-300 pe-9 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-48' />
                        <span className='absolute inset-y-0 inset-e-0 grid w-9 place-content-center text-gray-500'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803a7.5 7.5 0 0 0 10.607 0Z' />
                            </svg>
                        </span>
                    </div>
                </label>
                {/* with prefix */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Website</span>
                    <div className='flex rounded border border-gray-300 shadow-sm overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500'>
                        <span className='flex items-center bg-gray-50 px-3 text-sm text-gray-500 border-r border-gray-300'>https://</span>
                        <input type='text' placeholder='example.com' className='flex-1 px-3 py-2 text-sm focus:outline-none' />
                    </div>
                </label>
                {/* error state */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Password</span>
                    <input type='password' defaultValue='wrong'
                        className='rounded border border-red-400 px-3 py-2 text-sm shadow-sm ring-1 ring-red-400 focus:outline-none' />
                    <p className='text-xs text-red-600'>Password must be at least 8 characters.</p>
                </label>
                {/* textarea */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Message</span>
                    <textarea rows={3} placeholder='Your message...'
                        className='rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none w-56' />
                </label>
                {/* select */}
                <label className='flex flex-col gap-1'>
                    <span className='text-sm font-medium text-gray-700'>Role</span>
                    <select className='rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Viewer</option>
                    </select>
                </label>
            </div>
        </Section>
    );
}

/* ── Checkboxes & Radio ──────────────────────────── */
function FormControls() {
    return (
        <Section title='Checkboxes & Radio'>
            <div className='flex flex-wrap gap-8'>
                {/* checkboxes */}
                <fieldset>
                    <legend className='mb-2 text-sm font-medium text-gray-700'>Notifications</legend>
                    <div className='flex flex-col gap-2'>
                        {['Email', 'SMS', 'Push'].map((opt) => (
                            <label key={opt} htmlFor={`chk-${opt}`} className='inline-flex items-center gap-3'>
                                <input type='checkbox' id={`chk-${opt}`} defaultChecked={opt === 'Email'}
                                    className='size-4 rounded border-gray-300 text-blue-600 shadow-sm' />
                                <span className='text-sm font-medium text-gray-700'>{opt}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                {/* card-style radio */}
                <fieldset>
                    <legend className='mb-2 text-sm font-medium text-gray-700'>Delivery</legend>
                    <div className='space-y-2 w-56'>
                        {[
                            { id: 'std', label: 'Standard', price: 'Free' },
                            { id: 'exp', label: 'Express', price: '$4.99' },
                            { id: 'nxt', label: 'Next Day', price: '$9.99' },
                        ].map((opt) => (
                            <label key={opt.id} htmlFor={`del-${opt.id}`}
                                className='flex cursor-pointer items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600'>
                                <p className='text-gray-700'>{opt.label}</p>
                                <p className='text-gray-900'>{opt.price}</p>
                                <input type='radio' name='delivery' id={`del-${opt.id}`} defaultChecked={opt.id === 'std'} className='sr-only' />
                            </label>
                        ))}
                    </div>
                </fieldset>
                {/* toggles */}
                <fieldset>
                    <legend className='mb-2 text-sm font-medium text-gray-700'>Toggles</legend>
                    <div className='flex flex-col gap-3'>
                        {['Dark mode', 'Notifications', 'Auto-save'].map((label, i) => (
                            <div key={label} className='flex items-center justify-between gap-6'>
                                <span className='text-sm text-gray-700'>{label}</span>
                                <label className='relative block h-6 w-11 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-blue-600'>
                                    <input type='checkbox' defaultChecked={i === 2} className='peer sr-only' />
                                    <span className='absolute inset-y-0 inset-s-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] peer-checked:inset-s-5'></span>
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </Section>
    );
}

/* ── Tabs ────────────────────────────────────────── */
function Tabs() {
    const [active, setActive] = React.useState(0);
    const tabs = ['Profile', 'Account', 'Notifications', 'Security'];
    const content = [
        'Manage your public profile information, avatar and bio.',
        'Update your account email, username and connected services.',
        'Choose what events you want to be notified about and how.',
        'Configure two-factor authentication and active sessions.',
    ];
    return (
        <Section title='Tabs'>
            <div className='w-full max-w-xl'>
                {/* underline style */}
                <div className='-mb-px border-b border-gray-200'>
                    <div role='tablist' className='flex gap-1'>
                        {tabs.map((tab, i) => (
                            <button key={tab} role='tab' aria-selected={active === i}
                                onClick={() => setActive(i)}
                                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors
                                    ${active === i
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div role='tabpanel' className='mt-4 text-sm text-gray-600'>{content[active]}</div>
            </div>
            {/* pill style */}
            <div className='mt-2 w-full max-w-xl'>
                <div role='tablist' className='flex gap-1 rounded-lg bg-gray-100 p-1 w-fit'>
                    {['Monthly', 'Yearly'].map((tab, i) => (
                        <button key={tab} role='tab'
                            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors
                                ${i === 1 ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ── Stats ───────────────────────────────────────── */
function Stats() {
    const cards = [
        { label: 'Total Revenue', value: '$45,231', change: '+20.1%', up: true, icon: '💰' },
        { label: 'Active Users', value: '2,350', change: '+180', up: true, icon: '👥' },
        { label: 'New Signups', value: '+12,234', change: '+19%', up: true, icon: '📈' },
        { label: 'Churn Rate', value: '3.2%', change: '+0.4%', up: false, icon: '⚠️' },
    ];
    return (
        <Section title='Stats'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl'>
                {cards.map((c) => (
                    <div key={c.label} className='rounded-lg border border-gray-100 bg-white p-5 shadow-sm'>
                        <div className='flex items-start justify-between'>
                            <div>
                                <p className='text-sm text-gray-500'>{c.label}</p>
                                <p className='mt-1 text-2xl font-bold text-gray-900'>{c.value}</p>
                            </div>
                            <span className='text-2xl'>{c.icon}</span>
                        </div>
                        <div className='mt-3 flex items-center gap-1 text-xs'>
                            <svg xmlns='http://www.w3.org/2000/svg' className={`size-4 ${c.up ? 'text-green-600' : 'text-red-600'}`} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' d={c.up ? 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' : 'M2.25 6L9 12.75l4.306-4.307a11.95 11.95 0 015.814 5.519l2.74 1.22m0 0l-5.94 2.28m5.94-2.28l-2.28-5.941'} />
                            </svg>
                            <span className={c.up ? 'text-green-600' : 'text-red-600'}>{c.change}</span>
                            <span className='text-gray-400'>since last month</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Table ───────────────────────────────────────── */
function DataTable() {
    const rows = [
        { name: 'Nandor the Relentless', dob: '04/06/1262', role: 'Vampire Warrior', salary: '$0' },
        { name: 'Laszlo Cravensworth', dob: '19/10/1678', role: 'Vampire Gentleman', salary: '$0' },
        { name: 'Nadja', dob: '15/03/1593', role: 'Vampire Seductress', salary: '$0' },
        { name: 'Colin Robinson', dob: '01/09/1971', role: 'Energy Vampire', salary: '$53,000' },
        { name: 'Guillermo de la Cruz', dob: '18/11/1991', role: 'Familiar / Hunter', salary: '$0' },
    ];
    return (
        <Section title='Table'>
            <div className='overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm max-w-3xl'>
                <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
                    <thead className='bg-gray-50 ltr:text-left rtl:text-right'>
                        <tr>
                            {['Name', 'Date of Birth', 'Role', 'Salary'].map((h) => (
                                <th key={h} className='px-4 py-3 font-medium text-gray-700 whitespace-nowrap'>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {rows.map((r) => (
                            <tr key={r.name} className='hover:bg-gray-50 transition-colors'>
                                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{r.name}</td>
                                <td className='px-4 py-3 text-gray-600 whitespace-nowrap'>{r.dob}</td>
                                <td className='px-4 py-3 text-gray-600 whitespace-nowrap'>{r.role}</td>
                                <td className='px-4 py-3 text-gray-600 whitespace-nowrap'>{r.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

/* ── Pagination ──────────────────────────────────── */
function Pagination() {
    const [page, setPage] = React.useState(2);
    const total = 6;
    return (
        <Section title='Pagination'>
            <div className='flex flex-wrap gap-6 items-center'>
                {/* numbered */}
                <nav>
                    <ul className='flex gap-1 text-sm text-gray-900'>
                        <li>
                            <button onClick={() => setPage(Math.max(1, page - 1))}
                                className='grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50' aria-label='Previous'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='size-4' viewBox='0 0 20 20' fill='currentColor'>
                                    <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                                </svg>
                            </button>
                        </li>
                        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
                            <li key={n}>
                                <button onClick={() => setPage(n)}
                                    className={`block size-8 rounded border text-center text-sm leading-8 font-medium transition-colors
                                        ${page === n ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    {n}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button onClick={() => setPage(Math.min(total, page + 1))}
                                className='grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50' aria-label='Next'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='size-4' viewBox='0 0 20 20' fill='currentColor'>
                                    <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* prev / next text style */}
                <nav className='flex items-center gap-3 text-sm'>
                    <a href='#' className='inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='size-4' viewBox='0 0 20 20' fill='currentColor'>
                            <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                        Previous
                    </a>
                    <span className='text-gray-400'>Page {page} of {total}</span>
                    <a href='#' className='inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors'>
                        Next
                        <svg xmlns='http://www.w3.org/2000/svg' className='size-4' viewBox='0 0 20 20' fill='currentColor'>
                            <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
                        </svg>
                    </a>
                </nav>
            </div>
        </Section>
    );
}

/* ── Progress Bars ───────────────────────────────── */
function ProgressBars() {
    const bars = [
        { label: 'Completed tasks', value: 75, color: 'bg-blue-600' },
        { label: 'Storage used', value: 45, color: 'bg-green-500' },
        { label: 'CPU load', value: 90, color: 'bg-red-500' },
        { label: 'Memory', value: 55, color: 'bg-yellow-400' },
    ];
    return (
        <Section title='Progress Bars'>
            <div className='flex flex-col gap-4 max-w-sm'>
                {bars.map((b) => (
                    <div key={b.label} role='progressbar' aria-valuenow={b.value} aria-valuemin={0} aria-valuemax={100}>
                        <div className='flex justify-between text-sm mb-1'>
                            <span className='font-medium text-gray-700'>{b.label}</span>
                            <span className='text-gray-500'>{b.value}%</span>
                        </div>
                        <div className='h-2 w-full rounded-full bg-gray-200'>
                            <div className={`h-full rounded-full ${b.color} transition-all`} style={{ width: `${b.value}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Breadcrumbs ─────────────────────────────────── */
function Breadcrumbs() {
    return (
        <Section title='Breadcrumbs'>
            <div className='flex flex-col gap-4'>
                {/* arrow style */}
                <nav aria-label='Breadcrumb'>
                    <ol className='flex items-center gap-1 text-sm text-gray-700'>
                        {['Home', 'Components', 'Application', 'Breadcrumbs'].map((item, i, arr) => (
                            <React.Fragment key={item}>
                                <li>
                                    {i === arr.length - 1
                                        ? <span className='font-medium text-gray-900'>{item}</span>
                                        : <a href='#' className='transition-colors hover:text-gray-900'>{item}</a>}
                                </li>
                                {i < arr.length - 1 && (
                                    <li>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='size-4' viewBox='0 0 20 20' fill='currentColor'>
                                            <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
                                        </svg>
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>
                {/* slash style */}
                <nav aria-label='Breadcrumb'>
                    <ol className='flex items-center gap-2 text-sm'>
                        {['Dashboard', 'Users', 'Profile'].map((item, i, arr) => (
                            <React.Fragment key={item}>
                                <li>
                                    {i === arr.length - 1
                                        ? <span className='text-gray-500 cursor-default'>{item}</span>
                                        : <a href='#' className='text-blue-600 hover:underline'>{item}</a>}
                                </li>
                                {i < arr.length - 1 && <li className='text-gray-400'>/</li>}
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>
            </div>
        </Section>
    );
}

/* ── Steps ───────────────────────────────────────── */
function Steps() {
    const steps = [
        { label: 'Personal info', desc: 'Name and email', done: true },
        { label: 'Account', desc: 'Username and password', done: true },
        { label: 'Payment', desc: 'Card details', active: true },
        { label: 'Confirm', desc: 'Review your order', done: false },
    ];
    return (
        <Section title='Steps'>
            <ol className='flex items-center gap-0 max-w-xl'>
                {steps.map((s, i) => (
                    <React.Fragment key={s.label}>
                        <li className='flex flex-col items-center gap-1 text-center flex-1'>
                            <div className={`size-8 rounded-full flex items-center justify-center text-sm font-bold
                                ${s.done ? 'bg-blue-600 text-white' : s.active ? 'border-2 border-blue-600 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                                {s.done
                                    ? <svg xmlns='http://www.w3.org/2000/svg' className='size-4' fill='none' viewBox='0 0 24 24' strokeWidth='2.5' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>
                                    : i + 1}
                            </div>
                            <p className={`text-xs font-medium ${s.active ? 'text-blue-600' : s.done ? 'text-gray-700' : 'text-gray-400'}`}>{s.label}</p>
                        </li>
                        {i < steps.length - 1 && (
                            <li className='flex-1 h-px bg-gray-200 -mt-4' />
                        )}
                    </React.Fragment>
                ))}
            </ol>
        </Section>
    );
}

/* ── Main ────────────────────────────────────────── */
export default function TwRoot() {
    return (
        <div className='min-h-screen bg-gray-50 text-gray-900 font-sans'>
            <header className='sticky top-0 z-10 bg-white border-b shadow-sm'>
                <div className='mx-auto max-w-5xl px-6 py-3 flex items-center justify-between'>
                    <div>
                        <span className='font-bold'>HyperUI</span>
                        <span className='ml-2 text-sm text-gray-500'>Application Components</span>
                    </div>
                    <a href='/' className='text-sm text-gray-500 hover:text-gray-900 transition-colors'>← Back</a>
                </div>
            </header>
            <main className='mx-auto max-w-5xl px-6 py-10 space-y-12'>
                <Badges />
                <ButtonGroups />
                <Inputs />
                <FormControls />
                <Tabs />
                <Stats />
                <DataTable />
                <Pagination />
                <ProgressBars />
                <Breadcrumbs />
                <Steps />
            </main>
        </div>
    );
}
