import hero_image from "../static/hero_image.jpg";

function Hero() {
  return (
    <>
      <section className=" px-5 pt-16 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero_image}
            ></img>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Find Players and Stadiums
              <br className="hidden lg:inline-block"></br> at{" "}
              <span className="text-indigo-500">Sportzy</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Introducing Sportzy, the ultimate sports platform for players and
              sports enthusiasts!{" "}
              <ul className="list-disc ">
                <li>Book stadiums and find players around you!</li> 
                <li> Play the sport of your choice</li>
                <li>
                 Sportzy offers you an exclusive community of Sport enthusiasts
                </li>
              </ul>
            </p>
            <div className="flex justify-center">
              <a href="/stadiums" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Stadiums near me
              </a>
              {/* <button className="mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex bg-gray-100 text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Players near me
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
