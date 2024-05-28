import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    if (name.trim()) {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleUpdateName = (index) => {
    if (name.trim()) {
      const updatedNames = names.map((item, i) => (i === index ? name : item));
      setNames(updatedNames);
      setName('');
    }
  };

  return (
      <div className="container">
        <div className="input-container">
          <input
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="Введите имя"
          />
          <button onClick={handleAddName} disabled={!name.trim()}>
            Добавить
          </button>
        </div>
        <div className="list-container">
          {names.length === 0 ? (
              <p>Список пуст</p>
          ) : (
              names.map((item, index) => (
                  <div className="list-item" key={index}>
                    <span>{item}</span>
                    <button onClick={() => handleUpdateName(index)} disabled={!name.trim()}>
                      Поменять
                    </button>
                  </div>
              ))
          )}
        </div>
      </div>
  );
};

export default App;
