import type { SVGProps } from 'react';
import * as React from 'react';

export const SvgDocumentText = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      stroke="#353535"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}>
      <path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5" />
      <path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" />
    </g>
  </svg>
);
