"use client";

import { useCallback, useEffect, useRef } from "react";

type Props = {
  min: number;
  max: number;
  updateFilterPrice: (range: "min" | "max", val: number | string) => void;
  filterPrice: {
    min: number | string;
    max: number | string;
  };
};

function RangeSlider({ min, max, updateFilterPrice, filterPrice }: Props) {
  const rangeRef = useRef<HTMLDivElement | null>(null);

  //~~~ Convert to percentage ~~~//
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  //~~~ Set width of the range ~~~//
  useEffect(() => {
    const minPercent = getPercent(Number(filterPrice.min));

    const maxPercent = getPercent(Number(filterPrice.max));

    const diff = maxPercent - minPercent;

    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent * 0.92}%`;

      rangeRef.current.style.width = `${
        diff * (1 + 0.08 * ((100 - diff) / diff)) || 0
      }%`;
    }
  }, [filterPrice, getPercent]);

  return (
    <div className="relative container w-full flex items-center justify-center">
      {/* Min slider input*/}
      <input
        type="range"
        min={min}
        max={max}
        step="0.01"
        value={Number(filterPrice.min)}
        onTouchStart={(e)=>{e.preventDefault()}}
        onChange={(event) => {
          updateFilterPrice("min", event.target.value);
        }}
        className="thumb thumb--left z-[3] appearance-none pointer-events-none outline-none absolute h-0 w-[92%] left-0"
      />

      {/* Max slider input */}
      <input
        type="range"
        min={min}
        max={max}
        step="0.01"
        value={Number(filterPrice.max)}
        onTouchStart={(e)=>{e.preventDefault()}}

        onChange={(event) => {
          updateFilterPrice("max", event.target.value);
        }}
        className="thumb thumb--right z-[3] appearance-none pointer-events-none outline-none absolute right-0 h-0 w-[92%] "
      />

      {/* Slider line */}
      <div className="relative w-full">
        {/* Slider background */}
        <div className="slider__track absolute mb-2 text-sm font-medium h-2 rounded-lg bg-gray-200 dark:bg-gray-600 w-full z-[1]" />

        {/* Slider active range */}
        <div
          ref={rangeRef}
          className="slider__range mb-2 text-sm font-medium absolute h-2 rounded-lg bg-blue-500 dark:bg-blue-800  z-[2]"
        />
      </div>
    </div>
  );
}

export default RangeSlider;
