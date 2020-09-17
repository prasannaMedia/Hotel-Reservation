import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../action/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/profiles" className="nav-link">See Reservation</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-user"></i> <span className="hide-sm"></span>{" "}
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="/" className="nav-link">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
      <li className="nav-item">
        <Link to="/Login" className="nav-link">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar nav navbar-expand-sm bg-white  text-white fixed-top ">
      <h1>
        <Link to="/">
        <i className="fas fa-hotel"></i>Hotel-Reservation 
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
