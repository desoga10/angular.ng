# Contributing to Angular.ng

First off, thank you for considering contributing to Angular.ng! It's people like you that make this project a great tool for the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Database Changes](#database-changes)
- [Testing](#testing)
- [Support](#support)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior by opening an issue or contacting the project maintainers.

**Our Standards:**
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the existing issues to avoid duplicates.

When creating a bug report, include:
- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version, Angular version)
- **Additional context** that might be relevant

**Use this template:**
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11, macOS 13]
- Browser: [e.g., Chrome 118, Firefox 119]
- Node version: [e.g., 18.17.0]
- Angular version: [e.g., 17.0.0]
```

### Suggesting Features

We love feature suggestions! Before submitting:
- Check if the feature has already been suggested
- Consider if it aligns with the project's goals
- Think about how it would benefit the majority of users

**Feature request template:**
```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions or features you've thought about.

**Additional context**
Mockups, examples, or any other relevant information.
```

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Simple issues perfect for beginners
- `help wanted` - Issues where we need community help
- `documentation` - Help improve our docs

**Getting started:**
1. Comment on the issue you'd like to work on
2. Wait for a maintainer to assign it to you (this avoids duplicate work)
3. Fork the repository
4. Follow the [Development Setup](#development-setup) instructions
5. Create your feature branch
6. Make your changes
7. Submit a pull request

### Pull Requests

**Before submitting a PR:**
- Ensure your code follows our [Coding Standards](#coding-standards)
- Update documentation if needed
- Test your changes thoroughly
- Make sure your branch is up to date with `dev`

**PR Guidelines:**
1. **Target the `dev` branch** - All PRs must be made against `dev`, not `main`
2. **One PR per feature/fix** - Keep PRs focused and manageable
3. **Link related issues** - Use "Closes #123" in the PR description
4. **Provide context** - Explain what changes you made and why
5. **Include screenshots** - For UI changes, show before/after
6. **Be responsive** - Address review comments promptly

**PR Template:**
```markdown
## Description
Brief description of changes.

## Related Issue
Closes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran.

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes locally
- [ ] My PR targets the `dev` branch (not `main`)
```

## Development Setup

### Quick Start (Recommended - 2 Minutes!)

We provide a **shared development Supabase instance** so you can start contributing immediately without creating your own Supabase account!

#### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)
- Git

#### Setup Steps

1. **Fork and clone the repository:**
```bash
   git clone https://github.com/desoga10/angular.ng.git
   cd angular.ng
```

2. **Checkout the dev branch:**
```bash
   git checkout dev
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Generate environments folder (if not exists):**
```bash
   ng generate environments
```

5. **Configure the shared development environment:**

   Update `src/environments/environment.development.ts` with these credentials:
```typescript
   export const environment = {
     production: false,
     supabaseUrl: 'https://oayxnmdianrhxwcdmcpr.supabase.co',
     supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9heXhubWRpYW5yaHh3Y2RtY3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NDAzMTEsImV4cCI6MjA1NjAxNjMxMX0.5VIcR_Q5ghplYboM-LLXJ2dEV6ghiZQ77cDOURu76jY'
   };
```

   ⚠️ **Important Notes:**
   - These are **shared development credentials** - safe to use for contributing
   - The database is already set up with sample data
   - Your data is protected by Row Level Security (RLS)
   - You can only see and modify YOUR OWN invoices
   - Create a test account using format: `test+yourname@example.com`

6. **Start the development server:**
```bash
   ng serve
```

7. **Open your browser:**
   Navigate to `http://localhost:4200`

8. **Create a test account:**
   - Use email format: `test+yourname@example.com`
   - Use any password (this is a dev environment)
   - Start creating test invoices!

**That's it! You're ready to contribute!** 🎉

---

### Alternative: Local Supabase Development

If you prefer to run Supabase locally or need to work on database schema changes, you can set up a local instance.

