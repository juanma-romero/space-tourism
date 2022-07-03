import {useEffect} from 'react'
import Navbar from './Navbar'
import datos from '../data.json'


const Crew = () => {


  const datosAca = datos.destinations.map(({ name, i }) => (
    <div
      key={i}
    >{name} </div>
  ))
 
  return (
    <>
    <Navbar />
    <div>Crew</div>
    {datosAca}
    

    </>
  )
}

export default Crew