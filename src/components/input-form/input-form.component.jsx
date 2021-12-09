import React from 'react';

import './input-form.styles.scss';


const InputForm = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='input-form' onChange={handleChange} {...otherProps} />
        {label ? (
            <label
            className={`${
                otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);
export default InputForm;