import gql from 'graphql-tag';

const CREATE_ITEM = gql`
   mutation createItem(
     $title: String!,
     $description: String!,
     $image: String!,
     $pickupLatitude: Number!,
     $pickupLongitude: Number!,
     $pickupLocation: String!,
     $availableToPickup: Boolean
     ) {
    createItem(
        title:$title
        description:$description
        image:$image
        pickup_location_latitude:$pickupLatitude
        pickup_location_longitude:$pickupLongitude
        pickup_location_description:$pickupLocation
        available_to_pickup:$availableToPickup
        ) {
      title
      description
      image
      pickup_location_latitude
      pickup_location_longitude
      pickup_location_description
      available_to_pickup
      user_name
      user_email
    }
 }
`;

export default CREATE_ITEM;