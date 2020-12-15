import { combineReducers } from 'redux';
import error from '_reducers/ErrorReducer';
import status from '_reducers/StatusReducer';
import user from '_reducers/UserReducer';
import item from '_reducers/ItemReducer';
import message from '_reducers/MessageReducer';

export default combineReducers({ error, status, user, item, message });
