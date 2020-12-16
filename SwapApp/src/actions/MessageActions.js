import Snackbar from 'react-native-snackbar';

import { MessageController } from '_controllers';

export const MESSAGE_TYPES = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  CREATE_MESSAGE_REQUEST: 'CREATE_MESSAGE_REQUEST',
  CREATE_MESSAGE_ERROR: 'CREATE_MESSAGE_ERROR',
  CREATE_MESSAGE_SUCCESS: 'CREATE_MESSAGE_SUCCESS',
  MY_MESSAGES: 'MY_MESSAGES',
  MY_MESSAGES_REQUEST: 'MY_MESSAGES_REQUEST',
  MY_MESSAGES_ERROR: 'MY_MESSAGES_ERROR',
  MY_MESSAGES_SUCCESS: 'MY_MESSAGES_SUCCESS',
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

const myMessagesRequest = () => ({
  type: MESSAGE_TYPES.MY_MESSAGES_REQUEST,
  payload: null,
});

const myMessagesError = error => ({
    type: MESSAGE_TYPES.MY_MESSAGES_ERROR,
    payload: { error },
});
  
const myMessagesSuccess = myMessages => ({
type: MESSAGE_TYPES.MY_MESSAGES_SUCCESS,
payload: { myMessages },
});

export const createMessage = ({destinataryUserEmail, description}, callback) => async dispatch => {
  dispatch(createMessageRequest());
  try {
    const theMessage = await MessageController.createMessage({destinataryUserEmail, description});
    dispatch(createMessageSuccess(theMessage));
    Snackbar.show({
      text: 'Message created successfully!',
      backgroundColor: 'green',
    });
    !!callback && callback();
  } catch (error) {
    Snackbar.show({
      text: error.messsage,
      text: 'Oops, error creating message, please try again later',
    });
    dispatch(createMessageError(error.message));
  }
};

export const myMessages = (callback) => async dispatch => {
  dispatch(myMessagesRequest());
  try {
    const myMessages = await MessageController.myMessages();
    dispatch(myMessagesSuccess(myMessages));
    !!callback && callback()
  } catch (error) {
    Snackbar.show({
      text: 'Oops, error getting my messages, please try again later',
      backgroundColor: 'red',
    });
    dispatch(myMessagesError(error.message));
  }
};
