import Navbar from './Navbar';
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url(/src/assets/home/background-home-desktop.jpg)";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundsize = 'cover';    
  }, [])
  return (
    <>   
      {/* background when hover on 'Explore' text (line 20) */}
      <a href='destination' className='backExplore'></a>
      
      <Navbar />
      <div className='main flex justify-around mr-8 mt-60 items-end'>
        <main className=' '>
          <h5 className='text-1.75rem sublineMain'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='text-10xl font-bellefair'>SPACE</h1>
          <p className='textMain w-100 h-auto tracking-wider font-barlow'>Let’s face it;
           if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>        
        </main>
        <div className='explore'><h4 className='exploreText'>Explore</h4></div>
      </div>
      
    </>
  )
}

export default Home