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
<div class="relative inline-block text-left mx-5">
      <form method="POST" action="#" role="none">
      <select name='state' style={{backgroundColor: "#36454F"}} className='text-white text-center p-2  rounded m-3' id='state' onChange={(e) => handlestate(e)}>
              <option value=''>Select a State</option>

              {statecity.map((getstate, index) => (
                <option value={getstate.state_code} key={index}>{getstate.state_name}</option>
              ))}

            </select>
      </form>
    </div>

  <div class="relative inline-block text-left">
      <form method="POST" action="#" role="none">
      <select name='city' id='city' onChange={(e) => handlecity(e)}>
              <option value={''}>Select a City</option>

              {city.map((getcity, index) => (
                <option value={getcity.city_code} key={index}>{getcity.city_name}</option>
              ))}

            </select>
      </form>
    </div>

  <div class="relative inline-block text-left">
      <form method="POST" action="#" role="none">
      <select name='sports' id='sports' onChange={(e) => handlesports(e)}>
              <option value={''}>Select a Sport</option>

              {sport.map((getsports, index) => (
                <option value={getsports.sports_id} key={index}>{getsports.sports_name}</option>
              ))}

            </select>
      </form>
    </div>

{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"> </img>

          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a href='https://google.com' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Book Now
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</section> */}
</>
    );
}

export default GroundListing;