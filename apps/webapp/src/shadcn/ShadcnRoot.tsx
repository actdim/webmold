import React from 'react';
import './shadcn.css';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { AlertCircle, Bell, Bold, CalendarIcon, ChevronDown, Italic, Terminal, Underline, User } from 'lucide-react';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className='scroll-mt-16 space-y-3'>
            <h2 className='text-lg font-semibold text-foreground border-b pb-1'>{title}</h2>
            <div className='flex flex-wrap gap-3 items-start'>{children}</div>
        </section>
    );
}

export default function ShadcnRoot() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [progress, setProgress] = React.useState(60);
    const [sliderVal, setSliderVal] = React.useState([40]);
    const [switchOn, setSwitchOn] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [pickerDate, setPickerDate] = React.useState<Date | undefined>();
    const [pickerOpen, setPickerOpen] = React.useState(false);
    const [dark, setDark] = React.useState(false);
    const [base, setBase] = React.useState('zinc');
    const [accent, setAccent] = React.useState('default');

    const toggleDark = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle('dark', next);
    };

    const selectBase = (b: string) => {
        setBase(b);
        if (b === 'zinc') delete document.documentElement.dataset.base;
        else document.documentElement.dataset.base = b;
    };

    const selectAccent = (a: string) => {
        setAccent(a);
        if (a === 'default') delete document.documentElement.dataset.accent;
        else document.documentElement.dataset.accent = a;
    };

    const bases = [
        { id: 'zinc',    label: 'Zinc'    },
        { id: 'stone',   label: 'Stone'   },
        { id: 'neutral', label: 'Neutral' },
        { id: 'gray',    label: 'Gray'    },
    ];

    const accents = [
        { id: 'default', label: 'Default', color: 'oklch(0.21 0.006 285.885)'  },
        { id: 'blue',    label: 'Blue',    color: 'oklch(0.488 0.243 264.376)' },
        { id: 'green',   label: 'Green',   color: 'oklch(0.648 0.2 131.684)'   },
        { id: 'orange',  label: 'Orange',  color: 'oklch(0.646 0.222 41.116)'  },
        { id: 'red',     label: 'Red',     color: 'oklch(0.577 0.245 27.325)'  },
        { id: 'rose',    label: 'Rose',    color: 'oklch(0.586 0.253 17.585)'  },
        { id: 'violet',  label: 'Violet',  color: 'oklch(0.541 0.281 293.009)' },
        { id: 'yellow',  label: 'Yellow',  color: 'oklch(0.852 0.199 91.936)'  },
    ];

    return (
        <TooltipProvider>
            <Toaster />
            <div className='min-h-screen bg-background text-foreground'>
                {/* sticky nav */}
                <header className='sticky top-0 z-50 bg-background/95 backdrop-blur border-b'>
                    <div className='max-w-5xl mx-auto px-4 py-2 flex gap-4 text-sm flex-wrap items-center'>
                        <span className='font-bold mr-2'>shadcn/ui</span>
                        {['buttons','badges','alerts','form','selection','card','accordion','tabs','overlays','nav','table','feedback','calendar'].map(s => (
                            <a key={s} href={`#${s}`} className='text-muted-foreground hover:text-foreground capitalize'>{s}</a>
                        ))}
                        <a href='/' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>← Back</a>
                        <div className='ml-auto flex items-center gap-3'>
                            {/* Base theme */}
                            <div className='flex items-center gap-1'>
                                {bases.map(b => (
                                    <button
                                        key={b.id}
                                        onClick={() => selectBase(b.id)}
                                        className={`px-2 py-0.5 rounded text-xs transition-colors ${base === b.id ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {b.label}
                                    </button>
                                ))}
                            </div>
                            <div className='w-px h-4 bg-border' />
                            {/* Accent color */}
                            <div className='flex items-center gap-1.5'>
                                {accents.map(a => (
                                    <button
                                        key={a.id}
                                        title={a.label}
                                        onClick={() => selectAccent(a.id)}
                                        className='size-4 rounded-full transition-transform hover:scale-110'
                                        style={{
                                            background: a.color,
                                            outline: accent === a.id ? `2px solid ${a.color}` : 'none',
                                            outlineOffset: '2px',
                                        }}
                                    />
                                ))}
                            </div>
                            <div className='w-px h-4 bg-border' />
                            <Button size='sm' variant='outline' onClick={toggleDark}>
                                {dark ? 'Light' : 'Dark'}
                            </Button>
                            <div className='w-px h-4 bg-border' />
                            
                        </div>
                    </div>
                </header>

                <main className='max-w-5xl mx-auto px-4 py-8 space-y-10'>

                    {/* Buttons */}
                    <Section id='buttons' title='Buttons'>
                        <Button>Default</Button>
                        <Button variant='destructive'>Destructive</Button>
                        <Button variant='outline'>Outline</Button>
                        <Button variant='secondary'>Secondary</Button>
                        <Button variant='ghost'>Ghost</Button>
                        <Button variant='link'>Link</Button>
                        <Separator orientation='vertical' className='h-9' />
                        <Button size='sm'>Small</Button>
                        <Button size='default'>Default</Button>
                        <Button size='lg'>Large</Button>
                        <Button size='icon'><Bell className='size-4' /></Button>
                        <Separator orientation='vertical' className='h-9' />
                        <Button disabled>Disabled</Button>
                        <Button variant='outline' disabled>Disabled outline</Button>
                    </Section>

                    {/* Badges */}
                    <Section id='badges' title='Badges'>
                        <Badge>Default</Badge>
                        <Badge variant='secondary'>Secondary</Badge>
                        <Badge variant='destructive'>Destructive</Badge>
                        <Badge variant='outline'>Outline</Badge>
                    </Section>

                    {/* Alerts */}
                    <Section id='alerts' title='Alerts'>
                        <Alert className='w-full max-w-md'>
                            <Terminal className='size-4' />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
                        </Alert>
                        <Alert variant='destructive' className='w-full max-w-md'>
                            <AlertCircle className='size-4' />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
                        </Alert>
                    </Section>

                    {/* Form controls */}
                    <Section id='form' title='Form Controls'>
                        <div className='flex flex-col gap-1.5 w-48'>
                            <Label htmlFor='email'>Email</Label>
                            <Input id='email' type='email' placeholder='m@example.com' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-48'>
                            <Label htmlFor='msg'>Message</Label>
                            <Textarea id='msg' placeholder='Type a message...' className='resize-none' rows={3} />
                        </div>
                        <div className='flex flex-col gap-1.5 w-48'>
                            <Label>Framework</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select...' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='next'>Next.js</SelectItem>
                                    <SelectItem value='remix'>Remix</SelectItem>
                                    <SelectItem value='vite'>Vite</SelectItem>
                                    <SelectItem value='astro'>Astro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-1.5 w-48'>
                            <Label>Scroll Area</Label>
                            <ScrollArea className='h-24 rounded-md border p-2'>
                                {Array.from({ length: 10 }, (_, i) => (
                                    <div key={i} className='text-sm py-0.5 text-muted-foreground'>Item {i + 1}</div>
                                ))}
                            </ScrollArea>
                        </div>
                    </Section>

                    {/* Selection controls */}
                    <Section id='selection' title='Selection Controls'>
                        <div className='flex items-center gap-2'>
                            <Checkbox id='terms' checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
                            <Label htmlFor='terms'>Accept terms</Label>
                        </div>
                        <RadioGroup defaultValue='b' className='flex gap-4'>
                            <div className='flex items-center gap-2'>
                                <RadioGroupItem value='a' id='r-a' />
                                <Label htmlFor='r-a'>Option A</Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <RadioGroupItem value='b' id='r-b' />
                                <Label htmlFor='r-b'>Option B</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Switch id='sw' checked={switchOn} onCheckedChange={setSwitchOn} />
                            <Label htmlFor='sw'>{switchOn ? 'On' : 'Off'}</Label>
                        </div>
                        <div className='flex flex-col gap-2 w-48'>
                            <Label>Slider: {sliderVal[0]}</Label>
                            <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
                        </div>
                        <div className='flex gap-1'>
                            <Toggle aria-label='Bold'><Bold className='size-4' /></Toggle>
                            <Toggle aria-label='Italic'><Italic className='size-4' /></Toggle>
                            <Toggle aria-label='Underline'><Underline className='size-4' /></Toggle>
                        </div>
                    </Section>

                    {/* Card */}
                    <Section id='card' title='Card'>
                        <Card className='w-80'>
                            <CardHeader>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent className='space-y-2'>
                                <div className='flex flex-col gap-1'>
                                    <Label htmlFor='proj-name'>Name</Label>
                                    <Input id='proj-name' placeholder='My project' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label>Framework</Label>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder='Select framework' /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='next'>Next.js</SelectItem>
                                            <SelectItem value='vite'>Vite</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-between'>
                                <Button variant='outline'>Cancel</Button>
                                <Button>Deploy</Button>
                            </CardFooter>
                        </Card>
                        <Card className='w-72'>
                            <CardHeader className='pb-2'>
                                <CardDescription>Total Revenue</CardDescription>
                                <CardTitle className='text-3xl'>$45,231.89</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='text-xs text-muted-foreground'>+20.1% from last month</div>
                            </CardContent>
                        </Card>
                    </Section>

                    {/* Accordion */}
                    <Section id='accordion' title='Accordion'>
                        <Accordion type='single' collapsible className='w-full max-w-md'>
                            <AccordionItem value='a1'>
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='a2'>
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='a3'>
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Section>

                    {/* Tabs */}
                    <Section id='tabs' title='Tabs'>
                        <Tabs defaultValue='account' className='w-full max-w-md'>
                            <TabsList className='grid w-full grid-cols-2'>
                                <TabsTrigger value='account'>Account</TabsTrigger>
                                <TabsTrigger value='password'>Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value='account'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Account</CardTitle>
                                        <CardDescription>Make changes to your account here.</CardDescription>
                                    </CardHeader>
                                    <CardContent className='space-y-2'>
                                        <div className='flex flex-col gap-1'>
                                            <Label htmlFor='tab-name'>Name</Label>
                                            <Input id='tab-name' defaultValue='Pedro Duarte' />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value='password'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>Change your password here.</CardDescription>
                                    </CardHeader>
                                    <CardContent className='space-y-2'>
                                        <div className='flex flex-col gap-1'>
                                            <Label htmlFor='current'>Current password</Label>
                                            <Input id='current' type='password' />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </Section>

                    {/* Overlays */}
                    <Section id='overlays' title='Overlays (Dialog / Sheet / AlertDialog)'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant='outline'>Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                                </DialogHeader>
                                <div className='flex flex-col gap-1'>
                                    <Label htmlFor='d-name'>Name</Label>
                                    <Input id='d-name' defaultValue='Pedro Duarte' />
                                </div>
                                <DialogFooter>
                                    <Button type='submit'>Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant='outline'>Open Sheet</Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>Make changes to your profile here.</SheetDescription>
                                </SheetHeader>
                                <div className='p-4 flex flex-col gap-2'>
                                    <Label htmlFor='s-name'>Name</Label>
                                    <Input id='s-name' defaultValue='Pedro Duarte' />
                                </div>
                            </SheetContent>
                        </Sheet>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant='destructive'>Delete account</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your account.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant='outline'>Open Popover</Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-64'>
                                <div className='space-y-2'>
                                    <h4 className='font-medium text-sm'>Dimensions</h4>
                                    <p className='text-sm text-muted-foreground'>Set the dimensions for the layer.</p>
                                    <div className='flex flex-col gap-1'>
                                        <Label>Width</Label>
                                        <Input defaultValue='100%' />
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant='outline'>Hover for tooltip</Button>
                            </TooltipTrigger>
                            <TooltipContent>Add to library</TooltipContent>
                        </Tooltip>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant='link'>@nextjs</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className='w-64'>
                                <div className='flex gap-3'>
                                    <Avatar>
                                        <AvatarFallback>NX</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='text-sm font-medium'>@nextjs</p>
                                        <p className='text-sm text-muted-foreground'>The React Framework – created by Vercel.</p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline'>Dropdown <ChevronDown className='ml-1 size-4' /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-destructive'>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Section>

                    {/* Navigation */}
                    <Section id='nav' title='Navigation'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem><BreadcrumbLink href='#'>Home</BreadcrumbLink></BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem><BreadcrumbLink href='#'>Components</BreadcrumbLink></BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className='w-full'>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem><PaginationPrevious href='#' /></PaginationItem>
                                    <PaginationItem><PaginationLink href='#'>1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href='#' isActive>2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href='#'>3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationEllipsis /></PaginationItem>
                                    <PaginationItem><PaginationNext href='#' /></PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </Section>

                    {/* Table + Avatar */}
                    <Section id='table' title='Table & Avatar'>
                        <Table className='max-w-lg'>
                            <TableCaption>A list of recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='w-32'>Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className='text-right'>Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
                                    { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
                                    { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
                                ].map((inv) => (
                                    <TableRow key={inv.id}>
                                        <TableCell className='font-medium'>{inv.id}</TableCell>
                                        <TableCell>{inv.status}</TableCell>
                                        <TableCell>{inv.method}</TableCell>
                                        <TableCell className='text-right'>{inv.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <div className='flex gap-2 items-center'>
                            <Avatar>
                                <AvatarImage src='https://github.com/shadcn.png' />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback><User className='size-4' /></AvatarFallback>
                            </Avatar>
                        </div>
                    </Section>

                    {/* Feedback */}
                    <Section id='feedback' title='Feedback (Progress / Skeleton / Toast)'>
                        <div className='flex flex-col gap-2 w-64'>
                            <Label>Progress: {progress}%</Label>
                            <Progress value={progress} />
                            <div className='flex gap-2'>
                                <Button size='sm' variant='outline' onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
                                <Button size='sm' variant='outline' onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-64'>
                            <div className='flex items-center gap-3'>
                                <Skeleton className='size-10 rounded-full' />
                                <div className='space-y-1.5 flex-1'>
                                    <Skeleton className='h-3 w-3/4' />
                                    <Skeleton className='h-3 w-1/2' />
                                </div>
                            </div>
                            <Skeleton className='h-24 w-full rounded-md' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Button onClick={() => toast('Event created', { description: 'Sunday, December 03, 2023 at 9:00 AM' })}>
                                Show Toast
                            </Button>
                            <Button variant='destructive' onClick={() => toast.error('Something went wrong', { description: 'Try again later.' })}>
                                Error Toast
                            </Button>
                            <Button variant='outline' onClick={() => toast.success('Saved!', { description: 'Your changes have been saved.' })}>
                                Success Toast
                            </Button>
                        </div>
                    </Section>

                    {/* Calendar */}
                    <Section id='calendar' title='Calendar'>
                        <div className='rounded-md border'>
                            <Calendar
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                        <div className='text-sm text-muted-foreground pt-2'>
                            Selected: {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'none'}
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <Label>Date picker</Label>
                            <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className={`w-52 justify-start text-left font-normal ${!pickerDate && 'text-muted-foreground'}`}
                                    >
                                        <CalendarIcon className='mr-2 size-4' />
                                        {pickerDate
                                            ? pickerDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                                            : 'Pick a date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0' align='start'>
                                    <Calendar
                                        mode='single'
                                        selected={pickerDate}
                                        onSelect={(d) => { setPickerDate(d); setPickerOpen(false); }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </Section>

                    <Separator />
                    <p className='text-center text-sm text-muted-foreground pb-8'>shadcn/ui · new-york · Tailwind v4</p>
                </main>
            </div>
        </TooltipProvider>
    );
}
