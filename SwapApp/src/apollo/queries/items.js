import gql from 'graphql-tag';

const ITEMS = gql`
  query {
   items {
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

export default ITEMS;