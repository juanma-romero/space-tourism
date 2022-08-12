import { NavLink } from "react-router-dom";

const Navbar = () => {  
  let activeStyle = {
    paddingBottom: '2rem',
    borderBottom: '3px solid white',
    marginTop: '1.75rem'
  }

  return (
    
      <div className='navbarMain mt-12 grid grid-cols-12 grid-rows-1 items-center'>
        <NavLink className='col-start-1 ml-14' to={'/'} ><img className='logo' src='src/assets/shared/logo.svg'/></NavLink>
        <div className='line ml-12 z-10 col-start-2'></div>        
        <div className="navbar z-0 col-start-6 flex justify-center items-center">
          <NavLink to={'/'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } id='navbarLink0' className='navbarLink ml-10'><span>00</span> HOME</NavLink>
          <NavLink to={'/destination'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } id='navbarLink1' className='navbarLink ml-10'><span>01</span> DESTINATION</NavLink>
          <NavLink to={'/crew'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } id='navbarLink2' className='navbarLink ml-10'><span>02</span> CREW</NavLink>
          <NavLink to={'/technology'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } id='navbarLink3' className='navbarLink ml-10'><span>03</span> TECHNOLOGY</NavLink>
        </div>
      </div>
    
  )
}

export default Navbar
