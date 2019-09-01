import React, { Component } from "react";
import axios from "axios";

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      phone: ""
    };
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

  onSubmit(e) {
    e.preventDefault();

    console.log(
      `The values are ${this.state.firstName}, ${this.state.lastName}, and ${this.state.phone}`
    );

    const obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone
    };

    axios
      .post("http://localhost:8080/api/contact", obj)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      firstName: "",
      lastName: "",
      phone: ""
    });
    
  }

  render() {
    return (
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
    );
  }
}
