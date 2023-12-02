import Head from './components/Head';
import Service from './components/Service';
import FeaturedWork from './components/featuredWork';

function App() {

  return (
    <>
      <div className='wrapper p-3 md:p-5'>
        <div className='page-wrapper border border-red-700 p-4 rounded-xl'>
          <Head />
          <FeaturedWork />
          <Service/>
        </div>
      </div>
    </>
  )
}

export default App
