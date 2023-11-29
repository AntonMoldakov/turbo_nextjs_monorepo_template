import type { SVGProps } from "react";
import * as React from "react";

const SvgRaphaelFacebook: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.012 2H4.25A2.257 2.257 0 0 0 2 4.25v10.763a2.257 2.257 0 0 0 2.25 2.25h10.763a2.257 2.257 0 0 0 2.25-2.25V4.25A2.258 2.258 0 0 0 15.013 2m-.144 8.147h-1.812V16.7h-2.71v-6.553H8.991v-2.26h1.355V6.533c0-1.843.765-2.939 2.942-2.939h1.81v2.258h-1.132c-.846 0-.902.317-.902.906l-.008 1.13h2.05l-.238 2.26"
      fill="#4268FB"
    />
  </svg>
);
export default SvgRaphaelFacebook;
