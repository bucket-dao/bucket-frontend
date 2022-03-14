import { mintToSymbol } from "../../utils/utils";
import BlurImage from "../BlurImage";

type Props = {
  title: string;
  collateral: any[];
  reserveAmount?: number;
};

const BalanceWrapper = ({ title, collateral, reserveAmount }: Props) => {
  return (
    <div>
      <div className="mx-auto p-6 w-full text-center max-w-lg">
        <div className="text-2xl mb-2 font-bold">{title}</div>
        <div className="mx-auto">
          {collateral.length > 0 ? (
            <div className="font-medium ">
              {collateral.map((token: any, key: number) => {
                const tokenInfo = token.account.data.parsed.info;
                const symbol = mintToSymbol[tokenInfo.mint];
                const symbolLC = symbol.toLowerCase();
                return (
                  <div key={key} className="py-2 ">
                    <div className="flex items-center ">
                      <BlurImage
                        src={`/coins/${
                          symbolLC == "usdc" ||
                          symbolLC == "usdt" ||
                          symbolLC == "ust"
                            ? symbolLC + ".svg"
                            : symbolLC + ".png"
                        }`}
                        alt="usdc"
                        height={30}
                        width={30}
                      />
                      <div className="ml-2">
                        {Math.floor(tokenInfo.tokenAmount.uiAmount * 100) / 100}{" "}
                        {symbol}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="font-medium">
              you don{"'"}t own any accepted stablecoins
            </div>
          )}

          <div className="mt-4">
            {reserveAmount && reserveAmount > 0 ? (
              <div className="font-medium">
                <div className="flex items-center">
                  <BlurImage
                    src={`/assets/bucketbig.png`}
                    alt="usdc"
                    height={30}
                    width={30}
                  />
                  <div className="ml-2">
                    {Math.floor(reserveAmount * 100) / 100} BUCK
                  </div>
                </div>
              </div>
            ) : (
              <div className="font-medium">
                you don{"'"}t own any Bucket USD
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceWrapper;
