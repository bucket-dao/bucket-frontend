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
        pre: "",
        color: { color: "text-purple-500", text: "UTILITY" },
        post: "ACROSS THE ",
      },
      {
        pre: "ECOSYSTEM",
        color: { color: "", text: "" },
        post: "",
      },
    ],
    paragraph:
      "As more protocols and platforms integrate $BUCK, users will be able to directly use $BUCK. No additional swaps required. Further, $BUCK is an SPL token. So, users can do anything they would normally do with any other fungible token.",
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
    paragraph: "Since $BUCK is collateralized by a variety of USD pegged stablecoins, users can implicitly distribute their risk without extra effort. If one stablecoin drops in value, $BUCK provides an additional layer of protection.",
  },
  {
    direction: "right",
    title: [
      {
        pre: "ADDITIONAL ",
        color: { color: "text-rose-500", text: "YIELD" },
        post: " ,",
      },
      {
        pre: "IN THE BACKGROUND",
        color: { color: "", text: "" },
        post: "",
      },
    ],
    paragraph: "Large pools of idle assets are inefficient. $BUCK can earn yield with underlying assets through different yield generating methods based on dynamic risk profiles. These methods include overcollaterized loans, liquidity provision, liquid staking, and more.",
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
    paragraph: "Liquidity fragmentation is problematic for users and protocols across all of web3. Concentrating liquidity into a single representation of isomorphic assets can improve experiences when swapping on DEXs, protocols need to cross-margin accounts in a common token, and more.",
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
