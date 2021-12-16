import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    /* if the prop 'google sign in' is true, 
    the style with the class 'google sign in' will be applied */ 
    <button  
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
    {...otherProps}>
        {children}
    </button>
);
export default CustomButton;