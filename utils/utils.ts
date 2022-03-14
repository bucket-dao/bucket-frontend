import {
  Keypair
} from "@solana/web3.js";

import * as keypair from 'fs';

export const shortenAddress = (address: string, chars = 4): string => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

export const mintToSymbol: { [key: string]: string } = {
  "6NAzRAyde4ZzHd2QN5z36zP4DdYEn2yBwbs5NorspfBP": "USDC",
  "8qD3sZ2RKiB67L88fT5HBJYd9EGVhveMFjhp7zPWahd9": "USDT",
  "5AvivB7ArFKWbMTnhJjBSf1HsUMgrc2jSxRxtPTDWZcW": "Mint A",
  "5UwadZgYM3U7ZTkrH5JcwR9WYuc52nw8dbhPLfRh2XQA": "Mint B",
  "59bq58XRWsbvnmnJsUfmjuY3RpaJm4uW1Yzja1tCiqkF": "Mint C",
  "3hWRzQqCn7dBPBLpANQ4EPAfR68EDpk2E7uvEMqa9o2K": "Mint D",
  FgfeF24bnbZdnM7ryv6pSK87Pc89VTgfqgDhV6GqvEKo: "BUCK",
};