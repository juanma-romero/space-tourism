import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'


const Destination = () => {
  return (
    <>
      <Navbar />
      <div>Destination</div>
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