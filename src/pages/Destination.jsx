import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'


const Destination = () => {
  return (
    <>
      <Navbar />
      <p>01 PICK YOUR DESTINATION</p>
      <nav>
        <Link to='/destination'>Moon</Link>
        <Link to='mars'>Mars</Link>
        <Link to='europa'>Europa</Link>
        <Link to='titan'>Titan</Link>
      </nav>
      <Outlet />

      
    </>
  )
}

export default Destination