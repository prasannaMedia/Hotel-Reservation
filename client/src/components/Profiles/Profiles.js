import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../action/profile";
import Moment from 'react-moment'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      <section id="reser">
      <div className="container text-dark">

            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                
                <h4 className="lead ">All Reservations</h4>
                <table className="table table-bordered table-striped table-hover">
                          <thead className="thead-dark">
                           <tr>
                          <th scope="col">Name</th>
                          <th scope="col">checkin</th>
                          <th scope="col">checkout</th>
                          <th scope="col">phone</th>
                          </tr>
                        </thead>
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      
                      <tbody>
                        <tr>
                        <td>{profile.user.name}</td>
                        <td><Moment format='YYYY/MM/DD'>{profile.checkin}</Moment></td>
                        <td><Moment format='YYYY/MM/DD'>{profile.checkout}</Moment></td>
                        <td>{profile.phone}</td>
                        </tr>
                      </tbody> 

                    ))
                  ) 
                  : (
                    <h1>....No Reservations found check your connection</h1>
                  )}
                   </table>
              </Fragment>
            )}
          </div>

          </section>
    </Fragment>
  );
};

const mapStateToProps = () => (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
