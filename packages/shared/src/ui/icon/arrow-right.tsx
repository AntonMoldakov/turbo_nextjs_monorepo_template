import type { SVGProps } from 'react';
import * as React from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      stroke="#4268FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgArrowRight;