#### Prerequisites
- [Docker Desktop](https://docker.com/products/docker-desktop) installed and running
- Supabase CLI: `npm install -g supabase`

#### Local Setup Steps

1. **Initialize Supabase:**
```bash
   supabase init
```

2. **Start local Supabase:**
```bash
   supabase start
```
   This will spin up local Supabase containers (may take a few minutes first time).

3. **Run database migrations:**
   The schema files in `docs/` need to be applied:
```bash
   # In Supabase Studio (http://localhost:54323)
   # Go to SQL Editor and run these files in order:
   # 1. docs/user-schema.sql
   # 2. docs/invoice-schema.sql
   # 3. docs/invoice-items-schema.sql
   # 4. docs/seeder.sql
```

4. **Update environment file:**
   Update `src/environments/environment.development.ts`:
```typescript
   export const environment = {
     production: false,
     supabaseUrl: 'http://localhost:54321',
     supabaseKey: 'your-local-anon-key' // Shown in terminal after supabase start
   };
```

5. **Useful commands:**
```bash
   # Stop Supabase
   supabase stop

   # Reset database
   supabase db reset

   # Check status
   supabase status
```

---

### When to Use Which Setup?

| Scenario | Use Shared Instance | Use Local Instance |
|----------|-------------------|-------------------|
| Quick bug fix | ✅ | |
| Frontend changes | ✅ | |
| UI/UX improvements | ✅ | |
| Documentation | ✅ | |
| Database schema changes | | ✅ |
| RLS policy modifications | | ✅ |
| Testing migrations | | ✅ |
| Major backend work | | ✅ |

---

### Shared Instance Guidelines

When using the shared development instance:

✅ **Do:**
- Create your own test account (`test+yourname@example.com`)
- Test your features thoroughly
- Clean up excessive test data when done
- Be respectful of the shared resource
- Report any issues you encounter

❌ **Don't:**
- Use real email addresses
- Store sensitive or personal data
- Spam the database with excessive data
- Attempt to access other users' data
- Share the credentials outside the project

**Security:**
- The shared instance uses Row Level Security (RLS)
- You can only see and modify your own data
- The anon key is public and safe to share
- Production uses different, private credentials

---

### Building for Production
```bash
ng build --configuration production
```

## Coding Standards

### TypeScript/Angular
- Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
- Use TypeScript strict mode
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable and function names
- Keep functions small and focused (single responsibility)
- Add JSDoc comments for complex logic

**Example:**
```typescript
// Good
getUserById(userId: string): Observable<User> {
  return this.http.get<User>(`/api/users/${userId}`);
}

// Bad
function x(a: any) {
  return this.http.get('/api/users/' + a);
}
```

```typescript
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  // 1. Public properties
  public title: string = '';

  // 2. Private properties
  private subscription: Subscription;

  // 3. Constructor
  constructor(private service: MyService) {}

  // 4. Lifecycle hooks
  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // 5. Public methods
  public loadData(): void {
    // Implementation
  }

  // 6. Private methods
  private helperMethod(): void {
    // Implementation
  }
}
```

### HTML/Templates
- Use semantic HTML elements
- Keep templates simple (complex logic belongs in the component)
- Use Angular pipes for data transformation
- Follow accessibility best practices (ARIA labels, keyboard navigation)

### CSS/Styling
- Use consistent naming conventions (BEM or similar)
- Avoid deep nesting (max 3 levels)
- Use CSS variables for theming
- Make components responsive

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config)
- `perf`: Performance improvements

**Examples:**
```
feat(invoice): add PDF export functionality

Add ability to export invoices as PDF files using jsPDF library.
Includes styling to match the invoice preview.

Closes #42

---

fix(currency): correct exchange rate calculation

The previous calculation was not handling decimal precision correctly.
Now uses toFixed(2) for accurate results.

---

docs(readme): update installation instructions

Added step for generating environments folder.
```

**Rules:**
- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- First line should be 50 characters or less
- Reference issues and PRs in the footer

## Database Schema

The project uses Supabase (PostgreSQL) for data storage. All database schema definitions are located in the `docs/` folder:

- **`docs/user-schema.sql`** - User authentication and profile tables
- **`docs/invoice-schema.sql`** - Invoice management tables
- **`docs/invoice-items-schema.sql`** - Invoice line items and related tables
- **`docs/seeder.sql`** - Sample data for testing and development

### Shared Development Instance

The shared development instance already has all schemas applied and sample data loaded. You can start using it immediately!

### Local Development Instance

If you're running Supabase locally, you'll need to apply these schema files in your local instance in the exact order listed above. The seeder file provides mock data so you can immediately start testing features.

### Working with Mock Data

