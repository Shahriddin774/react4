\import logo from './logo.svg';
import './App.css';
function Header (){
  return(
      <div>
        <Title/>
        <h2>Header</h2>
      </div>
  )
}
function Footer(){
  return(
      <div>
        <Title/>
        <h2>Footer</h2>
      </div>
  )
}
function Content (){
  return(
      <div>
        <Title/>
        <h2>Content</h2>
      </div>
  )
}
function Title(){
  return(
      <h3>Title</h3>
  )
}
function App() {
  return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;
