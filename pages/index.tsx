import type { NextPage } from "next";
import Head from "next/head";
import FrostCard from "../components/FrostCard";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import FadeInSection from "../components/FadeInSection";
import BlurImage from "../components/BlurImage";
import BucketCoins from "../components/BucketCoins";

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
          <FadeInSection direction="right">
            <div className="font-bold text-5xl md:text-7xl mt-12 sm:mt-20 md:mt-60">
              A <span className="offset--text--underline">single</span>{" "}
              stablecoin
              <br />
              for Solana
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="mt-5 text-left text-lg md:text-3xl font-medium text-gray-400">
              One $BUCK to represent them all
            </div>
          </FadeInSection>

          <div className="h-8 md:h-12 lg:h-16"></div>

          <div className="text-center">
            <button className="cta--button px-1 py-4 cursor-pointer  backdrop-filter backdrop-blur-lg rounded-lg">
              <span className="px-16 py-4 rounded-lg bg-white text-lg text-black font-weight-500">
                Get Bucket
              </span>
            </button>
          </div>

          <hr className="my-20 lg:my-24" />

          <FadeInSection direction="left">
            <div className="max-w-7xl mx-auto md:p-0 p-4">
              <h1 className="font-bold text-3xl md:text-5xl ">
                MANY STABLECOINS <br />
                IN <span className="text-blue-500">ONE</span>
              </h1>

              <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
                There are many versions of USD pegged stablecoins on Solana.
                Simply exchange any approved USD pegged stablecoins you hold for
                $BUCK.
              </p>
            </div>
          </FadeInSection>

          <div className="bg-white blur-box w-full bg-opacity-60 backdrop-filter backdrop-blur-lg py-4 border-y-[1px] border-slate-200 hover:border-black ease-in-out duration-500 mt-8">
            <ul className="coin--scroll--container flex flex-row overflow-x-auto flex-nowrap">
              {coins.map((coin, idx) => (
                <li key={idx} className="mx-8">
                  <BlurImage
                    className="coin--image"
                    src={coin.src}
                    alt={coin.name}
                    height={50}
                    width={50}
                  />
                  <div className="font-medium text-center mt-2">
                    {coin.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <FadeInSection direction="right">
            <div className="max-w-7xl mx-auto md:p-0 p-4 mt-8 md:mt-20">
              <h1 className="font-bold text-3xl md:text-5xl ">
                UTILITY <span className="text-purple-500">ACROSS</span> THE{" "}
                <br />
                ECOSYSTEM
              </h1>

              <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
                As more protocols and platforms integrate Bucket, users will be
                able to directly use $BUCK. No additional swaps required.
                Further, $BUCK is an SPL token. So, users can do anything they
                would normally do with any other fungible token.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="max-w-7xl mx-auto md:p-0 p-4 mt-8 md:mt-20">
              <h1 className="font-bold text-3xl md:text-5xl ">
                LOWER <br />
                CONCENTRATED <span className="text-green-500">RISK</span>
              </h1>

              <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
                Since $BUCK is collateralized by a variety of USD pegged
                stablecoins, uses can implicitly distribute their risk. If one
                stablecoin drops in value, bucket provides an additional layer
                of protection.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="max-w-7xl mx-auto md:p-0 p-4 mt-8 md:mt-20">
              <h1 className="font-bold text-3xl md:text-5xl ">
                <span className="text-rose-500">ADDITIONAL</span> YIELD,
                <br />
                IN THE BACKGROUND
              </h1>

              <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
                Large pools of idle assets are inefficient. Bucket protocol can
                earn yield with underlying assets through different yield
                generating methods based on dynamic risk profiles. These methods
                include overcollaterized loans, liquidity provision, liquid
                staking, and more.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="max-w-7xl mx-auto md:p-0 p-4 mt-8 md:mt-20">
              <h1 className="font-bold text-3xl md:text-5xl ">
                MORE <span className="text-blue-500">LIQUIDITY</span>,<br />{" "}
                BETTER FOR EVERYONE
              </h1>

              <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
                Liquidity fragmentation is problematic for users and protocols.
                Concentrating liquidity into a single representation of
                isomorphic assets can improve experiences when swapping on DEXs,
                protocols need to cross-margin accounts in a common token, and
                more.
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <FadeInSection direction="bottom">
          <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4 mt-8">
            <h1 className="font-bold text-3xl md:text-5xl">
              BUILT WITH THE
              <br />
              <span className="text-emerald-500"> BEST</span>
              <span className="text-blue-400"> IN</span>
              <span className="text-violet-500"> CLASS</span>
            </h1>

            <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
              Optimized for comosability. Built on industry leading, open-source
              software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {partnerInfo.map((pi, idx) => {
                return (
                  <div
                    key={idx}
                    className="partner--container h-48 w-80 2xl:w-96 rounded-lg border border-slate-100 ease-in-out duration-500 mt-4"
                  >
                    <div className="partner--background h-12 w-full rounded-t-lg py-2 bg-gradient-to-r">
                      <div className="text-center text-white">
                        <h1 className="text-2xl font-weight-300">{pi.name}</h1>
                      </div>
                      <div className="relative left-2 -top-4">
                        <BlurImage
                          src={pi.src}
                          alt={pi.name}
                          height={50}
                          width={50}
                        />
                      </div>
                    </div>

                    <p className="w-4/5 mx-auto my-6 text-slate-600">
                      {pi.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <div className="max-w-7xl mx-auto md:p-0 p-4">
            <h1 className="font-bold text-3xl md:text-5xl">
              HOW IT <span className="text-slate-500">WORKS</span>
            </h1>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                01
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                A user <b className="text-black">deposit</b> any pre-approved
                USD pegged stablecoin into bucket. In return, users receive an
                equal amount of $BUCK token.
              </p>
            </div>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                02
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                A user <b className="text-black">redeem</b> can return some
                portion of their $BUCK token. Users are not required to have
                previously deposited into the bucket. As long as aa user has
                $BUCK, they can redeem an equal amount of USD pegged stablecoins
                in the bucket.
              </p>
            </div>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                03
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                Bucket can <b className="text-black">approve or remove</b> USD
                pegged stablecoins based on certain factors, such as risk
                profile. Over time, this is a function that will be
                decentralized via something like DAO governence.
              </p>
            </div>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                04
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                Bucket will aim to{" "}
                <b className="text-black">maintain a specific allocation</b> for
                each USD pegged stablecoins. This allocation can be modified
                over time based on user preferences, risk profiles, and more.
              </p>
            </div>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                05
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                It's possible a stablecoin allocations move away from the target
                allocations over time. In this case, bucket will routinely check
                allocation ratios and <b className="text-black">rebalance</b>{" "}
                the stablecoins when needed.
              </p>
            </div>

            <div className="flex mt-12">
              <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
                06
              </span>

              <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
                Bucket will choose some percent of assets for{" "}
                <b className="text-black">yield generation</b>. The generated returns
                will be used to fund an insurance fund and provide returns to
                users holding $BUCK token.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-20 lg:my-24" />
        </div>

        <div className="max-w-7xl mx-auto md:p-0">
          <div className="w-fit text-xl md:text-3xl font-bold text-center mx-auto pb-32 flex flex-col md:flex-row">
            <h1 className="text-left">
              Join us in the journey
              <br /> to build the most composable
              <br /> stablecoin on Solana
            </h1>
            <button className="h-fit p-4 md:ml-6 mt-6 cursor-pointer backdrop-filter backdrop-blur-lg rounded-lg text-white bg-black text-lg text-black font-weight-500 hover:scale-105 duration-500 ease-in-out">
              Start using Bucket today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const coins = [
  {
    src: "/coins/usdc.svg",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    name: "USDT",
  },
  {
    src: "/coins/ust.svg",
    name: "UST",
  },
  {
    src: "/coins/uxd.png",
    name: "UXD",
  },
  {
    src: "/coins/usdc.svg",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    name: "USDT",
  },
  {
    src: "/coins/ust.svg",
    name: "UST",
  },
  {
    src: "/coins/uxd.png",
    name: "UXD",
  },
  {
    src: "/coins/usdc.svg",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    name: "USDT",
  },
  {
    src: "/coins/ust.svg",
    name: "UST",
  },
  {
    src: "/coins/uxd.png",
    name: "UXD",
  },
  {
    src: "/coins/usdc.svg",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    name: "USDT",
  },
  {
    src: "/coins/ust.svg",
    name: "UST",
  },
  {
    src: "/coins/uxd.png",
    name: "UXD",
  },
  {
    src: "/coins/usdc.svg",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    name: "USDT",
  },
  {
    src: "/coins/ust.svg",
    name: "UST",
  },
  {
    src: "/coins/uxd.png",
    name: "UXD",
  },
];

const partnerInfo = [
  {
    src: "/assets/augmentedLogos/solana.svg",
    name: "Solana",
    description:
      "Solana is a decentralized, fast, and low-cost blockchain built to enable scalable, user-friendly apps for the world.",
  },
  {
    src: "/assets/augmentedLogos/anchor.svg",
    name: "Anchor",
    description:
      "Anchor ⚓ is a framework for Solana’s Sealevel runtime providing several convenient developer tools.",
  },
  {
    src: "/assets/augmentedLogos/pyth.svg",
    name: "Pyth",
    description:
      "Pyth connects high-fidelity market data from the world’s largest professional traders and exchanges to any smart contract, anywhere.",
  },
  {
    src: "/assets/augmentedLogos/saber.svg",
    name: "Saber",
    description:
      "Saber is the leading cross-chain stablecoin and wrapped assets exchange on Solana.",
  },
  {
    src: "/assets/augmentedLogos/crate.svg",
    name: "Crate",
    description: "Crate is the standard for tokenized baskets on Solana.",
  },
];

export default Home;
