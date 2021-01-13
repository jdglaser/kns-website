import React, {useState, useEffect} from 'react'

export default function Home() {
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
    <div className="bg">
      <nav className="navbar">
        <div className="navbar-top">
          <div className="logo">My site</div>
          <img onClick={() => {setMenuOpen(!menuOpen)}} className="burger" src="/menu.svg" width="30px" height="30px"></img>
        </div>

        <div className={`nav-items ${handleMenuOpen()}`}>
          <NavbarItem name="Home" path="#" />
          <NavbarItem name="About" path="#" />
          <NavbarItem name="Projects" path="#" />
        </div>
      </nav>

      <div className="content">
        <span>Hello World</span>
        <div>
          width: {width} <br></br>
          height {height}
        </div>
      </div>
    </div>
  )
}