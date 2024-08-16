import './Hero.css'
import arrowBtn from '../../assets/arrowBtn.png'
import pauseIcon from '../../assets/pauseIcon.png'
import playIcon from '../../assets/playIcon.png'

const Hero = ({setPlayVid, heroData, setHeroCount, heroCount, playVid}) => {
    return (
      <div className='hero'>
        <div className="heroText">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
        <div className="heroExplore">
          <p>Explore features</p>
          <img src={arrowBtn} alt="" />
        </div>
        <div className="heroDotPlay">
          <ul className='heroDots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(6)} className={heroCount === 6 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(4)} className={heroCount === 4 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(5)} className={heroCount === 5 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
          </ul>
          <div className="heroPlay">
          <img onClick={() => setPlayVid(!playVid)} src={playVid?pauseIcon:playIcon} alt="" />
          <p>See video</p>
        </div>
        </div>
      </div>
    )
  }
  
  export default Hero;