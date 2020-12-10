import gql from 'graphql-tag';

const CREATE_MESSAGE = gql`
   mutation createMessage(
     $destinataryUserEmail: String!,
     $description: String!,
     $itemId: String!
     ) {
      createMessage(
         destinatary_user_email:$destinataryUserEmail
         item_id:$itemId
         detail:$detail
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