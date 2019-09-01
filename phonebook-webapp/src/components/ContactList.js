import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class ListContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/contact")
      .then(response => {        
        this.setState({ contacts: response.data });        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.contacts.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

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
                <th className="phone-head-width">Phone</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}