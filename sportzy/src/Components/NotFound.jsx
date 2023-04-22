function NotFound() {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the dugout
              </h1>
              <p class="my-2 text-gray-800">
                Sorry about that! Please visit our homepage to get where you need
                to go.
              </p>
              <a href="/stadiums" className="mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Stadiums near me
              </a>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="">
            </img>
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="">
        </img>
      </div>
    </div>
  );
}

export default NotFound;
