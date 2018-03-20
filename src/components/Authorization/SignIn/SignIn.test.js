import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
// import jest from 'jest';
import baseStore from '../../../store';
import ConnectedSignIn, { SignIn } from './SignIn';
// import { store } from '../../../store';

configure({ adapter: new Adapter() });

describe('<SignIn />', () => {
  const initialState = { authorization: { signInErrors: {}, currentUser: null } };
  const mockStore = configureStore([]);
  const loginMock = jest.fn();
  const props = {
    onSignIn: loginMock,
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
        <SignIn {...props} />
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

      providerWrapper.find('form').simulate('submit');
      expect(loginMock).toHaveBeenCalled();
    });
  });

  describe('errors', () => {
    let wrapper;
    props.store = baseStore;
    beforeEach(() => {
      wrapper = shallow(<ConnectedSignIn store={baseStore} onSignIn={loginMock} />);
    });

    it('save to props', () => {
      const signInErrors = { email: ['Is not present'] };
      baseStore.dispatch({ type: 'SIGN_IN_ERRORS', payload: signInErrors });
      wrapper.update();

      expect(wrapper.props().signInErrors).toEqual(signInErrors);
    });
  });
});
