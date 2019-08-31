import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
/*
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
*/

class App extends Component {
  render() {
    return (
      // <Router>
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

          <div className="pure-u-sm-1 pure-u-1-3">
            <div className="box">
              <h2><i className="fa fa-user-plus"></i>New contact</h2>
              <form className="pure-form">
                <fieldset className="pure-group">
                  <input type="text" className="pure-input-1-2" placeholder="First Name" />
                  <input type="text" className="pure-input-1-2" placeholder="Last Name" />
                  <input type="email" className="pure-input-1-2" placeholder="Phone" />
                </fieldset>
                <button type="submit" className="pure-button pure-input-1-2 pure-button-primary">
                  <i className="fa fa-user-plus"></i>Add
                  </button>
              </form>
            </div>
          </div>
          <div className="pure-u-sm-1 pure-u-1-3">
            <div className="box">
              <h2><i className="fa fa-search"></i>Search contact</h2>
              <form className="pure-form">
                <fieldset className="pure-group">
                  <input type="text" className="pure-input-1-2" />
                </fieldset>
                <button type="submit" className="pure-button pure-input-1-2 pure-button-primary">
                  <i className="fa fa-search"></i>Search
                  </button>
              </form>
            </div>
          </div>
          <div className="pure-u-sm-1 pure-u-1-3">
            <div className="box">
              <h2><i className="fa fa-users"></i> Contacts</h2>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Arun</td>
                    <td>Kart</td>
                    <td>415-8679089</td>
                  </tr>

                  <tr>
                    <td>Juan</td>
                    <td>Torus</td>
                    <td>301-2390930</td>
                  </tr>

                  <tr>
                    <td>Nolux</td>
                    <td>Fernandez</td>
                    <td>310-2930291</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      // </Router>
    );
  }
}

export default App;