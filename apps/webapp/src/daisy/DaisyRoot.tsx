import React from 'react';
import './daisy.css';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className='rounded-xl bg-base-100 border border-base-300 shadow-sm'>
            <div className='px-5 py-3 border-b border-base-300 bg-base-200 rounded-t-xl'>
                <h2 className='text-sm font-semibold text-base-content/60 uppercase tracking-wide'>
                    {title}
                </h2>
            </div>
            <div className='p-5 space-y-4'>{children}</div>
        </section>
    );
}

/* ── Buttons ─────────────────────────────────────── */
function Buttons() {
    return (
        <Section title='Buttons'>
            {/* variants */}
            <div className='flex flex-wrap gap-2'>
                <button className='btn'>Default</button>
                <button className='btn btn-primary'>Primary</button>
                <button className='btn btn-secondary'>Secondary</button>
                <button className='btn btn-accent'>Accent</button>
                <button className='btn btn-info'>Info</button>
                <button className='btn btn-success'>Success</button>
                <button className='btn btn-warning'>Warning</button>
                <button className='btn btn-error'>Error</button>
            </div>
            {/* styles */}
            <div className='flex flex-wrap gap-2'>
                <button className='btn btn-soft btn-primary'>Soft</button>
                <button className='btn btn-outline btn-primary'>Outline</button>
                <button className='btn btn-dash btn-primary'>Dash</button>
                <button className='btn btn-ghost'>Ghost</button>
                <button className='btn btn-link'>Link</button>
                <button className='btn btn-primary btn-active'>Active</button>
                <button className='btn btn-primary' disabled>
                    Disabled
                </button>
            </div>
            {/* sizes */}
            <div className='flex flex-wrap items-center gap-2'>
                <button className='btn btn-primary btn-xs'>XSmall</button>
                <button className='btn btn-primary btn-sm'>Small</button>
                <button className='btn btn-primary'>Default</button>
                <button className='btn btn-primary btn-lg'>Large</button>
                <button className='btn btn-primary btn-xl'>XLarge</button>
            </div>
            {/* shapes */}
            <div className='flex flex-wrap items-center gap-2'>
                <button className='btn btn-square btn-outline'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
                <button className='btn btn-circle btn-primary'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 4v16m8-8H4'
                        />
                    </svg>
                </button>
                <button className='btn btn-primary btn-wide'>Wide Button</button>
                <button className='btn btn-secondary loading'>Loading</button>
            </div>
            {/* join group */}
            <div className='flex flex-wrap gap-4'>
                <div className='join'>
                    <button className='join-item btn'>Left</button>
                    <button className='join-item btn btn-active'>Center</button>
                    <button className='join-item btn'>Right</button>
                </div>
                <div className='join join-vertical'>
                    <button className='join-item btn btn-sm'>Top</button>
                    <button className='join-item btn btn-sm'>Middle</button>
                    <button className='join-item btn btn-sm'>Bottom</button>
                </div>
            </div>
        </Section>
    );
}

/* ── Badges ─────────────────────────────────────── */
function Badges() {
    return (
        <Section title='Badges'>
            <div className='flex flex-wrap gap-2'>
                <span className='badge'>Default</span>
                <span className='badge badge-primary'>Primary</span>
                <span className='badge badge-secondary'>Secondary</span>
                <span className='badge badge-accent'>Accent</span>
                <span className='badge badge-info'>Info</span>
                <span className='badge badge-success'>Success</span>
                <span className='badge badge-warning'>Warning</span>
                <span className='badge badge-error'>Error</span>
            </div>
            <div className='flex flex-wrap gap-2'>
                <span className='badge badge-soft badge-primary'>Soft</span>
                <span className='badge badge-outline badge-primary'>Outline</span>
                <span className='badge badge-dash badge-primary'>Dash</span>
                <span className='badge badge-ghost'>Ghost</span>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
                <span className='badge badge-primary badge-xs'>XSmall</span>
                <span className='badge badge-primary badge-sm'>Small</span>
                <span className='badge badge-primary'>Default</span>
                <span className='badge badge-primary badge-lg'>Large</span>
                <span className='badge badge-primary badge-xl'>XLarge</span>
            </div>
            {/* badge in button / text */}
            <div className='flex flex-wrap gap-3 items-center'>
                <button className='btn btn-primary'>
                    Inbox <span className='badge badge-secondary badge-sm'>12</span>
                </button>
                <h3 className='text-base font-semibold'>
                    Updates <span className='badge badge-error badge-xs ms-1'>NEW</span>
                </h3>
            </div>
        </Section>
    );
}

