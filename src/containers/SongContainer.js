import React from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: null
    };
  }


  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=10/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
      if(request.status !== 200){
        return
      }
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data})
    });
    request.send();
  }


  render(){
    console.log(this.state.songs);
    return (
      <div>
        <SongList key={Math.random()} songs={this.state.songs}/>
        <SongDetail key={Math.random()} songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongContainer;
