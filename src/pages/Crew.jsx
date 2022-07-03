import Navbar from './Navbar'
import datos from '../data.json'


const Crew = () => {
  //pull data from data.json
  const dataCrew = datos.crew.map(({ name, role, bio }) => (
    <div
      key={name}
    >
      <p>Name: {name} </p>
      <p>Role: {role}</p>
      <p>Biography: {bio}</p>
    </div>
  ))
 
  return (
    <>
    <Navbar />
    <div>Crew</div>
    {dataCrew}
    

    </>
  )
}

export default Crew