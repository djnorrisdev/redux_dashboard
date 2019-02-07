import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
      })
    })
  }

  render () {
    return(
      <div>
        Hi
      </div>
    )
  }
}