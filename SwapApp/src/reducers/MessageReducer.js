import { TYPES } from '_actions/MessageActions';

const messageReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_MESSAGE_SUCCESS:
      return state;
   default:
      return state;
  }
};

export default messageReducer;
