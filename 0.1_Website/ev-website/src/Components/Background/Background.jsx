import './Background.css'
import video1 from '../../assets/video1.webm'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import images7 from '../../assets/images7.jpg'
import images3 from '../../assets/images3.jpg'
import images4 from '../../assets/images4.jpg'
import images5 from '../../assets/images5.jpg'
import images6 from '../../assets/images6.jpg'

const Background = ({playVid, heroCount}) => {
    if (playVid){
      return(
        <video className='bgConponent' autoPlay loop muted>
          <source src={video1} type='video/webm' />
        </video>
      )
    }
    else if(heroCount === 0 ){
      return <img src={images7} alt='car image' className='bgConponent' />
    }else if(heroCount === 1 ){
      return <img src={img1} alt='car image' className='bgConponent' />
    }else if(heroCount === 2 ){
      return <img src={img2} alt='car image' className='bgConponent' />
    }else if(heroCount === 3 ){
      return <img src={images3} alt='car image' className='bgConponent' />
    }else if(heroCount === 4 ){
      return <img src={images4} alt='car image' className='bgConponent' />
    }else if(heroCount === 5 ){
      return <img src={images5} alt='car image' className='bgConponent' />
    }else if(heroCount === 6 ){
      return <img src={images6} alt='car image' className='bgConponent' />
    }
  }
  
  export default Background;