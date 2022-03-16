import BlurImage from "../BlurImage";
import FadeInSection from "../FadeInSection";

const Stablecoins = () => {
  return (
    <>
      <FadeInSection direction="left">
        <div className="max-w-7xl mx-auto ">
          <h1 className="font-bold text-3xl md:text-5xl ">
            MANY STABLECOINS <br />
            IN <span className="text-blue-500">ONE</span>
          </h1>

          <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
            There are many versions of USD pegged stablecoins on Solana. Simply
            exchange any approved stablecoins you hold for $BUCK. Then, you can
            treat it like any other fungible token.
          </p>
        </div>
      </FadeInSection>

      <div className="bg-white blur-box w-full bg-opacity-60 backdrop-filter backdrop-blur-lg py-4 border-y-[1px] border-slate-200 hover:border-black ease-in-out duration-500 mt-8">
        <ul className="coin--scroll--container flex flex-row overflow-x-auto flex-nowrap">
          {coins.map((coin, idx) => (
            <li key={idx} className="mx-6">
              <div className="coin--image--wrapper">
                <BlurImage
                  src={coin.src}
                  alt={coin.name}
                  height={50}
                  width={50}
                />
              </div>
              <div className="font-medium text-center mt-2">{coin.symbol}</div>
              <div className="coin--name--wrapper font-small text-center mt-2">
                {coin.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const coins = [
  {
    src: "/coins/usdc.svg",
    symbol: "USDC",
    name: "USD Coin",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "USDT",
    name: "USD Tether",
  },
  {
    src: "/coins/ust.svg",
    symbol: "UST",
    name: "TerraUSD (Wormhole)",
  },
  {
    src: "/coins/uxd.svg",
    symbol: "UXD",
    name: "UXD",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "apUSDC",
    name: "USDC (Allbridge - Polygon)",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "aeUSDC",
    name: "USDC (Allbridge - Ethereum)",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "aaUSDC",
    name: "USDC (Allbridge - Avalanche)",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "acUSDC",
    name: "USDC (Allbridge - Celo)",
  },
  {
    src: "/coins/usdc.svg",
    symbol: "afUSDC",
    name: "USDC (Allbridge - Fantom)",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "apUSDT",
    name: "USD Tether (Allbridge - Polygon)",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "aaUSDT",
    name: "USD Tether (Allbridge - Avalanche)",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "aeUSDT",
    name: "USD Tether (Allbridge - Ethereum)",
  },
  {
    src: "/coins/usdt.svg",
    symbol: "ahUSDT",
    name: "USD Tether (Allbridge - HECO)",
  },
  {
    src: "/coins/ust.svg",
    symbol: "atUST",
    name: "UST (Allbridge - Terra)",
  },
];

export default Stablecoins;
