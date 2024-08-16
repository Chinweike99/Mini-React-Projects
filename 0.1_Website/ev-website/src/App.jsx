import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {

  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "your passion"},
    {text1: "Give in to", text2: "your passions"},
    {text1: "Keep Learning", text2: "and don't stop"},
    {text1: "Evolve", text2: "your passion"},
    {text1: "Win big", text2: "Its yours"},
    {text1: "Akwolu Innocent", text2: "Chinweike"}
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playVid, setPlayVid] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setHeroCount((count) => {return count === 6?0 : count+1})
  //   }, 3000)
  // }, [])


  useEffect(() => {
  const intervalId = setInterval(() => {
    setHeroCount((count) => (count === 6 ? 0 : count + 1));
  }, 3000);

  return () => clearInterval(intervalId); // Clear the interval on component unmount
}, []);



  return (
    <div>
      <Background playVid={playVid} heroCount={heroCount}/>
      <Navbar />
      <Hero setPlayVid={setPlayVid} heroData={heroData[heroCount]} setHeroCount={setHeroCount} heroCount={heroCount} playVid={playVid}/>
    </div>
  )
}

export default App;