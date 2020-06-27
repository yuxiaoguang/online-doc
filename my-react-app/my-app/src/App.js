import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Clock from './Clock';
import Togger from './Togger';
import List from './List';
import MyComponent from './MyComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          欢迎来到React 菜鸟教程
            <Timer></Timer>
            <hr/>
           {/* <Timer></Timer>
            <hr/>
            <Timer></Timer>
            <hr/>*/}
            <Clock date={new Date()}></Clock>
        </a>
        <Togger />
        <List />
        <MyComponent />
      </header>
    </div>
  );
}


export default App;
