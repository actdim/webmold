const pages = [
    {
        href: '/tw/',
        label: 'Tailwind / HyperUI',
        desc: 'HyperUI marketing components — Hero, Stats, Features, Pricing',
        badge: 'TW',
        color: 'bg-sky-500',
    },
    {
        href: '/shadcn/',
        label: 'shadcn/ui',
        desc: 'Full component showcase — Buttons, Dialogs, Calendar, Table, Toast...',
        badge: 'SH',
        color: 'bg-zinc-800',
    },
    {
        href: '/mui/',
        label: 'MUI',
        desc: 'Material UI components',
        badge: 'MU',
        color: 'bg-blue-600',
    },
    {
        href: '/prime/',
        label: 'PrimeReact',
        desc: 'PrimeReact UI components',
        badge: 'PR',
        color: 'bg-green-600',
    },
    {
        href: '/daisy/',
        label: 'DaisyUI',
        desc: 'DaisyUI v5 — Buttons, Alerts, Card, Input',
        badge: 'DY',
        color: 'bg-pink-500',
    },
];

function List() {
    return (
        <div className='min-h-screen bg-background text-foreground p-8'>
            <div className='max-w-2xl mx-auto'>
                <h1 className='text-3xl font-bold mb-1'>WebMold</h1>
                <p className='text-muted-foreground mb-8 text-sm'>UI library sandbox · Tailwind v4 · React 19</p>

                <ul className='space-y-3'>
                    {pages.map((p) => (
                        <li key={p.href}>
                            <a
                                href={p.href}
                                className='flex items-center gap-4 rounded-xl border bg-card p-4 hover:bg-accent transition-colors group'
                            >
                                <div className={`${p.color} size-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                                    {p.badge}
                                </div>
                                <div className='min-w-0'>
                                    <p className='font-medium group-hover:text-primary transition-colors'>{p.label}</p>
                                    <p className='text-sm text-muted-foreground truncate'>{p.desc}</p>
                                </div>
                                <svg className='ml-auto size-4 text-muted-foreground shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
