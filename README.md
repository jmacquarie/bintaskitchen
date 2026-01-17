# Binta's Kitchen - West African Catering Website

A modern, responsive Next.js website for Binta's Kitchen, showcasing authentic West African cuisine from Burkina Faso with professional catering services.

## 🌍 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Menu**: All dishes loaded from `data/menu.json`
- **Booking System**: Validated catering request form with react-hook-form + zod
- **SEO Optimized**: Proper metadata for all pages
- **Accessible**: WCAG 2.1 compliant components
- **Cultural Storytelling**: Rich content about Burkinabè heritage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bintaskitchen/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu page
│   ├── catering/          # Catering & booking
│   └── about/             # About page
├── components/            # React components
│   ├── navigation.tsx     # Main navigation
│   ├── footer.tsx         # Footer component
│   └── booking-form.tsx   # Catering booking form
├── data/
│   └── menu.json          # Menu items & catering packages
├── public/
│   └── images/            # Dish images (SVG placeholders)
└── tailwind.config.ts     # Theme configuration
```

## 🎨 Design System

### Colors
- **Gold**: `#D4AF37` - Primary accent
- **Saddle Brown**: `#8B4513` - Secondary accent
- **Earth Tones**: Custom palette in `tailwind.config.ts`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📝 Content Management

### Adding Menu Items

Edit `data/menu.json` to add/modify dishes:

```json
{
  "id": "dish-id",
  "name": "Dish Name",
  "description": "Description",
  "price": 18.50,
  "dietary": ["gluten-free", "vegan"],
  "spiceLevel": "mild",
  "popular": true
}
```

### Adding Images

Place dish images in `public/images/` and update the `dishImages` mapping in:
- `app/page.tsx` (for homepage)
- `app/menu/page.tsx` (for menu page)

## ✅ Quality Checklist

- ✅ All images use next/image with proper alt text
- ✅ Every page has unique metadata
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form validation (future dates, minimum guests)
- ✅ No hardcoded dish data (uses menu.json)
- ✅ Tailwind utility classes (no arbitrary values)
- ✅ Accessible navigation with ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📱 Pages

1. **Home** (`/`) - Hero, features, popular dishes
2. **Menu** (`/menu`) - Complete menu with categories
3. **Catering** (`/catering`) - Packages and booking form
4. **About** (`/about`) - Cultural story and mission

## 🤝 Contributing

This project follows the guidelines in `AGENTS.md`. Please review before making changes.

## 📄 License

Copyright © 2026 Binta's Kitchen. All rights reserved.
