import React from 'react';
import About from '../components/About';
import Title from '../components/Title';
 
const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <About title={'title1'} body={'body1'}/>
            <Title props={'props1'}/>
        </div>
    );
}

export default MainPage;
