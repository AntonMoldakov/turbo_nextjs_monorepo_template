import type { SVGProps } from "react";
import * as React from "react";

const SvgClose: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.167 4.167 11.667 11.667m-11.667 0L10 10l5.834-5.833"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgClose;