/* ── Alerts ─────────────────────────────────────── */
function Alerts() {
    return (
        <Section title='Alerts'>
            <div role='alert' className='alert alert-info'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='size-5 shrink-0 stroke-current'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
                <span>New software update available.</span>
            </div>
            <div role='alert' className='alert alert-success'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='size-5 shrink-0 stroke-current'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
                <span>Your purchase has been confirmed!</span>
            </div>
            <div role='alert' className='alert alert-warning'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='size-5 shrink-0 stroke-current'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                </svg>
                <span>Warning: Invalid email address!</span>
            </div>
            <div role='alert' className='alert alert-error'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='size-5 shrink-0 stroke-current'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
                <span>Error! Task failed successfully.</span>
            </div>
            <div className='flex flex-wrap gap-2'>
                <div role='alert' className='alert alert-soft alert-info w-auto'>
                    Soft info
                </div>
                <div role='alert' className='alert alert-outline alert-success w-auto'>
                    Outline success
                </div>
                <div role='alert' className='alert alert-dash alert-warning w-auto'>
                    Dash warning
                </div>
            </div>
        </Section>
    );
}

/* ── Stats ──────────────────────────────────────── */
function Stats() {
    return (
        <Section title='Stats'>
            <div className='stats shadow w-full'>
                <div className='stat'>
                    <div className='stat-figure text-primary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block size-8 stroke-current'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                            />
                        </svg>
                    </div>
                    <div className='stat-title'>Total Likes</div>
                    <div className='stat-value text-primary'>25.6K</div>
                    <div className='stat-desc'>21% more than last month</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='inline-block size-8 stroke-current'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M13 10V3L4 14h7v7l9-11h-7z'
                            />
                        </svg>
                    </div>
                    <div className='stat-title'>Page Views</div>
                    <div className='stat-value text-secondary'>2.6M</div>
                    <div className='stat-desc'>21% more than last month</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <div className='avatar avatar-online'>
                            <div
                                className='w-16 rounded-full bg-base-300 flex items-center
                                    justify-center text-2xl'
                            >
                                👤
                            </div>
                        </div>
                    </div>
                    <div className='stat-value'>86%</div>
                    <div className='stat-title'>Tasks done</div>
                    <div className='stat-desc text-secondary'>31 tasks remaining</div>
                </div>
            </div>
        </Section>
    );
}

