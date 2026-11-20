import education from "./education";

const summary =
  "QA Automation Engineer with 10+ years of experience in automated and manual testing of web, API, desktop and mobile applications. " +
  "Strong in Python test automation (PyTest, Behave), REST API testing and SQL (PostgreSQL, MySQL), with tests integrated into CI pipelines. " +
  "I use AI tools (Claude Code, Cursor) daily for test design, scripting and defect analysis. " +
  "Experience as a frontend developer building internal QA tools helps me design effective tests and work closely with developers.";

const experience = [
  {
    role: "QA Automation / Frontend Developer",
    company: "Luxoft",
    period: "11/23 – 05/26",
    duties: [
      "Wrote and maintained automated UI tests with Playwright",
      "Wrote SQL queries to work with and verify application data in PostgreSQL",
      "Used Claude Code and Cursor daily for writing tests and analysing defects",
      "Developed functionality for creating and managing automated test cases through the UI",
      "Built a booking system with a calendar interface for reserving test rigs and managing their availability",
      "Developed and maintained web application features using React and JavaScript",
      "Collaborated with backend developers and QA engineers throughout feature development and testing",
    ],
  },
  {
    role: "Automation/Manual QA Engineer",
    company: "Luxoft",
    period: "05/22 – 10/23",
    duties: [
      "Developed and maintained automated tests with Playwright",
      "Performed manual testing of the frontend and backend of a John Deere web tool",
      "Designed and maintained test cases and test documentation based on requirements",
      "Performed functional, regression and smoke testing before releases",
      "Reported and tracked defects in Jira, verified fixes with the development team",
      "Created test cases in test development tool TestRail",
    ],
  },
  {
    role: "Python Automation QA Engineer",
    company: "Luxoft",
    period: "05/20 – 03/22",
    duties: [
      "Developed and maintained automated tests for Python microservices with PyTest",
      "Automated backend tests in Python using Behave (BDD)",
      "Tested REST APIs and integration between services",
      "Verified data with SQL queries (PostgreSQL)",
      "Created and ran performance and load tests with Locust, analysed results and reported bottlenecks",
      "Integrated automated tests into the CI pipeline",
      "Collaborated with developers on defect investigation and test coverage",
    ],
  },
  {
    role: "C# Automation QA Engineer",
    company: "Luxoft",
    period: "05/19 – 05/20",
    duties: [
      "Automated UI testing of a web insurance application in C# with Selenium WebDriver and NUnit",
      "Analysed requirements and designed test cases",
    ],
  },
  {
    role: "Automation QA Engineer",
    company: "SoftServe",
    period: "08/17 – 05/19",
    duties: [
      "Automated testing of the Sourcetree desktop application for Windows and Mac (TestStack.White)",
      "Analysed requirements and designed test cases",
      "Performed manual testing of Sourcetree",
    ],
  },
  {
    role: "QA Engineer",
    company: "Mauris",
    period: "01/17 – 07/17",
    duties: [
      "Performed manual testing of mobile apps and websites",
      "Reported and tracked bugs in Jira",
      "Wrote requirements and communicated with the client",
    ],
  },
  {
    role: "QA Engineer",
    company: "Varg Technologies",
    period: "09/16 – 12/16",
    duties: [
      "Created automated API tests using Behat",
      "Monitored and tested APIs with Runscope",
      "Performed manual testing of a mobile app and its admin panel",
      "Created user stories for the MVP",
    ],
  },
  {
    role: "QA Engineer",
    company: "Room8Studio",
    period: "05/16 – 09/16",
    duties: [
      "Performed manual testing of a mobile game, including testing in Unity3D",
      "Created test cases",
    ],
  },
  {
    role: "Junior QA Engineer",
    company: "Luxoft",
    period: "10/15 – 04/16",
    duties: [
      "Performed manual testing of a mobile application",
      "Developed test scenarios and maintained project test documentation",
      "Took part in story team meetings and requirements analysis",
    ],
  },
];

const skillGroups = [
  {
    label: "Programming Languages",
    value: "Python, C# .Net, JavaScript, TypeScript",
  },
  {
    label: "Test Automation",
    value:
      "PyTest, Playwright, Cypress, Selenium WebDriver, NUnit, Behave, TestStack.White, Maven",
  },
  { label: "AI Tools", value: "Claude Code, Cursor" },
  { label: "API & Performance Testing", value: "REST API, Locust" },
  { label: "CI", value: "Jenkins, TeamCity" },
  { label: "Test Management", value: "TestRail, Jira, Zephyr" },
  { label: "Database", value: "MySQL, PostgreSQL" },
  { label: "Frontend", value: "React, Redux Toolkit" },
  {
    label: "Development Tools",
    value: "PyCharm, VisualStudio, VS Code, IntelliJ IDEA",
  },
  { label: "Methodologies", value: "Scrum, Kanban" },
  { label: "Version Control System", value: "Git, GitHub" },
  { label: "Language", value: "English: Upper-Intermediate" },
];

export default {
  title: "Senior QA Automation Engineer",
  summary,
  experience,
  education,
  skillGroups,
};
