import education from "./education";

const experience = [
  {
    role: "React Frontend Developer",
    company: "Luxoft",
    period: "11/23 – 05/26",
    duties: [
      "Developed and maintained web application features using React and JavaScript",
      "Built a booking system with a calendar interface for reserving test rigs and managing their availability",
      "Implemented new UI functionality and enhanced existing features based on business requirements",
      "Developed functionality for creating and managing automated test cases through the UI",
      "Integrated frontend components with backend APIs and worked with application data in PostgreSQL using SQL queries",
      "Implemented forms, validation, state management, and user interactions",
      "Investigated and resolved frontend issues and improved existing React components",
      "Collaborated with backend developers and QA engineers throughout feature development and testing.",
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
      "Created and ran performance and load tests with Locust, analysed results and reported bottlenecks",
      "Integrated automated tests into the CI pipeline",
      "Collaborated with developers on defect investigation and test coverage",
    ],
  },
  {
    role: "Automation QA Engineer C#",
    company: "Luxoft",
    period: "05/19 – 05/20",
    duties: [
      "Automation testing of Web insurance application",
      "Requirements analysis and test cases creation",
    ],
  },
  {
    role: "Automation QA Engineer",
    company: "SoftServe",
    period: "08/17 – 05/19",
    duties: [
      "Automation testing of Windows/Mac desktop application Sourcetree",
      "Requirements analysis and test cases creation",
      "Manual testing of Sourcetree",
    ],
  },
  {
    role: "QA Engineer",
    company: "Mauris",
    period: "01/17 – 07/17",
    duties: [
      "Manual testing of mobile apps and websites",
      "Bug reporting via Jira",
      "Requirements creation and communication with client",
    ],
  },
  {
    role: "QA Engineer",
    company: "Varg Technologies",
    period: "09/16 – 12/16",
    duties: [
      "Manual testing of mobile app",
      "API monitoring and testing via Runscope",
      "Creating automated test cases using Behat (API testing)",
      "Working with admin panel",
      "Creating user stories for MVP",
    ],
  },
  {
    role: "QA Engineer",
    company: "Room8Studio",
    period: "05/16 – 09/16",
    duties: [
      "Manual testing of mobile game",
      "Testing via Unity3D",
      "Creating test cases",
    ],
  },
  {
    role: "Junior QA Engineer",
    company: "Luxoft",
    period: "10/15 – 04/16",
    duties: [
      "Manual testing of mobile application",
      "Working with project test documentation",
      "Development of Test Scenarios",
      "Take part in Story team meetings (requirements analysis)",
    ],
  },
];

const skillGroups = [
  {
    label: "Programming Languages / Technologies",
    value: "JavaScript, TypeScript, React, ReduxToolkit, C# .Net, Python",
  },
  { label: "AI Tools", value: "Claude Code, Cursor" },
  { label: "Database", value: "MySQL, PostgreSQL" },
  { label: "CI", value: "Jenkins, TeamCity" },
  { label: "Methodologies", value: "Scrum, Kanban" },
  { label: "Testing Tools", value: "TestRail, Jira, Zephyr" },
  {
    label: "Development Tools",
    value: "VS Code, VisualStudio, XCode, Unity3D, IntelliJ IDEA, PyCharm",
  },
  {
    label: "Automation Tools",
    value: "PyTest, Behave, NUnit, TestStack.White, Selenium WebDriver, XCTest",
  },
  { label: "Performance Testing Tool", value: "Locust" },
  { label: "Version Control System", value: "Git, GitHub" },
  { label: "Language", value: "English: Upper-Intermediate" },
];

export default {
  title: "React Frontend Developer",
  experience,
  education,
  skillGroups,
};
