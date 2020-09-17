import React, {Fragment, useState } from "react";
import { createProfile } from "../../action/profile";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormdData] = useState({
    rooms: "",
    checkin: "",
    checkout: "",
    adult: "",
    No: "",
    phone: "",
  });
  const {
    rooms,
    checkin,
    checkout,
    adults,
    No, 
    phone,
  } = formData;

  const onChange = (e) =>
    setFormdData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className="container text-white mt-5">
      <div id="booking" className="section">
		  <div className="section-center">
			<div className="container">
			<div className="row">
			<div className="booking-form">
				<div className="form-header">
        <div className="row">
          <div className="col col-md-6 mx-auto">
            <h1 className="large text-primary ">Make reservation</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Let's get some information to make
              your profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <select
                  name="rooms"
                  value={rooms}
                  onChange={(e) => onChange(e)}
                >
                  <option value="0">* Select no of Rooms</option>
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                 </select>
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="checkin"
                  name="checkin"
                  value={checkin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="checkout"
                  name="checkout"
                  value={checkout}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Adults"
                  name="adults"
                  value={adults}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="No of children"
                  name="No"
                  value={No}
                  onChange={(e) => onChange(e)}
                />
              </div>
              
        
              <div className="form-group">
                <input
                  type="text"
                  placeholder="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => onChange(e)}
                />
              </div>
          
              <input type="submit" className="btn btn-primary my-1 mr-5" />
              <Link className="btn btn-light my-1" to="/dashboard">
                Go Back
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
