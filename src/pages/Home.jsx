import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div className='line absolute'></div>
      <Navbar />
      <main>
        <h2>So, you want to travel to</h2>
        <h1 className='text-[150px]'>Space</h1>
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