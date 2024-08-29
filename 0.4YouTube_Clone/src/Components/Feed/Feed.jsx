import React, { useEffect, useState } from 'react';
import './Feed.css'
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import { valueConverter, API_KEY } from '../../data';
import moment from 'moment'
// import { response } from 'express';

const Feed = ({category}) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

        await fetch(videoListURL).then(response=>response.json()).then(data=>setData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <div className="feed">
            {data.map((item, index)=>{
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={`${item.snippet.thumbnails.medium.url}`} alt="" />
                        <h2>{`${item.snippet.title}`}</h2>
                        <h3>{`${item.snippet.channelTitle}`}</h3>
                        <p>{`${valueConverter(item.statistics.viewCount)}`} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}
            {/* <Link to={`video/20/4352`} className='card'>
                <img src={assets.img1} alt="" />
                <h2>Learn all you need to know about Photography</h2>
                <h3>Chinwe Code X</h3>
                <p>20k views; 3 days ago</p>
            </Link> */}
            {/* <div className='card'>
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
            </div> */}

        </div>
    )
}

export default Feed;