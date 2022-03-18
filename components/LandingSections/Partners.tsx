import BlurImage from "../BlurImage";
import FadeInSection from "../FadeInSection";

const Partners = () => {
  return (
    <>
      <FadeInSection direction="bottom">
        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4 mt-8">
          <h1 className="font-bold text-3xl md:text-5xl">
            BUILT WITH THE
            <br />
            <span className="text-emerald-500"> BEST</span>
            <span className="text-blue-400"> IN</span>
            <span className="text-violet-500"> CLASS</span>
          </h1>

          <p className="relative mt-2 w-full md:w-9/12 text-lg text-slate-500">
            Optimized for composability. Built on industry leading, open-source
            software.
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {partnerInfo.map((pi, idx) => {
              return (
                <div
                  key={idx}
                  className="partner--container h-48 rounded-lg border border-slate-100 ease-in-out duration-500 mt-4"
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
    </>
  );
};

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
      "Anchor ⚓ is a framework for Solana's Sealevel runtime providing several convenient developer tools.",
  },
  {
    src: "/assets/augmentedLogos/pyth.svg",
    name: "Pyth",
    description:
      "Pyth connects high-fidelity market data from the world's largest professional traders and exchanges to any smart contract, anywhere.",
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
  {
    src: "/assets/augmentedLogos/switchboard.svg",
    name: "Switchboard",
    description:
      "Switchboard is a generalized, community-curated oracle network designed to incentivize bringing the long tail of data on-chain.",
  },
];

export default Partners;
