import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

/* import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 */
import ContactCreate from "./components/ContactCreate";
import ContactSearch from "./components/ContactSearch";
import ContactList from "./components/ContactList";

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
          {/* New Contact */}
          <ContactCreate />

          {/* Search Contact */}
          <ContactSearch />

          {/* List Contact */}
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
