import { useEffect, useState } from "react"
import { VortexO } from "@/components/shared/VortexO"

interface Section {
  id: string
  label: string
}

interface VerticalAnchorProps {
  sections: Section[]
}

export function VerticalAnchor({ sections }: VerticalAnchorProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isOverDark, setIsOverDark] = useState(true) // Start true for hero

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Check if we're over a dark section (hero)
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsOverDark(scrollPosition < heroBottom)
      }

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed left-8 md:left-12 lg:left-16 top-0 bottom-0 z-50 hidden md:flex flex-col items-center">
      {/* Vertical Line */}
      <div
        className={`absolute top-0 bottom-0 w-px transition-colors duration-300 ${
          isOverDark ? "bg-ice-white/20" : "bg-deep-navy/15"
        }`}
      />

      {/* Section Markers */}
      <div className="relative flex flex-col justify-center h-full gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            aria-label={`Navigate to ${section.label}`}
          >
            <VortexO
              active={activeSection === section.id}
              light={isOverDark}
              size={24}
            />
            {/* Tooltip */}
            <span
              className={`absolute left-8 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-body whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                isOverDark
                  ? "bg-ice-white/90 text-deep-navy"
                  : "bg-deep-navy/90 text-ice-white"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
