import { UserController } from '_controllers';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  ME_REQUEST: 'ME_REQUEST',
  ME_ERROR: 'ME_ERROR',
  ME_SUCCESS: 'ME_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const meSuccess = user => ({
  type: TYPES.ME_SUCCESS,
  payload: { user },
});

const meRequest = () => ({
  type: TYPES.ME_REQUEST,
  payload: null,
});

const meError = error => ({
  type: TYPES.ME_ERROR,
  payload: { error },
});



const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

export const login = (email, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login({email, password});
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const me = () => async dispatch => {
  dispatch(meRequest());
  try {
    const user = await UserController.me();
    dispatch(meRequest(user));
  } catch (error) {
    dispatch(meError(error.message));
  }
};

export const logout = () => async dispatch => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};
