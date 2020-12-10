import gql from 'graphql-tag';

const MESSAGES = gql`
query {
 messages {
    destinatary_user_email
    description
    user_name
    user_email
 }
}
`;

export default MESSAGES;