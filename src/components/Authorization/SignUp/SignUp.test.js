import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import actionTypes from '../../../actionTypes';
import baseStore from '../../../store';
import ConnectedSignUp, { SignUp } from './SignUp';

configure({ adapter: new Adapter() });

describe('<SignUp />', () => {
  const initialState = { authorization: { signUpErrors: {}, currentUser: null } };
  const mockStore = configureStore([]);
  const registerMock = jest.fn();
  const props = {
    onSignUp: registerMock,
    store: null,
  };

  let providerWrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    props.store = store;
    /* eslint-disable */
    providerWrapper = mount(
      <Provider store={store}>
        <SignUp {...props} />
      </Provider>
    );
    /* eslint-enable */
    spyOn(store, 'dispatch');
  });

  it('renders without crashing', () => {
    expect(providerWrapper).not.toBeNull();
  });

  it('contains store props', () => {
    expect(providerWrapper.props().store).toBeDefined();
  });

  describe('filling up the form', () => {
    it('fill the email field', () => {
      const emailValue = 'test@example.com';
      const emailField = providerWrapper.find('input[name="email"]').at(1);
      emailField.simulate('change', {
        target: {
          name: 'email', value: emailValue,
        },
      });
      expect(providerWrapper.find('input[name="email"]').at(1).props().value)
        .toEqual(emailValue);
    });

    it('fill the password field', () => {
      const passwordValue = 'password';
      const passwordField = providerWrapper.find('input[name="password"]').at(1);
      passwordField.simulate('change', {
        target: {
          name: 'password', value: passwordValue,
        },
      });
      expect(providerWrapper.find('input[name="password"]').at(1).props().value)
        .toEqual(passwordValue);
    });

    it('fill the password confirmation field', () => {
      const passwordValue = 'password';
      const passwordConfirmationField = providerWrapper.find('input[name="passwordConfirmation"]').at(1);
      passwordConfirmationField.simulate('change', {
        target: {
          name: 'passwordConfirmation', value: passwordValue,
        },
      });
      expect(providerWrapper.find('input[name="passwordConfirmation"]').at(1).props().value)
        .toEqual(passwordValue);
    });

    it('submit the form', () => {
      providerWrapper.find('input[name="email"]').at(1).simulate('change', {
        target: {
          name: 'email', value: 'text@example.com',
        },
      });
      providerWrapper.find('input[name="password"]').at(1).simulate('change', {
        target: {
          name: 'password', value: 'password',
        },
      });
      providerWrapper.find('input[name="passwordConfirmation"]').at(1).simulate('change', {
        target: {
          name: 'passwordConfirmation', value: 'password',
        },
      });

      providerWrapper.find('form').simulate('submit');
      expect(registerMock).toHaveBeenCalled();
    });
  });

  describe('errors', () => {
    let wrapper;
    props.store = baseStore;
    beforeEach(() => {
      wrapper = shallow(<ConnectedSignUp store={baseStore} onSignIn={registerMock} />);
    });

    it('save to props', () => {
      const signUpErrors = { email: ['Is not present'] };
      baseStore.dispatch({ type: actionTypes.SIGN_UP_ERRORS, payload: signUpErrors });
      wrapper.update();

      expect(wrapper.props().signUpErrors).toEqual(signUpErrors);
    });
  });
});
