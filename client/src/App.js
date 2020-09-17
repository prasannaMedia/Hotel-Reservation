import React, { Fragment, useEffect } from "react";
import { Component } from "react";
import "./App.css";
import "./components/layout/Navbar";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "../../client/src/components/dashboard/Dashboard";
//redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import { render } from "react-dom";
import { loadUser } from "../src/action/auth";
import { setAuthToken } from "./utils/setAuthToken";
import PrivateRoute from "../src/components/routing/privateRoute";
import CreateProfile from "../src/components/Profile-forms/CreateProfile";
import EditProfile from "../src/components/Profile-forms/EditProfile";
import Profiles from "./components/Profiles/Profiles";
//" mongodb://localhost:27017/dev"
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <Navbar />
            <Alert/> 
            <section id="lan">
            <Route exact path="/" component={Landing} />  
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/createprofile" component={CreateProfile} />
              <Route exact path="/profiles" component={Profiles} />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            </section>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
