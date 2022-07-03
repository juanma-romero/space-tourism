import datos from '../data.json'
import Navbar from './Navbar'

const Technology = () => {
  //pull data from data.json
  const dataTech = datos.technology.map(({ name, description }) => (
    <div
      key={name}
    >
      <p>Name: {name} </p>
      <p>Description: {description}</p>
      
    </div>
  ))
 
  return (
    <>
    <Navbar />
    <div>Technology</div>
    {dataTech}
    

    </>
  )
}

export default Technology