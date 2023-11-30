import type { SVGProps } from 'react';
import * as React from 'react';

export const SvgReceiptDisscount = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M6.73 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4M9 13l6-6"
        strokeWidth={1.5}
      />
      <path d="M14.995 13h.009M8.995 7.5h.008" strokeWidth={2} />
    </g>
  </svg>
);
