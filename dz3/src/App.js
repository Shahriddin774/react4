import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('main');

    const renderPage = () => {
        switch (currentPage) {
            case 'main':
                return <MainPage />;
            case 'about':
                return <AboutPage />;
            case 'todos':
                return <TodosPage />;
            default:
                return <MainPage />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('main')}>Main Page</button>
                <button onClick={() => setCurrentPage('about')}>About Page</button>
                <button onClick={() => setCurrentPage('todos')}>Todos Page</button>
            </nav>
            {renderPage()}
        </div>
    );
};

export default App;
