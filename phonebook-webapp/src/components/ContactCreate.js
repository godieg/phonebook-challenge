import React, { Component } from "react";

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      phone: ""
    };
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
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
      `The values are ${this.state.first_name}, ${this.state.last_name}, and ${this.state.phone}`
    );

    this.setState({
      first_name: "",
      last_name: "",
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
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
              />
              <input
                type="text"
                className="pure-input-1-2"
                placeholder="Last Name"
                value={this.state.last_name}
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
