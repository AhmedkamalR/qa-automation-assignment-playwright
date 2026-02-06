QA Automation Assignment
========================

Author: Ahmed Kamal

Overview
--------
This assignment demonstrates a structured testing approach combining manual analysis and targeted automation.  
The focus is on validating critical user journeys such as Login and Product Search while ensuring maintainable and scalable automation design.

Automation Implementation
-------------------------
Automation was implemented using Playwright with a Page Object Model (POM) structure to separate UI interaction logic from test logic.

Covered Scenarios:
- Login validation  
- Product search validation  

Project Structure
-----------------
tests/  
pages/  
utils/  
playwright.config.ts  

Execution Instructions
----------------------

1. Install dependencies

```bash
npm install
npx playwright install
```

2. Run automated tests

```bash
npx playwright test
```

3. View HTML report

```bash
npx playwright show-report
```

Browsers Covered
----------------
- Chromium  
- Firefox  
- WebKit  

Framework Design Highlights
---------------------------
- Page Object Model for maintainability  
- Externalized test data  
- Stable locator strategy  
- Cross-browser execution  
- Automatic report generation  

Automation Scope Notes
----------------------
Automation targets stable and business-critical paths to maximize value within limited execution time.  
Exploratory and edge behavior validation was handled manually and documented in test scenarios.

Additional Deliverables
-----------------------
This submission also includes:

- Test Plan  
- Test Scenarios  
- Bug Reports  
- CI/CD Integration Concept  

Assumptions
-----------
- Testing conducted on demo environment  
- No backend access available  
- Focus limited to UI behavior validation  

End Note
--------
The objective of this implementation was to demonstrate a balanced testing strategy, clean automation structure, and readiness for CI/CD integration aligned with real-world QA practices.
