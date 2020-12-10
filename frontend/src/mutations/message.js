import gql from 'graphql-tag';

const CREATE_MESSAGE = gql`
   mutation createMessage(
     $destinataryUserEmail: String!,
     $itemId: String!,
     $description: String!
     ) {
      createMessage(
         destinatary_user_email:$destinataryUserEmail
         item_id:$itemId
         detail:$description
        ) {
      destinatary_user_email
      item_id
      detail
      remitent_user_name
      remitent_user_email
    }
 }
`;

export default CREATE_MESSAGE;