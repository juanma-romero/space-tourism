
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    
      <>
        <NavLink to={'/'}><img src='src/assets/shared/logo.svg' /></NavLink>
        <NavLink to={'/'}>00 Home</NavLink>
        <NavLink to={'/destination'}>01 Destination</NavLink>
        <NavLink to={'/crew'}>02 Crew</NavLink>
        <NavLink to={'/technology'}>03 Technology</NavLink>
      </>
    
  )
}

export default Navbar
