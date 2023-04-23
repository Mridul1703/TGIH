import { useState } from "react";
import { firestore } from "../Data/fire";
import { addDoc, collection } from "@firebase/firestore";
import stadiumDetails from "../Data/Stadiums";

function Logic() {
  const state = localStorage.query.statename;
  const city = localStorage.query.cityname;
  const sport = localStorage.query.sportname;
  console.log(state, city, sport);
  console.log("inside Logic");
}

function StadiumSearch() {
  const state = useState();
  const sport = useState();
  const [city, setcity] = useState([]);
  const ref = collection(firestore, "stadium");

  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      statename: state.current.value,
      cityname: city.current.value,
      sportname: sport.current.value,
    };
    // console.log(data);
    localStorage.setItem("query", JSON.stringify(data));
    Logic();

    try {
      addDoc(ref, data);
    } catch (e) {
      //   console.log(e);
    }
  };
  return (
    <div className="w-50">
      <form onSubmit={handleSave}>
        <div className="pt-20 flex flex-row content-between justify-center">
          <input
            ref={state}
            type="text"
            placeholder=" Your State"
            className="bg-indigo-100 text-black input input-bordered input-primary w-70 max-w-xs m-2 p-2
            focus:outline-none focus:ring focus:ring-violet-300 "
          />

          <input
            ref={city}
            type="text"
            placeholder=" Your City"
            className="bg-indigo-100 text-black input input-bordered input-primary w-70 max-w-xs m-2 p-2
            focus:outline-none focus:ring focus:ring-violet-300"
          />

          <input
            ref={sport}
            type="text"
            placeholder=" Your Sport"
            className="bg-indigo-100 text-black input input-bordered input-primary w-70 max-w-xs m-2 p-2
            focus:outline-none focus:ring focus:ring-violet-300"
          />
        </div>
        <div className="pt-5 flex flex-row content-between justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StadiumSearch;
