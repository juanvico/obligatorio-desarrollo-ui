import React from 'react';

function UserDetails({ user }) {  
    return (
      <div className="user-details-container">
          <label> Published by: {user.name} </label>
      </div>
    );
  }
  
  export default UserDetails; 