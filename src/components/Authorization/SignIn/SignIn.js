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
      if (item.rule(formElement.value)) {
        formElement.valid = true;
      }
    });
    form.fields[event.target.name] = formElement;
    form.valid = this.globalFormValidation(form);
    console.log(form);
    this.setState({
      signInForm: form
    });
  }

  validate(field, validations) {
    let valid = field.valid;

    validations.forEach(item => {
      if (!item.rule(field.value)) {
        valid = false;
        return;
      }
    });
    return valid;
  }

  globalFormValidation(form) {
    let isValid = true;

    Object.keys(form.fields).forEach(item => {
      const field = form.fields[item];
      // console.log(field.valid);
      if (field.valid) {
        isValid = field.valid && isValid;
      }
    });
    // console.log(isValid);
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
