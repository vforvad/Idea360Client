import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import httpAdapter from 'axios/lib/adapters/http';
import axios from '../../utils/axios';
import config from '../../utils/environment';
import {
  signIn,
} from '../../actions/authorization';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
axios.defaults.host = 'http://dockerhost:5000';
axios.defaults.adapter = httpAdapter;

describe('Authorization actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('#signIn', () => {
    describe('with valid attributes', () => {
      it('fires SIGN_IN action', () => {
        const store = mockStore({});
        const userParams = { email: 'example@text.com' };
        const tokenParams = { token: '123456' };
        const expectedActions = [
          { type: 'SIGN_IN', payload: '123456' },
        ];

        const currentUserParams = { current_User: { email: 'example@test.com' } };

        nock(config.baseURL)
          .post('/authorizations', userParams)
          .reply(200, tokenParams);
        nock(config.baseURL)
          .get('/users/current')
          .reply(200, currentUserParams);

        return store.dispatch(signIn({ email: 'example@text.com' }))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });


    describe('#signUp', () => {

    });
  });
});
