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
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [isOverDark, setIsOverDark] = useState(true)

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
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className="fixed left-6 md:left-10 lg:left-12 top-0 bottom-0 z-50 hidden md:flex flex-col items-center pointer-events-none"
      aria-label="Section navigation"
    >
      {/* Vertical Line */}
      <div
        className={`absolute top-0 bottom-0 w-[3px] rounded-full transition-colors duration-500 ${
          isOverDark ? "bg-ice-white/50" : "bg-deep-navy/40"
        }`}
      />

      {/* Section Markers */}
      <div className="relative flex flex-col justify-center h-full gap-6 pointer-events-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group p-1 -m-1 rounded-full hover:scale-110 transition-transform duration-200"
            aria-label={`Navigate to ${section.label}`}
            aria-current={activeSection === section.id ? "true" : undefined}
          >
            <VortexO
              active={activeSection === section.id}
              light={isOverDark}
              size={18}
            />

            {/* Tooltip */}
            <span
              className={`absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 ${
                isOverDark
                  ? "bg-white text-deep-navy"
                  : "bg-deep-navy text-white"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
