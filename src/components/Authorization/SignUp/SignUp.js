import CN from 'classnames';
import React, { Component } from 'react';

import { signUp } from 'actions/authorization';

import Input from '../../UI/Input/Input';
import { handleInputChange, required, isEmail, passwordMatch } from '../../../utils/validations';

class SignUp extends Component {

  state = {
    signUpForm: {
      fields: {
        email: {
          value: '',
          validations: [
            required,
            isEmail
          ],
          valid: false,
          touched: false
        },
        password: {
          value: '',
          validations: [
            required
          ],
          valid: false,
          touched: false
        },
        passwordConfirmation: {
          value: '',
          validations: [
            required,
            passwordMatch
          ],
          valid: false,
          touched: false
        }
      },
      valid: false,
      errors: {
        email: [],
        password: []
      }
    }
  };

  handleChange = (event) => {
    handleInputChange(this, event, 'signUpForm');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = this.state.signUpForm.fields;
    const params = {
      email: form.email.value,
      password: form.password.value,
      password_confirmation: form.passwordConfirmation.value
    };
    console.log(signUp);
    signUp(params);
  }

  render() {
    const { email, password, passwordConfirmation } = this.state.signUpForm.fields;
    const { valid } = this.state.signUpForm;
    const emailErrors = this.state.signUpForm.errors.email;
    const passwordErrors = this.state.signUpForm.errors.password;
    const passwordConfirmationErrors = this.state.signUpForm.errors.passwordConfirmation;

    return (
      <form className={CN('form', 'vertical')} onSubmit={this.handleSubmit}>
        <div className="form-field">
          <Input
            type="text"
            className="field"
            name="email"
            value={email.value}
            onChange={this.handleChange}
            placeholder="Email"
            errors={emailErrors} />
        </div>
        <div className="form-field">
          <Input
            type="password"
            className="field"
            name="password"
            value={password.value}
            onChange={this.handleChange}
            placeholder="Password"
            errors={passwordErrors} />
        </div>
        <div className="form-field">
          <Input
            type="password"
            className="field"
            name="passwordConfirmation"
            value={passwordConfirmation.value}
            onChange={this.handleChange}
            placeholder="Password Confirmation"
            errors={passwordConfirmationErrors} />
        </div>
        <div className="form-actions">
          <button
            type="submit"
            disabled={!valid}
            className={CN('button', 'success')}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignUp;
