import { MESSAGE_TYPES } from '_actions/MessageActions';

const messageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case MESSAGE_TYPES.MY_MESSAGES_SUCCESS:
      return { ...state, ...payload.myMessages };
   default:
      return state;
  }
};

export default messageReducer;
