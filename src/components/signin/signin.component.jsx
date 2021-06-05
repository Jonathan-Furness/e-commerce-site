import React from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form className='form' onSubmit={this.handleSubmit}>
          <FormInput
            label='Email' 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
            />
          <FormInput
            label='Password' 
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            required />

          <CustomButton type='submit' value="Submit Form">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;