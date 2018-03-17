import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import ConnectedAuthorization from './Authorization';
import { history } from '../../store';

configure({ adapter: new Adapter() });

describe('<Authorization />', () => {
  let initialState = { authorization: {} };
  const mockStore = configureStore();

  let providerWrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);

    /* eslint-disable */
    providerWrapper = shallow(
      <MemoryRouter initialState={['/']}>
        <ConnectedAuthorization
        history={history}
        store={store} />
        </MemoryRouter>
    ).dive();
    /* eslint-enable */
  });

  it('renderes without crashing', () => {
    expect(providerWrapper).not.toBeNull();
  });

  it('contains a history props', () => {
    expect(providerWrapper.props().history).toBeDefined();
  });

  it('contains a store props', () => {
    expect(providerWrapper.props().store).toBeDefined();
  });

  describe('current user is present', () => {
    let wrapper;
    const currentUser = { id: 1 };

    initialState = {
      authorization: {
        currentUser,
      },
    };

    beforeEach(() => {
      store = mockStore(initialState);
      spyOn(history, 'replace');
      /* eslint-disable */
      wrapper = shallow(
            <ConnectedAuthorization.WrappedComponent
            history={history}
            store={store} />
        );
      /* eslint-enable */
      wrapper = wrapper.setProps({ currentUser });
    });

    it('called history.replace if currentUser is present in component', () => {
      expect(history.replace).toHaveBeenCalled();
    });
  });
});
