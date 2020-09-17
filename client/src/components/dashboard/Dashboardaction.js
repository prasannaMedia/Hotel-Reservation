import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteAccount } from "../../action/profile";
import profile from '../../reducer/profile'

const Dashboardaction = ({ deleteAccount,id}) => {
  const onClick = (e) => {
    deleteAccount();
  };
  return (
    <div className="container mt-5">

        <div className="col col-md-8 ">
          <Link to="/profiles" className="btn btn-success mt-5 pr-5 btn-lg btn-block">
            <i className="fas fa-user-circle text-white"></i> See all Reservation
          </Link>

      </div>
        <div className="col col-md-8 ">
          <Link to="/edit-profile" className="btn btn-secondary mt-5 btn-lg btn-block ">
            <i className="fas fa-user-circle text-white"></i>Edit Your Reservation
          </Link>
        </div>
        <div className="col col-md-8">
          <button className="btn btn-danger mt-5 btn-lg btn-block" onClick={(e) => onClick(e)}>
             Delete your  Reservation
          </button>
        </div>
      </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteAccount })(Dashboardaction);
