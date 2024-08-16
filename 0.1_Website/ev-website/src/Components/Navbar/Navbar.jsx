import './Navbar.css'

const Navbar = () => {
    return (
      <div className='navBar'>
          <div className="navLogo"> Ev-Website</div>
          <ul className='navmenu'>
              <li>Home</li>
              <li>About us</li>
              <li>Explore</li>
              <li className='navContact'>Contact Us</li>
          </ul>
      </div>
    )
  }
  
  export default Navbar;