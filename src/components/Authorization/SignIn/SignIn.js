import CN from 'classnames';

import React, { Component } from 'react';
import { required, isEmail } from '../../../utils/validations';

class SignIn extends Component {

  state = {
    signInForm: {
      fields: {
        email: {
          value: '',
          validations: [
            required
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

    formElement.value = event.target.value;
    formElement.touched = true;
    formElement.validations.forEach(item => {
      formElement.valid = item.rule(formElement.value);
    });
    form.fields[event.target.name] = formElement;
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

    return (
      <form className={CN('form', 'vertical')} onSubmit={this.handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            className="field"
            name="email"
            value={email.value}
            onChange={this.handleChange}
            placeholder="Email" />
          <span>{emailErrors}</span>
        </div>
        <div className="form-field">
          <input
            type="password"
            className="field"
            name="password"
            value={password.value}
            onChange={this.handleChange}
            placeholder="Password" />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={!valid} className={CN('button', 'success')}>Sign In</button>
        </div>
      </form>
    );
  }
}

export default SignIn;
