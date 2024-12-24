# Restaurant Demo Web Application

## Tech Stack

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.3
- **Language:** TypeScript 5.6.2
- **Styling:** 
  - TailwindCSS 3.4.17
  - PostCSS 8.4.49
  - Autoprefixer 10.4.20

### UI Components & Libraries
- **UI Framework:** Headless UI (@headlessui/react 2.2.0)
- **Icons:** 
  - Heroicons (@heroicons/react 2.2.0)
  - Lucide Icons (lucide-react 0.469.0)
- **Animations:** Framer Motion 11.15.0
- **Routing:** React Router DOM 7.1.0

### Development Tools
- **Type Checking:** TypeScript
- **Linting:** ESLint 9.17.0
- **Module Bundler:** Vite
- **Development Server:** Vite Dev Server

### Performance & Analytics
- Vercel Analytics
- Vercel Speed Insights

## Project Structure

```
├── public/                 # Static files
├── src/                    # Source code
│   ├── assets/            # Images, fonts, and other static assets
│   ├── components/        # Reusable UI components
│   ├── data/             # Data files and configurations
│   ├── pages/            # Page components and routes
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # TypeScript declarations
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── eslint.config.js      # ESLint configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment
- Deployed on Vercel platform
- Configuration managed through vercel.json 