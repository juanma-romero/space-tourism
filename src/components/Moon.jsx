import datos from '../data.json'
import moon from '../assets/destination/image-moon.png'
import { Link } from 'react-router-dom'


const Moon = () => {
  
  const dataMoon = datos.destinations[0]
   
  return (
    <div className='flex gap-40'>
      <img className='mt-20 ml-56 ' src={moon} />
      <div className='dataPlanet'>
        <nav>
          <Link to='/destination'><p className='linkPanet linkPanet1 inline font-barlow text-celestito'>MOON</p></Link>
          <Link to='mars'><p className='linkPanet linkPanet2 inline ml-8 font-barlow text-celestito'>MARS</p></Link>
          <Link to='europa'><p className='linkPanet linkPanet3 inline ml-8 font-barlow text-celestito'>EUROPA</p></Link>
          <Link to='europa'><p className='linkPanet linkPanet4 inline ml-8 font-barlow text-celestito'>EUROPA</p></Link>
          <Link to='titan'><p className='linkPanet linkPanet5 inline ml-8 font-barlow text-celestito'>TITAN</p></Link>
        </nav>        
        <h2 className='font-bellefair text-6.25Rem'>{dataMoon.name.toUpperCase()}</h2>      
        <p className='descPlanet text-celestito text-lg leading-8 font-barlow'>{dataMoon.description}</p>
        
        <div className='dataTravel flex justify-between'>
          <div className='mt-7'>
            <h5 className='text-celestito'>AVG. DISTANCE</h5>
            <h6 className='mt-3 text-1.75rem font-bellefair'>{dataMoon.distance}</h6>
          </div>
          <div className='mt-7 '>
            <h5 className='text-celestito'>EST. TRAVEL TIME</h5>
            <h6 className='mt-3 text-1.75rem font-bellefair'>{dataMoon.travel}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon