import gql from 'graphql-tag';

const CREATE_ITEM = gql`
   mutation createItem(
     $description: String!,
     $image: String!,
     $pickupLocation: String!,
     $availableToPickup: Boolean
     ) {
    createItem(
        description:$description
        image:$image
        pickup_location:$pickupLocation
        available_to_pickup:$availableToPickup
        ) {
     description
      image
      pickup_location
      available_to_pickup
      user_name
      user_email
    }
 }
`;

export default CREATE_ITEM;