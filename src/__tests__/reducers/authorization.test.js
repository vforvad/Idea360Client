import reducer from '../../reducers/authorization';
import actionTypes from '../../actionTypes';
import { getToken } from '../../utils/token';

const initialState = {
  signInErrors: {},
  signUpErrors: {},
  currentUser: null,
};
const token = '12345';
const errors = { email: ['Does not exist'] };

describe('Authorization reducer', () => {
  describe('SIGN_IN', () => {
    it('return state', () => {
      expect(reducer(
        initialState,
        { type: actionTypes.SIGN_IN, payload: token },
      )).toEqual({ ...initialState, signInErrors: {} });
    });

    it('saves token in localStorage', () => {
      reducer(initialState, { type: actionTypes.SIGN_IN, payload: token });
      expect(getToken()).toEqual(token);
    });
  });

  describe('SIGN_UP', () => {
    it('return state', () => {
      expect(reducer(
        initialState,
        { type: actionTypes.SIGN_UP, payload: token },
      )).toEqual({ ...initialState, signUpErrors: {} });
    });

    it('saves token in localStorage', () => {
      reducer(initialState, { type: actionTypes.SIGN_UP, payload: token });
      expect(getToken()).toEqual(token);
    });
  });

  describe('SIGN_IN_ERRORS', () => {
    it('return state', () => {
      expect(reducer(
        initialState,
        { type: actionTypes.SIGN_IN_ERRORS, payload: errors },
      )).toEqual({ ...initialState, signInErrors: errors });
    });
  });

  describe('SIGN_UP_ERRORS', () => {
    it('return state', () => {
      expect(reducer(
        initialState,
        { type: actionTypes.SIGN_UP_ERRORS, payload: errors },
      )).toEqual({ ...initialState, signUpErrors: errors });
    });
  });

  describe('CURRENT_USER', () => {
    it('return state', () => {
      const currentUser = { id: 1 };
      expect(reducer(
        initialState,
        { type: actionTypes.CURRENT_USER, payload: currentUser },
      )).toEqual({ ...initialState, currentUser });
    });
  });
});
