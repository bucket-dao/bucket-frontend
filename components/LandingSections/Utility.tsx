import { ReactNode } from "react";
import FadeInSection from "../FadeInSection";

const Utility = () => {
  return (
    <>
      {Sections.map((s, key) => {
        return (
          <FadeInSection key={key} direction={s.direction}>
            <_Wrapper>
              <_Heading>
                {s.title.map((row, idx) => (
                  <div key={idx}>
                    {row.pre}
                    <span className={`${row.color.color}`}>
                      {row.color.text}
                    </span>
                    {row.post}
                  </div>
                ))}
              </_Heading>
              <_Paragraph>{s.paragraph}</_Paragraph>
            </_Wrapper>
          </FadeInSection>
        );
      })}
    </>
  );
};

const Sections = [
  {
    direction: "right",
    title: [
      {
        pre: "UTILITY ",
        color: { color: "text-purple-500", text: "ACROSS" },
        post: " THE ",
      },
      {
        pre: "ECOSYSTEM",
        color: { color: "", text: "" },
        post: "",
      },
    ],
    paragraph:
      "Since $BUCK is collateralized by a variety of USD pegged stablecoins, uses can implicitly distribute their risk. If one stablecoin drops in value, bucket provides an additional layer of protection.",
  },
  {
    direction: "left",
    title: [
      {
        pre: "LOWER",
        color: { color: "", text: "" },
        post: "",
      },
      {
        pre: "CONCENTRATED",
        color: { color: "text-green-500", text: " RISK" },
        post: "",
      },
    ],
    paragraph:
      "Since $BUCK is collateralized by a variety of USD pegged stablecoins, uses can implicitly distribute their risk. If one stablecoin drops in value, bucket provides an additional layer of protection.",
  },
  {
    direction: "right",
    title: [
      {
        pre: "",
        color: { color: "text-rose-500", text: "ADDITIONAL" },
        post: " YIELD,",
      },
      {
        pre: "IN THE BACKGROUND",
        color: { color: "", text: "" },
        post: "",
      },
    ],
    paragraph:
      "Large pools of idle assets are inefficient. Bucket protocol can earn yield with underlying assets through different yield generating methods based on dynamic risk profiles. These methods include overcollaterized loans, liquidity provision, liquid staking, and more.",
  },
  {
    direction: "left",
    title: [
      {
        pre: "MORE ",
        color: { color: "text-blue-500", text: "LIQUIDITY" },
        post: ",",
      },
      {
        pre: "BETTER FOR EVERYONE",
        color: { color: "", text: "" },
        post: "",
      },
    ],
    paragraph:
      "Liquidity fragmentation is problematic for users and protocols. Concentrating liquidity into a single representation of isomorphic assets can improve experiences when swapping on DEXs, protocols need to cross-margin accounts in a common token, and more.",
  },
];

type HelperProps = {
  children: ReactNode;
};
const _Wrapper = ({ children }: HelperProps) => {
  return <div className="max-w-7xl mx-auto mt-8 md:mt-20">{children}</div>;
};

const _Heading = ({ children }: HelperProps) => {
  return <h1 className="font-bold text-3xl md:text-5xl ">{children}</h1>;
};

const _Paragraph = ({ children }: HelperProps) => {
  return (
    <p className="relative mt-2 text-lg md:text-3xl font-medium text-slate-500">
      {children}
    </p>
  );
};

export default Utility;
