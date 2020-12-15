import { ItemController } from '_controllers';

export const ITEM_TYPES = {
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_ITEM_REQUEST: 'CREATE_ITEM_REQUEST',
  CREATE_ITEM_ERROR: 'CREATE_ITEM_ERROR',
  CREATE_ITEM_SUCCESS: 'CREATE_ITEM_SUCCESS',
};

const createItemRequest = () => ({
  type: ITEM_TYPES.CREATE_ITEM_REQUEST,
  payload: null,
});

const createItemError = error => ({
    type: ITEM_TYPES.CREATE_ITEM_ERROR,
    payload: { error },
});
  
const createItemSuccess = item => ({
type: ITEM_TYPES.CREATE_ITEM_SUCCESS,
payload: { item },
});

export const createItem = (title, description, image, pickupLatitude, pickupLongitude, pickupLocation, availableToPickup) => async dispatch => {
  dispatch(createItemRequest());
  try {
    const item = await ItemController.createItem({title, description, image, pickupLatitude, pickupLongitude, pickupLocation, availableToPickup});
    dispatch(createItemSuccess(item));
  } catch (error) {
    dispatch(createItemError(error.message));
  }
};
