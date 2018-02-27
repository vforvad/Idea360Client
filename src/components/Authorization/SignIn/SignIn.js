import CN from 'classnames';

import React, { Component } from 'react';
import { required, isEmail } from '../../../utils/validations';

class SignIn extends Component {

  state = {
    signInForm: {
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

        valid: false,
        touched: false
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
      ...form[event.target.name]
    };

    formElement.value = event.target.value;
    formElement.touched = true;
    form[event.target.name] = formElement;
    this.setState({
      signInForm: form
    });
  }

  handleValidation = (event) => {
    const form = this.state.signInForm;
    const formElement = {
      ...form[event.target.name]
    };

    formElement.validations.forEach(item => {
      if (!item.rule(formElement.value)) {
        form.errors[event.target.name].push(item.message);
      }
    });
    this.setState({
      signInForm: form
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;
    const emailErrors = this.state.signInForm.errors.email;
    console.log(emailErrors);
    return (
      <form className={CN('form', 'vertical')} onSubmit={this.handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            className="field"
            name="email"
            value={email}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            placeholder="Email" />
          <span>{emailErrors}</span>
        </div>
        <div className="form-field">
          <input
            type="password"
            className="field"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password" />
        </div>
        <div className="form-actions">
          <button type="submit" className={CN('button', 'success')}>Sign In</button>
        </div>
      </form>
    );
  }
}

export default SignIn;
