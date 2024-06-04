import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ closeModal }) => {
    return (
        <div className='Modal'>
            <div className='block'>
                <button
                    onClick={closeModal}
                    className='button'>
                </button>
                <h2>Modal</h2>
                <p>Content</p>
            </div>
        </div>
    );
};

export default ModalWindow;
