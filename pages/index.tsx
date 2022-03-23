import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/LandingSections/Heading";
import Stablecoins from "../components/LandingSections/Stablecoins";
import Utility from "../components/LandingSections/Utility";
import Partners from "../components/LandingSections/Partners";
import HowItWorks from "../components/LandingSections/HowItWorks";
import JoinUs from "../components/LandingSections/JoinUs";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { links } from "../utils/constant";

const Home: NextPage = () => {
  const wallet = useWallet();
  const router = useRouter();
  useEffect(() => {
    if (wallet.wallet && !wallet.publicKey) {
      wallet.connect();
    }
    if (wallet.publicKey) {
      router.push("/app");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.publicKey, wallet]);
  return (
    <div className="body-wrapper">
      <Head>
        <title>Bucket</title>
        <meta name="description" content="Bucket Stablecoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`foreground`}>
        <Navbar />
        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <Heading />
          <hr className="my-20 lg:my-24" />
          <Stablecoins />
          <Utility />
        </div>
        <Separator />
        <Partners />
        <Separator />
        <HowItWorks />
        <Separator />
        <JoinUs />
        <Separator />
        <div className="pb-32 max-w-xl justify-center flex mx-auto ">
          <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <a
                    style={{ fontFamily: "Poppins" }}
                    target="_blank"
                    rel="noreferrer"
                    href={link.url}
                    className={`pr-4 pl-3 text-base font-normal py-2 sm:p-0  text-gradient block rounded md:bg-transparent`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Separator = () => {
  return (
    <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
      <hr className="my-20 lg:my-24" />
    </div>
  );
};

export default Home;
