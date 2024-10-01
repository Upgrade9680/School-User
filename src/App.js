import React, { useState } from 'react';
import './App.css';
import usersData from './data/users.json';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (email, password) => {
    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="App">
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={currentUser} />
      )}
    </div>
  );
}

export default App;
