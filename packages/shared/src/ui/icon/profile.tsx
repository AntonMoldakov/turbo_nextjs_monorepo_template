import type { SVGProps } from "react";
import * as React from "react";

const SvgProfile: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.133 9.058a1.515 1.515 0 0 0-.275 0A3.683 3.683 0 0 1 6.3 5.367c0-2.042 1.65-3.7 3.7-3.7a3.696 3.696 0 0 1 .133 7.392M5.967 12.134c-2.017 1.35-2.017 3.55 0 4.891 2.291 1.534 6.05 1.534 8.341 0 2.017-1.35 2.017-3.55 0-4.891-2.283-1.526-6.041-1.526-8.341 0"
      stroke="#353535"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgProfile;
