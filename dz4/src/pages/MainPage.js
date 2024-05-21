import React, { useState, useEffect } from 'react';
function MainPage({ user }) {
    const [state, setState] = useState({ name: '', lastname: '' });

    useEffect(() => {
        setState(user);
    }, [user]);

    return (
        <div>
            <h1>Добро пожаловать {state.name} {state.lastname}, мы тебя ждали</h1>
        </div>
    );
}

export default MainPage