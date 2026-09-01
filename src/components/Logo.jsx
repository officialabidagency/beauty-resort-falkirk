export default function Logo({ className = '', size = 'normal' }) {
  const sizes = {
    small: { w: 120, h: 40 },
    normal: { w: 200, h: 70 },
    large: { w: 280, h: 100 },
    hero: { w: 320, h: 120 },
  };

  const { w, h } = sizes[size] || sizes.normal;

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="50%" stopColor="#e8d48b" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>

      {/* Circle border */}
      <circle cx="60" cy="52" r="38" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />

      {/* Woman face silhouette left */}
      <path
        d="M35 35 C35 35 32 42 33 48 C34 54 36 58 35 62 C34 66 30 70 33 72 C36 74 40 70 42 66 C44 62 45 56 44 50 C43 44 42 38 44 34 C46 30 50 28 50 28"
        stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />

      {/* Hair flowing */}
      <path
        d="M44 34 C42 28 38 24 35 22 C32 20 28 22 30 28 C32 34 35 38 35 42"
        stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />

      {/* B letter */}
      <text x="50" y="62" fontFamily="Georgia, serif" fontSize="32" fontWeight="600" fill="url(#goldGrad)">B</text>

      {/* R letter */}
      <text x="72" y="58" fontFamily="Georgia, serif" fontSize="26" fontWeight="500" fill="url(#goldGrad)" fontStyle="italic">R</text>

      {/* F letter */}
      <text x="90" y="62" fontFamily="Georgia, serif" fontSize="24" fontWeight="400" fill="url(#goldGrad)">F</text>

      {/* Leaf decoration right */}
      <path
        d="M102 42 C106 38 112 36 116 38 C112 40 108 44 106 48"
        stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round"
      />
      <path
        d="M108 50 C112 46 118 44 122 46 C118 48 114 52 112 56"
        stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round"
      />

      {/* BEAUTY RESORT text */}
      <text x="160" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fill="url(#goldGrad)" letterSpacing="6">
        BEAUTY RESORT
      </text>

      {/* Decorative line */}
      <line x1="90" y1="100" x2="230" y2="100" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5" />

      {/* Ornament center */}
      <circle cx="160" cy="100" r="2" fill="url(#goldGrad)" opacity="0.6" />
      <circle cx="153" cy="100" r="1" fill="url(#goldGrad)" opacity="0.4" />
      <circle cx="167" cy="100" r="1" fill="url(#goldGrad)" opacity="0.4" />

      {/* FALKIRK text */}
      <text x="160" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="300" fill="url(#goldGrad)" letterSpacing="5">
        FALKIRK
      </text>
    </svg>
  );
}
