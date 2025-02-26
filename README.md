# HRnet - Employee Management for Human Resources

The HRnet app is a streamlined human resources management tool designed to simplify the process of adding, viewing, filtering, and searching for employees. This application empowers HR professionals by providing an intuitive interface for managing employee data efficiently. Whether adding a new employee through a form or browsing through the employee database with advanced filtering and search capabilities, HRnet offers a smooth user experience built on modern web development technologies.

This app was developed as part of the [OpenClassrooms](https://openclassrooms.com/) curriculum.

## Overview

### Screenshot

![](/assets/screenshot.png)

### The challenge

Users should be able to:

- Add a new employee using a form and save the entry
- View a table of all employees with the following functionalities:
  - sort by different columns
  - filter using a search bar
  - navigate through pages using pagination controls
- Navigate between the employee form and the employee list views

### Links

- Live Site URL: [See the live page here](https://wealth-health-hr-app.vercel.app/)

## My process

### Custom Components

This project includes a self-built **React Select Component**, which was developed to enhance form usability. The component is published as an npm package and integrated into this project.

- 📦 npm package: [@kazu2233/react-select-component](https://www.npmjs.com/package/@kazu2233/react-select-component)
- 💻 Source code: [GitHub Repository](https://github.com/Kasia307584/react-select-component)

### Built with

- **React.js** for building the user interface
- **React Router** for managing navigation between pages
- **React Redux** for managing global state
- **React Select Component**: A reusable, self-built package published on npm
- **React Bootstrap** for consistent and responsive UI styling
- **Rollup** and **Babel** for building and deploying the React Select Component
- **CSS3** and **BEM methodology** for general styling and maintainable code structure
- **Vercel** for easy deployment and hosting of the live application

### What I learned

- Build, deploy and publish a reusable npm package (`React Select Component`)
- Conduct snapshot and performance tests to optimize the application
- Compare performance metrics between different versions of the application (React and jQuery solutions) by using the `Lighthouse` test
- Use libraries like React Bootstrap or TanStack Table for efficient UI
- Document code using JSDoc methodology (for `React Select Component`)

### Performance Report

Lighthouse tests were conducted to measure the application's performance, accessibility, and best practices compliance. Two separate tests were run:

- **Old version (jQuery):** [Lighthouse Report](./reports/lighthouse-report-jquery.pdf) – Performance analysis of the initial implementation using jQuery.
- **New version (React):** [Lighthouse Report](./reports/lighthouse-report-react.pdf) – Performance analysis after refactoring the application with React.

These tests allow for a direct comparison of improvements made during the transition.

### Continued development

- incorporate localStorage to complement Redux state management
- implement form input validation for more robust user input handling
- refactor code in the `CreateEmployeeForm.jsx` to minimize repetition and enhance maintainability
