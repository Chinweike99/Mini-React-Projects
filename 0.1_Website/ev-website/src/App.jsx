import { useState } from "react";
import Background from "./Components/Background/Background";

const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "your passion"},
    {text1: "Give in to", text2: "your passions"}
  ]

  const [heroCount, setHeroCount] = useState(4);
  const [playVid, setPlayVid] = useState(false);

  return (
    <div>
      <Background playVid={playVid} heroCount={heroCount}/>
    </div>
  )
}

export default App;