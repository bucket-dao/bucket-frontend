import { mintToSymbol } from "../../utils/constant";
import BlurImage from "../BlurImage";

type Props = {
  title: string;
  collateral: any[];
  reserveAmount?: number;
  bucket?: boolean;
};

const BalanceWrapper = ({
  title,
  collateral,
  reserveAmount,
  bucket,
}: Props) => {
  return (
    <div>
      <div className="mx-auto rounded-lg  mt-4  w-full text-center max-w-lg">
        <div className="text-2xl  rounded-t-lg border-black font-bold p-4 ">
          {title}
        </div>
        <div className="mx-auto ">
          {collateral.length > 0 ? (
            <div className="font-medium">
              {collateral.map((token: any, key: number) => {
                const tokenInfo = token.account.data.parsed.info;
                const symbol = mintToSymbol[tokenInfo.mint];
                const symbolLC = symbol.toLowerCase();
                return (
                  <div key={key} className="p-4 border-t ">
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
            <div className="font-medium text-left">None.</div>
          )}

          <div className="mt-2">
            {bucket ? (
              <div className="text-xl text-left font-bold pb-2 px-4">
                Total Supply
              </div>
            ) : (
              <div className="text-xl text-left font-bold pb-2 px-4">
                Bucket
              </div>
            )}
            {reserveAmount && reserveAmount > 0 ? (
              <div className="font-medium p-4 border-t">
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
              <div className="font-medium text-left">None.</div>
            )}
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default BalanceWrapper;
