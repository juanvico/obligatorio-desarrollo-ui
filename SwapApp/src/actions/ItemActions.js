import Snackbar from 'react-native-snackbar';

import { ItemController } from '_controllers';
import GeoLocationService from '../services/GeoLocationService';


export const ITEM_TYPES = {
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_ITEM_REQUEST: 'CREATE_ITEM_REQUEST',
  CREATE_ITEM_ERROR: 'CREATE_ITEM_ERROR',
  CREATE_ITEM_SUCCESS: 'CREATE_ITEM_SUCCESS',
  EXPLORE_ITEMS: 'EXPLORE_ITEMS',
  EXPLORE_ITEMS_REQUEST: 'EXPLORE_ITEMS_REQUEST',
  EXPLORE_ITEMS_ERROR: 'EXPLORE_ITEMS_ERROR',
  EXPLORE_ITEMS_SUCCESS: 'EXPLORE_ITEMS_SUCCESS',
  MY_ITEMS: 'MY_ITEMS',
  MY_ITEMS_REQUEST: 'MY_ITEMS_REQUEST',
  MY_ITEMS_ERROR: 'MY_ITEMS_ERROR',
  MY_ITEMS_SUCCESS: 'MY_ITEMS_SUCCESS',
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

const exploreItemRequest = () => ({
  type: ITEM_TYPES.EXPLORE_ITEMS_REQUEST,
  payload: null,
});

const exploreItemError = error => ({
  type: ITEM_TYPES.EXPLORE_ITEMS_ERROR,
  payload: { error },
});

const exploreItemSuccess = exploreItems => ({
  type: ITEM_TYPES.EXPLORE_ITEMS_SUCCESS,
  payload: { exploreItems },
});

const myItemRequest = () => ({
  type: ITEM_TYPES.MY_ITEMS_REQUEST,
  payload: null,
});

const myItemError = error => ({
  type: ITEM_TYPES.MY_ITEMS_ERROR,
  payload: { error },
});

const myItemSuccess = myItems => ({
  type: ITEM_TYPES.MY_ITEMS_SUCCESS,
  payload: { myItems },
});

export const createItem = ({
  title,
  description,
  image,
  pickupLocation,
  availableToPickup
}, callback) => async dispatch => {
  dispatch(createItemRequest());
  try {
    const location = await GeoLocationService.getCurrentLocation();
    var pickupLatitude = location.coords.latitude;
    var pickupLongitude = location.coords.longitude;
    const item = await ItemController.createItem({ title, description, image, pickupLatitude, pickupLongitude, pickupLocation, availableToPickup });
    dispatch(createItemSuccess(item));
    !!callback && callback();
    Snackbar.show({
      text: 'Item created successfully!',
      backgroundColor: 'green',
    });
  } catch (error) {
    console.log(error)
    dispatch(createItemError(error.message));
    Snackbar.show({
      text: 'Oops, error creating item, please try again later',
      backgroundColor: 'red',
    });
  }
};

export const exploreItems = (callback) => async dispatch => {
  dispatch(exploreItemRequest());
  try {
    const location = await GeoLocationService.getCurrentLocation();
    var lat = location.coords.latitude;
    var lng = location.coords.longitude;
    const exploreItems = await ItemController.exploreItems({ lat, lng });
    dispatch(exploreItemSuccess(exploreItems));
    !!callback && callback()
  } catch (error) {
    Snackbar.show({
      text: 'Oops, error exporing items, please try again later',
      backgroundColor: 'red',
    });
    dispatch(exploreItemError(error.message));
  }
};

export const myItems = () => async dispatch => {
  dispatch(myItemRequest());
  try {
    const myItems = await ItemController.myItems();
    dispatch(myItemSuccess(myItems));
  } catch (error) {
    Snackbar.show({
      text: error.messsage,
      text: 'Oops, error getting my items, please try again later',
    });
    dispatch(myItemError(error.message));
  }
};
