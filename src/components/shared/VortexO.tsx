interface VortexOProps {
  active?: boolean
  light?: boolean // Use light colors (for dark backgrounds)
  size?: number
}

export function VortexO({ active = false, light = false, size = 12 }: VortexOProps) {
  const baseColor = light ? "#F8FAFC" : "#001F3F"
  const accentColor = "#00A8A8"

  // Background fill to cover the vertical line behind
  const bgFill = light ? "#001F3F" : "#F8FAFC"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-200"
    >
      {/* Background circle to cover vertical line */}
      <circle
        cx="6"
        cy="6"
        r="5.5"
        fill={bgFill}
        className="transition-all duration-200"
      />

      {/* Outer ring */}
      <circle
        cx="6"
        cy="6"
        r="4.5"
        stroke={active ? accentColor : baseColor}
        strokeWidth={active ? "2.5" : "2"}
        strokeOpacity={active ? "1" : "0.6"}
        fill="none"
        className="transition-all duration-200"
      />

      {/* Center dot - visible when active */}
      <circle
        cx="6"
        cy="6"
        r={active ? "2" : "0"}
        fill={accentColor}
        className="transition-all duration-200"
      />
    </svg>
  )
}
