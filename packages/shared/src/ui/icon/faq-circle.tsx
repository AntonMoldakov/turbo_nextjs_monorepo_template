import type { SVGProps } from "react";
import * as React from "react";

const SvgFaqCircle: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={22}
    width={22}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8 8 .335-1.006c.704-2.11 3.489-2.563 4.823-.783a2.758 2.758 0 0 1-.13 3.472l-.92 1.05A4.48 4.48 0 0 0 11 13.683V14m10-3c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
      stroke="#4268FB"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <path d="M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="#4268FB" />
  </svg>
);
export default SvgFaqCircle;
