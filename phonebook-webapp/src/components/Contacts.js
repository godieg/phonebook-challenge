import React, { Component, Fragment } from "react";
import axios from "axios";
import swal from "sweetalert";
import TableRow from "./TableRow";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCriteria = this.onChangeCriteria.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      criteria: "",
      contacts: []
    };
  }

  componentDidMount() {
    this.loadContacts();
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeCriteria(e) {
    this.setState({
      criteria: e.target.value
    });
  }

  tabRow() {
    return this.state.contacts.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  loadContacts() {
    axios
      .get("http://localhost:8080/api/contact")
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(function(error) {
        swal("Error!", error.message, "error");
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone
    };

    if (
      contact.firstName === "" ||
      contact.lastName === "" ||
      contact.phone === ""
    ) {
      swal("Error!", "Contact information is required.", "error");
      return;
    }

    axios
      .post("http://localhost:8080/api/contact", contact)
      .then(res => {
        this.loadContacts();

        swal(
          "Good job!",
          "The contact has been created successfully",
          "success"
        );
      })
      .catch(error => {
        swal("Error!", error.message, "error");
      });

    this.setState({
      firstName: "",
      lastName: "",
      phone: ""
    });
  }

  onSubmitSearch(e) {
    e.preventDefault();

    axios
      .get("http://localhost:8080/api/contact/search", {
        params: {
          query: this.state.criteria
        }
      })
      .then(response => {
        this.setState({ contacts: response.data });
      })
      .catch(function(error) {
        swal("Error!", error.message, "error");
      });

    this.setState({
      contacts: []
    });
  }

  render() {
    return (
      <Fragment>
        <div className="pure-u-sm-1 pure-u-1-3">
          <div className="box">
            <h2>
              <i className="fa fa-user-plus"></i>New contact
            </h2>
            <form className="pure-form" onSubmit={this.onSubmit}>
              <fieldset className="pure-group">
                <input
                  type="text"
                  className="pure-input-1-2"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                />
                <input
                  type="text"
                  className="pure-input-1-2"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChangeLastName}
                />
                <input
                  type="text"
                  className="pure-input-1-2"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                />
              </fieldset>
              <button
                type="submit"
                className="pure-button pure-input-1-2 pure-button-primary"
              >
                <i className="fa fa-user-plus"></i>Add
              </button>
            </form>
          </div>
        </div>

        <div className="pure-u-sm-1 pure-u-1-3">
          <div className="box">
            <h2>
              <i className="fa fa-search"></i>Search contact
            </h2>
            <form className="pure-form" onSubmit={this.onSubmitSearch}>
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
      </Fragment>
    );
  }
}
