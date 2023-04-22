import logo from "../static/sportzy_logo.png";

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          rel="noreferrer"
          href="https://www.google.com"
          target="_blank"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img width="40" height="40" alt="" src={logo}></img>
          <span className="ml-3 text-xl">Sportzy</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            rel="noreferrer"
            href="https://www.google.com"
            target="_blank"
            className="mr-5 hover:text-gray-900"
          >
            Home
          </a>
          <a
            rel="noreferrer"
            href="https://www.google.com"
            target="_blank"
            className="mr-5 hover:text-gray-900"
          >
            About
          </a>
          <a
            rel="noreferrer"
            href="https://www.google.com"
            target="_blank"
            className="mr-5 hover:text-gray-900"
          >
            Third Link
          </a>
          <a
            rel="noreferrer"
            href="https://www.google.com"
            target="_blank"
            className="mr-5 hover:text-gray-900"
          >
            Fourth Link
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
