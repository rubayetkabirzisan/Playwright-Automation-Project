# Playwright Automation Project

End-to-end test automation suite for [SauceDemo](https://www.saucedemo.com) built with Playwright and JavaScript. Covers the full user journey — login, product browsing, cart management, and checkout — with CI/CD integration via GitHub Actions.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) | E2E test framework |
| JavaScript | Test scripting language |
| Node.js | Runtime environment |
| GitHub Actions | CI/CD pipeline |

---

## Project Structure

```
Playwright-Automation-Project/
├── .github/
│   └── workflows/          # GitHub Actions CI configuration
├── tests/                  # All test files
├── playwright.config.js    # Playwright configuration (browsers, baseURL, etc.)
├── package.json
└── .gitignore
```

---

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

---

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/rubayetkabirzisan/Playwright-Automation-Project.git
cd Playwright-Automation-Project
```

**2. Install dependencies**

```bash
npm install
```

**3. Install Playwright browsers**

```bash
npx playwright install
```

---

## Running Tests

**Run all tests**

```bash
npm test
```

**Run tests in headed mode (see the browser)**

```bash
npx playwright test --headed
```

**Run a specific test file**

```bash
npx playwright test tests/<filename>.spec.js
```

**Run tests on a specific browser**

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## Viewing the Test Report

After a test run, Playwright generates an HTML report. Open it with:

```bash
npx playwright show-report
```

---

## CI/CD

This project includes a GitHub Actions workflow that automatically runs the full test suite on every push and pull request to the `main` branch. Test results and the HTML report are uploaded as workflow artifacts, accessible directly from the Actions tab.

---

## Application Under Test

**SauceDemo** — [https://www.saucedemo.com](https://www.saucedemo.com)

A demo e-commerce application commonly used for testing practice. Test scenarios in this project include:

- User login (valid and invalid credentials)
- Product listing and sorting
- Adding and removing items from the cart
- End-to-end checkout flow
- Logout

---
