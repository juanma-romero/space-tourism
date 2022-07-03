import datos from '../data.json'

const Europa = () => {
  //pull data from data.json
  const dataEuropa = datos.destinations[2]
   
  return (
    <>
    
    <div>{dataEuropa.name}</div>
    
      <p>Description: {dataEuropa.description} </p>
      <p>Distance: {dataEuropa.distance}</p>
      <p>Travel: {dataEuropa.travel}</p>

    </>
  )
}

export default Europa