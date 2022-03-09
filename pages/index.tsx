import type { NextPage } from "next";
import Head from "next/head";
import FrostCard from "../components/FrostCard";
import Navbar from "../components/Navbar";
import Image from "next/image";
import InfoSection from "../components/InfoSection";
import FadeInSection from "../components/FadeInSection";
import BlurImage from "../components/BlurImage";

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
          <div className="h-16"></div>
          <FadeInSection direction="bottom">
            <div className="mt-16 text-center">
              <button className="p-4 bg-gray-600 cursor-default text-white font-bold  backdrop-filter backdrop-blur-lg ">
                <span className="text-gray-200 ">Get Bucket</span>
              </button>
            </div>
          </FadeInSection>
          <div className="h-16"></div>
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
          <div className="h-16"></div>
          <div className="h-16"></div>
        </div>
        <FadeInSection direction="right">
          <div className="text-2xl md:text-3xl font-bold text-center mb-8">
            Supported Solana Stablecoins
          </div>
        </FadeInSection>
        <FadeInSection direction="bottom">
          <div className="bg-white blur-box w-full bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="max-w-7xl mx-auto md:p-0 p-4">
              <div className=" h-44 grid grid-cols-4">
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/coins/usdc.svg"
                      alt="usdt"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">USDC</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/coins/usdt.svg"
                      alt="usdt"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">USDT</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/coins/ust.svg"
                      alt="ust"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">UST</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/coins/uxd.png"
                      alt="uxd"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">UXD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <div className="h-16"></div>
        <div className="max-w-7xl mx-auto">
          <div className="h-16"></div>
          <FadeInSection direction="bottom">
            <div className="text-3xl md:text-4xl mb-8 font-bold">
              Why $BUCK?
            </div>
          </FadeInSection>
          {infoSectionData.map((data, key) => (
            <div key={key}>
              <InfoSection
                title={data.title}
                content={data.content}
                className={`${key != 0 && "pt-8"}`}
              />
            </div>
          ))}
        </div>
        <div className="h-16"></div>
        <FadeInSection direction="right">
          <div className="text-2xl md:text-3xl font-bold text-center mt-16 mb-8">
            Built on top of
          </div>
        </FadeInSection>
        <FadeInSection direction="bottom">
          <div className="bg-white blur-box w-full bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="max-w-7xl mx-auto md:p-0 p-4">
              <div className="h-44 grid grid-cols-4">
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/assets/crate.svg"
                      alt="crate"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">Crate</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/assets/pyth.svg"
                      alt="pyth"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">Pyth</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/assets/saber.png"
                      alt="saber"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">Saber</div>
                  </div>
                </div>
                <div className=" flex items-center mx-auto">
                  <div>
                    <BlurImage
                      src="/assets/anchor.png"
                      alt="anchor"
                      height={100}
                      width={100}
                    />
                    <div className="font-medium text-center mt-2">Anchor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="blur-box bucket-gradient w-full bg-opacity-40 backdrop-filter backdrop-blur-lg">
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
      "On top of these long-tail stablecoins, there is a range of wrapped stablecoins, such as different bridged versions of UST that fragment liquidity. BUCKET can incorporate them under one umbrella and issue one canonical mint.",
      "Speaking to DEXs and DeFi protocols across Solana, it became clear that USDC will remain the default medium of exchange for a while. The lack of liquidity and certainty around long-tail stablecoins prevents these protocols from adding most non-custodial stablecoins.",
    ],
  },
];

export default Home;
