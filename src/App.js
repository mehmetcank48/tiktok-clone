import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    //BEM naming convantion
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
