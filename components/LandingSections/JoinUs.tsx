import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const JoinUs = () => {
  const wallet = useWallet();
  const handleConnect = () => {
    wallet.connect();
  };
  return (
    <>
      <div className="max-w-7xl mx-auto text-center ">
        <div className="w-fit text-xl md:text-3xl font-bold text-center mx-auto pb-32 ">
          <div>
            <h1 className="text-left">
              Join us in the journey
              <br /> to build the most composable
              <br /> stablecoin on Solana
            </h1>
          </div>
          {/* <button
            onClick={handleConnect}
            className="h-fit p-4 md:ml-6 mt-6 cursor-pointer backdrop-filter backdrop-blur-lg rounded-lg bg-black text-lg text-white font-weight-500 hover:scale-105 duration-500 ease-in-out"
          >
            Start using Bucket today
          </button> */}
          <div className="wallet-adapter-button--secondary mx-auto">
            <div className="wallet-adapter-button--main mx-auto text-center rounded-lg  mt-8">
              <WalletMultiButton startIcon={null as any} className="mx-auto">
                <span
                  style={{ borderRadius: "4px" }}
                  className="px-12 py-4 text-white"
                >
                  Start today
                </span>
              </WalletMultiButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
