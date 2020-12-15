import { MESSAGE_TYPES } from '_actions/MessageActions';

const messageReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case MESSAGE_TYPES.MY_MESSAGES:
      return { ...state, ...payload.myMessages };
   default:
      return state;
  }
};

export default messageReducer;
