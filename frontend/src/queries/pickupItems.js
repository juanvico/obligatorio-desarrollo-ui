import gql from 'graphql-tag';

const PICKUP_ITEMS = gql`
query PICKUP_ITEMS($lat : Float!,
  $lng: Float!) {
  items(lat: $lat 
        lng: $lng)
  {
     _id
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

export default PICKUP_ITEMS;