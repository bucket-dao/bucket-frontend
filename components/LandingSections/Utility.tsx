import FadeInSection from "../FadeInSection";

const Utility = () => {
  return (
    <>
      <FadeInSection direction="right">
        <div className="max-w-7xl mx-auto mt-8 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl ">
            UTILITY <span className="text-purple-500">ACROSS</span> THE <br />
            ECOSYSTEM
          </h1>

          <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
            As more protocols and platforms integrate Bucket, users will be able
            to directly use $BUCK. No additional swaps required. Further, $BUCK
            is an SPL token. So, users can do anything they would normally do
            with any other fungible token.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection direction="left">
        <div className="max-w-7xl mx-auto mt-8 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl ">
            LOWER <br />
            CONCENTRATED <span className="text-green-500">RISK</span>
          </h1>

          <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
            Since $BUCK is collateralized by a variety of USD pegged
            stablecoins, uses can implicitly distribute their risk. If one
            stablecoin drops in value, bucket provides an additional layer of
            protection.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection direction="right">
        <div className="max-w-7xl mx-auto mt-8 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl ">
            <span className="text-rose-500">ADDITIONAL</span> YIELD,
            <br />
            IN THE BACKGROUND
          </h1>

          <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
            Large pools of idle assets are inefficient. Bucket protocol can earn
            yield with underlying assets through different yield generating
            methods based on dynamic risk profiles. These methods include
            overcollaterized loans, liquidity provision, liquid staking, and
            more.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection direction="left">
        <div className="max-w-7xl mx-auto mt-8 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl ">
            MORE <span className="text-blue-500">LIQUIDITY</span>,<br /> BETTER
            FOR EVERYONE
          </h1>

          <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
            Liquidity fragmentation is problematic for users and protocols.
            Concentrating liquidity into a single representation of isomorphic
            assets can improve experiences when swapping on DEXs, protocols need
            to cross-margin accounts in a common token, and more.
          </p>
        </div>
      </FadeInSection>
    </>
  );
};

export default Utility;
