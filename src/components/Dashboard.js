import React, { useState } from 'react';
import UserDetailsPopup from './UserDetailsPopup';
import usersData from '../data/users.json';

const Dashboard = ({ user }) => {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredStudents = usersData.filter(
    (u) =>
      u.type === 'student' &&
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.subjects.join(', ').toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}!</h2>
      {user.type === 'admin' ? (
        <div>
          <input
            type="text"
            placeholder="Search by name or subject"
            value={search}
            onChange={handleSearch}
          />
          <ul>
            {filteredStudents.map((student) => (
              <li key={student.email}>
                <span>{student.name} ({student.email} {student.language} {student.address})</span>
                <button onClick={() => setSelectedUser(student)}>Details</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Details:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Language: {user.language}</p>
          <p>Address: {user.address}</p>
          <p>Standard: {user.standard}</p>
          <p>Subjects: {user.subjects.join(', ')}</p>
        </div>
      )}

      {selectedUser && (
        <UserDetailsPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default Dashboard;
