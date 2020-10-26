import React from 'react';

function UserDetails({ user }) {  
    return (
      <div className="user-details-container">
          <label> Published by: {user.name} </label>
          <label> {user.email}</label>
      </div>
    );
  }
  
  export default UserDetails; 