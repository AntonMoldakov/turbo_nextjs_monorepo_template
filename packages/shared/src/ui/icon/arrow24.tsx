import type { SVGProps } from "react";
import * as React from "react";

const SvgArrow24: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 18.07 2.43 12 8.5 5.93M3.5 12h16.83"
      stroke="#4268FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgArrow24;
