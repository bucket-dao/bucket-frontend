import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

import idl from "../types/bucket_program.json";

export const network = "devnet";
export const connection: anchor.web3.Connection = new anchor.web3.Connection(
  "https://api.devnet.solana.com"
);

export const BUCKET_PROGRAM_ID = new PublicKey(
  "9tFeTGcc6saCgvZqQbqKq76vqgbJsoavjFiMDKRo7v9c"
);

export const BUCKET_PROGRAM_IDL = idl;

export const RESERVE_MINT = "2XcPZAQ5TLxDXAyj29kbgh4h4pFBPTsEGbR5SQhnWHd9";

export const AUTHORIZED_COLLATERAL_TOKENS = [
  "5AvivB7ArFKWbMTnhJjBSf1HsUMgrc2jSxRxtPTDWZcW", // 6 decimals
  "5UwadZgYM3U7ZTkrH5JcwR9WYuc52nw8dbhPLfRh2XQA", // 6 decimals
  "59bq58XRWsbvnmnJsUfmjuY3RpaJm4uW1Yzja1tCiqkF", // 6 decimals
  // "3hWRzQqCn7dBPBLpANQ4EPAfR68EDpk2E7uvEMqa9o2K", // 9 decimals
];

export const ORACLE_DEVNET = new PublicKey(
  "38xoQ4oeJCBrcVvca2cGk7iV1dAfrmTR1kmhSCJQ8Jto"
);

export const RESERVE_MINT_DECIMALS = 6;
