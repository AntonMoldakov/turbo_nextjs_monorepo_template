import type { SVGProps } from 'react';
import * as React from 'react';

const SvgDiscounts = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={25} width={25} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.314 20.283c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.623c.01-4.03-.93-5.04-4.71-5.04h-7.56c-3.78 0-4.72 1.01-4.72 5.04v11.26c0 2.67 1.46 3.29 3.23 1.4M9.584 13.583l6-6"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.578 13.583h.009M9.578 8.083h.009"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default SvgDiscounts;
