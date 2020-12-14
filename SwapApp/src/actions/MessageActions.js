import { MessageController } from '_controllers';

export const TYPES = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  CREATE_MESSAGE_ERROR: 'CREATE_MESSAGE_ERROR',
  CREATE_MESSAGE_SUCCESS: 'CREATE_MESSAGE_SUCCESS',
};

const createMessageRequest = () => ({
  type: TYPES.CREATE_MESSAGE,
  payload: null,
});

const createMessageError = error => ({
    type: TYPES.CREATE_MESSAGE_ERROR,
    payload: { error },
});
  
const createMessageSuccess = theMessage => ({
type: TYPES.CREATE_MESSAGE_SUCCESS,
payload: { theMessage },
});

export const createMessage = (destinatary, body) => async dispatch => {
  dispatch(createMessageRequest());
  try {
    const theMessage = await MessageController.createMessage(destinatary, body);
    dispatch(createMessageSuccess(theMessage));
  } catch (error) {
    dispatch(createMessageError(error.message));
  }
};
