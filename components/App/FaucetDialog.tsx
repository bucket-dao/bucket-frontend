import { BucketClient } from "@bucket-program/sdk";
import { useState } from "react";
import Faucet from "./Faucet";
type Props = {
  refreshData: () => Promise<void>;
  bucketClient?: BucketClient;
};
function FaucetDialog({ refreshData, bucketClient }: Props) {
  return (
    <div className="dialog--cover bg-black/[.7] backdrop-blur-sm   flex items-center z-50">
      <div className="bg-white max-w-lg mx-auto mb-16 p-8 rounded-lg">
          <div className="mb-4">To get started please airdrop yourself devnet tokens via the faucet below.</div>
        {bucketClient ? (
          <>
            <Faucet bucketClient={bucketClient} refreshData={refreshData} />
          </>
        ) : (
          <div className="flex  pb-3 pt-3 justify-center items-center">
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaucetDialog;
