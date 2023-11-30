import type { FC } from 'react';
import * as React from 'react';

interface SvgLogoProps {
  size: number;
}

export const SvgLogo: FC<SvgLogoProps> = ({ size }) => (
  <svg
    fill="none"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M0 0h48v48H0z" fill="url(#logo_svg__a)" />
    <defs>
      <pattern height={1} id="logo_svg__a" patternContentUnits="objectBoundingBox" width={1}>
        <use transform="scale(.01515)" xlinkHref="#logo_svg__b" />
      </pattern>
      <image
        height={66}
        id="logo_svg__b"
        width={331}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
