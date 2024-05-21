import React, { useState, useEffect } from 'react';
function ErrorPage({ user }) {
    const [state, setState] = useState({ name: '', lastname: '' });

    useEffect(() => {
        setState(user);
    }, [user]);

    return (
        <div>
            <h1>Тебе сюда нельзя - {state.name} {state.lastname}</h1>
        </div>
    );
}

export default ErrorPage;