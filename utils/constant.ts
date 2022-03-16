import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { Keypair } from "@solana/web3.js";

import idl from "../types/bucket_program.json";

import * as faucetKeypair from "../public/keypairs/faucet.json";

export const network = "devnet";
export const connection: anchor.web3.Connection = new anchor.web3.Connection(
  "https://api.devnet.solana.com"
);

export const BUCKET_PROGRAM_ID = new PublicKey(
  "12VVjdoYJQeJMM1pE5a9LRrffHvJx5npkKMEwdD8SVGv"
);

export const SPL_PROGRAM_ID = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

export const BUCKET_PROGRAM_IDL = idl;

export const RESERVE_MINT = "8ddxBg81H6LyXjPWvynrNRVLRatRtrPdrrpFa6cUtJDF";

export const AUTHORIZED_COLLATERAL_TOKENS = [
  "6NAzRAyde4ZzHd2QN5z36zP4DdYEn2yBwbs5NorspfBP",
  "8qD3sZ2RKiB67L88fT5HBJYd9EGVhveMFjhp7zPWahd9",
  "HySCn27tQCg62THSyxTHZ5soRCg5dbn8KeJmVqCPsddn",
];

export const ORACLE_DEVNET: any = {
  USDC: new PublicKey("5SSkXsEKQepHHAewytPVwdej4epN1nxgLVM84L4KXgy7"),
  USDT: new PublicKey("38xoQ4oeJCBrcVvca2cGk7iV1dAfrmTR1kmhSCJQ8Jto"),
  UST: new PublicKey("AUKjh1oVPZyudi3nzYSsdZxSjq42afUCvsdbKFc5CbD"),
};

export const RESERVE_MINT_DECIMALS = 6;

export const FAUCET_KEYPAIR = Keypair.fromSecretKey(
  Uint8Array.from(faucetKeypair)
);

// 10k
export const FAUCET_AMOUNT = 10000 * 10 ** RESERVE_MINT_DECIMALS;

// Add public keys of token mints to allow faucet to drop `FAUCET_AMOUNT` of each
export const FAUCET_MINTS = [
  new PublicKey("6NAzRAyde4ZzHd2QN5z36zP4DdYEn2yBwbs5NorspfBP"), // USDC
  new PublicKey("8qD3sZ2RKiB67L88fT5HBJYd9EGVhveMFjhp7zPWahd9"), // USDT
  new PublicKey("HySCn27tQCg62THSyxTHZ5soRCg5dbn8KeJmVqCPsddn"), // UST
];

export const mintToSymbol: { [key: string]: string } = {
  "6NAzRAyde4ZzHd2QN5z36zP4DdYEn2yBwbs5NorspfBP": "USDC",
  "8qD3sZ2RKiB67L88fT5HBJYd9EGVhveMFjhp7zPWahd9": "USDT",
  HySCn27tQCg62THSyxTHZ5soRCg5dbn8KeJmVqCPsddn: "UST",
  FgfeF24bnbZdnM7ryv6pSK87Pc89VTgfqgDhV6GqvEKo: "BUCK",
};
