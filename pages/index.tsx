import type { NextPage } from "next";
import Head from "next/head";
import FrostCard from "../components/FrostCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import InfoSection from "../components/InfoSection";
import FadeInSection from "../components/FadeInSection";

const Home: NextPage = () => {
  const infiniteLoopContent = (
    <>
      <span>USDC</span>
      <span>USDT</span>
      <span>UST</span>
      {/* <span className=" border border-black rounded-xl p-2 mx-2">
        EOS<b>2.44</b>
      </span>
      <span className=" border border-black rounded-xl p-2 mx-2">
        USDT<b>1.01</b>
      </span> */}
      {/* <span>
        LTC<b>32.61</b>
      </span>
      <span>
        XLM<b>0.10</b>
      </span>
      <span>
        TRX<b>0.03</b>
      </span>
      <span>
        BSV<b>74.29</b>
      </span>
      <span>
        ADA<b>0.04</b>
      </span> */}
    </>
  );
  return (
    <div className="body-wrapper">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background">
        {[...Array(20)].map((_, key) => (
          <span key={key}></span>
        ))}
      </div>
      <div className={`foreground `}>
        <Navbar />

        <div className="max-w-7xl mx-auto md:p-0 p-4">
          <FadeInSection direction="bottom">
            <div className="font-bold text-5xl md:text-7xl mt-16">
              One $BUCK
            </div>
            <div className="mt-2 font-bold text-5xl md:text-7xl ">
              to represent them all
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="mt-5 text-left text-lg md:text-3xl font-medium text-gray-700">
              A single stablecoin to use across the Solana ecosystem
            </div>
          </FadeInSection>
          <div className="mt-16 text-center">
            <button className="p-4 bg-black text-white font-bold  backdrop-filter backdrop-blur-lg shadow-xl">
              Get Bucket
            </button>
          </div>
          {/* <FrostCard noPadding={true} className="max-w-lg my-16 mx-auto py-2">
            <div className="max-w-2xl mx-auto relative marquee-container block">
              <div className="marquee flex justify-around">
                {infiniteLoopContent}
              </div>
              <div className="marquee marquee2 flex justify-around">
                {infiniteLoopContent}
              </div>
            </div>
          </FrostCard> */}

          <div className="h-16"></div>
          <FadeInSection direction="bottom">
            <div className="text-3xl md:text-4xl mb-8 font-bold">
              Why $BUCK?
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            {infoSectionData.map((data, key) => (
              <div key={key}>
                <InfoSection
                  title={data.title}
                  content={data.content}
                  className={`${key != 0 && "pt-8"}`}
                />
              </div>
            ))}
          </FadeInSection>
          <div className="h-16"></div>
        </div>
        <FadeInSection direction="right">
          <div className="text-2xl md:text-3xl font-bold text-center mb-4">
            Supported Solana Stablecoins
          </div>
        </FadeInSection>
        <FadeInSection direction="bottom">
          <div className="bg-white w-full bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="max-w-7xl mx-auto md:p-0 p-4">
              <div className=" h-36 grid grid-cols-4">
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/coins/usdc.svg"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/coins/usdt.svg"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/coins/ust.svg"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/coins/uxd.png"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection direction="bottom">
          <div className="max-w-7xl mx-auto md:p-0 p-4">
            {/* <div className="text-3xl md:text-4xl mb-8 mt-16 font-bold">
            How it works
          </div> */}
            <div>
              <div className="mt-16 text-center text-xl md:text-3xl  mx-auto text-gray-700">
                <div>Use bucket across the defi ecosystem</div>
                <div className="mt-2">
                  Maintain{" "}
                  <span className="text-black">
                    lower concentrated stable risk
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-black">Earn additional yield</span>{" "}
                  without losing spending power
                </div>
                <div className="mt-2">
                  Integrate bucket into your protocol to{" "}
                  <span className="text-black">maintain one stablecoin</span>{" "}
                  account instead of dozens
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection direction="right">
          <div className="text-2xl md:text-3xl font-bold text-center mt-16 mb-4">
            Built on top of
          </div>
        </FadeInSection>
        <FadeInSection direction="bottom">
          <div className="bg-white w-full bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="max-w-7xl mx-auto md:p-0 p-4">
              <div className=" h-36 grid grid-cols-4">
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/assets/crate.svg"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/assets/pyth.svg"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/assets/saber.png"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
                <div className=" flex items-center mx-auto">
                  <Image
                    src="/assets/anchor.png"
                    alt="usdc"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className=" bucket-gradient w-full bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div className="max-w-7xl mx-auto md:p-0 p-4">
            <FadeInSection direction="right">
              <div className="text-xl md:text-3xl font-bold text-center py-32">
                Start using Bucket today.
              </div>
            </FadeInSection>
          </div>
        </div>
        {/* <div className="h-16"></div>
        <div className="h-16"></div>
        <div className="h-16"></div> */}
      </div>
      <div className="shadow-bg false"></div>
    </div>
  );
};

const infoSectionData = [
  {
    title: "Users",
    content: [
      "The founders of Saber have repeatedly mentioned that Saber is an infrastructure protocol, not an app. While projects like CASH have enabled liquidity providers to create an LP-pegged stablecoin, we propose an inverse user process. Instead of funneling LPs into a reserve, we funnel the much larger base of DeFi users and newcomers into becoming LPs.",
      `Concretely, users can convert their respective stablecoins, and we will generate yield automatically through means such as Liquidity Provisions. This approach benefits downstream stable swap protocols like Saber by providing more concentrated liquidity. It also improves the upstream stablecoins${"'"} utility.`,
    ],
  },
  {
    title: "Platforms & Protocols",
    content: [
      "BUCKET is an aggregation layer on top of existing stablecoins, similar to a stablecoin ETF. As more stablecoins enter the ecosystem, BUCKET will sit at the top of the funnel to analyze the respective risks and utilities of each stablecoin and incorporate them as their risks become better understood.",
      "On top of these long-tail stablecoins, there is a range of wrapped stablecoins, such as different bridged versions of UST that fragment liquidity. BUCKET can incorporate them under one umbrella and issue one canonical mint. Speaking to DEXs and DeFi protocols across Solana, it became clear that USDC will remain the default medium of exchange for a while. The lack of liquidity and certainty around long-tail stablecoins prevents these protocols from adding most non-custodial stablecoins.",
    ],
  },
];

export default Home;
