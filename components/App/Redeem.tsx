import { PublicKey } from "@solana/web3.js";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { u64 } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { BucketClient } from "@bucket-program/sdk";
import { generateCrateAddress } from "@crateprotocol/crate-sdk";
import {
  BUCKET_PROGRAM_ID,
  connection,
  ORACLE_DEVNET,
  RESERVE_MINT,
  RESERVE_MINT_DECIMALS,
} from "../../utils/constant";
import { toast, ToastContainer } from "react-toastify";
import { error, success } from "../../utils/toasts";

type Props = {
  reserveToken: any;
  wallet: WalletContextState;
  bucketClient: BucketClient;
  refreshData: () => Promise<void>;
};

const Redeem = ({ reserveToken, wallet, bucketClient, refreshData }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(reserveToken);
  }, [reserveToken]);

  const handleWithdrawAmountUpdate = (amnt: string) => {
    const tokenAmount = reserveToken.account.data.parsed.info.tokenAmount;
    const maxAmount = +tokenAmount.amount / 10 ** tokenAmount.decimals;

    // update user deposit amount if valid
    if (+amnt >= 0 && +amnt <= maxAmount) {
      setWithdrawAmount(amnt);
    }
  };

  const handleSetMaxAmount = () => {
    const tokenAmount = reserveToken.account.data.parsed.info.tokenAmount;
    const maxAmount = +tokenAmount.amount / 10 ** tokenAmount.decimals;
    setWithdrawAmount(maxAmount.toString());
  };

  const redeem = async () => {
    if (wallet && wallet.publicKey && bucketClient) {
      setLoading(true);
      const [crate, _bump] = await generateCrateAddress(
        new PublicKey(RESERVE_MINT)
      );
      const { addr: bucket } = await bucketClient.generateBucketAddress(crate);
      const { collateral } = await bucketClient.fetchBucket(bucket);
      const _collaterals = collateral.map((el: any) => el.mint);
      console.log(">", _collaterals);

      const _withdrawAmount = +withdrawAmount * 10 ** RESERVE_MINT_DECIMALS;
      const amountU64 = new u64(_withdrawAmount);

      const { addr: withdrawAuthority } =
        await bucketClient.generateWithdrawAuthority(bucket);

      if (crate && bucket && collateral && withdrawAuthority) {
        try {
          const res = await bucketClient.redeem(
            amountU64,
            new PublicKey(RESERVE_MINT),
            _collaterals,
            withdrawAuthority,
            wallet.publicKey
          );
          console.log("withdraw response", res);
          const txnConfirmed = await connection.confirmTransaction(res);
          if (txnConfirmed.value.err) {
            console.log("txnConfirmed:", txnConfirmed);
            error("Ooops, something went wrong.");
            setLoading(false);
          } else {
            console.log("txnConfirmed:", txnConfirmed);
            success(
              <span>
                Success.{" "}
                <a
                  className="underline text-blue-700"
                  href={`https://explorer.solana.com/tx/${res}?cluster=devnet`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Transaction!
                </a>
              </span>
            );
            await refreshData();
            setLoading(false);
          }
        } catch (e: any) {
          console.log("Withdraw Error:", e.message);
          error("Ooops, something went wrong.");
          setLoading(false);
        }
      } else {
        console.log("Withdraw Error");
        error("Ooops, something went wrong.");
        setLoading(false);
      }
    }
    setLoading(false);
  };
  return (
    <div>
      <div className=" mx-auto  p-6 w-full max-w-lg ">
        <div>You redeem</div>
        <div className="rounded-lg mt-4 bg-gray-200 grid grid-cols-3 gap-4">
          <div className="p-3 pt-4">🪣 BUCK</div>
          <div className="col-span-2  rounded-lg">
            <input
              className="p-3 bg-transparent text-xl font-bold outline-none text-right w-full"
              value={withdrawAmount}
              onChange={(e) => handleWithdrawAmountUpdate(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text-sm text-right mr-4 mt-1">
          <button onClick={handleSetMaxAmount}>max</button>
        </div>
        <div className="h-4"></div>
        {!loading ? (
          <div
            onClick={redeem}
            className="text-xl pb-2 pt-3 cursor-pointer border border-black rounded-lg text-center  mx-auto bg-white hover:bg-gray-200"
          >
            Redeem
          </div>
        ) : (
          <div className="flex pb-3 pt-3 justify-center items-center">
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Redeem;
