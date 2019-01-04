import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SurveyList />
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

const mapStateToProps = state => ({
  surveys: state.surveys,
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
