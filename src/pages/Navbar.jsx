
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    
      <>
        <NavLink to={'/'} ><img className='mt-14 ml-4 inline' src='src/assets/shared/logo.svg' /></NavLink>
        
        <div className="navbar inline">
          <NavLink to={'/'}>00 Home</NavLink>
          <NavLink to={'/destination'}>01 Destination</NavLink>
          <NavLink to={'/crew'}>02 Crew</NavLink>
          <NavLink to={'/technology'}>03 Technology</NavLink>
        </div>
      </>
    
  )
}

export default Navbar
