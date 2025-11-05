# Contributing to Angular.ng

First off, thank you for considering contributing to Angular.ng! It's people like you that make this project a great tool for the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Development Workflow](#development-workflow)
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
- [Questions?](#questions)
- [Support](#support)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior by opening an issue or contacting the project maintainers.

**Our Standards:**
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully

## Development Workflow

We use a **two-branch workflow** to ensure stability in production:

### Branch Structure
```
main (production) ← https://angular.ng/
  ↑
dev (staging) ← where PRs are merged
  ↑
feature branches ← your contributions
```

### How It Works
1. **`dev` branch** - This is our staging/development branch. All pull requests should target this branch.
2. **`main` branch** - This is our production branch. Only tested and approved changes from `dev` are merged here.

### Deployment URLs
- **Production:** https://angular.ng/ (from `main` branch)
- **Staging:** Auto-deployed preview URL from `dev` branch (check Vercel deployments)

**Important:** Always create your pull requests against the `dev` branch, not `main`. This allows us to test changes in a staging environment before they go live.

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
5. Create your feature branch from `dev` (not `main`)
6. Make your changes
7. Submit a pull request to the `dev` branch

### Pull Requests

**Before submitting a PR:**
- Ensure your code follows our [Coding Standards](#coding-standards)
- Update documentation if needed
- Test your changes thoroughly
- Make sure your branch is up to date with `dev` (not `main`)

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

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)
- Git
- Your own Supabase project (see README.md)

### Setup Steps

1. **Fork and clone:**
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

4. **Create environments folder:**
   ```bash
   ng g environments
   ```

5. **Configure Supabase:**
   - Create a Supabase project at https://supabase.com/
   - Copy your API URL and anon key
   - Update `src/environments/environment.development.ts`

6. **Set up the database schema:**

   The project includes SQL schema files in the `docs/` folder that contain all necessary table definitions:
   - `docs/user-schema.sql` - User authentication tables
   - `docs/invoice-schema.sql` - Invoice management tables
   - `docs/invoice-items-schema.sql` - Invoice line items tables
   - `docs/seeder.sql` - Mock data for testing and development

   **To set up your database:**

   **Option 1: Using Supabase Dashboard (Recommended for beginners)**
   - Go to your Supabase project dashboard
   - Navigate to **SQL Editor**
   - Open each schema file and run them **in this exact order**:
     1. `user-schema.sql` - Copy contents, paste into SQL Editor, click **Run**
     2. `invoice-schema.sql` - Copy contents, paste into SQL Editor, click **Run**
     3. `invoice-items-schema.sql` - Copy contents, paste into SQL Editor, click **Run**
     4. `seeder.sql` - Copy contents, paste into SQL Editor, click **Run** (this adds sample data)

   **Option 2: Using Supabase CLI**
   ```bash
   # Make sure you're in the project root
   supabase db reset

   # Run each schema file in order
   psql -h db.<your-project-ref>.supabase.co -U postgres -d postgres -f docs/user-schema.sql
   psql -h db.<your-project-ref>.supabase.co -U postgres -d postgres -f docs/invoice-schema.sql
   psql -h db.<your-project-ref>.supabase.co -U postgres -d postgres -f docs/invoice-items-schema.sql
   psql -h db.<your-project-ref>.supabase.co -U postgres -d postgres -f docs/seeder.sql
   ```

   **Option 3: Manual execution via SQL Editor**
   ```bash
   # In your Supabase SQL Editor, run these in order:
   cat docs/user-schema.sql           # Copy and execute
   cat docs/invoice-schema.sql        # Copy and execute
   cat docs/invoice-items-schema.sql  # Copy and execute
   cat docs/seeder.sql                # Copy and execute
   ```

   **⚠️ Important Notes:**
   - The schema files **must** be run in the order listed above
   - The `seeder.sql` file should be run **last** after all tables are created
   - Running the seeder will populate your database with sample invoices, users, and invoice items
   - This mock data is essential for testing features locally without creating data manually

7. **Run the development server:**
   ```bash
   ng serve
   ```

8. **Create a feature branch from dev:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

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

### Component Structure
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

### Setting Up Your Database

When you first set up the project, you must run these schema files in your Supabase instance in the exact order listed above. The seeder file provides mock data so you can immediately start testing features without manually creating invoices and users. See the [Development Setup](#development-setup) section for detailed instructions.

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

**To reset your database with fresh mock data:**
```bash
# Re-run the seeder file in Supabase SQL Editor
# Or using psql:
psql -h db.<your-project-ref>.supabase.co -U postgres -d postgres -f docs/seeder.sql
```

### Making Database Changes

If your contribution requires changes to the database schema:

1. **Modify the appropriate schema file(s)** in the `docs/` folder
   - Update `user-schema.sql` for user-related tables
   - Update `invoice-schema.sql` for invoice tables
   - Update `invoice-items-schema.sql` for invoice items tables

2. **Document your changes clearly:**
   ```sql
   -- Add new column to invoices table
   ALTER TABLE public.invoices
   ADD COLUMN due_date TIMESTAMP WITH TIME ZONE;

   -- Add index for better query performance
   CREATE INDEX idx_invoices_due_date ON public.invoices(due_date);
   ```

3. **Update Row Level Security (RLS) policies if needed:**
   ```sql
   -- Update RLS policy for new column
   CREATE POLICY "Users can view invoices with due dates"
       ON public.invoices FOR SELECT
       USING (auth.uid() = user_id);
   ```

4. **Include in your PR:**
   - Modified schema file(s)
   - Clear explanation of why the change is needed
   - Migration notes for existing databases
   - Updated `seeder.sql` file if your changes affect sample data
   - Any additional seed data required for testing the new feature

5. **Test your schema changes:**
   - Drop and recreate your local database
   - Run all schema files in order
   - Verify the application works with the new schema
   - Test with sample data

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

## Questions?

Don't hesitate to ask questions! You can:
- Open an issue with the `question` label
- Start a discussion on GitHub Discussions
- Reach out to maintainers via email (thecodeangle@gmail.com)

**Remember:** There are no stupid questions. We were all beginners once!

## Support

Need help or have questions?

- 📖 Check our [documentation](https://github.com/desoga10/angular.ng/wiki)
- 🐛 [Report a bug](https://github.com/desoga10/angular.ng/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/desoga10/angular.ng/issues/new?template=feature_request.md)
- 💬 [Start a discussion](https://github.com/desoga10/angular.ng/discussions)
- 📧 Email: [thecodeangle@gmail.com]

---

Made with ❤️ by [desoga10](https://github.com/desoga10) and [contributors](https://github.com/desoga10/angular.ng/graphs/contributors)