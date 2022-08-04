import datos from '../data.json'


const Moon = () => {
  
  const dataMoon = datos.destinations[0]
   
  return (
    <div className='homePage'>
    
    <div>{dataMoon.name}</div>
    
      <p>Description: {dataMoon.description} </p>
      <p>Distance: {dataMoon.distance}</p>
      <p>Travel: {dataMoon.travel}</p>

    </div>
  )
}

export default Moon