import { MESSAGE_TYPES } from '_actions/MessageActions';

const messageReducer = (state = { myMessages: [] }, { type, payload }) => {
  switch (type) {
    case MESSAGE_TYPES.MY_MESSAGES_SUCCESS:
      return { ...state, myMessages: payload.myMessages };
   default:
      return state;
  }
};

export default messageReducer;
