import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCurriculum = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={25} width={25} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22.584 17.323V5.253c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15c-1.78-1.11-4.96-2.17-7.06-2.34-1.19-.1-2.16.8-2.16 1.99v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98M12.584 6.073v15M8.334 9.073h-2.25M9.084 12.073h-3"
      stroke="#353535"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgCurriculum;
