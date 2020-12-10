import gql from 'graphql-tag';

const MESSAGES = gql`
  query {
   messages {
      _id
      destinatary_user_email
      item_id
      detail
      remitent_user_name
      remitent_user_email
   }
 }
`;

export default MESSAGES;