import type { SVGProps } from "react";

export function AgmLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12h3l2-2 2 4 2-4 2 2h3" />
      <path d="M3 20h18" />
      <path d="M4 20V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
      <path d="M12 6V4" />
      <path d="M8 6V4" />
      <path d="M16 6V4" />
    </svg>
  );
}
