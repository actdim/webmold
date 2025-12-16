import { cn } from '@/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

const inputBox = tv({
    slots: {
        root: cn('flex m-1 group'),
        input: cn('flex-1 min-w-0 outline-none rounded-l-xl'),
        button: cn('bg-blue-500 rounded-r-xl'),
    },
    variants: {
        size: {
            sm: {
                input: cn('text-sm py-1'),
                button: cn('text-xs py-1'),
            },
            md: {
                input: cn('text-base py-2'),
                button: cn('text-sm py-2'),
            },
            lg: {
                input: cn('text-lg py-3'),
                button: cn('text-base py-3'),
            },
        },
        invalid: {
            true: {
                input: cn('border-red-500 border'),
                button: cn('border-red-500 border'),
            },
        },
    },
    defaultVariants: {
        size: 'md',
    },
});

type InputBoxVariants = VariantProps<typeof inputBox>;

/** Omit 'size' from native input attrs to avoid name conflict */
export interface InputBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        InputBoxVariants {}

export function InputBox({ size, invalid, ...props }: InputBoxProps) {
    const { root, input, button } = inputBox({ size, invalid });

    return (
        <div className={root()}>
            <input className={input()} {...props} />
            <button className={button()}>Send</button>
        </div>
    );
}
