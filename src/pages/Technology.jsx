import datos from '../data.json'
import Navbar from './Navbar'
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg'

const Technology = () => {
  //pull data from data.json
  
  const dataTech = datos.technology.map(({ name, description }) => (
    <div
      key={name}
    >
      <p>{name} </p>
      <p>{description}</p>
      
    </div>
  ))
 
  return (
    <>
    <Navbar />
    <div>03 SPACE LAUNCH 101</div>
    <p>THE TERMINOLOGY...</p>
    <img src={launch} />
    {dataTech[0]}
    

    </>
  )
}

export default Technology