import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <a href='destination' className='backExplore'></a>
      <div className='line absolute z-10'></div>
      <Navbar />
      <div className='main flex justify-around mr-8 mt-96 items-end'>
        <main className=' '>
          <h5 className='text-1.75rem sublineMain'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='text-10xl'>SPACE</h1>
          <p className='textMain w-100 h-auto tracking-wider'>Let’s face it; if you want to go to space, you might as well genuinely go to 
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