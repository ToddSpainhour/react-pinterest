import React from 'react';
import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import BoardContainer from '../components/BoardContainer/BoardContainer';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">A Simple Button</button>
        <MyNavbar />
        <Auth />
        <BoardContainer />
      </div>
    );
  }
}

export default App;
