import gql from 'graphql-tag';

const CREATE_MESSAGE= gql`
   mutation createMessage(
     $destinatary_user_email: String!,
     $item_id: String!,
     $detail: String!
     ) {
    createMessage(
        destinatary_user_email:$destinatary_user_email
        item_id:$item_id
        detail:$detail
        ) 
         destinatary_user_email
         item_id
         detail
         remitent_user_name
         remitent_user_email
    }
 }
`;

export default CREATE_MESSAGE;