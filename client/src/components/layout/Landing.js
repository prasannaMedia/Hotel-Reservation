import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Carosuel from "./Carousel";
const img = require("../../img/img2.jpg");
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="mt-0">
      <Carosuel/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
