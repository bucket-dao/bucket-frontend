import BlurImage from "../BlurImage";
import FadeInSection from "../FadeInSection";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Stablecoins = () => {
  return (
    <>
      <FadeInSection direction="left">
        <div className="max-w-7xl mx-auto ">
          <h1 className="font-bold text-3xl md:text-5xl ">
            MANY STABLECOINS <br />
            IN <span className="text-blue-500">ONE</span>
          </h1>

          <p className="w-full md:w-9/12 relative mt-2 text-lg md:text-xl font-medium text-slate-500">
            There are many versions of USD pegged stablecoins on Solana. Simply
            exchange any approved stablecoins you hold for $BUCK. Then, you can
            treat it like any other fungible token.
          </p>
        </div>
      </FadeInSection>

      <div className="w-full mt-8">
        <div className="swipe--for--more--cta block sm:hidden -mt-6 text-gray-400 flex float-right">
          <span>Swipe</span>
          <ChevronRightIcon className="w-5 mt-1" />
        </div>
        <div className="bg-white blur-box w-full bg-opacity-60 backdrop-filter backdrop-blur-lg py-4 border-y-[1px] border-slate-200 hover:border-black ease-in-out duration-500">
          <ul className="coin--scroll--container flex flex-row overflow-x-auto flex-nowrap">
            {coins.map((coin, idx) => (
              <li key={idx} className="mx-5 min-w-[150px] first:ml-0">
                <div className="coin--image--wrapper">
                  <BlurImage
                    src={coin.src}
                    alt={coin.name}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="font-medium text-center mt-2">
                  {coin.symbol}
                </div>
                <div className="coin--name--wrapper font-small text-center mt-2">
                  {coin.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const coins = [
  {
    src: "/coins/usdc.svg",
    symbol: "USDC",
    name: "USDC",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "USDT",
    name: "USD Tether",
  },
  {
    src: "/coins/uxd.svg",
    symbol: "UXD",
    name: "UXD",
  },
  {
    src: "/coins/cashio.png",
    symbol: "CASH",
    name: "CASHIO",
  },
  {
    src: "/coins/hubble.svg",
    symbol: "USDH",
    name: "Hubble",
  },
  {
    src: "/coins/ust.svg",
    symbol: "UST",
    name: "Wormhole - Terra",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "apUSDC",
    name: "Allbridge - Polygon",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "aeUSDC",
    name: "Allbridge - Ethereum",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "aaUSDC",
    name: "Allbridge - Avalanche",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "acUSDC",
    name: "Allbridge - Celo",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "afUSDC",
    name: "Allbridge - Fantom",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "apUSDT",
    name: "Allbridge - Polygon",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "aaUSDT",
    name: "Allbridge - Avalanche",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "aeUSDT",
    name: "Allbridge - Ethereum",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "ahUSDT",
    name: "Allbridge - HECO",
  },
  {
    src: "/coins/ust.svg",
    symbol: "atUST",
    name: "Allbridge - Terra",
  },
];

export default Stablecoins;
