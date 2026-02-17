// Service placeholder images as SVG components
export const AnalyticsImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="analyticsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#analyticsGrad)" opacity="0.1" />
    
    {/* Chart bars */}
    <rect x="50" y="180" width="30" height="80" fill="#f97316" opacity="0.8" rx="4" />
    <rect x="100" y="140" width="30" height="120" fill="#f97316" opacity="0.9" rx="4" />
    <rect x="150" y="100" width="30" height="160" fill="#f97316" rx="4" />
    <rect x="200" y="120" width="30" height="140" fill="#f97316" opacity="0.9" rx="4" />
    <rect x="250" y="80" width="30" height="180" fill="#f97316" rx="4" />
    <rect x="300" y="160" width="30" height="100" fill="#f97316" opacity="0.8" rx="4" />
    
    {/* Trend line */}
    <path d="M 65 200 Q 115 160 165 120 T 265 100 T 315 180" 
          stroke="#ea580c" strokeWidth="3" fill="none" opacity="0.7" />
    
    {/* Data points */}
    <circle cx="65" cy="200" r="4" fill="#ea580c" />
    <circle cx="115" cy="160" r="4" fill="#ea580c" />
    <circle cx="165" cy="120" r="4" fill="#ea580c" />
    <circle cx="215" cy="140" r="4" fill="#ea580c" />
    <circle cx="265" cy="100" r="4" fill="#ea580c" />
    <circle cx="315" cy="180" r="4" fill="#ea580c" />
  </svg>
);

export const AIImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bfdbfe" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#aiGrad)" opacity="0.1" />
    
    {/* Neural network nodes */}
    <circle cx="80" cy="80" r="12" fill="#3b82f6" opacity="0.8" />
    <circle cx="80" cy="150" r="12" fill="#3b82f6" opacity="0.8" />
    <circle cx="80" cy="220" r="12" fill="#3b82f6" opacity="0.8" />
    
    <circle cx="200" cy="60" r="12" fill="#3b82f6" opacity="0.9" />
    <circle cx="200" cy="120" r="12" fill="#3b82f6" />
    <circle cx="200" cy="180" r="12" fill="#3b82f6" />
    <circle cx="200" cy="240" r="12" fill="#3b82f6" opacity="0.9" />
    
    <circle cx="320" cy="100" r="12" fill="#3b82f6" opacity="0.8" />
    <circle cx="320" cy="170" r="12" fill="#3b82f6" opacity="0.8" />
    <circle cx="320" cy="200" r="12" fill="#3b82f6" />
    
    {/* Connections */}
    <line x1="92" y1="80" x2="188" y2="60" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="92" y1="80" x2="188" y2="120" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="92" y1="150" x2="188" y2="120" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="92" y1="150" x2="188" y2="180" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="92" y1="220" x2="188" y2="180" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="92" y1="220" x2="188" y2="240" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    
    <line x1="212" y1="60" x2="308" y2="100" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="212" y1="120" x2="308" y2="100" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="212" y1="120" x2="308" y2="170" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="212" y1="180" x2="308" y2="170" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="212" y1="180" x2="308" y2="200" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
    <line x1="212" y1="240" x2="308" y2="200" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const StrategyImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a7f3d0" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#strategyGrad)" opacity="0.1" />
    
    {/* Target circles */}
    <circle cx="200" cy="150" r="80" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.3" />
    <circle cx="200" cy="150" r="60" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.5" />
    <circle cx="200" cy="150" r="40" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.7" />
    <circle cx="200" cy="150" r="20" fill="#10b981" opacity="0.8" />
    
    {/* Arrow pointing to center */}
    <path d="M 120 80 L 180 140" stroke="#10b981" strokeWidth="4" opacity="0.8" />
    <path d="M 170 130 L 180 140 L 170 150" stroke="#10b981" strokeWidth="4" fill="none" opacity="0.8" />
    
    {/* Strategy elements */}
    <rect x="50" y="50" width="60" height="40" fill="#10b981" opacity="0.6" rx="8" />
    <rect x="290" y="60" width="60" height="40" fill="#10b981" opacity="0.6" rx="8" />
    <rect x="320" y="210" width="60" height="40" fill="#10b981" opacity="0.6" rx="8" />
    <rect x="20" y="200" width="60" height="40" fill="#10b981" opacity="0.6" rx="8" />
  </svg>
);

export const AutomationImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="automationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#automationGrad)" opacity="0.1" />
    
    {/* Gear wheels */}
    <g transform="translate(120, 120)">
      <circle cx="0" cy="0" r="40" fill="none" stroke="#8b5cf6" strokeWidth="4" opacity="0.8" />
      <circle cx="0" cy="0" r="30" fill="#8b5cf6" opacity="0.3" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect key={i} x="-3" y="-45" width="6" height="10" fill="#8b5cf6" 
              transform={`rotate(${angle})`} opacity="0.8" />
      ))}
    </g>
    
    <g transform="translate(280, 120)">
      <circle cx="0" cy="0" r="35" fill="none" stroke="#8b5cf6" strokeWidth="4" opacity="0.8" />
      <circle cx="0" cy="0" r="25" fill="#8b5cf6" opacity="0.3" />
      {/* Gear teeth */}
      {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => (
        <rect key={i} x="-3" y="-40" width="6" height="10" fill="#8b5cf6" 
              transform={`rotate(${angle})`} opacity="0.8" />
      ))}
    </g>
    
    {/* Connecting elements */}
    <rect x="180" y="115" width="80" height="10" fill="#8b5cf6" opacity="0.6" rx="5" />
    
    {/* Process flow */}
    <rect x="60" y="220" width="80" height="30" fill="#8b5cf6" opacity="0.4" rx="15" />
    <rect x="160" y="220" width="80" height="30" fill="#8b5cf6" opacity="0.6" rx="15" />
    <rect x="260" y="220" width="80" height="30" fill="#8b5cf6" opacity="0.8" rx="15" />
    
    {/* Arrows */}
    <path d="M 145 235 L 155 235" stroke="#8b5cf6" strokeWidth="3" />
    <path d="M 150 230 L 155 235 L 150 240" stroke="#8b5cf6" strokeWidth="3" fill="none" />
    <path d="M 245 235 L 255 235" stroke="#8b5cf6" strokeWidth="3" />
    <path d="M 250 230 L 255 235 L 250 240" stroke="#8b5cf6" strokeWidth="3" fill="none" />
  </svg>
);