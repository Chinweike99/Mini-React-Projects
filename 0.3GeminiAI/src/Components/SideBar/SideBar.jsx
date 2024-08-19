import { useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets';


const SideBar = () => {

    const [extended, setExtended] = useState(false);

    const setMenubar = () => {
        setExtended(!extended);
    }
    
    return (

        <div className='sideBar'>
            <div className="top">
                <img onClick={setMenubar} className='menu' src={assets.barsSolid} alt="" />
                <div className="newChat">
                    <img src={assets.plusSolid} alt="" />
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recentTitle">Recent</p>
                        <div className="recentEntry">
                            <img src={assets.message} alt="" />
                            <p>What is Nodejs ..</p>
                        </div>
                    </div>
                    : null}
            </div>

            <div className="bottom">
                <div className="bottomItem recentEntry">
                    <img src={assets.circleQuestion} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottomItem recentEntry">
                    <img src={assets.clockRotateLeft} alt="" />
                    {extended ? <p>History</p> : null}
                </div>
                <div className="bottomItem recentEntry">
                    <img src={assets.gearSolid} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default SideBar;