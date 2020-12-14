import { ItemController } from '_controllers';

export const TYPES = {
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_ITEM_ERROR: 'CREATE_ITEM_ERROR',
  CREATE_ITEM_SUCCESS: 'CREATE_ITEM_SUCCESS',
};

const createItemRequest = () => ({
  type: TYPES.CREATE_ITEM,
  payload: null,
});

const createItemError = error => ({
    type: TYPES.CREATE_ITEM_ERROR,
    payload: { error },
});
  
const createItemSuccess = item => ({
type: TYPES.CREATE_ITEM_SUCCESS,
payload: { item },
});

export const createItem = (title, description, image, latitude, longitude, locationDetails) => async dispatch => {
  dispatch(createMessageRequest());
  try {
    const item = await ItemController.createItem(title, description, image, latitude, longitude, locationDetails);
    dispatch(createItemSuccess(item));
  } catch (error) {
    dispatch(createItemError(error.message));
  }
};
