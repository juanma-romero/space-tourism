import Navbar from './Navbar';
import { useEffect, useState } from 'react'
import RingLoader from "react-spinners/RingLoader"

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.backgroundImage = "url(src/assets/home/background-home-desktop.jpg)";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'cover';    
  }, []) 

  const color = '#36d7b7'

  return (
    <>
      <Navbar />
      <div className='main flex justify-around ml-5 mr-8 mt-20 items-end'>
        <main>
          
          <h5 className='text-1.75rem sublineMain tracking-treintaRem font-barlow'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='text-10xl font-bellefair'>SPACE</h1>
          <p className='textMain h-auto tracking-wider font-barlow'>Let’s face it;
            if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>        
        </main>
        <div className='explore grid grid-rows-1 grid-cols-1 font-bellefair'>          
          <a href='destination' className='backExplore'></a>
          <h4 className='exploreText'>Explore</h4>
        </div>
      </div>      
    </>
  )
}

export default Home

/*
<button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <RingLoader loading={loading} size={150} color={color} />
*/
