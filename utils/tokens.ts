import * as anchor from "@project-serum/anchor";
import { TokenListProvider } from "@solana/spl-token-registry";
import {
  AUTHORIZED_COLLATERAL_TOKENS,
  connection,
  mintToCoingeckoId,
  network,
  RESERVE_MINT,
  SPL_PROGRAM_ID,
} from "./constant";

////////////////////////////////////////////////////////////////
// HELPERS
////////////////////////////////////////////////////////////////

// returns parsed spl token data
const _getAllTokenData = async (wallet: anchor.web3.PublicKey) => {
  const splToken = await connection.getParsedTokenAccountsByOwner(wallet, {
    programId: new anchor.web3.PublicKey(SPL_PROGRAM_ID),
  });
  return splToken && splToken;
};

const _getTokenSupply = async (wallet: anchor.web3.PublicKey) => {
  const supply = await connection.getTokenSupply(wallet);
  return {
    amount: supply.value.amount,
    decimals: supply.value.decimals,
  };
};

////////////////////////////////////////////////////////////////
// PUBLIC
////////////////////////////////////////////////////////////////

// returns a list of the token data of all authorized collateral
export const getAuthorizedTokens = async (
  wallet: anchor.web3.PublicKey,
  mints: string[]
) => {
  const tokens = await _getAllTokenData(wallet);

  const filteredTokens = tokens.value.filter((tokenData: any) =>
    mints.includes(tokenData?.account.data.parsed.info.mint)
  );

  return filteredTokens;
};

// returns authorized token & reserve mint data of a given wallet
export const getRelevantTokenData = async (wallet: any) => {
  const tokens = await getAuthorizedTokens(
    wallet.publicKey,
    AUTHORIZED_COLLATERAL_TOKENS
  );

  const currentToken = tokens.length > 0 && tokens[0];
  let currentMaxAmount;
  if (currentToken) {
    currentMaxAmount =
      tokens.length > 0
        ? {
            amount: currentToken.account.data.parsed.info.tokenAmount.amount,
            decimals:
              currentToken.account.data.parsed.info.tokenAmount.decimals,
          }
        : {
            amount: "0",
            decimals: 1,
          };
  }
  const reserveToken = await getAuthorizedTokens(wallet.publicKey, [
    RESERVE_MINT,
  ]);
  return {
    collateralTokens: tokens,
    currentCollateralToken:
      tokens.length > 0 &&
      currentToken &&
      currentToken.account.data.parsed.info.mint,
    currentMaxAmount: currentMaxAmount,
    reserveToken: reserveToken,
  };
};

export const getBucketSupply = async () => {
  return _getTokenSupply(new anchor.web3.PublicKey(RESERVE_MINT));
};

export const stripTokenData = (tokenData: any) => {
  const tokenInfo = tokenData.account.data.parsed.info.tokenAmount;
  return {
    amount: tokenInfo.amount,
    decimals: tokenInfo.decimals,
  };
};

// COINGECKO - for temp UI purposes
export const getCurrentPrice = async (address: string) => {
  const id = mintToCoingeckoId[address];
  if (id) {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
      );
      const price = await res.json();
      console.log(price[id].usd);
      return price[id].usd;
    } catch (e) {
      console.log("coingecko error:", e);
      return 1;
    }
  }
  return 1;
};
