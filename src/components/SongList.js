import React from 'react';

const SongList = (props) => {
  if (!props.songs) return null;

  const list = props.songs.feed.entry.map((song, index) => {
  return(

    <div id="song-item">
    <h2 key={Math.random()} >{song['im:name'].label}</h2>
    <p key={Math.random()} >{"-" + (index+1) + "-"}</p>
    <img src={song['im:image'][0].label} alt="null" key={Math.random()} />
    <h2 key={Math.random()} >{song['im:artist'].label}</h2>
    <audio key={Math.random()} controls>
  <source src={song.link[1].attributes.href} type="audio/x-m4a"/>
    </audio>

    </div>
  )
})

  console.log(props.songs.feed['im:name']);

  return (
    <div>
    {list}
    </div>
  )
}

export default SongList;
