import { useEffect, useState } from "react";

type Props = {
  multiplier: number;
  parentRef: React.MutableRefObject<HTMLDivElement | null>;
  text: string;
  className: string;
  maxSize: number;
};

function SizedTitle({
  multiplier,
  parentRef,
  text,
  className,
  maxSize,
}: Props) {
  //~~~ Function to calculate font size of a title
  //~~~ that would fit the longest word of it properly in a width of the parent box
  //~~~ based on the font letter width collibrated via multiplier prop
  const getTitleFontSize = () =>
    Math.round(
      ((parentRef.current?.clientWidth || window.innerWidth) /
        text
          .split(" ")
          .reduce((acc, red) => (acc.length > red.length ? acc : red), "")
          .length) *
        multiplier
    );

  const [titleFontSize, setTitleFontSize] = useState(getTitleFontSize());

  window.addEventListener("resize", () => {
    setTitleFontSize(getTitleFontSize());
  });

  useEffect(() => {
    setTitleFontSize(getTitleFontSize());
  }, []);

  return (
    <h1
      className={className}
      style={{
        fontSize: Math.min(titleFontSize, maxSize) + "px",
      }}
    >
      {text}
    </h1>
  );
}

export default SizedTitle;
