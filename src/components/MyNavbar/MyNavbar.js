import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  }

logMeOut = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { authenticated } = this.props;

  return (
    <div className="MyNavbar">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><i className="fab fa-pinterest-square fa-2x"></i>React Pinterest</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">{
        authenticated
          ? <button className="btn btn-dark" onClick={this.logMeOut}>Logout</button>
          : ''
      }
      </li>
    </ul>

  </div>
</nav>

    </div>
  );
}
}

export default MyNavbar;
