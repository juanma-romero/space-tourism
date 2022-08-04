import datos from '../data.json'
import titan from '../assets/destination/image-titan.png'

const Titan = () => {
  //pull data from data.json
  const dataTitan = datos.destinations[3]
   
  return (
    <>
    <img src={titan} />
    <div>{dataTitan.name}</div>
    
      <p>Description: {dataTitan.description} </p>
      <p>Distance: {dataTitan.distance}</p>
      <p>Travel: {dataTitan.travel}</p>

    </>
  )
}

export default Titan