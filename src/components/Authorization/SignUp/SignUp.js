import CN from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from '../../../actions/authorization';

import Input from '../../UI/Input/Input';
import { handleInputChange, required, isEmail, passwordMatch } from '../../../utils/validations';

export class SignUp extends Component {
  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
    signUpErrors: PropTypes.shape({
      email: PropTypes.arrayOf(PropTypes.string),
      password: PropTypes.arrayOf(PropTypes.string),
      passwordConfirmation: PropTypes.arrayOf(PropTypes.string),
    }),
  };

  static defaultProps = {
    signUpErrors: {},
  };

  state = {
    signUpForm: {
      fields: {
        email: {
          value: '',
          validations: [
            required,
            isEmail,
          ],
          valid: false,
          touched: false,
        },
        password: {
          value: '',
          validations: [
            required,
          ],
          valid: false,
          touched: false,
        },
        passwordConfirmation: {
          value: '',
          validations: [
            required,
            passwordMatch,
          ],
          valid: false,
          touched: false,
        },
      },
      valid: false,
      errors: {
        email: [],
        password: [],
      },
    },
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
      password_confirmation: form.passwordConfirmation.value,
    };
    this.props.onSignUp(params);
  }

  render() {
    const { email, password, passwordConfirmation } = this.state.signUpForm.fields;
    const { valid } = this.state.signUpForm;
    const emailErrors = this.props.signUpErrors.email;
    const passwordErrors = this.props.signUpErrors.password;
    const passwordConfirmationErrors = this.props.signUpErrors.passwordConfirmation;

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
            errors={emailErrors}
          />
        </div>
        <div className="form-field">
          <Input
            type="password"
            className="field"
            name="password"
            value={password.value}
            onChange={this.handleChange}
            placeholder="Password"
            errors={passwordErrors}
          />
        </div>
        <div className="form-field">
          <Input
            type="password"
            className="field"
            name="passwordConfirmation"
            value={passwordConfirmation.value}
            onChange={this.handleChange}
            placeholder="Password Confirmation"
            errors={passwordConfirmationErrors}
          />
        </div>
        <div className="form-actions">
          <button
            type="submit"
            disabled={!valid}
            className={CN('button', 'success')}
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

/**
 * Mapping dispatched functions to component's properties
 * @param  {Object} dispatch Application dispatch function
 * @return {Object} Mapped functions
 */
const mapDispatchToProps = dispatch => ({
  onSignUp: user => dispatch(signUp(user)),
});

/**
 * Mapping application state to component's properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
const mapStateToProps = state => ({
  signUpErrors: state.authorization.signUpErrors,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
