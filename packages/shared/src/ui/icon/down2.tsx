import type { SVGProps } from "react";
import * as React from "react";

const SvgDown2: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.833 8-1.456 1.47c-1.161 1.17-1.742 1.757-2.45 1.847a2.065 2.065 0 0 1-.521 0c-.708-.09-1.289-.676-2.45-1.848L5.5 8"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgDown2;
