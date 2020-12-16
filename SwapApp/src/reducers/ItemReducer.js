import { ITEM_TYPES } from '_actions/ItemActions';
import { TYPES } from '_actions/UserActions';

const itemReducer = (state =  { exploreItems: [], myItems: [] }, { payload, type }) => {
  switch (type) {
    case ITEM_TYPES.EXPLORE_ITEMS_SUCCESS:
      return { ...state, exploreItems: payload.exploreItems };
    case ITEM_TYPES.MY_ITEMS_SUCCESS:
      return { ...state, myItems: payload.myItems };
    case TYPES.CLEAR_STORE:
      return { };
   default:
      return state;
  }
};

export default itemReducer;
