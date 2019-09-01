import React, { Component } from "react";
import "./index.css";

import Contacts from "./components/Contacts";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="pure-g">
          <div className="pure-u-1">
            <div className="header">
              <img className="logo" src="img/phonebook.png" alt="" />
              <p>v 1.0</p>
            </div>
          </div>
        </div>

        <div className="pure-g">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
