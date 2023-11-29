import type { SVGProps } from "react";
import * as React from "react";

const SvgCloseBlack20: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#close_black_20_svg__a)">
      <path
        d="m4.167 4.167 11.667 11.667m-11.667 0L10 10l5.834-5.833"
        stroke="#353535"
        strokeLinecap="round"
        strokeWidth={1.25}
      />
    </g>
    <defs>
      <clipPath id="close_black_20_svg__a">
        <path d="M0 0h20v20H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloseBlack20;
