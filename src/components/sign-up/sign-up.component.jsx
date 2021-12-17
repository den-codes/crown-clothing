import React from 'react';

import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '', 
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert('Passwords dont match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, {displayName});

        this.setState({ 
            displayName: '',
            email: '', 
            password: '',
            confirmPassword: ''
        });
        } catch (error) {
            console.log(error);
        }
    };
    handleChange = event => {
        const{ name, value } = event.target;

        this.setState({ [name]: value })
    };
    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <InputForm
                type='text'
                name='displayName'
                value={displayName}
                onChange= {this.handleChange}
                label='Display Name'
                required
                />
                <InputForm
                type='email'
                name='email'
                value={email}
                onChange= {this.handleChange}
                label='Email'
                required
                />
                <InputForm
                type='password'
                name='password'
                value={password}
                onChange= {this.handleChange}
                label='Password'
                required
                />
                <InputForm
                type='password'
                name='password'
                value={confirmPassword}
                onChange= {this.handleChange}
                label='Confirm Password'
                required
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;