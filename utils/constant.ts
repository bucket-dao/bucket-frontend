import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { Keypair } from "@solana/web3.js";

import idl from "../types/bucket_program.json";

export const network = "devnet";
export const connection: anchor.web3.Connection = new anchor.web3.Connection(
  "https://api.devnet.solana.com"
);

export const BUCKET_PROGRAM_ID = new PublicKey(
  "4dje1Gy1CLWUiQ9ks9cfgTb7pWtNWkgy3nKFvJTapyrE"
);

export const SPL_PROGRAM_ID = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

export const BUCKET_PROGRAM_IDL = idl;

export const RESERVE_MINT = "Cn6wiFrahgTceo1gYFAJFS9RCcgTTqLGG3W7EGRTJAch";

export const AUTHORIZED_COLLATERAL_TOKENS = [
  "5nxcyH9EzXhjFNCvGTttexZvUqjUqXM2xXgPoQ3A6s8S",
  "2ZK1nEDSaRNb117TtFupUBZTr7R8NoYtRouwQzGg12MQ",
  "J7dri6QF3L5h5UXPGao6pR2KaHhnNNnNtAA5PJ7GS37H",
];

export const ORACLE_DEVNET: any = {
  USDC: new PublicKey("5SSkXsEKQepHHAewytPVwdej4epN1nxgLVM84L4KXgy7"),
  USDT: new PublicKey("38xoQ4oeJCBrcVvca2cGk7iV1dAfrmTR1kmhSCJQ8Jto"),
  UST: new PublicKey("AUKjh1oVPZyudi3nzYSsdZxSjq42afUCvsdbKFc5CbD"),
};

export const RESERVE_MINT_DECIMALS = 6;
export const FAUCET_DECIMALS = 6;

let _FAUCET_KEYPAIR;
const privateKey = process.env.NEXT_PUBLIC_PK;

if (privateKey) {
  _FAUCET_KEYPAIR = Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(privateKey))
  );
}

export const FAUCET_KEYPAIR = _FAUCET_KEYPAIR;

// 10k
export const FAUCET_AMOUNT = 10000 * 10 ** FAUCET_DECIMALS;

// Add public keys of token mints to allow faucet to drop `FAUCET_AMOUNT` of each
export const FAUCET_MINTS = [
  new PublicKey("5nxcyH9EzXhjFNCvGTttexZvUqjUqXM2xXgPoQ3A6s8S"), // USDC
  new PublicKey("2ZK1nEDSaRNb117TtFupUBZTr7R8NoYtRouwQzGg12MQ"), // USDT
  new PublicKey("J7dri6QF3L5h5UXPGao6pR2KaHhnNNnNtAA5PJ7GS37H"), // UST
];

export const mintToSymbol: { [key: string]: string } = {
  "5nxcyH9EzXhjFNCvGTttexZvUqjUqXM2xXgPoQ3A6s8S": "USDC",
  "2ZK1nEDSaRNb117TtFupUBZTr7R8NoYtRouwQzGg12MQ": "USDT",
  J7dri6QF3L5h5UXPGao6pR2KaHhnNNnNtAA5PJ7GS37H: "UST",
  FgfeF24bnbZdnM7ryv6pSK87Pc89VTgfqgDhV6GqvEKo: "BUCK",
};

export const mintToCoingeckoId: { [key: string]: string } = {
  "5nxcyH9EzXhjFNCvGTttexZvUqjUqXM2xXgPoQ3A6s8S": "usd-coin",
  "2ZK1nEDSaRNb117TtFupUBZTr7R8NoYtRouwQzGg12MQ": "tether",
  J7dri6QF3L5h5UXPGao6pR2KaHhnNNnNtAA5PJ7GS37H: "terrausd",
};
