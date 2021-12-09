import React from 'react';
import InputForm from '../../components/input-form/input-form.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    };
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <InputForm name='email'
                    type='email'
                    value={this.state.email}
                    onChange= {this.handleChange}
                    label='Email'
                    required />
                    
                    <InputForm name='password'
                    type='password'
                    value={this.state.password}
                    onChange= {this.handleChange}
                    label='Password'
                    required />
                    
                    <input type='submit' value='Submit Form'></input>
                </form>
            </div>
        );
    }
    
}
export default SignIn;


