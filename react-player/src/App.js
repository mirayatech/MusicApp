import React, { useState } from "react";

// Importning style
import "./styles/app.scss";

// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
