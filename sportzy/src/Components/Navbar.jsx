import logo from "../static/sportzy_logo.png";
// import { signInWithGoogle } from "../authentication";
 const press = () => {
  window.alert("This feature is coming soon");
 }

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-indigo-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          rel="noreferrer"
          href="/"
          className="flex title-font font-medium items-center text-indigo-600 mb-4 md:mb-0"
        >
          <img width="40" height="40" alt="" src={logo}></img>
          <span className="ml-3 text-xl">Sportzy</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            rel="noreferrer"
            href="/"
            className="mr-5 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            rel="noreferrer"
            href="about-us"
            className="mr-5 hover:text-indigo-600"
          >
            About Us
          </a>
          <a
            rel="noreferrer"
            href="/stadiums"
            className="mr-5 hover:text-indigo-600"
          >
            Book Now
          </a>
          <button
            rel="noreferrer"
            onClick={press}
            target="_blank"
            className="mr-5 hover:text-indigo-600"
          >
            Learn
          </button>
        </nav>
        {/* <button id = "loginBtn" onClick={signInWithGoogle} className="text-white inline-flex items-center bg-indigo-600 hover:text-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-white  rounded text-base mt-4 md:mt-0">
          Log in
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}

export default Navbar;
