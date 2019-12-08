import React from 'react';
import classNames from 'classnames';
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
	const btnClass = classNames(
		'lea-button',
		className,
		`variant-${variant}`,
		`color-${color}`
	);

	return (
		<button type={submit ? 'submit' : 'button'} className={btnClass} {...buttonProps}>{children}</button>
	);
});
