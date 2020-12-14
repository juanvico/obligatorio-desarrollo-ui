import { TYPES } from '_actions/ItemActions';

const itemReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_ITEM_SUCCESS:
      return state;
   default:
      return state;
  }
};

export default itemReducer;
