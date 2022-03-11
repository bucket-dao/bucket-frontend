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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Video by Uzunov Rostislav: https://www.pexels.com/video/digital-animation-of-colorful-tape-rolls-10613972/
// Video by cottonbro: https://www.pexels.com/video/high-speed-photography-of-colorful-ink-diffusion-in-water-9669111/
// Video by cottonbro: https://www.pexels.com/video/close-up-shot-of-water-droplets-falling-onto-a-calm-water-9667531/
// Video by ROMAN ODINTSOV: https://www.pexels.com/video/scenic-footage-of-countryside-during-dawn-4652096/

const intensity = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const tones = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];
const selectIndex = (max: number) => Math.floor(Math.random() * max);

const Home: NextPage = () => {
  return (
    <div className="body-wrapper">
      <Head>
        <title>Bucket</title>
        <meta name="description" content="Bucket Stablecoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background">
        {[...Array(20)].map((_, key) => (
          <span key={key}></span>
        ))}
      </div>
      <div className={`foreground`}>
        <Navbar />

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <Heading />
          {/* <WalletMultiButton startIcon={null as any}>
            Get Bucket 🪣
          </WalletMultiButton> */}
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
