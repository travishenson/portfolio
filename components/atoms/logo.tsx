import React from 'react';

interface LogoProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = '100%',
  height = '100%',
  fill = '#F2F2F2',
}: LogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4167 4167"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">Travis Henson - Personal Logo</title>
      <g transform="matrix(1.48673,0,0,1.48673,-1015.42,-1013.87)">
        <g id="Layer-2">
          <path
            d="M1839.35,3338.68L2423.26,3338.68L2423.26,3484.52L1693.52,3484.52L1693.52,1268.08L1839.35,1268.08L1839.35,3338.68ZM1985.48,2259.52L2131.31,2259.52L2131.31,3192.85L1985.48,3192.85L1985.48,2259.52ZM2277.43,3192.85L2277.43,1269.24L3185.07,1269.24L3185.07,1415.08L2423.26,1415.08L2423.26,3192.85L2277.43,3192.85ZM1985.76,1123.41L974.65,1123.41L974.65,977.575L2131.6,977.575L2131.6,2112.69L1985.76,2112.69L1985.76,1123.41ZM828.821,1269.24L1546.88,1269.24L1546.88,1415.08L682.988,1415.08L682.987,681.946L828.821,681.946L828.821,1269.24ZM3339.28,827.779L974.654,827.779L974.654,681.946L3485.11,681.946L3485.11,1415.08L3339.28,1415.08L3339.28,827.779ZM2277.43,977.575L3185.07,977.575L3185.07,1123.41L2277.43,1123.41L2277.43,977.575Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
