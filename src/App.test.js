import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { history } from './store';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const initialState = {};
  const mockStore = configureStore();

  let wrapper;
  let routerWrapper;
  let providerWrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<App />);
    /* eslint-disable */
    providerWrapper = mount(<Provider store={store}>
      <MemoryRouter initialState={['/']}>
        <App />
      </MemoryRouter>
    </Provider> );
    /* eslint-enable */
    spyOn(history, 'replace');
    routerWrapper = mount(<App.WrappedComponent history={history} location={['/']} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  it('define App props by default', () => {
    expect(routerWrapper.props().history).toBeDefined();
  });

  it('contains store attribute', () => {
    expect(providerWrapper.props().store).toBeDefined();
  });

  it('called history action if current user is empty', () => {
    expect(history.replace).toHaveBeenCalled();
  });

  it('called on current user action if token present', () => {
    localStorage.setItem('Idea360token', 'aaa');
    spyOn(store, 'dispatch');
    /* eslint-disable */
    const wrappedComponent = mount(
      <Provider store={store}>
        <MemoryRouter initialState={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    /* eslint-enable */
    expect(store.dispatch).toHaveBeenCalled();
  });
});
