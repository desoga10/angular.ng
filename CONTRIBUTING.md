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
- [Questions?](#questions)

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
- Make sure your branch is up to date with `main`

**PR Guidelines:**
1. **One PR per feature/fix** - Keep PRs focused and manageable
2. **Link related issues** - Use "Closes #123" in the PR description
3. **Provide context** - Explain what changes you made and why
4. **Include screenshots** - For UI changes, show before/after
5. **Be responsive** - Address review comments promptly

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

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environments folder:**
   ```bash
   ng g environments
   ```

4. **Configure Supabase:**
   - Create a Supabase project at https://supabase.com/
   - Copy your API URL and anon key
   - Update `src/environments/environment.development.ts`

5. **Run the development server:**
   ```bash
   ng serve
   ```

6. **Create a feature branch:**
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

## Database Changes

If your feature requires database schema changes:

1. **Create migration files** using Supabase CLI:
   ```bash
   supabase migration new your_migration_name
   ```

2. **Include migrations in your PR:**
   - Place migration files in `supabase/migrations/`
   - Document the changes in the PR description
   - Explain why the schema change is necessary

3. **Provide seed data** if needed for testing

**Example migration structure:**
```sql
-- Create new table
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Add RLS policies
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own tasks"
    ON public.tasks FOR SELECT
    USING (auth.uid() = user_id);
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
- Reach out to maintainers via email

**Remember:** There are no stupid questions. We were all beginners once!

---

Thank you for contributing to Angular.ng! Your time and effort help make this project better for everyone. 🎉