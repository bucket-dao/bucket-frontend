const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg px-2 sm:px-4 py-2.5  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap">
            Bucket
          </span>
        </a>
        <div className="hidden  w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/bucket_sol"
                className="text-gradient block py-2 pr-4 pl-3 text-lg rounded md:bg-transparent md:p-0"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/orgs/bucket-dao"
                className="text-gradient block py-2 pr-4 pl-3 text-lg rounded md:bg-transparent md:p-0"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gradient block py-2 pr-4 pl-3 text-lg rounded md:bg-transparent md:p-0"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="#"
                className="disabled text-gradient block py-2 pr-4 pl-3 text-lg rounded md:bg-transparent md:p-0"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
