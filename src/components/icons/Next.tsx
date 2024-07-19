import React from 'react'

interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Next = ({ className, ...props }: IconProps) => {
	return (
		<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
			<path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
		</svg>
	)
}
