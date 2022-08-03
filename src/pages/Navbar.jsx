
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    
      <div className='navbarMain flex justify-between'>
        <NavLink to={'/'} ><img className='mt-16 ml-14' src='src/assets/shared/logo.svg' /></NavLink>
        
        <div className="navbar mt-10 z-0 flex justify-center items-center">
          <NavLink to={'/'} className='navbarLink navbarLink0 ml-10'><span>00</span> HOME</NavLink>
          <NavLink to={'/destination'} className='navbarLink navbarLink1 ml-10'><span>01</span> DESTINATION</NavLink>
          <NavLink to={'/crew'} className='navbarLink navbarLink2 ml-10'><span>02</span> CREW</NavLink>
          <NavLink to={'/technology'} className='navbarLink navbarLink3 ml-10'><span>03</span> TECHNOLOGY</NavLink>
        </div>
      </div>
    
  )
}

export default Navbar
