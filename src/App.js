import React, { Component } from 'react';
import SongContainer from './containers/SongContainer';

class App extends Component {
  render() {
    return (
      <SongContainer key={Math.random()} />
    );
  }
}

export default App;
