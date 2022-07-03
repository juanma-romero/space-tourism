import datos from '../data.json'


const Moon = () => {
  //pull data from data.json
  const dataMoon = datos.destinations[0]
   
  return (
    <>
    
    <div>{dataMoon.name}</div>
    
      <p>Description: {dataMoon.description} </p>
      <p>Distance: {dataMoon.distance}</p>
      <p>Travel: {dataMoon.travel}</p>

    </>
  )
}

export default Moon