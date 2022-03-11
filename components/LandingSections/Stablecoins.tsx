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
            exchange any approved USD pegged stablecoins you hold for $BUCK.
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
              <div className="font-medium text-center mt-2">{coin.name}</div>
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

export default Stablecoins;
