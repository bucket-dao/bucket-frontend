import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

type MobileNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleDisconnect: () => void;
};

type LogoProps = {
  handleDisconnect: () => void;
};

type HamburgerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type LinksProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  mobile: boolean;
};

const Logo = ({ handleDisconnect }: LogoProps) => {
  return (
    <a onClick={handleDisconnect} className="cursor-pointer flex items-center">
      <span
        style={{ fontFamily: "Poppins" }}
        className="text-gradient self-center text-3xl font-medium whitespace-nowrap flex"
      >
        Bucket <span className="block md:hidden ml-2">🪣</span>
      </span>
    </a>
  );
};

const Links = ({ open, setOpen, mobile }: LinksProps) => {
  const handleClick = () => {
    if (mobile) {
      setTimeout(() => {
        setOpen(!open);
      }, 100);
    }
  };
  return (
    <div
      className={`w-full ${mobile ? "md:hidden" : "hidden md:block"} md:w-auto`}
      id="mobile-menu"
    >
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a
                style={{ fontFamily: "Poppins" }}
                target="_blank"
                rel="noreferrer"
                href={link.url}
                className={`${
                  mobile
                    ? "text-xl font-medium my-4"
                    : "pr-4 pl-3 text-base font-normal py-2 md:p-0"
                }   text-gradient block rounded md:bg-transparent `}
                onClick={handleClick}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  return (
    <div
      className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span
        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-3.5" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
          open ? "w-0" : "w-full"
        }`}
      />
      <span
        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      />
    </div>
  );
};

function MobileNav({ open, setOpen, handleDisconnect }: MobileNavProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div
        onClick={() =>
          setTimeout(() => {
            setOpen(!open);
          }, 100)
        }
        className="flex items-center pl-4 filter drop-shadow-md bg-white h-20"
      >
        <Logo handleDisconnect={handleDisconnect} />
      </div>

      <div className="flex flex-col ml-4">
        <Links open={open} setOpen={setOpen} mobile={true} />
      </div>
    </div>
  );
}

const Navbar = () => {
  const wallet = useWallet();
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
        <MobileNav
          open={open}
          setOpen={setOpen}
          handleDisconnect={handleDisconnect}
        />
        <Logo handleDisconnect={handleDisconnect} />
        <Hamburger open={open} setOpen={setOpen} />
        <Links open={open} setOpen={setOpen} mobile={false} />
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
