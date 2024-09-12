import assets from "../../assets/assets"
import "./Profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
// import PlaceIcon from '@mui/icons-material/Place';
// import LanguageIcon from '@mui/icons-material/Language';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Profile = ({backColor}) => {
  return (
    <div className="profile" style={{color: backColor? "black" : "#fff"}}>
      <div className="mainprofileContnent">
        <div className="backimages">
          <div className="backgroundImages">
            <img src="" alt="" className="cover" />
          </div>
          
          <div className="profileContainer">
            <div className="images">
              <div className="mainProfile"> 
                <img src={assets.man1} alt="" className="profile" />
                <div className="aboutImg">
                  <h3>Christabel Abel</h3>
                  <span>500 friends</span>
                  <div className="group">
                    <div className="friendsImg">
                      <img src={assets.man2} alt="" />
                      <img src={assets.man3} alt="" />
                      <img src={assets.lady1} alt="" />
                      <img src={assets.lady1} alt="" />
                      <img src={assets.familyHouse} alt="" />
                      <img src={assets.image1} alt="" />
                    </div>
                    <div  className="groupSocial">
                      <div className="social">
                        <a href="http://faceebook.com"><FacebookIcon  style={{color: backColor? "black" : "#fff"}}/></a>
                        <a href="http://linkedIn.com"><LinkedInIcon style={{color: backColor? "black" : "#fff"}}/></a>
                        <a href="http://instagram.com"><InstagramIcon style={{color: backColor? "black" : "#fff"}}/></a>
                        <a href="http://pintrest.com"><PinterestIcon style={{color: backColor? "black" : "#fff"}}/></a>
                        <a href="http://twitter.com"><XIcon style={{color: backColor? "black" : "#fff"}}/></a>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <button>Add</button>
                      <button>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="socials">
                <a href="http://faceebook.com"><FacebookIcon  /></a>
                <a href="http://linkedIn.com"><LinkedInIcon /></a>
                <a href="http://instagram.com"><InstagramIcon /></a>
                <a href="http://pintrest.com"><PinterestIcon /></a>
                <a href="http://twitter.com"><XIcon /></a>
              </div> */}
            </div>
          </div>

        </div>
      </div>
      <div >
        <div className="userInfo">
          <div className="left">
            <a href="http://faceebook.com"><FacebookIcon fontSize="large"/></a>
            <a href="http://linkedIn.com"><LinkedInIcon /></a>
            <a href="http://instagram.com"><InstagramIcon /></a>
            <a href="http://pintrest.com"><PinterestIcon /></a>
            <a href="http://twitter.com"><XIcon /></a>
          </div>

          <div className="center"></div>
          Hhhhhhiojo;klhljwv jlklj.lw  ulhkhk ujhuhk uuihl '
          <div className="right"></div>
        </div>
      </div>
      
      
      
    </div>
  )
}
