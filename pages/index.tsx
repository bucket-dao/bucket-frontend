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
      {/* <div className="background">
        {[...Array(20)].map((_, key) => (
          <span key={key}></span>
        ))}
      </div> */}
      <div className={`foreground`}>
        <Navbar />

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <Heading />
          <hr className="my-20 lg:my-24" />

          <Stablecoins />
          <Utility />
        </div>

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <Partners />

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <HowItWorks />

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-20 lg:my-24" />
        </div>

        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
