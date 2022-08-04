import datos from '../data.json'
import moon from '../assets/destination/image-moon.png'


const Moon = () => {
  
  const dataMoon = datos.destinations[0]
   
  return (
    <>
    <img src={moon} />
    <div>{dataMoon.name}</div>
    
      <p>Description: {dataMoon.description} </p>
      <p>Distance: {dataMoon.distance}</p>
      <p>Travel: {dataMoon.travel}</p>

    </>
  )
}

export default Moon