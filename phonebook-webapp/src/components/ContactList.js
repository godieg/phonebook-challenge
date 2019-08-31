import React, { Component } from "react";

export default class ListContacts extends Component {
  render() {
    return (
      <div className="pure-u-sm-1 pure-u-1-3">
        <div className="box">
          <h2>
            <i className="fa fa-users"></i> Contacts
          </h2>
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
    );
  }
}
