import { generateCrateAddress } from "@crateprotocol/crate-sdk";
import { useEffect, useState } from "react";
import {
  getAuthorizedTokens,
  getBucketSupply,
  stripTokenData,
} from "../../utils/tokens";
import * as anchor from "@project-serum/anchor";
import {
  AUTHORIZED_COLLATERAL_TOKENS,
  RESERVE_MINT,
} from "../../utils/constant";
import { mintToSymbol } from "../../utils/utils";

const BucketStats = () => {
  const [supply, setSupply] = useState<number | undefined>();
  const [crateTokens, setCrateTokens] = useState<any[]>([]);
  useEffect(() => {
    const init = async () => {
      const supply = await getBucketSupply();
      setSupply(+supply.amount / 10 ** supply.decimals);
      const [crate, _bump] = await generateCrateAddress(
        new anchor.web3.PublicKey(RESERVE_MINT)
      );

      const _crateTokens = await getAuthorizedTokens(
        crate.toBase58(),
        AUTHORIZED_COLLATERAL_TOKENS
      );
      console.log("crate tokens:", _crateTokens);
      setCrateTokens(_crateTokens);
    };
    init();
  }, []);
  return (
    <div className="mx-auto p-6 w-full max-w-lg">
      <div className="text-2xl mb-2 font-bold">Bucket Stats:</div>
      <div>Current Supply: {supply && supply}</div>
      {crateTokens.map((_token, key: number) => {
        const token = stripTokenData(_token);
        return (
          <div key={key}>
            {mintToSymbol[_token.account.data.parsed.info.mint]}:{" "}
            {Math.floor((+token.amount / 10 ** token.decimals) * 100) / 100}
            {/* TODO: ---> CURRENTLY DOES NOT DO WELL IF WE HAVE e.g. 0.00829 supply */}
          </div>
        );
      })}
    </div>
  );
};

export default BucketStats;
