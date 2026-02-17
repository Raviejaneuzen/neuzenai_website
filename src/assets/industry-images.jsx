// Industry placeholder images as SVG components
export const MediaImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="mediaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bfdbfe" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#mediaGrad)" opacity="0.1" />
    
    {/* Video player */}
    <rect x="80" y="80" width="240" height="140" fill="#3b82f6" opacity="0.8" rx="12" />
    <rect x="90" y="90" width="220" height="120" fill="#ffffff" rx="8" />
    
    {/* Play button */}
    <circle cx="200" cy="150" r="25" fill="#3b82f6" opacity="0.9" />
    <path d="M 190 140 L 190 160 L 210 150 Z" fill="white" />
    
    {/* Progress bar */}
    <rect x="90" y="195" width="220" height="4" fill="#e5e7eb" rx="2" />
    <rect x="90" y="195" width="120" height="4" fill="#3b82f6" rx="2" />
    
    {/* Streaming indicators */}
    <circle cx="120" cy="50" r="4" fill="#3b82f6" opacity="0.6" />
    <circle cx="140" cy="45" r="4" fill="#3b82f6" opacity="0.7" />
    <circle cx="160" cy="40" r="4" fill="#3b82f6" opacity="0.8" />
    <circle cx="180" cy="35" r="4" fill="#3b82f6" />
    
    {/* Content thumbnails */}
    <rect x="50" y="240" width="60" height="40" fill="#3b82f6" opacity="0.4" rx="6" />
    <rect x="130" y="240" width="60" height="40" fill="#3b82f6" opacity="0.5" rx="6" />
    <rect x="210" y="240" width="60" height="40" fill="#3b82f6" opacity="0.6" rx="6" />
    <rect x="290" y="240" width="60" height="40" fill="#3b82f6" opacity="0.7" rx="6" />
  </svg>
);

export const HealthImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fecaca" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#healthGrad)" opacity="0.1" />
    
    {/* Medical cross */}
    <rect x="180" y="100" width="40" height="100" fill="#ef4444" opacity="0.8" rx="8" />
    <rect x="150" y="130" width="100" height="40" fill="#ef4444" opacity="0.8" rx="8" />
    
    {/* Heart rate line */}
    <path d="M 50 200 L 80 200 L 100 180 L 120 220 L 140 160 L 160 200 L 180 200 L 200 180 L 220 220 L 240 160 L 260 200 L 280 200 L 300 180 L 320 220 L 350 200" 
          stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.7" />
    
    {/* Medical devices */}
    <circle cx="100" cy="80" r="20" fill="#ef4444" opacity="0.6" />
    <circle cx="300" cy="80" r="20" fill="#ef4444" opacity="0.6" />
    <rect x="90" y="70" width="20" height="20" fill="white" opacity="0.8" rx="4" />
    <rect x="290" y="70" width="20" height="20" fill="white" opacity="0.8" rx="4" />
    
    {/* Pills */}
    <ellipse cx="80" cy="250" rx="12" ry="8" fill="#ef4444" opacity="0.7" />
    <ellipse cx="120" cy="260" rx="12" ry="8" fill="#ef4444" opacity="0.6" />
    <ellipse cx="160" cy="255" rx="12" ry="8" fill="#ef4444" opacity="0.8" />
    
    {/* Data points */}
    <circle cx="320" cy="120" r="3" fill="#ef4444" />
    <circle cx="330" cy="140" r="3" fill="#ef4444" />
    <circle cx="340" cy="130" r="3" fill="#ef4444" />
    <circle cx="350" cy="150" r="3" fill="#ef4444" />
  </svg>
);

