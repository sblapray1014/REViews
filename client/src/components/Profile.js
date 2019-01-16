import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchProfile } from "../actions/index";
import PropTypes from "prop-types";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      google: "",
      zillow: "",
      trulia: "",
      facebook: ""
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchProfile();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const profileData = {
      google: this.state.google,
      zillow: this.state.zillow,
      trulia: this.state.trulia,
      facebook: this.state.facebook
    };
    this.props.createProfile(profileData);
  };

  render() {
    // console.log(this.props.profile);
    // const { profile } = this.props;

    let profileContent;

    // if (Object.keys(this.props.profile).length > 0) {
    //   profileContent = (
    //     <div>
    //       <ul />
    //     </div>
    //   );
    // } else {
    //   profileContent = (
    //     <form>
    //       <label>
    //         Name:
    //         <input type="text" name="name" />
    //       </label>
    //       <input type="submit" value="Submit" />
    //     </form>
    //   );
    // }

    return (
      <form>
        <label>
          Google Link:
          <input
            type="text"
            name="google"
            value={this.state.google}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Zillow Link:
          <input
            type="text"
            name="zillow"
            value={this.state.zillow}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Trulia Link:
          <input
            type="text"
            name="trulia"
            value={this.state.trulia}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Facebook Link:
          <input
            type="text"
            name="facebook"
            value={this.state.facebook}
            onChange={this.handleInputChange}
          />
        </label>
        <button
          onSubmit={this.onSubmit}
          className="teal lighten-2 btn-flat right white-text"
        >
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

Profile.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchProfile }
)(Profile);
