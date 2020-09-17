import React from "react";
import { connect } from "react-redux";
import auth from "../../reducer/auth";

const Alert = ({ alerts }) => {
  return (
    <section id="ale">
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
          </div>
        ))}
    </section>
  );
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
