export const brand = {
  // Company Information
  companyName: "Vanta Tile & Flooring",
  slug: "vanta-tile-flooring", 
  tagline: "Premium Flooring Solutions & Expert Craftsmanship",
  
  // Contact Information (keeping placeholders as requested)
  phone: "(555) 123-4567",
  email: "info@timatiles.com",
  
  // Business Address
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "Your State", 
    zip: "12345"
  },
  
  // Brand Colors
  colors: {
    primary: "#111827", // Near-black (gray-900)
    accent: "#0EA5E9",  // Sky-500 blue
    secondary: "#374151", // Gray-700
    light: "#F9FAFB",   // Gray-50
    white: "#FFFFFF"
  },
  
  // Call-to-Action Text
  cta: {
    primary: "Get a Free Estimate",
    secondary: "View Services"
  },
  
  // Business Details
  business: {
    foundedYear: 2009,
    experience: "15+ Years Experience",
    serviceArea: "across the region",
    projectsCompleted: "500+",
    rating: "4.9/5",
    licenses: "Licensed & Insured"
  },
  
  // Social Media & Web
  website: "https://vantatileflooring.com",
  social: {
    facebook: "",
    instagram: "",
    twitter: ""
  }
} as const;

export type Brand = typeof brand; 