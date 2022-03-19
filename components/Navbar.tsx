import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const wallet = useWallet();
  const router = useRouter();
  const handleDisconnect = () => {
    if (wallet) {
      wallet.disconnect().then(() => {
        router.push("/");
      });
    }
  };
  return (
    <nav className="sticky px-4 md:p-0 bg-white/90 top-0 z-50 md:border-b-[1px] md:border-gray-300">
      <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-4 md:py-4 flex flex-wrap justify-between items-center">
        <a
          onClick={handleDisconnect}
          className="cursor-pointer flex items-center"
        >
          <span
            style={{ fontFamily: "Poppins" }}
            className="text-gradient self-center text-3xl font-medium whitespace-nowrap flex"
          >
            Bucket <span className="block md:hidden ml-2">🪣</span>
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <a
                    style={{ fontFamily: "Poppins" }}
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
    url: "https://docs.google.com/document/d/1_GOjncQYXdtBtDilnhC1_wZllG9nEKJgOS7xX4IV2H4/",
  },
];

export default Navbar;
