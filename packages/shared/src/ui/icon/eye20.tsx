import type { SVGProps } from "react";
import * as React from "react";

const SvgEye20: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16.892c2.941 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEye20;
