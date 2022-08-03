import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div className='line absolute z-10'></div>
      <Navbar />
      <main className='mt-28 ml-40'>
        <h5 className='text-[28px]'>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className='text-[150px]'>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>        
      </main>
      <aside>Explore</aside>
      
    </>
  )
}

export default Home