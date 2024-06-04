import React from 'react';
import ModalProvider from "./components/ModalProvider";
import Main from "./components/Main";
import About from "./components/About";

const App = () => {
    return (
        <ModalProvider>
            <div>
                <Main />
                <About />
            </div>
        </ModalProvider>
    );
};

export default App;
