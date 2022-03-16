import * as anchor from "@project-serum/anchor";
import { Transaction, LAMPORTS_PER_SOL, Connection } from "@solana/web3.js";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { u64, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { BucketClient } from "@bucket-program/sdk";
import {
  FAUCET_MINTS,
  FAUCET_AMOUNT,
  FAUCET_KEYPAIR,
} from "../../utils/constant";
import { toast, ToastContainer } from "react-toastify";
import { error, success } from "../../utils/toasts";

type Props = {
  bucketClient: BucketClient;
  refreshData: () => Promise<void>;
};

const Faucet = ({ bucketClient, refreshData }: Props) => {
  const wallet = useWallet();
  const connection = useConnection();
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");

  const getSol = async (
    walletPubKey: anchor.web3.PublicKey,
    conn: Connection
  ) => {
    const airdropSig = await conn.requestAirdrop(
      walletPubKey,
      1 * LAMPORTS_PER_SOL
    );
    await conn.confirmTransaction(airdropSig, "confirmed");
  };
  const handleClick = async () => {
    if (wallet && wallet.publicKey && !loading) {
      setLoadingMsg("Initiating Faucet.");

      setLoading(true);
      const walletPubKey = wallet.publicKey;
      const conn = connection.connection;

      const bal = await conn.getBalance(walletPubKey);
      console.log("balance:", bal);
      if (bal == 0) {
        setLoadingMsg("Airdropping Sol.");
        await getSol(walletPubKey, conn);
      }

      setLoadingMsg("Initiating Stablecoin faucets.");

      try {
        const recentBlockhash = await conn.getRecentBlockhash();
        const tx = new Transaction({
          recentBlockhash: recentBlockhash.blockhash,
          feePayer: walletPubKey,
        });
        console.log(tx);

        for (const tokenMint of FAUCET_MINTS) {
          const tokenATA = await bucketClient.getOrCreateATA(
            tokenMint,
            walletPubKey,
            walletPubKey,
            conn
          );
          const fundTransactions = [
            ...(tokenATA.instruction ? [tokenATA.instruction] : []),
            Token.createMintToInstruction(
              TOKEN_PROGRAM_ID,
              tokenMint,
              tokenATA.address,
              FAUCET_KEYPAIR.publicKey,
              [FAUCET_KEYPAIR],
              new u64(FAUCET_AMOUNT)
            ),
          ];
          fundTransactions.forEach((ixn) => tx.add(ixn));
        }
        tx.partialSign(FAUCET_KEYPAIR);
        console.log(tx);

        const signature = await wallet.sendTransaction(tx, conn);
        console.log(signature);
        setLoadingMsg(
          "Finalizing Transaction. Please wait, this may take a few seconds."
        );

        const txnConfirmed = await conn.confirmTransaction(
          signature,
          "finalized"
        );

        if (!txnConfirmed.value.err) {
          console.log("txnConfirmed:", txnConfirmed);
          success(
            <span>
              Success.{" "}
              <a
                className="underline text-blue-700"
                href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
                target="_blank"
                rel="noreferrer"
              >
                View Transaction!
              </a>
            </span>
          );
          await refreshData();
        }
      } catch (e: any) {
        console.log("Faucet Error:", e);
        error("Ooops, something went wrong.");
      } finally {
        setLoading(false);
        setLoadingMsg("");
      }
    } else {
      error("Ooops, something went wrong.");
      console.log("Ooops, something went wrong.");
      console.log(wallet);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading mt-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <button
            className="bg-blue-500/80 hover:bg-blue-500 sticky p-2 rounded-lg mt-1  text-slate-100 text-center text-base md:text-xl font-normal"
            onClick={handleClick}
          >
            Airdrop Stablecoins
          </button>
        </>
      )}
      {loadingMsg && <div className="mt-4">{loadingMsg}</div>}
      <ToastContainer />
    </div>
  );
};

export default Faucet;
