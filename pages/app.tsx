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
import { AUTHORIZED_COLLATERAL_TOKENS, RESERVE_MINT } from "../utils/constant";
import {
  getAuthorizedTokens,
  getBucketSupply,
  getRelevantTokenData,
} from "../utils/tokens";
import FadeInSection from "../components/FadeInSection";
import { generateCrateAddress } from "@crateprotocol/crate-sdk";
import BalanceWrapper from "../components/App/BalanceWrapper";
import FaucetDialog from "../components/App/FaucetDialog";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { shortenAddress } from "../utils/utils";
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
  const [loading, setLoading] = useState(true);
  const [bucketSupply, setBucketSupply] = useState(0);
  const [crateTokens, setCrateTokens] = useState<
    {
      pubkey: anchor.web3.PublicKey;
      account: anchor.web3.AccountInfo<anchor.web3.ParsedAccountData>;
    }[]
  >([]);
  const [newUser, setNewUser] = useState(true);

  useEffect(() => {
    if (wallet.wallet && !wallet.publicKey) {
      wallet.connect();
    } else if (!wallet.publicKey) {
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
        setLoading(true);
        setBucketClient(client);

        const {
          collateralTokens: _collateralTokens,
          currentCollateralToken: defaultCollateralToken,
          currentMaxAmount: _currentMaxAmount,
          reserveToken: _reserveToken,
        } = await getRelevantTokenData(wallet);
        console.log(_currentMaxAmount);

        // @ts-ignore // TODO
        setCollateralTokens(_collateralTokens);
        setDefaultCollateralToken(defaultCollateralToken);
        // @ts-ignore // TODO
        setCurrentMaxAmount(_currentMaxAmount);
        // @ts-ignore // TODO
        setReserveToken(_reserveToken);
        updateBucketStats();

        if (_collateralTokens.length > 0) {
          // TODO: fix -> currently will also treat you as new user if you own bucket but no collateral
          setNewUser(false);
        }
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const refreshData = async () => {
    const {
      collateralTokens: _collateralTokens,
      currentCollateralToken: defaultCollateralToken,
      currentMaxAmount: _currentMaxAmount,
      reserveToken: _reserveToken,
    } = await getRelevantTokenData(wallet);
    console.log(_currentMaxAmount);

    // @ts-ignore // TODO
    setCollateralTokens(_collateralTokens);
    setDefaultCollateralToken(defaultCollateralToken);
    // @ts-ignore // TODO
    setCurrentMaxAmount(_currentMaxAmount);
    // @ts-ignore // TODO
    setReserveToken(_reserveToken);
    updateBucketStats();
    if (_collateralTokens.length > 0) {
      setNewUser(false);
    }
  };

  const updateBucketStats = async () => {
    const supply = await getBucketSupply();
    setBucketSupply(+supply.amount / 10 ** supply.decimals);
    const [crate, _bump] = await generateCrateAddress(
      new anchor.web3.PublicKey(RESERVE_MINT)
    );

    const _crateTokens: {
      pubkey: anchor.web3.PublicKey;
      account: anchor.web3.AccountInfo<anchor.web3.ParsedAccountData>;
    }[] = await getAuthorizedTokens(crate, AUTHORIZED_COLLATERAL_TOKENS);
    console.log("crate tokens:", _crateTokens);
    if (_crateTokens) {
      setCrateTokens(_crateTokens);
    }
  };

  const handleDisconnect = () => {
    if (wallet) {
      wallet.disconnect().then(() => {
        router.push("/");
      });
    }
  };
  return (
    <div>
      <Navbar />

      {!loading ? (
        <>
          {newUser && (
            <div className="text-center w-full mt-2">
              <FaucetDialog
                bucketClient={bucketClient && bucketClient}
                refreshData={refreshData}
              />
            </div>
          )}
          <>
            <FadeInSection direction="right">
              {wallet && (
                <div className="max-w-7xl mx-auto text-center md:text-right mt-4">
                  {wallet.publicKey && (
                    <span className="mr-4">
                      {shortenAddress(wallet.publicKey.toBase58())}
                    </span>
                  )}
                  <button
                    className="px-8 cta--button rounded-lg py-2 border-black border"
                    onClick={handleDisconnect}
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </FadeInSection>
            <div className=" w-full mx-auto text-black">
              <FadeInSection direction="right">
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
              </FadeInSection>
              {bucketClient && (
                <div className="max-w-lg mx-auto font-bold">
                  <div className="mt-4">
                    {view == ActionView.DEPOSIT && (
                      <>
                        {defaultCollateralToken && currentMaxAmount ? (
                          <FadeInSection direction="top">
                            <Deposit
                              collateralTokens={collateralTokens}
                              defaultCollateralToken={defaultCollateralToken}
                              currentMaxAmount={currentMaxAmount}
                              setCurrentMaxAmount={setCurrentMaxAmount}
                              wallet={wallet}
                              bucketClient={bucketClient}
                              refreshData={refreshData}
                            />
                          </FadeInSection>
                        ) : (
                          <div className="h-[362px]">
                            You currently do not hold any tokens that can be
                            converted to Bucket. Mint some here.
                          </div>
                        )}
                      </>
                    )}
                    {view == ActionView.REDEEM && (
                      <>
                        {reserveToken.length > 0 ? (
                          <FadeInSection direction="top">
                            <Redeem
                              reserveToken={
                                reserveToken.length > 0 ? reserveToken[0] : []
                              }
                              wallet={wallet}
                              bucketClient={bucketClient}
                              refreshData={refreshData}
                            />
                          </FadeInSection>
                        ) : (
                          <div className="h-[230px]">
                            You currently do not hold any $BUCK.
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
                <hr className="lg:my-12" />
              </div>

              <div className="text-center w-full mb-4 ">
                {bucketClient && (
                  <Faucet
                    bucketClient={bucketClient}
                    refreshData={refreshData}
                  />
                )}
              </div>

              <div className="grid grid-cols-2 max-w-7xl mx-auto">
                <div className="w-full mx-auto ">
                  <FadeInSection direction="left">
                    <Balance
                      collateralTokens={collateralTokens}
                      reserveToken={reserveToken}
                    />
                  </FadeInSection>
                </div>
                <div className="w-full mx-auto ">
                  <FadeInSection direction="right">
                    <BalanceWrapper
                      title="Bucket Balance"
                      reserveAmount={bucketSupply > 0 ? bucketSupply : 0}
                      collateral={crateTokens}
                      bucket={true}
                    />
                  </FadeInSection>
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <div className="flex mt-16 pb-3 pt-3 justify-center items-center">
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
