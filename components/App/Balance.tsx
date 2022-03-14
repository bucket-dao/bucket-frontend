import { useEffect, useState } from "react";
import { stripTokenData } from "../../utils/tokens";
import { mintToSymbol } from "../../utils/utils";
import BlurImage from "../BlurImage";
import BalanceWrapper from "./BalanceWrapper";

type Props = {
  collateralTokens: any[];
  reserveToken: any;
};

const Balance = ({ collateralTokens, reserveToken }: Props) => {
  const [reserveAmount, setReserveAmount] = useState(0);
  useEffect(() => {
    console.log(reserveToken);

    const init = async () => {
      const tst = await stripTokenData(reserveToken[0]);
      setReserveAmount(+tst.amount / 10 ** tst.decimals);
    };
    if (reserveToken.length > 0) {
      init();
    }
  }, [reserveToken]);
  return (
    <div>
      <BalanceWrapper
        title="Your Wallet"
        reserveAmount={reserveToken.length > 0 ? reserveAmount : 0}
        collateral={collateralTokens}
      />
    </div>
  );
};

export default Balance;
