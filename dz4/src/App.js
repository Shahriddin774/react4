import React, { useState, useEffect } from 'react';
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [user, setUser] = useState({ name: '', lastname: '' });
  const [route, setRoute] = useState('');

  useEffect(() => {
    const name = prompt('Как вас зовут?');
    const lastname = prompt('Как ваша фамилия?');
    setUser({ name, lastname });

    if (name === 'John' && lastname === 'Johns') {
      setRoute('main');
    } else {
      setRoute('error');
    }
  }, []);

  if (route === 'main') {
    return <MainPage user={user} />;
  } else if (route === 'error') {
    return <ErrorPage user={user} />;
  } else {
    return null;
  }
}

export default App;
