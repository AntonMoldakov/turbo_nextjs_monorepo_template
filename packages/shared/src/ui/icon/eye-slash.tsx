import type { SVGProps } from "react";
import * as React from "react";

const SvgEyeSlash: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12.108 7.892-4.216 4.216a2.98 2.98 0 1 1 4.217-4.217"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.85 4.808c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325a11.938 11.938 0 0 0 2.259 2.641M7.017 16.275c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325a13.523 13.523 0 0 0-.884-1.225"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.925 10.583a2.97 2.97 0 0 1-2.35 2.35M7.892 12.108l-6.225 6.225M18.333 1.667l-6.225 6.225"
      stroke="#A1A5AF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEyeSlash;
