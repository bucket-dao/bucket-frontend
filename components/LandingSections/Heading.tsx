import BucketCoins from "../BucketCoins";
import FadeInSection from "../FadeInSection";

const Heading = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
        <div>
          <FadeInSection direction="right">
            <div className="font-bold  text-center md:text-left text-4xl md:text-7xl pt-16 ">
              A <span className="offset--text--underline">single</span>{" "}
              stablecoin
              <br />
              for Solana
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div className="mt-5 text-center md:text-left text-lg md:text-3xl font-medium text-gray-400">
              One $BUCK to represent them all
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="text-center md:text-left mt-8">
              <button className="cta--button px-1 py-4 cursor-pointer  backdrop-filter backdrop-blur-lg rounded-lg">
                <span className="px-16 py-4 rounded-lg bg-white text-lg text-black font-weight-500">
                  Get Bucket
                </span>
              </button>
            </div>
          </FadeInSection>
        </div>
        <div className=" pt-28 hidden lg:block">
          <FadeInSection direction="bottom">
            <BucketCoins />
          </FadeInSection>
        </div>
      </div>

      {/* <div className="h-8 md:h-12 lg:h-16"></div> */}
      {/* 
      <div className="text-center mt-8">
        <button className="cta--button px-1 py-4 cursor-pointer  backdrop-filter backdrop-blur-lg rounded-lg">
          <span className="px-16 py-4 rounded-lg bg-white text-lg text-black font-weight-500">
            Get Bucket
          </span>
        </button>
      </div> */}
    </>
  );
};

export default Heading;
