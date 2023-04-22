import { useState } from 'react';
import statecity from '../Data/StateCity.json';
import sport from '../Data/SportsList.json';

function GroundListing() {
  const [stateId, setstateId] = useState('');
  const [city, setcity] = useState([]);
  const [cityId, setcityId] = useState('');

  const handlestate=(e)=>{
    const getstateId = e.target.value;
    const getcitydata = statecity.find(state => state.state_code===getstateId).cities;
    setcity(getcitydata);
    console.log();
  }
  
  const handlecity=(e)=>{
    const getcityId = e.target.value;
  }
  
  const handlesports=(e)=>{
    const getsportsId = e.target.value;
    const getsports = sport.find(sport => sport).sports_name;
  }

    return (
        <>

        <div className="flex items-center justify-center m-10" role="group">
        <select name='state' className='px-4 py-2 m-5 text-sm font-medium text-black bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' id='state' onChange={(e) => handlestate(e)}>
              <option value=''>Select a State</option>

              {statecity.map((getstate, index) => (
                <option value={getstate.state_code} key={index}>{getstate.state_name}</option>
              ))}

            </select>

            <select name='city' id='city' className='px-4 m-5 py-2 text-sm font-medium text-black bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' onChange={(e) => handlecity(e)}>
              <option value={''}>Select a City</option>

              {city.map((getcity, index) => (
                <option value={getcity.city_code} key={index}>{getcity.city_name}</option>
              ))}

            </select>

            <select name='sports' id='sports' className='px-4 m-5 py-2 text-sm font-medium text-white bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-gray focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-black dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' onChange={(e) => handlesports(e)}>
              <option value={''}>Select a Sport</option>

              {sport.map((getsports, index) => (
                <option value={getsports.sports_id} key={index}>{getsports.sports_name}</option>
              ))}

            </select>
        </div>

        <div className="flex items-center justify-center m-10" role="group">
        <select name='state' className='px-4 py-2 m-5 visibility: hidden text-sm font-medium text-black bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' id='state' onChange={(e) => handlestate(e)}>
              <option value=''>Select a State</option>

              {statecity.map((getstate, index) => (
                <option value={getstate.state_code} key={index}>{getstate.state_name}</option>
              ))}

            </select>

            <select name='city' id='city' className='px-4 visibility: hidden m-5 py-2 text-sm font-medium text-black bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' onChange={(e) => handlecity(e)}>
              <option value={''}>Select a City</option>

              {city.map((getcity, index) => (
                <option value={getcity.city_code} key={index}>{getcity.city_name}</option>
              ))}

            </select>

            <select name='sports' id='sports' className='visibility: hidden px-4 m-5 py-2 text-sm font-medium text-white bg-black border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-gray focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-black dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700' onChange={(e) => handlesports(e)}>
              <option value={''}>Select a Sport</option>

              {sport.map((getsports, index) => (
                <option value={getsports.sports_id} key={index}>{getsports.sports_name}</option>
              ))}

            </select>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
            </div>
      
  {/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img > </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img> </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img > </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img> </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img> </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img></img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img > </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img > </img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div> */}
  
</>
    );
}

export default GroundListing;