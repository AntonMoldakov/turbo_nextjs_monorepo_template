import type { SVGProps } from "react";
import * as React from "react";

const SvgArrowDownTray: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#arrow-down-tray_svg__a)"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88" />
      <path d="M15.35 12.65 12 16l-3.35-3.35" />
    </g>
    <defs>
      <clipPath id="arrow-down-tray_svg__a">
        <path d="M0 0h24v24H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownTray;
