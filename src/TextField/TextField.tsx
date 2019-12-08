import { FieldProps } from 'formik';
import React from 'react';

import './TextField.css';

export interface ITextFieldProps {
	fieldProps: FieldProps<any>;
	label?: string;
	placeHolder?: string;
	className?: string;
	type?: 'password' | 'email' | 'text';
}

export const LeaTextField = React.memo((props: ITextFieldProps) => {
	const {className, fieldProps, label, ...inputProps} = props;

	const error = props.fieldProps.meta.error;

	return (
		<div className={`lea-text-field ${props.className} ${error ? 'error' : ''}`}>
			<label className={`lea-text-field__label`} htmlFor={props.fieldProps.field.name}>{props.label}</label>
			<input className={`lea-text-field__input`} {...props.fieldProps.field} {...inputProps}></input>
			<p className='lea-text-field__error-message'>{error}</p>
		</div>
	);
});
