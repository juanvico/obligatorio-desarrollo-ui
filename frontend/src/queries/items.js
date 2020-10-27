import gql from 'graphql-tag';

const ITEMS = gql`
  query {
   items {
      _id
      description
      image
      pickup_location
      available_to_pickup
      user_name
      user_email
   }
 }
`;

export default ITEMS;