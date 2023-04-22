import { useState } from "react";
import { firestore } from "../Data/fire";
import { addDoc, collection } from "@firebase/firestore";
import statecity from "../Data/StateCity.json";

function Home() {
  const state = useState();
  const sport = useState();
  const [city, setcity] = useState([]);
  const ref = collection(firestore, "stadium");

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(getstateId);
    let data = {
      statename: state.current.value,
      cityname: city.current.value,
      sportname: sport.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-50">
      <form onSubmit={handleSave}>
      <>
        <div className="inline-flex rounded-md shadow-sm">
          <input
            ref = {state}
            aria-current="page"
            placeholder="Enter State Name"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
          </input>
          <input
            ref = {city}
            placeholder="Enter City Name"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
          </input>
          <input
            ref = {sport}
            placeholder="Enter Sport Name"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
          </input>
        </div>
        <button type="Submit" className="bg-indigo-100">
          Submit
        </button>
        </>
      </form>
    </div>
  );
}

export default Home;
