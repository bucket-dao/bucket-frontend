import FrostCard from "./FrostCard";
type Props = {
  title: string;
  content: string[];
  className: string;
};
const InfoSection = ({ title, content, className }: Props) => {
  return (
    <div
      className={`${className} border-black  border-l-2 grid grid-cols-12 text-xl`}
    >
      <div className="col-span-3 pl-4 font-bold pt-3">{title}</div>
      <div className="col-span-9">
        <FrostCard className="w-full">
          {content.map((c: string, key: number) => (
            <div key={key} className={`${key != 0 && "mt-2"}`}>
              {c}
            </div>
          ))}
        </FrostCard>
      </div>
    </div>
  );
};

export default InfoSection;
