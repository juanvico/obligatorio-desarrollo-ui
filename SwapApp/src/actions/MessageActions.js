import { MessageController } from '_controllers';

export const MESSAGE_TYPES = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  CREATE_MESSAGE_REQUEST: 'CREATE_MESSAGE_REQUEST',
  CREATE_MESSAGE_ERROR: 'CREATE_MESSAGE_ERROR',
  CREATE_MESSAGE_SUCCESS: 'CREATE_MESSAGE_SUCCESS',
};

const createMessageRequest = () => ({
  type: MESSAGE_TYPES.CREATE_MESSAGE_REQUEST,
  payload: null,
});

const createMessageError = error => ({
    type: MESSAGE_TYPES.CREATE_MESSAGE_ERROR,
    payload: { error },
});
  
const createMessageSuccess = theMessage => ({
type: MESSAGE_TYPES.CREATE_MESSAGE_SUCCESS,
payload: { theMessage },
});

export const createMessage = (destinataryUserEmail, description) => async dispatch => {
  dispatch(createMessageRequest());
  try {
    const theMessage = await MessageController.createMessage({destinataryUserEmail, description});
    dispatch(createMessageSuccess(theMessage));
  } catch (error) {
    dispatch(createMessageError(error.message));
  }
};
