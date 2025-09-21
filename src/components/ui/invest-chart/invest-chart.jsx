import React from 'react';

const InvestmentChart = () => {
  return (
    <div className="chart-container">
      <svg width="350" height="164" viewBox="0 0 350 164" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal grid lines */}
        <line x1="61" y1="15" x2="349" y2="15" stroke="#E5E5F3" strokeDasharray="2 4" />
        <line x1="61" y1="51" x2="349" y2="51" stroke="#E5E5F3" strokeDasharray="2 4" />
        <line x1="61" y1="87" x2="349" y2="87" stroke="#E5E5F3" strokeDasharray="2 4" />
        <line x1="61" y1="123" x2="349" y2="123" stroke="#E5E5F3" strokeDasharray="2 4" />
        
        {/* Bars with drop shadow filters */}
        <g filter="url(#filter0_d)">
          <rect x="74" y="103" width="20" height="21" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter1_d)">
          <rect x="114.833" y="29" width="20" height="95" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter2_d)">
          <rect x="155.667" y="62" width="20" height="62" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter3_d)">
          <rect x="196.5" y="87" width="20" height="37" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter4_d)">
          <rect x="237.333" y="26" width="20" height="98" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter5_d)">
          <rect x="278.167" y="58" width="20" height="66" rx="4" fill="#2D91FE" />
        </g>
        <g filter="url(#filter6_d)">
          <rect x="319" y="12" width="20" height="112" rx="4" fill="#4BDFFF" />
        </g>
        
        {/* Month labels */}
        <text x="84" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Jan</text>
        <text x="124.833" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Feb</text>
        <text x="165.667" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Mar</text>
        <text x="206.5" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Apr</text>
        <text x="247.333" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">May</text>
        <text x="288.167" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Jun</text>
        <text x="329" y="140" textAnchor="middle" fontSize="10" fill="#0D0F52" opacity="0.5">Jul</text>
        
        {/* Filter definitions */}
        <defs>
          <filter id="filter0_d" x="68" y="103" width="32" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter1_d" x="108.833" y="29" width="32" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter2_d" x="149.667" y="62" width="32" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter3_d" x="190.5" y="87" width="32" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter4_d" x="231.333" y="26" width="32" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter5_d" x="272.167" y="58" width="32" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter6_d" x="313" y="12" width="32" height="150" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="20" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dy="32" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.116319 0 0 0 0 0.278708 0 0 0 0 0.416667 0 0 0 0.24 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default InvestmentChart;