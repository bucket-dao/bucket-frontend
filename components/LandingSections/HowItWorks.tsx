const HowItWorks = () => {
  return (
    <>
      <div className="max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto md:p-0 p-4">
        <div className="max-w-7xl mx-auto md:p-0 p-4">
          <h1 className="font-bold text-3xl md:text-5xl">
            HOW IT <span className="text-slate-500">WORKS</span>
          </h1>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              01
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              A user <b className="text-black">deposit</b> any pre-approved USD
              pegged stablecoin into bucket. In return, users receive an equal
              amount of $BUCK token.
            </p>
          </div>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              02
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              A user <b className="text-black">redeem</b> can return some
              portion of their $BUCK token. Users are not required to have
              previously deposited into the bucket. As long as aa user has
              $BUCK, they can redeem an equal amount of USD pegged stablecoins
              in the bucket.
            </p>
          </div>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              03
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              Bucket can <b className="text-black">approve or remove</b> USD
              pegged stablecoins based on certain factors, such as risk profile.
              Over time, this is a function that will be decentralized via
              something like DAO governence.
            </p>
          </div>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              04
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              Bucket will aim to{" "}
              <b className="text-black">maintain a specific allocation</b> for
              each USD pegged stablecoins. This allocation can be modified over
              time based on user preferences, risk profiles, and more.
            </p>
          </div>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              05
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              It is possible a stablecoin allocations move away from the target
              allocations over time. In this case, bucket will routinely check
              allocation ratios and <b className="text-black">rebalance</b> the
              stablecoins when needed.
            </p>
          </div>

          <div className="flex mt-12">
            <span className="h-fit bg-black p-2 md:p-4 text-white mt-2">
              06
            </span>

            <p className="relative text-lg ml-6 md:ml-12 md:text-3xl font-medium text-slate-500">
              Bucket will choose some percent of assets for{" "}
              <b className="text-black">yield generation</b>. The generated
              returns will be used to fund an insurance fund and provide returns
              to users holding $BUCK token.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
