import gql from 'graphql-tag';

const ME = gql`
   query {
   me {
     email
     name
   }
 }
`;

export default ME;

