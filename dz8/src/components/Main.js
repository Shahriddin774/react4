import React from 'react';
import { useModal } from './ModalProvider';

const Main = () => {
    const { openModal } = useModal();

    return (
        <div className='open'>
            <h1>Main Page</h1>
            <button onClick={openModal}>Open</button>
        </div>
    );
};

export default Main;
