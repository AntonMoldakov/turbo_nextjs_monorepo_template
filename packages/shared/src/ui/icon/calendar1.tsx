import type { SVGProps } from 'react';
import * as React from 'react';

export const SvgCalendar1 = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M15.695 13.7h.009M15.695 16.7h.009M11.996 13.7h.008M11.996 16.7h.008M8.294 13.7h.01M8.294 16.7h.01"
        strokeWidth={2}
      />
    </g>
  </svg>
);
