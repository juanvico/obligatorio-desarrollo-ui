import React from 'react';

function UserDetails({ user }) {  
    return (
      <Container className="user-details-container">
          <label> Published by: {user.name} </label>
          <label> {user.email}</label>
      </Container>
    );
  }
  
  export default UserDetails; 