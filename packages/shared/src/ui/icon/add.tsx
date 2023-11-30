import type { SVGProps } from 'react';
import * as React from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 12h12M12 18V6"
      stroke="#4268FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgAdd;
