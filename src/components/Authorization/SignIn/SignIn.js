import CN from 'classnames';

import React, { Component } from 'react';

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;

    return (
      <form className={CN('form', 'vertical')} onSubmit={this.handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            className="field"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email" />
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
          <button type="submit" className={CN('button', 'success')}>Submit</button>
        </div>
      </form>
    );
  }
}

export default SignIn;
