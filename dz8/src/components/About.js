import React from 'react';
import { useModal } from './ModalProvider';
import ModalWindow from './ModalWindow';

const About = () => {
    const { isModalOpen, closeModal } = useModal();

    return (
        <div>
            <h1>About Page</h1>
            {isModalOpen && <ModalWindow closeModal={closeModal} />}
        </div>
    );
};

export default About;
