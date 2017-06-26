import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id = "app-banner">
          <h1>The App Page</h1>
        </div>
        <div id="user-list"></div>
        <div id = "chat-window">
          <div id = "message-window"></div>
          Enter Message: <input type = "text" id = "message-input" />
        </div>

      </div>
    );
  }
}

export default App;
