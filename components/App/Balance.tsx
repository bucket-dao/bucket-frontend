import { useEffect, useState } from "react";
import { stripTokenData } from "../../utils/tokens";
import BlurImage from "../BlurImage";
import BalanceWrapper from "./BalanceWrapper";

type Props = {
  collateralTokens: any[];
  reserveToken: any;
};

const Balance = ({ collateralTokens, reserveToken }: Props) => {
  const [reserveAmount, setReserveAmount] = useState(0);
  useEffect(() => {
    const init = async () => {
      const reserve = await stripTokenData(reserveToken[0]);
      setReserveAmount(+reserve.amount / 10 ** reserve.decimals);
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
