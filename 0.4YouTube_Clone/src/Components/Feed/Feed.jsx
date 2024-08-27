import React from 'react';
import './Feed.css'
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';

const Feed = () => {
    return (
        <div className="feed">
            <Link to={`video/20/4352`} className='card'>
                <img src={assets.img1} alt="" />
                <h2>Learn all you need to know about Photography</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </Link>
            <div className='card'>
                <img src={assets.img2} alt="" />
                <h2>Weather report you can depend on</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img9} alt="" />
                <h2>Your reliable source for sport news</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img4} alt="" />
                <h2>OpenAi, the future of Artificial Intelligence</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img5} alt="" />
                <h2>Know your history like you know your name</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img6} alt="" />
                <h2>Art is not just a craft, it is creativity in its entirety</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img7} alt="" />
                <h2>Get all trending songs for free</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img8} alt="" />
                <h2>Teach your kids good habits from infancy</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img3} alt="" />
                <h2>Learn all you need to know about Photography</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.image2} alt="" />
                <h2>Weather report you can depend on</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.amandla} alt="" />
                <h2>Your reliable source for sport news</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.image6} alt="" />
                <h2>OpenAi, the future of Artificial Intelligence</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img5} alt="" />
                <h2>Know your history like you know your name</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img6} alt="" />
                <h2>Art is not just a craft, it is creativity in its entirety</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.img7} alt="" />
                <h2>Get all trending songs for free</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>
            <div className='card'>
                <img src={assets.images1} alt="" />
                <h2>Teach your kids good habits from infancy</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </div>

        </div>
    )
}

export default Feed;