import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../action/auth";
import { Redirect, Link } from "react-router-dom";

const Login = ({ isAuthenticated, login }) => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    SetFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper">
          <div class="login-wrapper my-auto">
            <h1 class="login-title">Log in</h1>

            <form
              className="form"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <div className="form-group">
                <input

                  className="form-control-lg"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
              <input
                className="form-control-lg"
                type="submit"
                className="btn btn-secondary"
                value="Login"
              />
            </form>
            <p className="text-dark mr-2">
              Don't have an account? <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </p>
            </div>
        </div> 
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src={require('../../img/login.jpg')} alt="login image" class="login-img"/>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
