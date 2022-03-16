import { Keypair } from "@solana/web3.js";

import * as keypair from "fs";

export const shortenAddress = (address: string, chars = 4): string => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

export const mintToSymbol: { [key: string]: string } = {
  "6NAzRAyde4ZzHd2QN5z36zP4DdYEn2yBwbs5NorspfBP": "USDC",
  "8qD3sZ2RKiB67L88fT5HBJYd9EGVhveMFjhp7zPWahd9": "USDT",
  HySCn27tQCg62THSyxTHZ5soRCg5dbn8KeJmVqCPsddn: "UST",
  FgfeF24bnbZdnM7ryv6pSK87Pc89VTgfqgDhV6GqvEKo: "BUCK",
};
