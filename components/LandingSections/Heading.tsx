import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
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
            <div className="wallet-adapter-button--main mx-auto text-center md:text-left mt-8">
              <WalletMultiButton startIcon={null as any}>
                <span
                  style={{ borderRadius: "4px" }}
                  className="px-12 py-4 bg-white"
                >
                  Get Bucket 🪣
                </span>
              </WalletMultiButton>
            </div>
          </FadeInSection>
        </div>
        <div className="pt-28 hidden lg:block">
          <FadeInSection direction="bottom">
            <BucketCoins />
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default Heading;
