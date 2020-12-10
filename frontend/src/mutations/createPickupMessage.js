import gql from 'graphql-tag';

const CREATE_PICKUP_MESSAGE = gql`
   mutation createPickupMessage(
     $destinataryUserEmail: String!,
     $description: String!
     ) {
    createPickupMessage(
        destinatary_user_email:$destinataryUserEmail
        description:$description
        ) {
      destinatary_user_email
      description
      user_name
      user_email
    }
 }
`;

export default CREATE_PICKUP_MESSAGE;