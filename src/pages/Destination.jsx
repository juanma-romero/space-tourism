import { Outlet} from 'react-router-dom'
import Navbar from './Navbar'


const Destination = () => {
  return (
    <>
      <Navbar />
      <h5 className='text-1.75rem tracking-treintaRem ml-40 mt-4'>
        <span className='font-bold opacity-25'>01</span> PICK YOUR DESTINATION
      </h5>      
      <Outlet />      
    </>
  )
}

export default Destination