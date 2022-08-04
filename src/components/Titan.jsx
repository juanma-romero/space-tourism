import datos from '../data.json'
import titan from '../assets/destination/image-titan.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Titan = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url(/src/assets/destination/background-destination-desktop.jpg)";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'cover';    
  }, [])
  const dataTitan = datos.destinations[3]
   
  return (
    <div className='flex gap-40'>
      <img className='mt-20 ml-56 ' src={titan} />
      <div className='dataPlanet'>
        <nav>
          <Link to='/destination'><p className='linkPanet linkPanet1 inline font-barlow text-celestito'>MOON</p></Link>
          <Link to='/destination/mars'><p className='linkPanet linkPanet2 inline ml-8 font-barlow text-celestito'>MARS</p></Link>
          <Link to='/destination/europa'><p className='linkPanet linkPanet3 inline ml-8 font-barlow text-celestito'>EUROPA</p></Link>
          <Link to='/destination/titan'><p className='linkPanet linkPanet5 inline ml-8 font-barlow text-celestito'>TITAN</p></Link>
        </nav>        
        <h2 className='font-bellefair text-6.25Rem'>{dataTitan.name.toUpperCase()}</h2>      
        <p className='descPlanet text-celestito text-lg leading-8 font-barlow'>{dataTitan.description}</p>
        
        <div className='dataTravel flex justify-between'>
          <div className='mt-7'>
            <h5 className='text-celestito'>AVG. DISTANCE</h5>
            <h6 className='mt-3 text-1.75rem font-bellefair'>{dataTitan.distance}</h6>
          </div>
          <div className='mt-7 '>
            <h5 className='text-celestito'>EST. TRAVEL TIME</h5>
            <h6 className='mt-3 text-1.75rem font-bellefair'>{dataTitan.travel}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titan