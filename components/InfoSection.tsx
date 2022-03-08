import FrostCard from "./FrostCard";
type Props = {
  title: string;
  content: string[];
  className: string;
};
const InfoSection = ({ title, content, className }: Props) => {
  return (
    <div
      className={`${className} border-black  border-0 md:border-l-2 grid grid-cols-12 text-xl`}
    >
      <div className="md:block hidden col-span-3 pl-4 font-bold pt-3">{title}</div>
      <div className="col-span-12 md:col-span-9">
          <div className="block md:hidden text-center text-2xl font-medium mb-2">{title}</div>
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
