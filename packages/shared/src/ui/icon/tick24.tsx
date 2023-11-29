import type { SVGProps } from "react";
import * as React from "react";

const SvgTick24: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#tick_24_svg__a)">
      <path
        d="M20.576 7.48a.75.75 0 1 0-1.152-.96l-5.39 6.469c-1.084 1.3-1.845 2.21-2.506 2.807-.645.583-1.09.768-1.528.768-.437 0-.883-.185-1.528-.768-.66-.597-1.422-1.508-2.505-2.807l-1.39-1.67a.75.75 0 1 0-1.153.961l1.43 1.715c1.034 1.243 1.863 2.238 2.613 2.914.774.7 1.565 1.155 2.533 1.155s1.76-.456 2.533-1.155c.75-.676 1.579-1.671 2.614-2.914l5.43-6.515"
        fill="#4268FB"
      />
    </g>
    <defs>
      <clipPath id="tick_24_svg__a">
        <path d="M0 0h24v24H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTick24;
