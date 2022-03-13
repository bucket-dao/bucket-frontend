import { BucketClient } from "@bucket-program/sdk";
import { u64 } from "@solana/spl-token";
import {
  useConnection,
  WalletContextState,
} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  BUCKET_PROGRAM_ID,
  connection,
  ORACLE_DEVNET,
  RESERVE_MINT,
} from "../../../utils/constant";
import Dropdown from "./Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { generateCrateAddress } from "@crateprotocol/crate-sdk";

type Props = {
  collateralTokens: any[];
  defaultCollateralToken: any;
  currentMaxAmount: { amount: string; decimals: number };
  setCurrentMaxAmount:
    | Dispatch<SetStateAction<{ amount: string; decimals: number }>>
    | undefined;
  wallet: WalletContextState;
  bucketClient: BucketClient;
  refreshData: () => Promise<void>;
};

const Deposit = ({
  collateralTokens,
  defaultCollateralToken,
  currentMaxAmount,
  setCurrentMaxAmount,
  wallet,
  bucketClient,
  refreshData,
}: Props) => {
  const [collateralMint, setCollateralMint] = useState(defaultCollateralToken);
  const [depositAmount, setDepositAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const success = (
    msg:
      | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      | string
  ) =>
    toast.success(msg, {
      autoClose: 5000,
      position: "bottom-left",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const error = (
    msg:
      | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      | string
  ) => {
    toast.error(msg, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    // update deposit amnt if above new max amnt
    const currentAmount =
      +currentMaxAmount.amount / 10 ** currentMaxAmount.decimals;
    if (+depositAmount > currentAmount) {
      setDepositAmount(currentAmount.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMaxAmount.amount, currentMaxAmount.decimals]);

  const handleDepositAmountUpdate = (amnt: string) => {
    const maxAmount =
      +currentMaxAmount.amount / 10 ** currentMaxAmount.decimals;

    // update user deposit amount if valid
    if (+amnt >= 0 && +amnt <= maxAmount) {
      setDepositAmount(amnt);
    }
  };
  const handleSetMaxAmount = () => {
    setDepositAmount(
      (+currentMaxAmount.amount / 10 ** currentMaxAmount.decimals).toString()
    );
  };
  const deposit = async () => {
    if (wallet && wallet.publicKey && bucketClient) {
      setLoading(true);
      const [crate, _bump] = await generateCrateAddress(
        new PublicKey(RESERVE_MINT)
      );
      const { addr: bucket } = await bucketClient.generateBucketAddress(crate);
      const { addr: issueAuthority, bump } =
        await bucketClient.generateIssueAuthority(bucket);

      const _depositAmount = +depositAmount * 10 ** currentMaxAmount.decimals;
      // using devnet usdc oracle for now
      const oracle = ORACLE_DEVNET;
      if (issueAuthority) {
        try {
          const res = await bucketClient.deposit(
            new u64(_depositAmount),
            new PublicKey(RESERVE_MINT),
            new PublicKey(collateralMint),
            issueAuthority,
            wallet.publicKey,
            oracle
          );
          console.log("Deposit Response", res);

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
          console.log("Deposit Error:", e.message);
          error("Ooops, something went wrong.");
          setLoading(false);
        }
      } else {
        console.log(
          "Deposit Error:",
          "Could not find or generate issueAuthority"
        );
        error("Ooops, something went wrong.");
        setLoading(false);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <div className=" mx-auto  p-6 w-full max-w-lg ">
        <div>You pay</div>
        <div className="rounded-lg mt-4 bg-gray-200 grid grid-cols-3 gap-4 ">
          {collateralTokens && (
            <Dropdown
              collateralMint={collateralMint}
              setCollateralMint={setCollateralMint}
              allCollateralMints={collateralTokens}
              // @ts-ignore
              setCurrentMaxAmount={setCurrentMaxAmount}
            />
          )}
          <div className="col-span-2 rounded-lg pt-1">
            <input
              className="p-3 bg-transparent text-xl font-bold outline-none text-right w-full"
              value={depositAmount}
              autoFocus
              onChange={(e) => handleDepositAmountUpdate(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-left ml-4 mt-1">
            <button onClick={handleSetMaxAmount}>
              balance:{" "}
              {Math.floor(
                (+currentMaxAmount.amount / 10 ** currentMaxAmount.decimals) *
                  100
              ) / 100}
            </button>
          </div>
          <div className="text-sm text-right mr-4 mt-1">
            <button onClick={handleSetMaxAmount}>max</button>
          </div>
        </div>
        <div className="h-4"></div>
        <div>You receive</div>
        <div className="rounded-lg my-4 bg-gray-200  grid grid-cols-3 gap-4 pt-1">
          <div className="p-3">🪣 BUCK</div>
          <div className="col-span-2  rounded-lg">
            <div className="p-3 bg-transparent text-xl font-bold outline-none text-right w-full">
              {depositAmount ? depositAmount : 0}
            </div>
          </div>
        </div>
        <div className="h-4"></div>
        {!loading ? (
          <div
            onClick={deposit}
            className="text-xl pb-2 pt-3 cursor-pointer border border-black rounded-lg text-center  mx-auto bg-white hover:bg-gray-200"
          >
            Deposit
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

export default Deposit;
