import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";
import { connect } from "react-redux";
import { fetchUser, fetchSurveys } from "../actions/index";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSurveys();
  }
  render() {
    console.log(this.props.auth);
    console.log(this.props.surveys);

    let dashboardContent;

    if (Object.keys(this.props.surveys).length > 0) {
      dashboardContent = (
        <div>
          <SurveyList />
        </div>
      );
    } else {
      dashboardContent = (
        <div className="card blue-grey lighten-1">
          <div className="card-content white-text">
            <h2
              style={{
                paddingBottom: "20px",
                paddingTop: "50px",
                textAlign: "center"
              }}
            >
              Welcome to your Survey Home!
            </h2>
            <p style={{ paddingBottom: "30px", textAlign: "center" }}>
              Please click on the red "plus" sign below to start your first
              survey!
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Link to="/profile">
          <div
            className="btn btn-lg blue white-text"
            style={{ marginBottom: "15px" }}
          >
            View Your Profile
          </div>
        </Link>
        {dashboardContent}
        <div className="fixed-action-btn">
          <Link
            to="/surveys/new"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchSurveys: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  surveys: state.surveys,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchSurveys }
)(Dashboard);
