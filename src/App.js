import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    // const user = {
    //   name: "Leizl",
    // };
    // this.props.setUser(user);
    this.props.dispatch({ type: "SET_LOGIN_DATA", data: {name:"test"} });
  };

  render() {
    console.log(this.props.loginData);
    return (
      <div>
        <h1>Redux Testing</h1>
      </div>
    );
  }
}
const mapStateToProps = ({ loginData }) => ({
  loginData,
});

export default connect(mapStateToProps)(App);