/* ── Cards ──────────────────────────────────────── */
function Cards() {
    return (
        <Section title='Cards'>
            <div className='flex flex-wrap gap-4'>
                <div className='card card-border w-72'>
                    <div className='card-body'>
                        <h2 className='card-title'>Card with border</h2>
                        <p className='text-sm text-base-content/70'>
                            A simple card with a border style.
                        </p>
                        <div className='card-actions justify-end mt-2'>
                            <button className='btn btn-primary btn-sm'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card bg-primary text-primary-content w-72'>
                    <div className='card-body'>
                        <h2 className='card-title'>Primary Card</h2>
                        <p className='text-sm opacity-80'>
                            Colored card using primary theme color.
                        </p>
                        <div className='card-actions justify-end mt-2'>
                            <button className='btn btn-ghost btn-sm'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='card card-side card-border w-80'>
                    <figure className='p-4'>
                        <div
                            className='size-16 rounded-lg bg-base-300 flex items-center
                                justify-center text-3xl'
                        >
                            🖼️
                        </div>
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title text-sm'>Side card</h2>
                        <p className='text-xs text-base-content/70'>Horizontal layout.</p>
                        <div className='card-actions'>
                            <button className='btn btn-primary btn-xs'>Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Form ───────────────────────────────────────── */
function FormControls() {
    return (
        <Section title='Form Controls'>
            <div className='flex flex-wrap gap-6'>
                {/* inputs */}
                <div className='flex flex-col gap-3'>
                    <input type='text' placeholder='Default input' className='input' />
                    <input type='text' placeholder='Primary' className='input input-primary' />
                    <input type='text' placeholder='Error state' className='input input-error' />
                    <input
                        type='text'
                        placeholder='Success state'
                        className='input input-success'
                    />
                </div>
                {/* fieldset */}
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Account</legend>
                    <label className='fieldset-label'>Username</label>
                    <input type='text' className='input' placeholder='username' />
                    <label className='fieldset-label'>Password</label>
                    <input type='password' className='input' placeholder='password' />
                    <label className='fieldset-label'>Bio</label>
                    <textarea className='textarea' placeholder='Tell us about yourself' rows={3} />
                    <label className='fieldset-label'>Country</label>
                    <select className='select'>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                    </select>
                </fieldset>
                {/* checkboxes & toggles */}
                <div className='flex flex-col gap-3'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='checkbox'
                            defaultChecked
                            className='checkbox checkbox-primary'
                        />
                        <span className='text-sm'>Remember me</span>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='checkbox checkbox-secondary' />
                        <span className='text-sm'>Subscribe to newsletter</span>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='checkbox checkbox-success' />
                        <span className='text-sm'>Accept terms</span>
                    </label>
                    <div className='divider my-0'></div>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <span className='text-sm'>Dark mode</span>
                        <input type='checkbox' className='toggle toggle-primary' />
                    </label>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <span className='text-sm'>Notifications</span>
                        <input type='checkbox' defaultChecked className='toggle toggle-secondary' />
                    </label>
                </div>
                {/* radio */}
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-medium mb-1'>Size</p>
                    {['Small', 'Medium', 'Large'].map((s, i) => (
                        <label key={s} className='flex items-center gap-2 cursor-pointer'>
                            <input
                                type='radio'
                                name='size'
                                defaultChecked={i === 1}
                                className='radio radio-primary'
                            />
                            <span className='text-sm'>{s}</span>
                        </label>
                    ))}
                </div>
                {/* range */}
                <div className='flex flex-col gap-3 w-40'>
                    <p className='text-sm font-medium'>Range</p>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        defaultValue='40'
                        className='range range-primary range-sm'
                    />
                    <input
                        type='range'
                        min='0'
                        max='100'
                        defaultValue='70'
                        className='range range-secondary'
                    />
                    <p className='text-sm font-medium'>Rating</p>
                    <div className='rating'>
                        <input
                            type='radio'
                            name='rating'
                            className='mask mask-star-2 bg-orange-400'
                        />
                        <input
                            type='radio'
                            name='rating'
                            className='mask mask-star-2 bg-orange-400'
                        />
                        <input
                            type='radio'
                            name='rating'
                            defaultChecked
                            className='mask mask-star-2 bg-orange-400'
                        />
                        <input
                            type='radio'
                            name='rating'
                            className='mask mask-star-2 bg-orange-400'
                        />
                        <input
                            type='radio'
                            name='rating'
                            className='mask mask-star-2 bg-orange-400'
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Tabs ───────────────────────────────────────── */
function TabsSection() {
    const [active, setActive] = React.useState(0);
    return (
        <Section title='Tabs'>
            <div className='flex flex-col gap-6'>
                {/* bordered */}
                <div>
                    <div role='tablist' className='tabs tabs-border'>
                        {['Profile', 'Settings', 'Stats'].map((t, i) => (
                            <button
                                key={t}
                                role='tab'
                                onClick={() => setActive(i)}
                                className={`tab ${active === i ? 'tab-active' : ''}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <div
                        className='p-4 border border-t-0 border-base-300 rounded-b-lg text-sm
                            text-base-content/70'
                    >
                        {
                            [
                                'Manage your public profile.',
                                'Configure account settings.',
                                'View your stats and analytics.',
                            ][active]
                        }
                    </div>
                </div>
                {/* lifted */}
                <div role='tablist' className='tabs tabs-lift'>
                    {['Home', 'Products', 'Orders'].map((t, i) => (
                        <button key={t} role='tab' className={`tab ${i === 1 ? 'tab-active' : ''}`}>
                            {t}
                        </button>
                    ))}
                </div>
                {/* boxed */}
                <div role='tablist' className='tabs tabs-box'>
                    {['Monthly', 'Yearly'].map((t, i) => (
                        <button key={t} role='tab' className={`tab ${i === 0 ? 'tab-active' : ''}`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ── Accordion ──────────────────────────────────── */
function Accordion() {
    return (
        <Section title='Accordion'>
            <div className='join join-vertical w-full max-w-lg'>
                {[
                    {
                        q: 'What is DaisyUI?',
                        a: 'DaisyUI is the most popular component library for Tailwind CSS.',
                    },
                    {
                        q: 'Is it free?',
                        a: 'Yes! DaisyUI is free and open source. No premium plans.',
                    },
                    {
                        q: 'Does it work with React?',
                        a: 'Yes, DaisyUI works with any framework including React, Vue, Svelte, etc.',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className='collapse collapse-arrow join-item border border-base-300'
                    >
                        <input type='radio' name='faq' defaultChecked={i === 0} />
                        <div className='collapse-title font-semibold'>{item.q}</div>
                        <div className='collapse-content text-sm text-base-content/70'>
                            {item.a}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Table ──────────────────────────────────────── */
function TableSection() {
    const rows = [
        { name: 'Cy Ganderton', job: 'Quality Control', fav: 'Blue' },
        { name: 'Hart Hagerty', job: 'Desktop Support', fav: 'Purple' },
        { name: 'Brice Swyre', job: 'Tax Accountant', fav: 'Red' },
        { name: 'Marjy Ferencz', job: 'Office Assistant', fav: 'Crimson' },
    ];
    return (
        <Section title='Table'>
            <div className='overflow-x-auto'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={r.name}>
                                <th>{i + 1}</th>
                                <td>{r.name}</td>
                                <td>{r.job}</td>
                                <td>{r.fav}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

/* ── Progress & Loading ─────────────────────────── */
function Feedback() {
    return (
        <Section title='Progress & Feedback'>
            <div className='flex flex-wrap gap-8'>
                {/* progress */}
                <div className='flex flex-col gap-2 w-56'>
                    <progress
                        className='progress progress-primary w-full'
                        value='40'
                        max='100'
                    ></progress>
                    <progress
                        className='progress progress-secondary w-full'
                        value='70'
                        max='100'
                    ></progress>
                    <progress
                        className='progress progress-success w-full'
                        value='90'
                        max='100'
                    ></progress>
                    <progress
                        className='progress progress-warning w-full'
                        value='55'
                        max='100'
                    ></progress>
                    <progress
                        className='progress progress-error w-full'
                        value='25'
                        max='100'
                    ></progress>
                    <progress className='progress w-full'></progress>
                </div>
                {/* skeleton */}
                <div className='flex flex-col gap-4 w-56'>
                    <div className='flex items-center gap-4'>
                        <div className='skeleton size-12 rounded-full shrink-0'></div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <div className='skeleton h-3 w-full'></div>
                            <div className='skeleton h-3 w-2/3'></div>
                        </div>
                    </div>
                    <div className='skeleton h-24 w-full rounded-lg'></div>
                </div>
                {/* loading spinners */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <span className='loading loading-spinner loading-sm'></span>
                        <span className='loading loading-dots loading-sm'></span>
                        <span className='loading loading-ring loading-sm'></span>
                        <span className='loading loading-ball loading-sm'></span>
                        <span className='loading loading-bars loading-sm'></span>
                        <span className='loading loading-infinity loading-sm'></span>
                    </div>
                    <div className='flex gap-3 items-end'>
                        <span className='loading loading-spinner text-primary loading-xs'></span>
                        <span className='loading loading-spinner text-secondary loading-sm'></span>
                        <span className='loading loading-spinner text-accent'></span>
                        <span className='loading loading-spinner text-error loading-lg'></span>
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Avatar ─────────────────────────────────────── */
function Avatars() {
    return (
        <Section title='Avatars'>
            <div className='flex flex-wrap gap-6 items-end'>
                {/* sizes */}
                <div className='flex gap-3 items-end'>
                    {['size-6', 'size-8', 'size-12', 'size-16', 'size-20'].map((s) => (
                        <div key={s} className='avatar'>
                            <div
                                className={`${s} rounded-full bg-neutral text-neutral-content flex
                                items-center justify-center`}
                            >
                                <span className='text-xs'>👤</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* with status */}
                <div className='flex gap-3'>
                    <div className='avatar avatar-online'>
                        <div
                            className='size-12 rounded-full bg-primary text-primary-content flex
                                items-center justify-center font-bold'
                        >
                            JD
                        </div>
                    </div>
                    <div className='avatar avatar-offline'>
                        <div
                            className='size-12 rounded-full bg-secondary text-secondary-content flex
                                items-center justify-center font-bold'
                        >
                            AB
                        </div>
                    </div>
                </div>
                {/* placeholder */}
                <div className='avatar avatar-placeholder'>
                    <div className='size-12 rounded-full bg-neutral text-neutral-content'>
                        <span>MX</span>
                    </div>
                </div>
                {/* group */}
                <div className='avatar-group -space-x-4'>
                    {['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral'].map((c, i) => (
                        <div key={i} className='avatar avatar-placeholder'>
                            <div
                                className={`size-10 rounded-full ${c} text-white flex items-center
                                justify-center text-xs font-bold`}
                            >
                                {String.fromCharCode(65 + i)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ── Steps ──────────────────────────────────────── */
function StepsSection() {
    return (
        <Section title='Steps'>
            <ul className='steps steps-horizontal w-full'>
                <li className='step step-primary'>Register</li>
                <li className='step step-primary'>Choose plan</li>
                <li className='step'>Purchase</li>
                <li className='step'>Receive Product</li>
            </ul>
            <ul className='steps steps-horizontal w-full'>
                <li data-content='✓' className='step step-success'>
                    Step 1
                </li>
                <li data-content='✓' className='step step-success'>
                    Step 2
                </li>
                <li data-content='●' className='step step-warning'>
                    Step 3
                </li>
                <li data-content='✕' className='step step-error'>
                    Step 4
                </li>
            </ul>
        </Section>
    );
}

/* ── Dropdown & Tooltip ─────────────────────────── */
function DropdownTooltip() {
    return (
        <Section title='Dropdown & Tooltip'>
            <div className='flex flex-wrap gap-6 items-start'>
                {/* dropdown */}
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-primary m-1'>
                        Click me ▾
                    </div>
                    <ul
                        tabIndex={0}
                        className='dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2
                            shadow border border-base-300'
                    >
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <hr className='my-1 border-base-300' />
                        <li>
                            <a className='text-error'>Logout</a>
                        </li>
                    </ul>
                </div>
                {/* dropdown hover */}
                <div className='dropdown dropdown-hover'>
                    <div tabIndex={0} role='button' className='btn m-1'>
                        Hover me ▾
                    </div>
                    <ul
                        tabIndex={0}
                        className='dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2
                            shadow border border-base-300'
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                {/* tooltips */}
                <div className='flex gap-3 flex-wrap'>
                    <div className='tooltip' data-tip='Hello!'>
                        <button className='btn'>Hover for tip</button>
                    </div>
                    <div className='tooltip tooltip-primary' data-tip='Primary tooltip'>
                        <button className='btn btn-primary'>Primary</button>
                    </div>
                    <div className='tooltip tooltip-right' data-tip='Appears on the right'>
                        <button className='btn btn-secondary'>Right tip</button>
                    </div>
                    <div
                        className='tooltip tooltip-bottom tooltip-error'
                        data-tip='Something went wrong'
                    >
                        <button className='btn btn-error btn-outline'>Error tip</button>
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ── Modal ──────────────────────────────────────── */
function ModalSection() {
    const modalRef = React.useRef<HTMLDialogElement>(null);
    return (
        <Section title='Modal'>
            <div className='flex gap-3 flex-wrap'>
                <button className='btn btn-primary' onClick={() => modalRef.current?.showModal()}>
                    Open Modal
                </button>
                <dialog ref={modalRef} className='modal'>
                    <div className='modal-box'>
                        <h3 className='font-bold text-lg'>Hello!</h3>
                        <p className='py-4 text-sm text-base-content/70'>
                            This is a DaisyUI modal using the native HTML{' '}
                            <code className='bg-base-200 px-1 rounded'>&lt;dialog&gt;</code>{' '}
                            element. Press ESC or click the button to close.
                        </p>
                        <div className='modal-action'>
                            <form method='dialog'>
                                <button className='btn'>Close</button>
                            </form>
                        </div>
                    </div>
                    <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                    </form>
                </dialog>
                {/* alert dialog style */}
                <button
                    className='btn btn-error btn-outline'
                    onClick={() =>
                        (document.getElementById('confirm-modal') as HTMLDialogElement)?.showModal()
                    }
                >
                    Confirm Action
                </button>
                <dialog id='confirm-modal' className='modal'>
                    <div className='modal-box max-w-sm'>
                        <h3 className='font-bold text-lg'>Are you sure?</h3>
                        <p className='py-4 text-sm text-base-content/70'>
                            This action cannot be undone. This will permanently delete your account.
                        </p>
                        <div className='modal-action gap-2'>
                            <button
                                className='btn btn-error btn-sm'
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            'confirm-modal'
                                        ) as HTMLDialogElement
                                    )?.close()
                                }
                            >
                                Delete
                            </button>
                            <form method='dialog'>
                                <button className='btn btn-sm'>Cancel</button>
                            </form>
                        </div>
                    </div>
                    <form method='dialog' className='modal-backdrop'>
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </Section>
    );
}

/* ── Navbar ─────────────────────────────────────── */
function NavbarSection() {
    return (
        <Section title='Navbar'>
            <div className='navbar bg-base-200 rounded-lg'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='size-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10
                                mt-3 w-40 p-2 shadow'
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a className='btn btn-ghost text-xl font-bold'>daisyUI</a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end gap-2'>
                    <button className='btn btn-ghost btn-sm'>Log in</button>
                    <button className='btn btn-primary btn-sm'>Sign up</button>
                </div>
            </div>
        </Section>
    );
}

const THEMES = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
    'caramellatte',
    'abyss',
    'silk',
] as const;

type Theme = (typeof THEMES)[number];

/* ── Main ────────────────────────────────────────── */
export default function DaisyRoot() {
    const [theme, setTheme] = React.useState<Theme>('light');
    const [open, setOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const applyTheme = (t: Theme) => {
        setTheme(t);
        setOpen(false);
        // (document.activeElement as HTMLElement)?.blur();
    };

    return (
        <div className='min-h-screen bg-base-200' data-theme={theme}>
            <div className='navbar bg-base-100 border-b border-base-300 sticky top-0 z-50'>
                <div className='mx-auto max-w-5xl w-full px-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl font-bold text-primary'>daisyUI</span>
                        <span className='badge badge-primary badge-sm'>v5</span>
                    </div>
                    {/* Theme picker — React-controlled */}
                    <div ref={dropdownRef} className='relative'>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className='btn btn-ghost btn-sm gap-1'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='size-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                                />
                            </svg>
                            <span className='capitalize'>{theme}</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className={`size-3 opacity-60 transition-transform
                                    ${open ? 'rotate-180' : ''}`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M19 9l-7 7-7-7'
                                />
                            </svg>
                        </button>
                        {open && (
                            <ul
                                className='absolute right-0 top-full mt-1 bg-base-100 border
                                    border-base-300 rounded-box shadow-lg z-50 w-52 max-h-96
                                    overflow-y-auto p-1'
                            >
                                {THEMES.map((t) => (
                                    <li key={t}>
                                        <button
                                            onClick={() => applyTheme(t)}
                                            className={`w-full flex items-center gap-3 px-3 py-2
                                            rounded-lg text-sm text-left hover:bg-base-200
                                            transition-colors
                                            ${t === theme ? 'font-semibold bg-base-200' : ''}`}
                                        >
                                            <span data-theme={t} className='flex gap-0.5 shrink-0'>
                                                <span className='w-2 h-4 rounded-sm bg-primary' />
                                                <span className='w-2 h-4 rounded-sm bg-secondary' />
                                                <span className='w-2 h-4 rounded-sm bg-accent' />
                                                <span className='w-2 h-4 rounded-sm bg-neutral' />
                                            </span>
                                            <span className='capitalize'>{t}</span>
                                            {t === theme && (
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='size-4 ml-auto text-primary shrink-0'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                    strokeWidth={2.5}
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M5 13l4 4L19 7'
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <a href='/' className='btn btn-ghost btn-sm'>
                        ← Back
                    </a>
                </div>
            </div>
            <main className='mx-auto max-w-5xl px-4 py-8 space-y-6'>
                <NavbarSection />
                <Buttons />
                <Badges />
                <Alerts />
                <Stats />
                <Cards />
                <FormControls />
                <TabsSection />
                <Accordion />
                <TableSection />
                <Feedback />
                <Avatars />
                <StepsSection />
                <DropdownTooltip />
                <ModalSection />
            </main>
        </div>
    );
}
