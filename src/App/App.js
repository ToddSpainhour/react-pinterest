import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import BoardContainer from '../components/BoardContainer/BoardContainer';

import './App.scss';


fbConnection();

class App extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authenticated } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authenticated) {
        componentToLoad = <BoardContainer />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavbar />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
