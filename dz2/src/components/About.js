import React from 'react';

const About = ({ info }) => {
    return (
        <div>
            <h2>About Component</h2>
            <h3>Title: {info.title}</h3>
            <p>Body: {info.body}</p>
        </div>
    );
}

export default About;
