import datos from '../data.json'
import moon from '../assets/destination/image-moon.png'
import { NavLink} from 'react-router-dom'
import { useEffect } from 'react'

const Moon = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url(/src/assets/destination/background-destination-desktop.jpg)";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'cover';    
  }, [])
  const dataMoon = datos.destinations[0]
 
  let activeStyle2 = {
    paddingBottom: '12px',
    borderBottom:'1px solid white',
    color: 'white',
  }

  return (
    <div className='flex gap-40'>
      <img className='mt-20 ml-56 ' src={moon} />
      <div className='dataPlanet'>
        <nav>
          <NavLink 
            to='/destination' 
            style={({ isActive }) =>
              isActive ? activeStyle2 : undefined
            }><span className='linkPanet linkPanet1 inline font-barlow text-celestito'>MOON</span></NavLink>
          <NavLink 
             style={({ isActive }) =>
             isActive ? activeStyle2 : undefined
           }
            to='/destination/mars'><span className='linkPanet linkPanet2 inline ml-8 font-barlow text-celestito'>MARS</span></NavLink>
          <NavLink 
             style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to='/destination/europa'><span className='linkPanet linkPanet3 inline ml-8 font-barlow text-celestito'>EUROPA</span></NavLink>
          <NavLink 
             style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to='/destination/titan'><span className='linkPanet linkPanet5 inline ml-8 font-barlow text-celestito'>TITAN</span></NavLink>
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