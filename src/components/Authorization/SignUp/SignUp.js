import CN from 'classnames';
import React, { Component } from 'react';

import Input from '../../UI/Input/Input';
import { required, isEmail, passwordMatch } from '../../../utils/validations';

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
    const form = this.state.signUpForm;
    const formElement = {
      ...form.fields[event.target.name]
    };
    const errors = [];

    formElement.value = event.target.value;
    formElement.touched = true;
    formElement.validations.forEach(item => {
      if (item.password) {
          formElement.valid = item.rule(
            formElement.value, form.fields.password.value
          );
      } else {
        formElement.valid = item.rule(formElement.value);
      }

      if (!formElement.valid) {
        errors.push(item.message);
      }
    });
    form.fields[event.target.name] = formElement;
    form.errors[event.target.name] = errors;
    form.valid = this.globalFormValidation(form);

    this.setState({
      signUpForm: form
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
