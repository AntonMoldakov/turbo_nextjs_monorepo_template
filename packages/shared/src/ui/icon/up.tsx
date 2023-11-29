import type { SVGProps } from "react";
import * as React from "react";

const SvgUp: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5.5 11.333 1.457-1.469c1.16-1.171 1.742-1.757 2.45-1.848.173-.022.348-.022.521 0 .708.09 1.289.677 2.45 1.848l1.456 1.47"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgUp;
