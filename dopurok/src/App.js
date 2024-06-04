import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
  }, []);

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { name, email, username };
    axios.post('http://localhost:3000/users', newUser)
        .then(response => {
          setUsers([...users, response.data]);
          setModalMessage('Пользователь успешно создан');
          setShowModal(true);
          setName('');
          setEmail('');
          setUsername('');
        })
        .catch(error => {
          console.error('Error creating user:', error);
        });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
          setModalMessage('Пользователь удален');
          setShowModal(true);
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
      <div className="container">
        <h1>Users</h1>
        <form className="form-container" onSubmit={createUser}>
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Create User</button>
        </form>
        {users.length === 0 ? (
            <p className='spisok'>Список пуст</p>
        ) : (
            <table id="users-table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                      <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
        )}
        {showModal && (
            <div id="modal" className="modal">
              <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>&times;</span>
                <p>{modalMessage}</p>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;
