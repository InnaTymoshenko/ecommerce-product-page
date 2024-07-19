import { cn } from '../../utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const buttonStyles = cva(
	[
		'flex',
		'items-center',
		'relative',
		'select-none',
		'outline-none',
		'font-medium',
		'transition',
		'duration-100',
		'focus-visible:ring-offset-white',
		'focus-visible:ring-black',
		'focus-visible:ring-offset-2',
		'focus-visible:ring-2',
		'disabled:pointer-events-none disabled:opacity-50'
	],
	{
		variants: {
			variant: {
				primary: 'bg-gray-200 text-blue-500 hover:bg-button-primary-hover active:bg-button-primary-active',
				ghost: 'bg-button-ghost text-primary hover:bg-button-ghost-hover active:bg-button-ghost-active border',
				accent: 'bg-orange-200  text-blue-500 hover:bg-orange-200/70 active:bg-orange-200/40'
			},
			error: {
				true: 'bg-danger-light border-danger focus:bg-danger-light placeholder:text-transparent'
			},
			align: {
				start: 'justify-start',
				center: 'justify-center',
				end: 'justify-end',
				between: 'justify-between'
			},
			size: {
				small: 'px-3 gap-2 text-sm h-8',
				medium: 'px-4 py-4 gap-16 text-lg font-bold',
				large: 'sx:px-20 lg:px-12 2xl:px-20 py-2 gap-4 text-lg font-bold h-16',
				'icon-small': 'h-8 w-8',
				'icon-medium': 'h-10 w-10',
				'icon-large': 'h-12 w-12'
			},
			shape: {
				none: 'rounded-none',
				rectangle: 'rounded-lg',
				round: 'rounded-full'
			},
			fullWidth: {
				true: 'w-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			align: 'center',
			size: 'medium',
			shape: 'rectangle'
		}
	}
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
	children?: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant, error, align, size, shape, fullWidth, children, className, ...props },
	ref
) {
	return (
		<button
			ref={ref}
			className={cn(buttonStyles({ variant, error, align, size, shape, fullWidth, className }))}
			{...props}
		>
			{children}
		</button>
	)
})
Button.displayName = 'Button'

export { Button, buttonStyles }
