import React from "react";
import video from "../data/video.js";
import VidDetails from "./VidDetails"


function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VidDetails vidData = {video}/>
    </div>
  );
}

export default App;
