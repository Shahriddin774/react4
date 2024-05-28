import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
    reset();
  };

  const clearTable = () => {
    setUsers([]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <input {...register('name', { required: true })} placeholder="Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input {...register('username', { required: true })} placeholder="Username" />
          {errors.username && <span className="error">Username is required</span>}

          <input {...register('email', { required: true })} placeholder="Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input {...register('phone', { required: true })} placeholder="Phone" />
          {errors.phone && <span className="error">Phone is required</span>}

          <input {...register('website')} placeholder="Website" />

          <div className="button-group">
            <button type="submit">Создать</button>
            <button type="button" onClick={clearTable}>Очистить таблицу</button>
          </div>
        </form>

        <div className="table-container">
          {users.length === 0 ? (
              <p>Таблица пуста</p>
          ) : (
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>
                        <button onClick={() => deleteUser(index)}>Удалить</button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
          )}
        </div>
      </div>
  );
};

export default App;
