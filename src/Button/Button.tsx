import React from 'react';

import './Button.css';

export interface IButtonProps {
	className?: string;
	disabled?: boolean;
	submit?: boolean;
	children?: string;
	variant?: 'text';
	color?: 'primary'|'secondary';
	onClick?: () => void;
}

export const LeaButton = React.memo((props: IButtonProps) => {
	const {className, children, submit, variant, color, ...buttonProps} = props;

	return (
		<button type={submit ? 'submit' : 'button'} className={`Button variant-${variant} ${className} color-${color}`} {...buttonProps}>{children}</button>
	);
});
