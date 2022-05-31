import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "hang";
  const age = 18;
  const isFemale = true;
  const student = {
    name: 'my hang'
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My hang 1209
        </p>

        <p>xin chao {name} - {age} - {isFemale ? "Female" : "male"} </p>

        {isFemale ? <p>Female</p> : <p>male</p>}
        {isFemale && <p>Female</p>}
        {!isFemale && <p>Male</p>}

        { isFemale && (
          <div>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </div>
        )}

        { isFemale && (
          <>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </>
        )}

        <p>{student.name}</p>

          <ul>
            {colorList.map(color => (
              // map() để list ra một danh sách từ dữ liệu ban đầu.
              <li key = {color} style={{color}}>{color}</li>
            ))}
          </ul>

      </header>
    </div>
  );
}

export default App;
