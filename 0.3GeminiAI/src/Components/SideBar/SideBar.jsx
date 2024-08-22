import { useState, useContext } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';


const SideBar = () => {

    const [extended, setExtended] = useState(false);
    const {prevPrompt, setPrevPrompt, onSent, setShowResult, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context)

    const setMenubar = () => {
        setExtended(!extended);
    }
    
    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (

        <div className='sideBar'>
            <div className="top">
                <img onClick={setMenubar} className='menu' src={assets.barsSolid} alt="" />
                <div onClick={()=>setShowResult(false)} className="newChat">
                    <img src={assets.plusSolid} alt="" />
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recentTitle">Recent</p>
                        {prevPrompt.map((item,index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recentEntry" key={index}>
                                    <img src={assets.message} alt="" />
                                    <p >{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                        
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