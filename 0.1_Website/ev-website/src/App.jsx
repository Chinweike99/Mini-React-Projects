import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {

  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "your passion"},
    {text1: "Give in to", text2: "your passions"}
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playVid, setPlayVid] = useState(false);

  return (
    <div>
      <Background playVid={playVid} heroCount={heroCount}/>
      <Navbar />
      <Hero setPlayVid={setPlayVid} heroData={heroData[heroCount]} setHeroCount={setHeroCount} heroCount={heroCount} playVid={playVid}/>
    </div>
  )
}

export default App;