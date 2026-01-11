import "./navbar.css"
import logo from "../../assets/images/ace-log.jpg"
import search from "../../assets/images/search.png"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar-container relative container mx-auto border-b-blue-300 border-b-[0.5px] py-2 px-4">

      <div className="logo">
        <img src={logo} alt="medic-logo" />
      </div>

      <div className="hidden lg:flex gap-5">
         <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='academics' spy={true} smooth={true} offset={-70} duration={500}>
            Hospital
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500}>
            Clinic
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='gallery' spy={true} smooth={true} offset={-70} duration={500}>
            Dental
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='event' spy={true} smooth={true} offset={-70} duration={500}>
            Testimonials
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer`} activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
            Contact Us
          </Link>
      </div>

    
        <button className="hidden lg:flex px-3 py-2 bg-blue-500 hover:bg-blue-300 transition-colors cursor-pointer duration-75 rounded-full shadow-blue-200 text-base font-bold text-white" >
          Book an appointment
        </button>

      <button onClick={() => {setOpenMenu(!openMenu)}} className="lg:hidden">
        {openMenu ? <FaTimes  className="text-blue-500 text-4xl" /> :  <FaBars className="text-blue-500 text-4xl" />}
      </button>
      {
          openMenu && (
            <div className='w-full flex flex-col lg:hidden bg-blue-400 text-black p-6 absolute top-20 left-0 right-0 border-b border-gray-300 z-100'>
                <ul className=' flex flex-col gap-4'>
                  <li>
                    <Link className='block px-4 py-2 text-lg text-center cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='block px-4 py-2 text-lg text-center cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='academics' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Academics
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg px-4 py-2 text-center cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg px-4 py-2 text-center cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='gallery' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg px-4 py-2 text-center cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='event' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg text-center px-4 py-2 cursor-pointer text-white hover:bg-blue-200 transition-colors duration-150' activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <button className="px-3 py-2 mt-5 bg-blue-500 hover:bg-blue-300 transition-colors duration-75 rounded-full shadow-blue-200 text-base font-bold text-white" >
                    Book an appointment
                </button>
            </div>
          )
        }
    </div>
  )
}

export default Navbar