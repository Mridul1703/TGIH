import product from "../static/product.jpg";

function Book() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product}
          ></img>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              King's Court
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mt-2">
              VolleyBall | 5v5
            </h2>

            <p className="leading-relaxed mt-2">
              <span className="font-bold">Address:</span> 225/7, Gurugram,
              Haryana<br></br>
              <span className="font-bold">Timing:</span> 18:00-19:30 25th May,
              2023<br></br>
              <br></br>
            </p>

            <span className='text-xl'>Amenities:</span>
            <ul><li>Pavilion</li></ul>
            <ul><li>Parking</li></ul>
            <ul><li>Washroom</li></ul>
            <ul><li>Changing Room</li></ul>
            <ul> <li className='text-stone-400 line-through'>WiFi</li></ul>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Team Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                2500(Per Person)
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
