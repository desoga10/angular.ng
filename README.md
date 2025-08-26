# angular.ng 🚀

**angular.ng** is an open-source productivity dashboard built with **Angular** and **Supabase**. The platform aims to be a comprehensive suite of tools designed to help end-users with daily tasks. It currently features an invoice generator and a currency converter, with plans to expand with more productivity-focused applications.

## ✨ Key Features

* **Growing Suite of Productivity Apps**: The dashboard is a hub for various tools, with a vision to add more over time.

* **Invoice Generator**: A user-friendly tool to create and manage invoices.

* **Currency Converter**: A quick and accurate tool for converting different currencies.

* **User Authentication**: Secure user login and management handled by Supabase.

* **Real-time Database**: Powered by Supabase for instant data synchronization.

* **Responsive Design**: The dashboard is optimized for seamless use on any device.

## 🤝 How to Contribute

We welcome contributions from the community! To get started, please follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:

* **Node.js**: [LTS version](https://nodejs.org/en/download/) is recommended.

* **Angular CLI**: Install it globally using npm:

    ```
    npm install -g @angular/cli

    ```

* **Supabase CLI**: Follow the instructions on the [Supabase Docs](https://supabase.com/docs/guides/cli) to install and configure it.

### Setup and Installation

1.  **Fork the repository** on GitHub.

2.  **Clone your forked repository** to your local machine:

    ```
    git clone https://github.com/your-username/angular.ng.git

    ```

3.  **Navigate into the project directory**:

    ```
    cd angular.ng

    ```

4.  **Install project dependencies**:

    ```
    npm install

    ```

5.  **Generate the `environments` folder**:
    If your project doesn't have an `environments` folder, create it using the Angular CLI command:

    ```
    ng g environments

    ```

6.  **Set Up Your Own Supabase Project**: 🔒

    * **Crucial Step:** To work on this project, you must set up your own Supabase instance. This ensures that your work is isolated and your changes do not affect the main project's database.

    * Go to the [Supabase website](https://supabase.com/) and create a new project.

    * From your new project's dashboard, navigate to **Settings** > **API**.

    * **Copy your project's API URL and `anon` public key.**

7.  **Update `environment.development.ts`**:

    * Open the `src/environments/environment.development.ts` file and update it with the following template. You will need to paste your Supabase API keys into the empty strings.

    * The file should have this format:

        ```
        export const environment = {
          production: false,
          supabaseUrl: '',
          supabaseKey: '',
          FRANKFURTER_API_URL: 'https://api.frankfurter.app',
          EXCHANGE_RATE_API_URL: 'https://v6.exchangerate-api.com/v6/6eb99285a0390c91620a279c/pair',
          WELCOME_EMAIL_API_URL: 'https://ng-angular-welcome-email-template.onrender.com',
        };

        ```

    * **Note:** Your contributions will be to the code, not the data. If your changes require a new database schema (e.g., adding a new table for a new feature), please include the necessary Supabase migration files in your pull request.

### Running the Application

After setting up the project, you can run it locally:

* **Start the development server**:

    ```
    ng serve

    ```

* The application will be accessible at `http://localhost:4200`.

### Submitting a Pull Request

1.  Create a new branch for your feature or bug fix:

    ```
    git checkout -b feature/your-feature-name

    ```

2.  Make your changes and **commit them with a clear, descriptive message**:

    ```
    git commit -m "feat: add new calendar app"

    ```

3.  Push your changes to your forked repository:

    ```
    git push origin feature/your-feature-name

    ```

4.  Open a **pull request** on the original repository, comparing your branch to the `main` branch.

Please ensure your code follows our project's coding standards and provide a detailed description of your changes in the pull request. Thank you for helping us build `angular.ng`!

### 📝 Note on Analytics Scripts

This project's `index.html` file includes scripts for **Google Analytics** and **Tawk.to**. When you run the application locally, data from your development environment (such as page views or chat interactions) may be sent to the project owner's accounts. This does not pose a security threat or expose any of your personal data.

To avoid sending this data during local testing, you can temporarily comment out these script tags in the `src/index.html` file.

## 🔗 Live Demo

* **Project URL**: <https://angular.ng/>
