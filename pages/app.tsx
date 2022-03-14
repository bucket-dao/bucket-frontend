import * as anchor from "@project-serum/anchor";
import { BucketClient } from "@bucket-program/sdk";
import { SignerWalletAdapter } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Balance from "../components/App/Balance";
import Deposit from "../components/App/Deposit/Deposit";
import Redeem from "../components/App/Redeem";
import Faucet from "../components/App/Faucet";
import Navbar from "../components/Navbar";
import { initBucketClient } from "../utils/bucket";
import { RESERVE_MINT } from "../utils/constant";
import { getBucketSupply, getCurrentTokenData, getTokenSupply } from "../utils/tokens";
import BucketStats from "../components/App/BucketStats";
enum ActionView {
  DEPOSIT,
  REDEEM,
}
const App = () => {
  const router = useRouter();

  const connection = useConnection();
  const wallet = useWallet();
  const [bucketClient, setBucketClient] = useState<BucketClient>();

  const [collateralTokens, setCollateralTokens] = useState([]);
  const [defaultCollateralToken, setDefaultCollateralToken] = useState();
  const [reserveToken, setReserveToken] = useState([]);
  const [currentMaxAmount, setCurrentMaxAmount] = useState<{
    amount: string;
    decimals: number;
  }>({
    amount: "0",
    decimals: 1,
  });
  const [view, setView] = useState(ActionView.DEPOSIT);
  useEffect(() => {
    if (!wallet.publicKey) {
      router.push("/");
    }

    const init = async (): Promise<BucketClient> => {
      return await initBucketClient(
        connection.connection,
        wallet.adapter as SignerWalletAdapter
      );
    };

    init().then(async (client) => {
      if (wallet.publicKey) {
        setBucketClient(client);

        const {
          collateralTokens: _collateralTokens,
          currentCollateralToken: defaultCollateralToken,
          currentMaxAmount: _currentMaxAmount,
          reserveToken: _reserveToken,
        } = await getCurrentTokenData(wallet);
        console.log(_currentMaxAmount);

        // @ts-ignore // TODO
        setCollateralTokens(_collateralTokens);
        setDefaultCollateralToken(defaultCollateralToken);
        // @ts-ignore // TODO
        setCurrentMaxAmount(_currentMaxAmount);
        // @ts-ignore // TODO
        setReserveToken(_reserveToken);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const refreshData = async () => {
    console.log("tryingstart");

    const {
      collateralTokens: _collateralTokens,
      currentCollateralToken: defaultCollateralToken,
      currentMaxAmount: _currentMaxAmount,
      reserveToken: _reserveToken,
    } = await getCurrentTokenData(wallet);
    console.log(_currentMaxAmount);

    // @ts-ignore // TODO
    setCollateralTokens(_collateralTokens);
    setDefaultCollateralToken(defaultCollateralToken);
    // @ts-ignore // TODO
    setCurrentMaxAmount(_currentMaxAmount);
    // @ts-ignore // TODO
    setReserveToken(_reserveToken);
    console.log("tryingend");
  };
  return (
    <div>
      <Navbar />

      {bucketClient &&
      <Faucet bucketClient={bucketClient} refreshData={refreshData}/>}

      <div className="w-full py-16 max-w-7xl mx-auto text-black">
        <div className=" mx-auto grid grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-6 ">
            <div className="max-w-lg mx-auto font-bold">
              <div className="grid gap-8 grid-cols-2 text-2xl">
                <div className="p-2">
                  <button
                    className={`${
                      view == ActionView.DEPOSIT && "underline"
                    } font-bold hover:bg-gray-100 hover:rounded-lg p-2`}
                    onClick={() => setView(ActionView.DEPOSIT)}
                  >
                    Deposit
                  </button>
                </div>
                <div className="p-2">
                  <button
                    className={`${
                      view == ActionView.REDEEM && "underline"
                    } font-bold hover:bg-gray-100 hover:rounded-lg p-2 `}
                    onClick={() => setView(ActionView.REDEEM)}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {bucketClient && (
          <div className="max-w-lg mx-auto font-bold">
            <div className="mt-4">
              {view == ActionView.DEPOSIT && (
                <>
                  {defaultCollateralToken && currentMaxAmount ? (
                    <Deposit
                      collateralTokens={collateralTokens}
                      defaultCollateralToken={defaultCollateralToken}
                      currentMaxAmount={currentMaxAmount}
                      setCurrentMaxAmount={setCurrentMaxAmount}
                      wallet={wallet}
                      bucketClient={bucketClient}
                      refreshData={refreshData}
                    />
                  ) : (
                    <div>
                      You currently do not hold any tokens that can be converted
                      to Bucket. Mint some here.
                    </div>
                  )}
                </>
              )}
              {view == ActionView.REDEEM && (
                <>
                  {reserveToken.length > 0 ? (
                    <Redeem
                      reserveToken={
                        reserveToken.length > 0 ? reserveToken[0] : []
                      }
                      wallet={wallet}
                      bucketClient={bucketClient}
                      refreshData={refreshData}
                    />
                  ) : (
                    <div>You currently do not hold any $BUCK.</div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <div className="mt-4">
          <BucketStats />
        </div>
        <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
          <hr className="my-12 lg:my-24" />
        </div>

        <div className="mt-4">
          <Balance
            collateralTokens={collateralTokens}
            reserveToken={reserveToken}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
