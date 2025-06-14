# SEO Portfolio - Next.js

A professional SEO portfolio website built with Next.js, featuring a modern cyber-themed design and comprehensive SEO services showcase.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Modern Cyber Design** with Tailwind CSS
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with proper meta tags and structured data
- 📝 **Blog System** with markdown support
- 🌐 **Multilingual Support** (Bulgarian)
- 🔐 **Admin Panel** with Supabase authentication
- 📊 **Analytics Integration** with Google Analytics
- 📧 **Contact Forms** with Google Sheets integration
- ⚡ **Performance Optimized** with Core Web Vitals in mind

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Markdown**: React Markdown

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seo-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Sheets (for contact forms)
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_CLIENT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_private_key

# Google Analytics
GA_PROPERTY_ID=your_ga_property_id
GOOGLE_CREDENTIALS_JSON=your_google_credentials_json
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Admin/          # Admin panel components
│   ├── Blog/           # Blog-related components
│   ├── Home/           # Homepage components
│   ├── Layout/         # Layout components
│   └── UI/             # Basic UI components
├── context/            # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility libraries
├── pages/              # Next.js pages
├── store/              # Zustand stores
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Key Features

### SEO Optimization
- Proper meta tags and Open Graph data
- Structured data (JSON-LD) for rich snippets
- Optimized URLs and sitemap generation
- Core Web Vitals optimization

### Admin Panel
- Secure authentication with Supabase
- Blog post management
- Contact form submissions management
- Content editing capabilities

### Performance
- Static site generation (SSG) where possible
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Optimized bundle size

## Deployment

The project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting provider**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.