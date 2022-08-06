import datos from '../data.json'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Technology = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url(/src/assets/technology/background-technology-desktop.jpg)";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'cover';    
  }, [])

  const [tech, setTech] = useState(datos.technology[0]);
 
  const setOption = (number) => {setTech(datos.technology[number])}
  
  return (
    <>
      <Navbar />
      <h5 className='text-1.75rem tracking-treintaRem ml-40 mt-20'><span className='font-bold opacity-25'>03</span> SPACE LAUNCH 101</h5>
      
      <div className='flex justify-center items-center gap-20'>
        <div>
          <button className='buttonSpace mt-8 block font-bellefair text-2rem' onClick={()=>setOption(0)}>1</button>
          <button className='buttonSpace mt-8 block font-bellefair text-2rem' onClick={()=>setOption(1)}>2</button>
          <button className='buttonSpace mt-8 block font-bellefair text-2rem' onClick={()=>setOption(2)}>3</button>
        </div>
        <div>
          <p className='text-celestito'>THE TERMINOLOGY...</p>
          <h2>{tech.name.toUpperCase()}</h2>
          <p className='text-celestito font-barlow w-444 tracking-wide text-lg'>{tech.description}</p>
        </div>      
        <img src={tech.images.portrait} />
      </div>
    </>
  )
}

export default Technology