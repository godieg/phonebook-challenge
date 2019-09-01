import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class SearchContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeCriteria = this.onChangeCriteria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      criteria: "",
      contacts: []
    };
  }

  onChangeCriteria(e) {    
    this.setState({
      criteria: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      .get("http://localhost:8080/api/contact/search", {
        params: {
          query: this.state.criteria
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ contacts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      criteria: "",
      contacts: []
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
            <i className="fa fa-search"></i>Search contact
          </h2>
          <form className="pure-form" onSubmit={this.onSubmit}>
            <fieldset className="pure-group">
              <input
                type="text"
                className="pure-input-1-2"
                value={this.state.criteria}
                onChange={this.onChangeCriteria}
              />
            </fieldset>
            <button
              type="submit"
              className="pure-button pure-input-1-2 pure-button-primary"
            >
              <i className="fa fa-search"></i>Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}
