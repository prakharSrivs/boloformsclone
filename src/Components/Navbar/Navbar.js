import React from 'react'
import './navbar.css'
import logo from './logo.svg'
function Navbar() {

    const [menu, setMenu] = React.useState(true);

    const handleMenu = () => {
        setMenu(!menu);
    }

  return (
        <>
        <div className="navbarContainer">
            <nav className='navbar' data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-mirror="true"
                data-aos-once="false"
                style={{height:"75px"}}>
                <div className="nav_wrapper"  >
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav_menu">
                        <ul className='nav_menu_list'>
                            <li className='nav_menu_item'><a href="#about">Products </a></li>
                            <li className='nav_menu_item'><a href="#problems">Pricing</a></li>
                            <li className='nav_menu_item'><a href="#timeline">Guides</a></li>
                            <li className='nav_menu_item'><a href="#faqs">Templates</a></li>
                        </ul>
                        <i onClick={handleMenu} className={`nav_menu_icon fa-solid fa-bars`} style={{color:"black",fontSize:"18px"}}/>
                    </div>
                    <div className="navbarButtons">
                        <div className="emptyButton navbarButton">
                            Install Now
                        </div>
                        <div className="fillButton navbarButton">
                            Boloforms Premium
                        </div>
                    </div>
                </div>
            </nav>

            <ul className={menu ? 'nav_mobile' : 'nav_mobile mobile_active'}>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#about">Products</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#problems">Pricing</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#timeline">Guides</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#timeline">Blogs</a></li>
                {/* <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#sponsors">Sponsors</a></li> */}
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#faqs">Templates</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#faqs">About Us</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><div className="emptyButton navbarButton mobileButton">
                    Install Now
                </div></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><div className="fillButton navbarButton mobileButton">
                    Boloforms Premium
                </div></li>
            </ul>
        </div>
        </>
  )
}

export default Navbar