import { ITEM_TYPES } from '_actions/ItemActions';

const itemReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case ITEM_TYPES.EXPLORE_ITEMS_SUCCESS:
      return { ...state, ...payload.exploreItems };
    case ITEM_TYPES.MY_ITEMS:
      return { ...state, ...payload.myItems };
   default:
      return state;
  }
};

export default itemReducer;
