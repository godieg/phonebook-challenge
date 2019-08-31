import React, { Component } from "react";

export default class SearchContact extends Component {
  render() {
    return (
      <div className="pure-u-sm-1 pure-u-1-3">
        <div className="box">
          <h2>
            <i className="fa fa-search"></i>Search contact
          </h2>
          <form className="pure-form">
            <fieldset className="pure-group">
              <input type="text" className="pure-input-1-2" />
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
