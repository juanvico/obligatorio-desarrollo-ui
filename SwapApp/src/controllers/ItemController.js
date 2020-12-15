import apolloClient from '../client/apollo-client';
import CREATE_ITEM from '_apollo/mutations/item';
import ITEMS from '_apollo/queries/items';
import MY_ITEMS from '_apollo/queries/myItems';

class ItemController {
  static createItem = async ({ title, description, image , pickupLatitude, pickupLongitude, pickupLocation, availableToPickup}) => {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_ITEM,
      variables: { title, description, image , pickupLatitude, pickupLongitude, pickupLocation, availableToPickup },
    });
    return data.createItem;
  }
  
  static exploreItems = async ({ lat, lng }) => {
    const { data } = await apolloClient.query({
      query: ITEMS,
      variables: { lat, lng },
    })
    return data.items
  }

  static myItems = async () => {
    const { data } = await apolloClient.query({
      query: MY_ITEMS
    })
    return data.myItems
  }
}

export default ItemController;