export const TransportImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="transportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a7f3d0" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#transportGrad)" opacity="0.1" />
    
    {/* Truck */}
    <rect x="120" y="140" width="80" height="40" fill="#10b981" opacity="0.8" rx="8" />
    <rect x="200" y="150" width="40" height="30" fill="#10b981" opacity="0.9" rx="6" />
    
    {/* Wheels */}
    <circle cx="140" cy="190" r="12" fill="#10b981" />
    <circle cx="180" cy="190" r="12" fill="#10b981" />
    <circle cx="220" cy="190" r="12" fill="#10b981" />
    
    {/* Route path */}
    <path d="M 50 100 Q 150 80 250 120 T 350 100" 
          stroke="#10b981" strokeWidth="4" fill="none" opacity="0.6" strokeDasharray="10,5" />
    
    {/* Location pins */}
    <circle cx="50" cy="100" r="8" fill="#10b981" />
    <path d="M 50 92 L 50 108 M 46 100 L 54 100" stroke="white" strokeWidth="2" />
    
    <circle cx="200" cy="110" r="8" fill="#10b981" />
    <path d="M 200 102 L 200 118 M 196 110 L 204 110" stroke="white" strokeWidth="2" />
    
    <circle cx="350" cy="100" r="8" fill="#10b981" />
    <path d="M 350 92 L 350 108 M 346 100 L 354 100" stroke="white" strokeWidth="2" />
    
    {/* Packages */}
    <rect x="130" y="120" width="15" height="15" fill="#10b981" opacity="0.6" rx="2" />
    <rect x="150" y="115" width="15" height="15" fill="#10b981" opacity="0.7" rx="2" />
    <rect x="170" y="125" width="15" height="15" fill="#10b981" opacity="0.8" rx="2" />
    
    {/* GPS signals */}
    <circle cx="220" cy="80" r="15" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.4" />
    <circle cx="220" cy="80" r="25" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.3" />
    <circle cx="220" cy="80" r="35" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.2" />
    <circle cx="220" cy="80" r="4" fill="#10b981" />
  </svg>
);

export const EcommerceImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="ecommerceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#ecommerceGrad)" opacity="0.1" />
    
    {/* Shopping cart */}
    <rect x="150" y="120" width="100" height="80" fill="none" stroke="#f97316" strokeWidth="3" rx="8" />
    <circle cx="170" cy="220" r="8" fill="#f97316" />
    <circle cx="230" cy="220" r="8" fill="#f97316" />
    
    {/* Cart handle */}
    <path d="M 120 130 L 150 130" stroke="#f97316" strokeWidth="3" />
    <path d="M 120 120 L 120 140" stroke="#f97316" strokeWidth="3" />
    
    {/* Products in cart */}
    <rect x="160" y="140" width="20" height="20" fill="#f97316" opacity="0.6" rx="4" />
    <rect x="190" y="135" width="20" height="25" fill="#f97316" opacity="0.7" rx="4" />
    <rect x="220" y="145" width="20" height="15" fill="#f97316" opacity="0.8" rx="4" />
    
    {/* Product recommendations */}
    <rect x="60" y="80" width="40" height="50" fill="#f97316" opacity="0.4" rx="6" />
    <rect x="300" y="70" width="40" height="60" fill="#f97316" opacity="0.4" rx="6" />
    <rect x="320" y="160" width="40" height="45" fill="#f97316" opacity="0.4" rx="6" />
    <rect x="40" y="180" width="40" height="55" fill="#f97316" opacity="0.4" rx="6" />
    
    {/* Price tags */}
    <circle cx="80" cy="60" r="12" fill="#f97316" opacity="0.7" />
    <text x="80" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
    
    <circle cx="320" cy="50" r="12" fill="#f97316" opacity="0.7" />
    <text x="320" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
    
    {/* Analytics arrows */}
    <path d="M 280 120 L 260 140" stroke="#f97316" strokeWidth="2" opacity="0.6" />
    <path d="M 255 135 L 260 140 L 265 135" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
    
    <path d="M 120 160 L 140 140" stroke="#f97316" strokeWidth="2" opacity="0.6" />
    <path d="M 135 145 L 140 140 L 135 135" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
    
    {/* Customer rating stars */}
    <g transform="translate(180, 250)">
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d="M 0 0 L 2 6 L 8 6 L 3 10 L 5 16 L 0 12 L -5 16 L -3 10 L -8 6 L -2 6 Z" 
              fill="#f97316" opacity="0.7" transform={`translate(${i * 12}, 0) scale(0.5)`} />
      ))}
    </g>
  </svg>
);