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