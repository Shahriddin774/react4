import React, { useState, useEffect } from 'react';
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import ReactDOM from 'react-dom'


function App() {
const [nameJohn, setNameJohn] = useState(null)

useEffect(()=>{
  if (nameJohn === null){
    const name = prompt("Enter your name:")
    setNameJohn(name)
  }
},[nameJohn])
  if (nameJohn === null){
    return <div>Loading....</div>
  }
  if ( nameJohn === "John Johns"){
    return <MainPage/>
  }else {
    return <ErrorPage/>
  }
}

export default App