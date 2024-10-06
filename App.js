import React, { useState } from 'react';
import { fetchUser } from "./utils";
import { Logo } from "./Logo";
import "./styles.css";

// UserStatus component
const UserStatus = ({ isLoggedIn, username, onLogout }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <button type="submit">Login</button>
        </div>
      ) : (
        <>
          
          <button onClick={onLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

// UserInput component
const UserInput = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password); // Call the onSubmit function with input values
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            console.log("Username:", e.target.value);
            setUsername(e.target.value);
          }}
          placeholder="Username"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            console.log("Password:", e.target.value);
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="custom-submit-button">Login</button>
    </form>
  );
}; 

// App component
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    console.log("Login attempt with:", username, password);
    if (username && password) {
      setUsername(username);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
    setUsername('');
  };
  
  return (
    <div className="App">
      <nav className="navbar">
        <Logo />
        <UserStatus isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      </nav>
      <p>Selamat datang {username}!</p>
      {!isLoggedIn && <UserInput onSubmit={handleLogin} />}
    </div>
  );
}
