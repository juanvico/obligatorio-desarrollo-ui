import gql from 'graphql-tag';

const CREATE_MESSAGE = gql`
   mutation createMessage(
     $destinataryUserEmail: String!,
     $description: String!
     ) {
      createMessage(
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

export default CREATE_MESSAGE;