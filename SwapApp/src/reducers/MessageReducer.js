import { MESSAGE_TYPES } from '_actions/MessageActions';
import { TYPES } from '_actions/UserActions';

const messageReducer = (state = { myMessages: [] }, { type, payload }) => {
  switch (type) {
    case MESSAGE_TYPES.MY_MESSAGES_SUCCESS:
      return { ...state, myMessages: payload.myMessages };
    case TYPES.CLEAR_STORE:
      return { };
   default:
      return state;
  }
};

export default messageReducer;
