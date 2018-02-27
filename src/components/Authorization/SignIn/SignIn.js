import CN from 'classnames';

import React, { Component } from 'react';

import Input from '../../UI/Input/Input';
import { required, isEmail } from '../../../utils/validations';

class SignIn extends Component {

  state = {
    signInForm: {
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
    const form = this.state.signInForm;
    const formElement = {
      ...form.fields[event.target.name]
    };
    const errors = [];

    formElement.value = event.target.value;
    formElement.touched = true;
    formElement.validations.forEach(item => {
      formElement.valid = item.rule(formElement.value);
      if (!formElement.valid) {
        errors.push(item.message);
      }
    });
    form.fields[event.target.name] = formElement;
    form.errors[event.target.name] = errors;
    form.valid = this.globalFormValidation(form);

    this.setState({
      signInForm: form
    });
  }

  globalFormValidation(form) {
    let isValid = true;

    Object.keys(form.fields).forEach(item => {
      const field = form.fields[item];

      if (!field.valid) {
        isValid = false;
      }
    });
    return isValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password} = this.state.signInForm.fields;
    const { valid } = this.state.signInForm;
    const emailErrors = this.state.signInForm.errors.email;
    const passwordErrors = this.state.signInForm.errors.password;

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
        <div className="form-actions">
          <button type="submit" disabled={!valid} className={CN('button', 'success')}>Sign In</button>
        </div>
      </form>
    );
  }
}

export default SignIn;
