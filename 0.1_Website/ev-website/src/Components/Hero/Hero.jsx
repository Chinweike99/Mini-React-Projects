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
      </div>
    )
  }
  
  export default Hero;