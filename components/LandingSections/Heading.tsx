import FadeInSection from "../FadeInSection";

const Heading = () => {
  return (
    <>
      <FadeInSection direction="right">
        <div className="font-bold text-5xl md:text-7xl mt-12 sm:mt-20 md:mt-60">
          A <span className="offset--text--underline">single</span> stablecoin
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
    </>
  );
};

export default Heading;
