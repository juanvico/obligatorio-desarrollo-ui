import apolloClient from '../client/apollo-client';
import CREATE_ITEM from '_apollo/mutations/item';

class ItemController {
  static createItem = async ({ title, description, image , pickupLatitude, pickupLongitude, pickupLocation, availableToPickup}) => {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_ITEM,
      variables: { title, description, image , pickupLatitude, pickupLongitude, pickupLocation, availableToPickup },
    });
    return data.createItem;
  }
}

export default ItemController;
