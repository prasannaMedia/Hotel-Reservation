import { Fragment, useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../action/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Dashboardaction from "../dashboard/Dashboardaction"
// import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section id="dash">
      <div className="container mt-5" className="text-white ">
            <h1 className=" large text-dark strong">Dashboard</h1>
            <p className="lead  text-dark">
              <i className="fas fa-user" />
              Welcome {user && user.name}
            </p>
            {profile !== null ? (
              <Fragment>
                <Dashboardaction />
              </Fragment>
            ) : (
              <Fragment>
                <p className="text-dark">Make your Reservation quickly... enjoy</p>
                <Link to="/createprofile" className="btn btn-primary my-1">
                  Make Reservation
                </Link>
              </Fragment>
            )}
          </div>
          </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
