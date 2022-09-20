import Navbar from './Navbar'
import datos from '../data.json'
import { useState, useEffect } from 'react'

const Crew = () => {
  const [crew, setCrew] = useState(datos.crew[0])

  useEffect(() => {
    document.body.style.backgroundImage = "url(/src/assets/crew/background-crew-desktop.jpg)";
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'auto';      
  }, []) 
  
  const setOption = (number) => { 
    setCrew(datos.crew[number])
    } 
 
  return (
    <>
      <Navbar />
      <h5 className='text-1.75rem tracking-treintaRem ml-40 mt-10'><span className='font-bold opacity-25'>02</span> MEET YOUR CREW</h5>
      <div className='flex'>
        <div className='flex flex-col ml-40 grid-cols-2 grid-rows-4'>       
          <h4 className=' text-2rem opacity-50 font-bellefair my-2'>{crew.role.toUpperCase()}</h4>
          <h2 className='nameCrew text-3.5rem font-bellefair my-2'>{crew.name.toUpperCase()}</h2>
          <p className='text-celestito font-barlow w-444 tracking-wide text-lg my-2'>{crew.bio}</p>
          <div className='row-start-4 col-start-1 row-end-5 col-end-2 my-10'>
            <button className='buttonSelec button1 ml-5' onClick={()=>setOption(0)}></button>
            <button className='buttonSelec button2 ml-5' onClick={()=>setOption(1)}></button>
            <button className='buttonSelec button3 ml-5' onClick={()=>setOption(2)}></button>
            <button className='buttonSelec button4 ml-5' onClick={()=>setOption(3)}></button>
          </div>
        </div>
        <div>
          <img className='imageCrew ml-10' src={crew.images.webp}/>
        </div> 
      </div>
    </>
  )
}

export default Crew