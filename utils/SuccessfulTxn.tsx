type Props = {
  txn: string;
};

const SuccessfulTxn = ({ txn }: Props) => {
  return (
    <span>
      Success.{" "}
      <a
        className="underline text-blue-700"
        href={`https://explorer.solana.com/tx/${txn}?cluster=devnet`}
        target="_blank"
        rel="noreferrer"
      >
        View Transaction!
      </a>
    </span>
  );
};

export default SuccessfulTxn;
