import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { register, login } from "../../action/auth";
import { Link, Redirect } from "react-router-dom";
//import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password not matching", "danger");
    } else register({ name, email, password });
  };

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container text-dark">
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src={require('../../img/signup.jpg')} alt="login" class="login-card-img"/>
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src={require('../../img/signup.svg')}alt="logo" class="logo"/>
              </div>
              <p class="login-card-description">Sign Up</p>
              <form
              className="form"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <div className="form-group">
                <input
                className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    onChange(e);
            
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
      
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  minLength="6"
                  value={password2}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </form>
                    </div>
                        <div className="ml-3">
                        <Link to='/Login' className="btn btn-success ml-5">sign in </Link>
                        </div>
                </div>
               </div>
             </div>
            </div>
            </main>
            </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
