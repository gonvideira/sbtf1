# **Design Brief: STAG Blue Transformation Fund 1 (SBTF1)**

**Project Target:** Institutional Investor Portal & Digital Pitch Deck

**Persona:** Private Equity Senior Analyst & Web Architect

## **1\. Brand Identity: The "Ice & Deep" Aesthetic**

The brand strategy is to use **high-impact cinematic media** as the emotional driver, while using a **cold, high-contrast light UI** to convey institutional rigor.

### **A. Color Palette (Institutional Cold)**

* **Base Background (Ice White):** \#F8FAFC \- A very cold, sterile white. This provides the "Operational Efficiency" look and makes blue imagery "pop."  
* **Primary Text (Deep Sea Navy):** \#001F3F \- Almost black, used for high-contrast headers.  
* **Secondary/Action (Atlantic Growth):** \#00A8A8 (Teal) \- Used for ESG-related callouts.  
* **Subtle Surface (Frosted Glass):** rgba(255, 255, 255, 0.7) \- Used for panels that sit *over* video or imagery, allowing the ocean to be seen while maintaining text legibility.  
* **Data Highlight (Glacier Blue):** \#E2E8F0 \- Used for table headers and subtle section dividers.

### **B. Typography: The "Technical Sans"**

* **Headings:** *Inter* or *Public Sans*. Use tight tracking (-0.02em) for an engineered, high-density look.  
* **Body Text:** *IBM Plex Sans*. Specifically chosen for its technical, slightly mechanical terminals which convey precision.  
* **Monospace:** *JetBrains Mono*. Essential for the "Cold" look in data tables.

## **2\. Navigation & Layout: The "Vertical Anchor"**

### **A. The Anchor Line & Vortex "O"s**

* **Visual Device:** A thin, Primary Navy line (15% opacity) running vertically.  
* **The Vortex Symbolism:** Stylized SVG "O"s at each section.  
* **Interactive Behavior:** As the line passes through a section with a background video (e.g., the Aquaculture vertical), the line and "O" should shift to White to maintain visibility against the dark water.

### **B. Imagery/Video Strategy**

* **Hero Sections:** Use full-bleed, muted blue-scale video (slow-motion ocean or pond-farming).  
* **The "Frost" Effect:** All text-heavy cards sitting on top of imagery must use a **backdrop-filter: blur(12px)**. This mimics looking through ice into the deep sea—bridging the "Vision" (imagery) and "Efficiency" (text).

## **3\. shadcn/ui Component Specifications (Light/Institutional Mod)**

### **A. Layout & Surface**

* **Card**: White background with a very subtle Glacier Blue border. No heavy shadows. Use shadow-sm for a flat, modern look.  
* **NavigationMenu**: Transparent background with a blur effect when scrolling over media.  
* **Separator**: Use frequently to create a highly structured, "grid-like" feel that implies organizational discipline.

### **B. Data & Metrics**

* **Table**: High-density layout. No alternating row colors; instead, use thin horizontal rules to emphasize the "Institutional" look.  
* **Badge**: Use "Outline" variants with JetBrains Mono text for a technical/engineered feel.  
* **Progress**: High-contrast. Navy blue bar on an Ice White track.

## **4\. Section-Specific UI Missions**

| Section | Vision Layer (Media) | Efficiency Layer (UI) |
| :---- | :---- | :---- |
| **Macro Thesis** | Abstract ocean currents video. | Cold white cards with sharp Recharts line graphs. |
| **Verticals** | Drone footage of NaturaFish ponds. | Translucent "Frost" tabs to toggle between assets. |
| **Fund Economics** | Slow-motion water surface. | Crisp, high-density monospaced data tables. |
| **Team** | High-contrast B\&W portraits with a blue tint. | Simple grid with technical bio typography. |

## **5\. Visual Assets: SVG Prototypes**

### **A. The Vortex "O" (Section Marker)**

A standalone icon representing the fish vortex. It uses overlapping strokes to create organic movement.

\<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="\[http://www.w3.org/2000/svg\](http://www.w3.org/2000/svg)"\>  
  \<circle cx="20" cy="20" r="18" stroke="\#001F3F" stroke-width="0.5" stroke-opacity="0.2"/\>  
  \<path d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2" stroke="\#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 6"/\>  
  \<path d="M34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6" stroke="\#00A8A8" stroke-width="1" stroke-dasharray="10 5"/\>  
\</svg\>

### **B. The Anchor Logo (Fund Identity)**

The vortex "O" threaded by the vertical anchor line. The line is offset from the center to create a dynamic, modern balance.

\<svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="\[http://www.w3.org/2000/svg\](http://www.w3.org/2000/svg)"\>  
  \<\!-- Vertical Anchor Line \--\>  
  \<line x1="22" y1="0" x2="22" y2="80" stroke="\#001F3F" stroke-width="1" stroke-opacity="0.2"/\>  
    
  \<\!-- Vortex O \--\>  
  \<g transform="translate(10, 20)"\>  
    \<circle cx="20" cy="20" r="18" stroke="\#001F3F" stroke-width="0.5" stroke-opacity="0.2"/\>  
    \<path d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2" stroke="\#001F3F" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 8"/\>  
    \<path d="M34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6" stroke="\#00A8A8" stroke-width="1.5" stroke-dasharray="12 4"/\>  
  \</g\>  
\</svg\>

## **6\. Summary Brief for Claude Code Implementation**

"Build a React portal using **shadcn/ui** and **Tailwind CSS**. Implement the **'Vertical Anchor'** device. The primary background is **Ice White (\#F8FAFC)** to ensure an institutional, cold look. Use **Backdrop Blur (Frosted Glass)** extensively to layer text-heavy cards over high-impact **Blue Ocean Video/Imagery**. The goal is a high-contrast 'Financial Terminal' feel that doesn't sacrifice the cinematic beauty of the Blue Economy."