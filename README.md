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

This project includes a self-built **React Select Component**, which was developed to enhance form usability. The component is published as an npm package and integrated into this project. It is also **documented using JSDoc**, **tested with snapshot testing**, , and **built using Rollup and Babel** for optimized distribution.

- npm package: [@kazu2233/react-select-component](https://www.npmjs.com/package/@kazu2233/react-select-component)
- source code: [GitHub repository](https://github.com/Kasia307584/react-select-component)

### Built with

- **React.js** for building the user interface
- **React Router** for managing navigation between pages
- **Redux Toolkit** and **React Redux** for managing global state in a React environment
- **React Select Component**: A reusable, self-built package published on npm [@kazu2233/react-select-component](https://www.npmjs.com/package/@kazu2233/react-select-component)
- **React Bootstrap** for consistent and responsive UI styling
- **TanStack React Table** for efficient and flexible data table management
- **CSS3** and **BEM methodology** for general styling and maintainable code structure
- **Vite** for fast development and optimized builds
- **Vercel** for easy deployment and hosting of the live application

### What I learned

- Gain **hands-on experience in the full package lifecycle** — from coding and bundling to documentation and testing, and finally, versioning and publishing on npm.
- **Compare performance metrics** between different versions of the application (React and jQuery solutions) by using the Lighthouse test, overcoming the challenge of running and testing the app in its production build.
- Evaluate and **choose external libraries** based on project needs, considering factors like maintenance, community support, and features. Initially tested alternatives like React Bootstrap Table Next before selecting TanStack React Table for its flexibility and active development.

### Performance Report

Lighthouse tests were conducted to measure the application's performance, accessibility, and best practices compliance. Two separate tests were run:

- **old version (jQuery):** [Lighthouse Report](./reports/lighthouse-report-jquery.pdf) – performance analysis of the initial implementation using jQuery
- **new version (React):** [Lighthouse Report](./reports/lighthouse-report-react.pdf) – performance analysis after refactoring the application with React

These tests allow for a direct comparison of improvements made during the transition.

### Continued development

- incorporate localStorage to complement Redux state management
- implement form input validation for more robust user input handling
- refactor code in the `CreateEmployeeForm.jsx` to minimize repetition and enhance maintainability
