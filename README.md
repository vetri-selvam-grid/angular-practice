# Angular Routing Practice

This project demonstrates modern Angular routing concepts using standalone components and the latest Angular features.

## Table of Contents
- [Project Overview](#project-overview)
- [Routing Configuration](#routing-configuration)
- [Decorators Used](#decorators-used)
- [Components](#components)
- [Running the Application](#running-the-application)

## Project Overview

This application showcases a multi-page Angular app with three main pages:
- **Home** (`/`) - Landing page with feature highlights
- **About** (`/about`) - Team information with dynamic content
- **Contact** (`/contact`) - Interactive contact form with validation

## Routing Configuration

### Routes Definition (`app.routes.ts`)

Angular routing is configured using the `Routes` array, which maps URL paths to components:

```typescript
export const routes: Routes = [
  { path: '', component: Home },          // Default/root route
  { path: 'about', component: About },    // /about route
  { path: 'contact', component: Contact }, // /contact route
  { path: '**', redirectTo: '' }          // Wildcard for 404 handling
];
```

**Key Concepts:**
- **`path`**: URL path segment (empty string `''` represents the root)
- **`component`**: Component to render when path matches
- **`redirectTo`**: Redirects to another route
- **`**`**: Wildcard route that catches all unmatched URLs

### Router Providers (`app.config.ts`)

Modern Angular uses `provideRouter()` instead of `RouterModule`:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Provides routing functionality
    // ... other providers
  ]
};
```

**Benefits of `provideRouter()`:**
- Works with standalone components
- Simplified configuration
- Better tree-shaking for smaller bundle sizes

### Router Outlet & Links (`app.ts`)

The main app component uses routing directives:

```typescript
imports: [RouterOutlet, RouterLink, RouterLinkActive]
```

- **`RouterOutlet`**: Placeholder where routed components are rendered
- **`RouterLink`**: Directive for navigation (replaces `href`)
- **`RouterLinkActive`**: Adds CSS class to active route links

**Template usage:**
```html
<router-outlet></router-outlet>  <!-- Components render here -->
<a routerLink="/" routerLinkActive="active">Home</a>
<a routerLink="/about" routerLinkActive="active">About</a>
```

## Decorators Used

### `@Component` Decorator

Every component uses the `@Component` decorator to define metadata:

```typescript
@Component({
  selector: 'app-root',           // HTML tag to use this component
  imports: [RouterOutlet, ...],   // Standalone component dependencies
  templateUrl: './app.html',      // External HTML template
  styleUrl: './app.css'           // Component-specific styles
})
```

**Why Standalone Components?**
- No need for `NgModule`
- Simpler, more modular architecture
- Better code splitting and lazy loading
- Recommended approach in Angular 17+

## Components

### Home Component
- Displays welcome message and feature list
- Navigation links to other pages
- Uses `RouterLink` for navigation

### About Component
- Mission statement section
- Dynamic team member list using `@for` control flow
- Demonstrates data binding and iteration

**Modern Control Flow:**
```typescript
@for (member of teamMembers; track member.name) {
  <div>{{ member.name }}</div>
}
```

### Contact Component
- Interactive form with validation
- Two-way data binding using `[(ngModel)]`
- Form submission handling
- Uses `FormsModule` for template-driven forms

**Key Features:**
- Form validation with `required` attributes
- Dynamic button state (`[disabled]`)
- Event handling with `(ngSubmit)`
- Success message display using `@if`

## Routing Flow

```
User clicks link → RouterLink directive
    ↓
Angular Router matches URL to route
    ↓
Router loads corresponding component
    ↓
Component renders in <router-outlet>
    ↓
RouterLinkActive highlights active link
```

## Modern Angular Features Used

1. **Standalone Components** - No NgModule required
2. **New Control Flow** - `@for` instead of `*ngFor`
3. **Signals** - `signal()` for reactive state management
4. **provideRouter()** - Functional router setup
5. **Component imports** - Direct dependency management

## Learning Resources

- [Angular Routing Guide](https://angular.dev/guide/routing)
- [Standalone Components](https://angular.dev/guide/components/importing)
- [Built-in Control Flow](https://angular.dev/guide/templates/control-flow)

---

**Note**: This project uses Angular 17+ features and follows modern best practices for building scalable web applications.
