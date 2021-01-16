import React, {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [[width, height], setSize] = useState([0, 0]);
  
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    useEffect(() => {
      if (width >= 640) {
        setMenuOpen(false);
      }
    }, [width]);
  
    function NavbarItem(props) {
      return (
        <div className="nav-item"><a href={props.path}>{props.name}</a></div>
      )
    }
  
    const handleMenuOpen = () => {
      if (width >= 640) {
        return "";
      }
      
      return menuOpen ? "open" : "close";
    }
  
    return (
      <>
        <nav className="navbar">
          <div className="navbar-top">
            <img className="logo" src="/logo2.png"></img>
            <div className="burger">
                <Hamburger
                    toggled={menuOpen} 
                    toggle={setMenuOpen} 
                    direction="right" 
                    rounded />
            </div>
          </div>
  
          <div className={`nav-items ${handleMenuOpen()}`}>
            <NavbarItem name="Home" path="#" />
            <NavbarItem name="Services" path="#service" />
            <NavbarItem name="Reviews" path="#reviews" />
            <NavbarItem name="Contact" path="#contact" />
          </div>
        </nav>
      </>
    )
  }