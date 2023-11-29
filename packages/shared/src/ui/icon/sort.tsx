import type { SVGProps } from "react";
import * as React from "react";

const SvgSort: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 5.833h15M5 10h10M8.334 14.167h3.333"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgSort;
