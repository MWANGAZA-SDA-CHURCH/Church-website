# ✨ SDA Mwangaza Church Website

<div align="center" id ="sda-mwangaza-church-website">

![Church Banner](https://img.shields.io/badge/SDA-Mwangaza%20Church-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

**A modern web platform connecting our congregation and community**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 About The Project

The SDA Mwangaza Church website is a comprehensive digital platform designed to strengthen our church community through technology. Built with modern web standards, this platform serves as the central hub for church communication, ministry coordination, event management, and community outreach.

### ✨ Key Features

- 🏛️ **Church Information** - Mission, values, and leadership details
- 📅 **Event Management** - Upcoming services, meetings, and special programs
- 🎤 **Ministry Coordination** - Department activities and volunteer opportunities
- 📰 **Announcements** - Latest news and church bulletins
- 🙏 **Prayer Requests** - Community prayer support system
- 👥 **Member Management** - Member directory and profile management
- 💰 **Online Giving** - Secure donations and tithes
- ✉️ **Transfer Requests** - Church membership transfer system
- 📚 **Resources** - Sermons, Bible studies, and educational materials
- 🎠 **Hero Carousel** - Dynamic homepage slideshow
- 💬 **Pastor's Message** - Weekly messages from church leadership
- 📱 **Mobile Responsive** - Accessible on all devices
- 🔍 **Member Search** - Quick member lookup functionality


---

## 🛠️ Built With

This project leverages modern web technologies for optimal performance and maintainability:

- **Frontend Framework** - Next.js 16+ (React)
- **Language** - TypeScript
- **Database** - PostgreSQL (via Neon)
- **Styling** - Tailwind CSS + PostCSS
- **Package Manager** - npm/yarn
- **Deployment** - Vercel (optimized for Next.js)

---

## 🚀 Getting Started

### Quick Start (TL;DR)

```bash
# Clone and install
git clone https://github.com/yourusername/sda-mwangaza-website.git
cd sda-mwangaza-website
npm install

# Set up environment
cp .env.example .env.local
# Add your DATABASE_URL and other variables

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser!

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.0 or higher)
  ```bash
  node --version
  ```

- **npm** or **yarn**
  ```bash
  npm --version
  # or
  yarn --version
  ```

- **Git**
  ```bash
  git --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sda-mwangaza-website.git
   cd sda-mwangaza-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Update the `.env.local` file with your configuration:
   ```env
   # Database (Neon PostgreSQL)
   DATABASE_URL="postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require"
   
   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="SDA Mwangaza Church"
   
   # Authentication (if using NextAuth.js)
   NEXTAUTH_SECRET=your_secret_key_here
   NEXTAUTH_URL=http://localhost:3000
   
   # Email Service (for notifications, prayer requests, etc.)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_church_email@gmail.com
   SMTP_PASS=your_app_password
   
   # Optional: Analytics, CMS, etc.
   # NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run database migrations** (if applicable)
   ```bash
   npm run migrate
   # or
   npx prisma migrate dev
   ```

5. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the application running!

---

## 🐘 Neon Database Integration

[Neon](https://neon.tech) provides serverless Postgres with autoscaling, branching, and bottomless storage. Here's how to integrate it with this project.

### Step 1: Create a Neon Account

1. Visit [Neon.tech](https://neon.tech) and sign up for a free account
2. Create a new project in the Neon console
3. Choose your preferred region (select closest to your users)

### Step 2: Get Your Database Connection String

1. In your Neon project dashboard, navigate to **Dashboard** → **Connection Details**
2. Copy the connection string that looks like:
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require
   ```

### Step 3: Configure Your Application

1. **Add the connection string to your `.env.local` file:**
   ```env
   DATABASE_URL="postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require"
   ```

2. **If using Prisma, update your `schema.prisma`:**
   ```prisma
   datasource db {
     provider  = "postgresql"
     url       = env("DATABASE_URL")
     directUrl = env("DIRECT_URL") // Optional: for migrations
   }
   ```

### Step 4: Set Up Database Schema

1. **Run Prisma migrations** (if using Prisma):
   ```bash
   npx prisma migrate dev --name init
   ```

2. **Or run your SQL schema directly:**
   ```bash
   psql $DATABASE_URL < schema.sql
   ```

### Step 5: Neon-Specific Optimizations

**Connection Pooling** (Recommended for serverless):

Neon provides built-in connection pooling. Use the pooled connection string:

```env
# Pooled connection (recommended for serverless functions)
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require"

# Direct connection (for migrations)
DIRECT_URL="postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require"
```

**Branching for Development:**

Neon supports database branching for development environments:

```bash
# Create a development branch
neonctl branches create --project-id your-project-id --name development

# Use the branch connection string in your dev environment
DATABASE_URL="postgresql://...your-dev-branch-url..."
```

### Step 6: Best Practices with Neon

- ✅ Use **connection pooling** for serverless deployments
- ✅ Enable **autosuspend** to reduce costs during inactivity
- ✅ Create **database branches** for staging/development
- ✅ Set up **automatic backups** in Neon dashboard
- ✅ Monitor **query performance** using Neon's metrics
- ✅ Use **prepared statements** to optimize query performance

### Troubleshooting Neon Connection

If you encounter connection issues:

```bash
# Test your connection
psql $DATABASE_URL -c "SELECT version();"

# Check SSL requirements
# Ensure ?sslmode=require is in your connection string

# For timeout issues, adjust your client settings
# Add to your database client configuration:
{
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
}
```

---

## 📁 Project Structure

```
sda-mwangaza-website/
├── app/                    # Next.js App Router
│   ├── login/             # Login page route
│   ├── members/           # Members section
│   ├── ministries/        # Ministries pages
│   ├── resources/         # Church resources
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
│
├── components/            # Reusable React components
│   ├── add-member-form.tsx
│   ├── announcements-section.tsx
│   ├── events-preview.tsx
│   ├── footer.tsx
│   ├── giving-section.tsx
│   ├── hero-carousel.tsx
│   ├── hero-form.tsx
│   ├── member-search-floating.tsx
│   ├── navbar.tsx
│   ├── pastor-message.tsx
│   ├── prayer-request-form.tsx
│   ├── prayer-request-section.tsx
│   ├── theme-provider.tsx
│   ├── transfer-actions.tsx
│   └── transfer-request-form.tsx
│
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions & configs
├── node_modules/          # Dependencies
├── public/                # Static assets
├── scripts/               # Build and utility scripts
├── styles/                # Additional stylesheets
│
├── .gitignore
├── next.config.js         # Next.js configuration
├── next-env.d.ts          # Next.js TypeScript declarations
├── package.json           # Project dependencies
├── package-lock.json      # Locked dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md
```

## 🧩 Key Components

The project includes several specialized components for church management:

### Member Management
- **add-member-form.tsx** - Form for adding new church members
- **member-search-floating.tsx** - Quick member search functionality

### Prayer & Spiritual Support
- **prayer-request-form.tsx** - Submit prayer requests
- **prayer-request-section.tsx** - Display prayer requests

### Church Administration
- **transfer-actions.tsx** - Member transfer management
- **transfer-request-form.tsx** - Request church membership transfer

### Content & Communication
- **announcements-section.tsx** - Church announcements and news
- **events-preview.tsx** - Upcoming events display
- **pastor-message.tsx** - Weekly messages from leadership

### UI & Navigation
- **hero-carousel.tsx** - Homepage slideshow
- **hero-form.tsx** - Hero section with call-to-action
- **navbar.tsx** - Main navigation component
- **footer.tsx** - Site footer
- **theme-provider.tsx** - Theme management (light/dark mode)

### Financial
- **giving-section.tsx** - Online giving and tithes

---

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

## 📜 Available Scripts

In the project directory, you can run:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npm run type-check
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

**Option 1: Deploy via GitHub**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Add environment variables:
   - `DATABASE_URL` (your Neon connection string)
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
   - Any other required variables
5. Click "Deploy"

**Option 2: Deploy via CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Important Deployment Notes

- Ensure all environment variables are set in your deployment platform
- Use the **pooled connection string** from Neon for serverless deployments
- Enable **automatic deployments** from your main branch
- Set up **preview deployments** for pull requests

---

## 🤝 Contributing

We welcome contributions from our church community and developers worldwide!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

**SDA Mwangaza Church**

- Website: [www.sdamwangaza.org](#)
- Email: info@sdamwangaza.org
- Phone: +XXX XXX XXX XXX

**Project Maintainer(s):** Your Name - [@yourhandle](#)

**Project Link:** [https://github.com/yourusername/sda-mwangaza-website](https://github.com/yourusername/sda-mwangaza-website)

---

## 🙏 Acknowledgments

- Our church leadership for their vision and support
- All contributors and volunteers
- The open-source community
- [Neon](https://neon.tech) for database infrastructure
- [Vercel](https://vercel.com) for hosting solutions

---

<div align="center">

**Built with ❤️ for the SDA Mwangaza Church **



</div>
