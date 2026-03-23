interface VortexOProps {
  active?: boolean
  light?: boolean // Use light colors (for dark backgrounds)
  size?: number
}

export function VortexO({ active = false, light = false, size = 24 }: VortexOProps) {
  // Color variants
  const primaryColor = light ? "#F8FAFC" : "#001F3F" // ice-white or deep-navy
  const accentColor = "#00A8A8" // atlantic-teal (always)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300"
    >
      {/* Outer faint circle */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={primaryColor}
        strokeWidth="0.5"
        strokeOpacity={active ? "0.4" : "0.2"}
      />

      {/* Primary dashed arc - organic movement */}
      <path
        d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2"
        stroke={active ? accentColor : primaryColor}
        strokeWidth={active ? "2" : "1.5"}
        strokeLinecap="round"
        strokeDasharray="2 6"
        strokeOpacity={active ? "1" : "0.6"}
        className="transition-all duration-300"
      />

      {/* Inner teal arc - growth accent */}
      <path
        d="M34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6"
        stroke={accentColor}
        strokeWidth={active ? "1.5" : "1"}
        strokeDasharray="10 5"
        strokeOpacity={active ? "1" : "0.5"}
        className="transition-all duration-300"
      />

      {/* Center dot when active */}
      {active && (
        <circle
          cx="20"
          cy="20"
          r="3"
          fill={accentColor}
          className="animate-pulse"
        />
      )}
    </svg>
  )
}
