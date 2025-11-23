import './tw.css';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const intent = cva('flex items-center gap-2', {
    variants: {
        type: {
            normal: 'font-normal',
            alarm: 'text-red-500 font-bold',
            // primary: "",
            // outline: "",
        },
    },
    defaultVariants: {
        type: 'normal',
    },
});

function TwRoot() {
    return (
        <>
            <button className={cn(intent({ type: 'alarm' }), '')}>Click Me?</button>
        </>
    );
}

export default TwRoot;
