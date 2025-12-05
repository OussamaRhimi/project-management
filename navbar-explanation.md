# Navbar Explanation

## Overview
The navbar is a responsive navigation component built using Angular. It provides navigation links to different sections of the Project Manager application and includes mobile-friendly features for better user experience on smaller screens.

## Structure and Components

### HTML Structure (navbar.html)
The navbar consists of the following key elements:

1. **Navbar Container**: Wraps the entire navigation bar with a maximum width and centered layout.
2. **Brand Section**: Contains the application logo (📋) and "Project Manager" text, linked to the home page.
3. **Mobile Menu Toggle**: A hamburger button that appears on mobile devices to toggle the navigation menu.
4. **Navigation Menu**: An unordered list containing navigation links to "Projets" (Projects) and "Contact" pages.

### TypeScript Component (navbar.ts)
The component is defined as a standalone Angular component with the following features:

- **Imports**: Uses CommonModule, RouterLink, and RouterLinkActive for routing functionality.
- **Properties**:
  - `isMenuOpen`: A boolean flag to track whether the mobile menu is open or closed.
- **Methods**:
  - `toggleMenu()`: Toggles the `isMenuOpen` state to show/hide the mobile menu.
  - `closeMenu()`: Sets `isMenuOpen` to false, closing the mobile menu (typically called when a link is clicked).

### Styling (navbar.css)
The CSS provides a dark theme with the following key styles:

- **Base Styling**: Dark background (#2c3e50), sticky positioning at the top, and box shadow for depth.
- **Brand Link**: White text with hover effects that change color to blue (#3498db).
- **Navigation Links**: White text with hover and active states, using blue background for active links.
- **Mobile Responsiveness**: Media queries hide/show elements based on screen size.

## Added Functions and Features

### Mobile Responsiveness
- **Hamburger Menu**: A three-line button that transforms into an "X" when active, providing visual feedback.
- **Collapsible Menu**: On mobile devices (max-width: 767px), the navigation menu slides down from the top when toggled.
- **Auto-Close**: The menu automatically closes when a navigation link is clicked, improving mobile UX.

### Routing Integration
- Uses Angular Router's `routerLink` directive for navigation.
- `routerLinkActive` highlights the current active route.
- Supports exact matching for the home route.

### Responsive Design
- **Desktop**: Full navigation menu is always visible.
- **Mobile**: Brand text is hidden, menu is collapsed by default, and toggle button is shown.
- Smooth transitions for menu opening/closing and hover effects.

## How It Works

1. **Initialization**: The component initializes with `isMenuOpen` set to false, hiding the mobile menu.

2. **Navigation**: Users can click on the brand link or navigation items to navigate to different routes using Angular Router.

3. **Mobile Interaction**:
   - Clicking the hamburger button calls `toggleMenu()`, which flips the `isMenuOpen` state.
   - The CSS uses this state to animate the menu's max-height and transform the hamburger icon.
   - Clicking a navigation link calls `closeMenu()`, ensuring the menu closes after navigation.

4. **Responsive Behavior**: CSS media queries adjust the layout based on screen width, hiding/showing elements as needed.

5. **Styling and Feedback**: Hover effects and active states provide visual feedback, while the sticky positioning keeps the navbar accessible during scrolling.

This navbar provides a clean, accessible, and mobile-friendly navigation experience for the Project Manager application.
