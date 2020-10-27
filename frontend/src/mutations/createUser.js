import gql from 'graphql-tag';

const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name){
        name
        email
        token
    }
}
`;

export default CREATE_USER;