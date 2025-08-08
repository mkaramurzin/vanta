# 🧱 Development Plan: Custom Tile Website

## 🎯 Vision

To design and build a high-performance, fully responsive, modern marketing website for a flooring and remodeling business. The site will serve as both a professional portfolio and a lead-generation tool, aimed at replacing the functionality and polish of a competitor WordPress site — with superior performance and developer control.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Form Handling:** Formspree or custom API route with SendGrid (optional)
- **Optional Enhancements:** Framer Motion, Headless CMS (Sanity/Contentlayer), Trustpilot widget, Google Maps

---

## 📌 Project Structure & File Organization

```
/app
  /layout.tsx                // Global layout with Navbar/Footer
  /page.tsx                  // Homepage
  /about/page.tsx            // Company info
  /contact/page.tsx          // Contact form
  /services/
    /page.tsx                // Services overview
    /tile-installation/
    /tile-repair/
    /home-remodel/
/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  ServicesSection.tsx
  ServiceCard.tsx
  Benefits.tsx
  ContactForm.tsx
  Testimonials.tsx (optional)
/public
  /images                    // Company project photos, logo, etc.
/styles
  globals.css                // Tailwind base styles
```

---

## 🔁 Development Increments

### ✅ Phase 1: Scaffold & Core Pages (COMPLETED)
- [x] Initialize Next.js project with Tailwind and TypeScript
- [x] Set up project structure with App Router
- [x] Build layout with responsive Navbar and Footer
- [x] Create `Hero`, `ServicesSection`, `ServiceCard`, and `Benefits` components
- [x] Assemble functional homepage with all core components
- [x] Test development server and verify all components render correctly

### ✅ Phase 2: Build Out Pages & Content (COMPLETED)
- [x] About page with company history and service area
- [x] Services overview page with comprehensive service listings
- [x] Contact page with embedded form and business information
- [x] ContactForm component with professional validation and styling
- [x] Enhanced homepage with Credentials and Process sections

### ⏳ Phase 3: Polish & Responsive Design
- [ ] Finalize mobile/tablet responsiveness
- [ ] Add Tailwind transitions and subtle animations
- [ ] SEO-friendly `<head>` tags and OG meta setup
- [ ] Basic accessibility checks (ARIA, contrast)

### 🚀 Phase 4: Deploy & Domain Setup
- [ ] Push to GitHub
- [ ] Deploy on Vercel
- [ ] Attach custom demo domain (e.g. `demo.yourdomain.com`)
- [ ] Prepare for client domain transition if approved

### 🎁 Phase 5: Optional Enhancements
- [ ] Add Framer Motion animations
- [ ] Add image gallery from past projects
- [ ] Include testimonial carousel or review embed
- [ ] Integrate lightweight CMS for content editing (optional)

---