import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Destination = () => {
  return (
    <>
      <Navbar />
      <div>Destination</div>
      <Outlet />
    </>
  )
}

export default Destination