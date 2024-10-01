import React from 'react';

const UserDetailsPopup = ({ user, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{user.name}'s Details</h3>
        <p>Email: {user.email}</p>
        <p>Standard: {user.standard}</p>
        <p>Subjects: {user.subjects.join(', ')}</p>
        <p>Address: {user.address}</p>
        <p>Language: {user.language}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
