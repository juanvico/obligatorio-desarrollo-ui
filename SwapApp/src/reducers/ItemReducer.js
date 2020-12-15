import { ITEM_TYPES } from '_actions/ItemActions';

const itemReducer = (state =  { exporeItems: [], myItems: [] }, { payload, type }) => {
  switch (type) {
    case ITEM_TYPES.EXPLORE_ITEMS_SUCCESS:
      return { ...state, exporeItems: payload.exploreItems };
    case ITEM_TYPES.MY_ITEMS_SUCCESS:
      return { ...state, myItems: payload.myItems };
   default:
      return state;
  }
};

export default itemReducer;
