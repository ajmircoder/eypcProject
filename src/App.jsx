import Head from './components/Head';
import Profiles from './components/Profiles';
import Service from './components/Service';
import FeaturedWork from './components/featuredWork';

function App() {

  return (
    <>
     {/* -ms-overflow-style: none; /* for Internet Explorer, Edge scrollbar-width: none; */}
      <div className='wrapper p-3 md:p-5'>
        <div className=' scroll-div h-[95vh] overflow-y-scroll page-wrapper border border-red-700  rounded-xl'>
          <div className='p-4'>
            <Head />
            <FeaturedWork />
            <Service />
          </div>
          <Profiles />
        </div>
      </div>
    </>
  )
}

export default App
