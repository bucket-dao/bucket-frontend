import { Transaction } from "@solana/web3.js";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { u64, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { BucketClient } from "@bucket-program/sdk";
import {
    FAUCET_MINTS,
    FAUCET_AMOUNT,
    FAUCET_KEYPAIR
} from "../../utils/constant";
import { toast } from "react-toastify";

type Props = {
    bucketClient: BucketClient;
    refreshData: () => Promise<void>;
};

const Faucet = ({
    bucketClient,
    refreshData
}: Props) => {
    const wallet = useWallet();
    const connection = useConnection();
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
    ) =>
        toast.error(msg, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handleClick = async () => {
        if (wallet && wallet.publicKey && !loading) {
            setLoading(true);

            const walletPubKey = wallet.publicKey;
            const conn = connection.connection;

            try {
                const recentBlockhash = await conn.getRecentBlockhash();

                const tx = new Transaction({
                    recentBlockhash: recentBlockhash.blockhash,
                    feePayer: walletPubKey
                });

                for (const tokenMint of FAUCET_MINTS) {
                    const tokenATA = await bucketClient.getOrCreateATA(tokenMint, walletPubKey, walletPubKey, conn);

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

                const signature = await wallet.sendTransaction(tx, conn);
                const txnConfirmed = await conn.confirmTransaction(signature);

                if (txnConfirmed.value.err) {
                    console.log("txnConfirmed:", txnConfirmed);
                    error("Ooops, something went wrong.");
                } else {
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
            }
            catch (e: any) {
                console.log("Faucet Error:", e);
                error("Ooops, something went wrong.");
            }
            finally {
                setLoading(false);
            }
        }
        else {
            console.log("Ooops, something went wrong.");
            console.log(wallet);
        }
    };

    return (
        <button className="bg-blue-500/90 sticky px-4 mt-1 md:p-0 text-slate-100 text-center text-base md:text-xl font-normal" onClick={handleClick}>
            Click here to automatically receive 10k USDC/USDT on devnet
        </button>
    );
};

export default Faucet;