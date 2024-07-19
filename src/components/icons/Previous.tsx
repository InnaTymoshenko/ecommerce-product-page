import React from 'react'

interface IconProps extends React.HTMLAttributes<SVGElement> {}

export const Previous = ({ className, ...props }: IconProps) => {
	return (
		<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
			<path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
		</svg>
	)
}
