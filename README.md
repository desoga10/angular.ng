# Angular.ng

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?logo=angular)](https://angular.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Enabled-3ECF8E?logo=supabase)](https://supabase.com/)

> An open-source productivity dashboard built with Angular and Supabase

**Angular.ng** is a comprehensive suite of productivity tools designed to streamline your daily tasks. Built with modern web technologies, it provides a seamless experience across all devices.

🌐 **[Live Demo](https://angular.ng/)**

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Privacy Notice](#privacy-notice)
- [License](#license)
- [Support](#support)

## Features

### 🧾 Invoice Generator
Create, customize, and manage professional invoices with ease. Perfect for freelancers and small businesses.

### 💱 Currency Converter
Quick and accurate currency conversion using real-time exchange rates from trusted APIs.

### 🔐 User Authentication
Secure user login and account management powered by Supabase Auth.

### ⚡ Real-time Database
Instant data synchronization across devices using Supabase's real-time capabilities.

### 📱 Responsive Design
Optimized for seamless use on desktop, tablet, and mobile devices.

## Demo

Visit [https://angular.ng/](https://angular.ng/) to see the live application in action.

## Tech Stack

- **Frontend Framework:** Angular 17+
- **Backend/Database:** Supabase (PostgreSQL, Auth, Storage)
- **Styling:** Angular Material / Custom CSS
- **APIs:**
  - [Frankfurter API](https://www.frankfurter.app/) - Currency exchange rates
  - [ExchangeRate API](https://www.exchangerate-api.com/) - Alternative exchange rates
- **Deployment:** Vercel

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** [LTS version](https://nodejs.org/en/download/) (v18 or higher recommended)
- **Angular CLI:** Install globally via npm:
  ```bash
  npm install -g @angular/cli
  ```
- **Supabase CLI:** Follow the [official documentation](https://supabase.com/docs/guides/cli) to install
- **Git:** For version control

### Installation

1. **Fork the repository** on GitHub by clicking the "Fork" button at the top right of the [repository page](https://github.com/desoga10/angular.ng).

2. **Clone your forked repository:**
   ```bash
   git clone https://github.com/desoga10/angular.ng.git
   cd angular.ng
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Generate the environments folder** (if not present):
   ```bash
   ng g environments
   ```

5. **Set up your Supabase project:** 🔒

   **⚠️ Important:** You must create your own Supabase instance to work on this project.

   - Go to [Supabase](https://supabase.com/) and create a new project
   - Navigate to **Settings > API** in your project dashboard
   - Copy your **API URL** and **anon public key**

6. **Configure environment variables:**

   Open `src/environments/environment.development.ts` and add your credentials:

   ```typescript
   export const environment = {
     production: false,
     supabaseUrl: 'YOUR_SUPABASE_URL',
     supabaseKey: 'YOUR_SUPABASE_ANON_KEY',
     FRANKFURTER_API_URL: 'https://api.frankfurter.app',
     EXCHANGE_RATE_API_URL: 'https://v6.exchangerate-api.com/v6/6eb99285a0390c91620a279c/pair',
     WELCOME_EMAIL_API_URL: 'https://ng-angular-welcome-email-template.onrender.com',
   };
   ```

### Running Locally

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

## Roadmap

- [x] Invoice Generator
- [x] Currency Converter
- [x] User Authentication
- [ ] Task Manager
- [ ] Calendar Integration
- [ ] Note-Taking App
- [ ] Expense Tracker
- [ ] Time Tracker
- [ ] Document Scanner

Have an idea for a new feature? [Open an issue](https://github.com/desoga10/angular.ng/issues/new) to discuss it!

## Contributing

We welcome contributions from developers of all skill levels! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

Please read our [Contributing Guide](CONTRIBUTING.md) for detailed information on:
- Code of conduct
- How to submit issues
- Pull request process
- Coding standards

**Quick Start for Contributors:**
1. Fork and clone the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m "feat: add amazing feature"`
4. Push to your fork: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Privacy Notice

The `index.html` file includes scripts for Google Analytics and Tawk.to for the production environment. When running the application locally, these analytics may collect data from your development environment.

**To disable analytics during local development:**
- Temporarily comment out the Google Analytics and Tawk.to script tags in `src/index.html`
- Or use a browser extension to block these services

This does not pose a security risk or expose your personal data, but we wanted to be transparent about it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

Need help or have questions?

- 📖 Check our [documentation](https://github.com/desoga10/angular.ng/wiki)
- 🐛 [Report a bug](https://github.com/desoga10/angular.ng/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/desoga10/angular.ng/issues/new?template=feature_request.md)
- 💬 [Start a discussion](https://github.com/desoga10/angular.ng/discussions)
- 📧 Email: [thecodeangle@gmail.com]

---

Made with ❤️ by [desoga10](https://github.com/desoga10) and [contributors](https://github.com/desoga10/angular.ng/graphs/contributors)

**Star ⭐ this repository if you find it helpful!**
=======
* **Project URL**: <https://angular.ng/>
