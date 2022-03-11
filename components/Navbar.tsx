const Navbar = () => {
  return (
    <nav className="sticky bg-white/90 top-0 z-50 md:border-b-[1px] md:border-gray-300">
      <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-4 md:py-4 flex flex-wrap justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="self-center text-3xl font-normal whitespace-nowrap flex">
            Bucket <span className="block md:hidden ml-2">🪣</span>
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={link.url}
                    className="text-gradient block py-2 pr-4 pl-3 text-base font-normal rounded md:bg-transparent md:p-0"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/bucket_sol",
  },
  {
    name: "Github",
    url: "https://github.com/orgs/bucket-dao",
  },
  {
    name: "Litepaper",
    url: "#",
  },
];

export default Navbar;
