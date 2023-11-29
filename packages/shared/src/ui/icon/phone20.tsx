import type { SVGProps } from "react";
import * as React from "react";

const SvgPhone20: React.FC<SVGProps<SVGSVGElement>>  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.308 15.275c0 .3-.067.608-.208.908-.142.3-.325.584-.567.85-.408.45-.858.775-1.367.984-.5.208-1.041.316-1.625.316-.85 0-1.758-.2-2.716-.608a14.644 14.644 0 0 1-2.867-1.65 23.952 23.952 0 0 1-2.733-2.333A23.671 23.671 0 0 1 3.9 11.017c-.683-.95-1.233-1.9-1.633-2.842-.4-.95-.6-1.858-.6-2.725 0-.567.1-1.108.3-1.608.2-.509.516-.975.958-1.392.533-.525 1.117-.783 1.733-.783.233 0 .467.05.675.15.217.1.409.25.558.466l1.934 2.725c.15.209.258.4.333.584.075.175.117.35.117.508 0 .2-.059.4-.175.592a2.835 2.835 0 0 1-.467.591L7 7.942a.446.446 0 0 0-.133.333c0 .067.008.125.024.192.026.066.05.116.067.166.15.275.409.634.775 1.067.375.433.775.875 1.209 1.317.45.441.883.85 1.325 1.225.433.366.791.616 1.075.766.041.017.091.042.15.067a.575.575 0 0 0 .208.033c.142 0 .25-.05.341-.141l.634-.625a2.56 2.56 0 0 1 .6-.467 1.11 1.11 0 0 1 .591-.175c.159 0 .325.033.509.108.183.075.375.184.583.325l2.758 1.959c.217.15.367.325.459.533.083.208.133.417.133.65Z"
      stroke="#4268FB"
      strokeMiterlimit={10}
      strokeWidth={1.25}
    />
    <path
      d="M15.417 7.5c0-.5-.392-1.266-.975-1.891-.534-.575-1.242-1.025-1.942-1.025M18.333 7.5A5.829 5.829 0 0 0 12.5 1.667"
      stroke="#4268FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
    />
  </svg>
);
export default SvgPhone20;