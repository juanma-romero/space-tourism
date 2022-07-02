
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    
      <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/destination'}>Destination</NavLink>
        <NavLink to={'/crew'}>Crew</NavLink>
        <NavLink to={'/technology'}>Technology</NavLink>
      </>
    
  )
}

export default Navbar
