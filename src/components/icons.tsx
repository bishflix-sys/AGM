import type { SVGProps } from "react";

export function AgmLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 70"
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M 50 10 C 45 25, 45 45, 50 60 L 30 60 L 10 10 Z" />
        </clipPath>
      </defs>
      
      <g fontFamily="sans-serif" fontWeight="bold">
        {/* Background Star */}
        <path 
            d="M98 35 L104.18 45.33 L116.12 47.03 L107.56 55.27 L109.42 67.07 L98 61.5 L86.58 67.07 L88.44 55.27 L79.88 47.03 L91.82 45.33 Z"
            fill="hsl(var(--primary))"
            opacity="0.1"
            transform="translate(1, -5)"
        />

        {/* Green A part */}
        <path 
            d="M10 10 L30 60 L50 60 L70 10 H50 L40 40 L30 10 Z" 
            fill="#00853E"
        />
        <path 
            d="M 50 10 C 45 25, 45 45, 50 60 L 30 60 L 10 10 Z" 
            fill="currentColor"
            clipPath="url(#clip-path)"
        />
        <path 
            d="M40 35 C 42 30, 45 30, 48 35"
            fill="none"
            stroke="#00853E"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        
        {/* Separator */}
        <line x1="80" y1="10" x2="80" y2="60" stroke="#00853E" strokeWidth="1"/>
        
        {/* Red GM */}
        <text 
            x="95" 
            y="58" 
            fontSize="55" 
            fill="#D81E05"
        >
            GM
        </text>
        
        {/* Bottom Text */}
        <text 
            x="95" 
            y="52" 
            fontSize="7" 
            fill="#00853E"
            transform="translate(-85, 12)"
        >
            ADMINISTRATION GENERALE
        </text>
        <text 
            x="130" 
            y="62" 
            fontSize="7" 
            fill="#00853E"
            transform="translate(-85, 12)"
        >
            MUNICIPALE
        </text>
      </g>
    </svg>
  );
}