The `seeder.sql` file contains sample data including:
- Test user accounts
- Sample invoices with various statuses (paid, unpaid, draft)
- Invoice line items with realistic data
- Different currencies and amounts

This mock data helps you:
- Test features immediately without manual data entry
- Verify search and filter functionality
- Test edge cases with different invoice states
- Develop UI components with realistic data

### Making Database Changes

If your contribution requires changes to the database schema:

1. **Use local Supabase instance** for testing schema changes

2. **Modify the appropriate schema file(s)** in the `docs/` folder
   - Update `user-schema.sql` for user-related tables
   - Update `invoice-schema.sql` for invoice tables
   - Update `invoice-items-schema.sql` for invoice items tables

3. **Document your changes clearly:**
```sql
   -- Add new column to invoices table
   ALTER TABLE public.invoices
   ADD COLUMN due_date TIMESTAMP WITH TIME ZONE;

   -- Add index for better query performance
   CREATE INDEX idx_invoices_due_date ON public.invoices(due_date);
```

4. **Update Row Level Security (RLS) policies if needed:**
```sql
   -- Update RLS policy for new column
   CREATE POLICY "Users can view invoices with due dates"
       ON public.invoices FOR SELECT
       USING (auth.uid() = user_id);
```

5. **Include in your PR:**
   - Modified schema file(s)
   - Clear explanation of why the change is needed
   - Migration notes for existing databases
   - Updated `seeder.sql` file if your changes affect sample data
   - Any additional seed data required for testing the new feature

6. **Test your schema changes:**
   - Test locally first
   - Verify the application works with the new schema
   - Test with sample data
   - Ensure RLS policies work correctly

### Schema Best Practices

- **Always use RLS (Row Level Security)** for data protection
- **Add appropriate indexes** for frequently queried columns
- **Use meaningful table and column names**
- **Include comments** for complex tables or columns
- **Set appropriate constraints** (NOT NULL, UNIQUE, CHECK)
- **Use UUID for primary keys** (Supabase default)
- **Add timestamps** (created_at, updated_at) for audit trails

**Example of a well-structured table:**
```sql
CREATE TABLE IF NOT EXISTS public.expenses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    invoice_id UUID REFERENCES public.invoices(id) ON DELETE SET NULL,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0),
    category VARCHAR(100) NOT NULL,
    description TEXT,
    expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add RLS
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own expenses"
    ON public.expenses FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own expenses"
    ON public.expenses FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own expenses"
    ON public.expenses FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own expenses"
    ON public.expenses FOR DELETE
    USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX idx_expenses_user_id ON public.expenses(user_id);
CREATE INDEX idx_expenses_date ON public.expenses(expense_date);

-- Comments
COMMENT ON TABLE public.expenses IS 'Stores user expense records linked to invoices';
COMMENT ON COLUMN public.expenses.amount IS 'Expense amount in decimal format with 2 decimal places';
```

## Testing

### Running Tests
```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e

# Run tests with coverage
ng test --code-coverage
```

### Writing Tests
- Write tests for all new features
- Maintain or improve code coverage
- Test edge cases and error conditions
- Use descriptive test names

**Example:**
```typescript
describe('CurrencyConverterComponent', () => {
  it('should convert USD to EUR correctly', () => {
    const result = component.convert(100, 'USD', 'EUR');
    expect(result).toBeCloseTo(85.50, 2);
  });

  it('should handle invalid currency codes', () => {
    expect(() => component.convert(100, 'XXX', 'YYY'))
      .toThrow('Invalid currency code');
  });
});
```

## Support

Need help or have questions?

- 🧑‍🤝‍🧑 Join our [Discord](https://discord.gg/4GB4kny4) community
- 📖 Check our [documentation](https://github.com/desoga10/angular.ng/wiki)
- 🐛 [Report a bug](https://github.com/desoga10/angular.ng/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/desoga10/angular.ng/issues/new?template=feature_request.md)
- 💬 [Start a discussion](https://github.com/desoga10/angular.ng/discussions)
- 📧 Email: [thecodeangle@gmail.com]

**Remember:** There are no stupid questions. We were all beginners once!

---

Made with ❤️ by [desoga10](https://github.com/desoga10) and [contributors](https://github.com/desoga10/angular.ng/graphs/contributors)

Thank you for contributing to Angular.ng! Your time and effort help make this project better for everyone. 🎉