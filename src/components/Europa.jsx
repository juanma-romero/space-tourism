import datos from '../data.json'
import europa from '../assets/destination/image-europa.png'

const Europa = () => {
  //pull data from data.json
  const dataEuropa = datos.destinations[2]
   
  return (
    <>
    <img src={europa} />
    <div>{dataEuropa.name}</div>
    
      <p>Description: {dataEuropa.description} </p>
      <p>Distance: {dataEuropa.distance}</p>
      <p>Travel: {dataEuropa.travel}</p>

    </>
  )
}

export default Europa