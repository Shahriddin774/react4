import React from 'react';
import styles from './Description.module.css';

const Description = (text) => {
    return (
        <div className={styles.description}>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    );
};

export default Description;
