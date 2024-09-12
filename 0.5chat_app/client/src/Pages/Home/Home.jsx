import { Post } from '../../Components/Posts/Post'
import { Stories } from '../../Components/Stories/Stories'
import './Home.scss'

export const Home = ({backColor}) => {
  return (
    <div className='home'>
      <Stories />
      <Post backColor={backColor}/>    
    </div>
  )
}
