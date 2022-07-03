import datos from '../data.json'

const Mars = () => {
  //pull data from data.json
  const dataMars = datos.destinations[1]
   
  return (
    <>
    
    <div>{dataMars.name}</div>
    
      <p>Description: {dataMars.description} </p>
      <p>Distance: {dataMars.distance}</p>
      <p>Travel: {dataMars.travel}</p>

    </>
  )
}

export default Mars