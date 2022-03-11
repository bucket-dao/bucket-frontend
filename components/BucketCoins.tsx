import BlurImage from "./BlurImage";

const BucketCoins = () => {
  return (
    <>
      <div className="text-center">
        <div className=" w-80 mx-auto coin-wrapper  ">
          <div className="coin-1">
            <BlurImage
              src="/coins/usdc3d2.png"
              alt="bucket"
              height={120}
              width={120}
            />
          </div>
          <div className="coin-2">
            <BlurImage
              src="/coins/usdc3d1.png"
              alt="bucket"
              height={95}
              width={95}
            />
          </div>
          <div className="coin-3">
            <BlurImage
              src="/coins/usdc3d3.png"
              alt="bucket"
              height={115}
              width={115}
            />
          </div>
        </div>
        <BlurImage
          src="/assets/bucketbig.png"
          alt="bucket"
          height={200}
          width={200}
        />
      </div>
    </>
  );
};

export default BucketCoins;
