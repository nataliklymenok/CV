import { Box, Link, Typography } from "@mui/material";
import photo from "../assets/IMG_3650.JPG";

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
      "Integrated frontend components with backend APIs and worked with application data stored in the database",
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
      "Performed manual testing of the frontend and backend of a John Deere web tool",
      "Automated backend tests in Python using Behave (BDD)",
      "Designed and maintained test cases and test documentation based on requirements",
      "Performed functional, regression and smoke testing before releases",
      "Reported and tracked defects in Jira, verified fixes with the development team",
    ],
  },
  {
    role: "Automation QA Engineer Python",
    company: "Luxoft",
    period: "05/20 – 03/22",
    duties: [
      "Developed and maintained automated tests for Python microservices",
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

const education = [
  {
    period: "04/26 – 09/26",
    title: "Frontend Pro - Hillel IT school",
  },
  {
    period: "05/22 – 07/22",
    title: "Python Basic - Hillel IT school",
  },
  {
    period: "03/17 – 06/17",
    title: "Automation QC (Python) - IT Academy SoftServe",
  },
  { period: "09/16 – 10/16", title: 'QA Automation course "Prog.Kiev.ua"' },
  { period: "03/16 – 07/16", title: 'Java Programming course "Brain Academy"' },
  { period: "05/16", title: "SQL for Testers course, Luxoft" },
  {
    period: "01/15 – 02/15",
    title: "Software Testing course, ITLabs, Kyiv, Ukraine",
  },
  {
    period: "09/08 – 06/13",
    title:
      'Specialist degree, "Enterprise economy", National Technical University of Ukraine "Kyiv Polytechnic Institute"',
  },
];

const skillGroups = [
  {
    label: "Programming Languages / Technologies",
    value: "JavaScript, TypeScript, React, ReduxToolkit, C# .Net, Python",
  },
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
    value: "NUnit, TestStack.White, Selenium WebDriver, Maven, XCTest",
  },
  { label: "Performance Testing Tool", value: "Locust" },
  { label: "Version Control System", value: "Git" },
  { label: "Language", value: "English: Upper-Intermediate" },
];

const contacts = [
  { label: "+38 (066) 995-98-46", href: "tel:+380669959846" },
  { label: "nklymenok@gmail.com", href: "mailto:nklymenok@gmail.com" },
  {
    label: "linkedin.com/in/nataliia-klymenok",
    href: "https://ua.linkedin.com/in/nataliia-klymenok",
    external: true,
  },
];

const SideBlock = ({ title, order, children }) => (
  <Box sx={{ order: { xs: order, md: 0 } }}>
    <Typography
      variant="overline"
      component="h2"
      sx={{ display: "block", color: "primary.main", mb: 2 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const Section = ({ title, order, children }) => (
  <Box component="section" sx={{ order: { xs: order, md: 0 } }}>
    <Typography
      variant="h2"
      sx={{ pb: 2, mb: 4, borderBottom: 1, borderColor: "divider" }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const CV = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          md: "280px minmax(0, 1fr)",
        },
        columnGap: 9,
        rowGap: 6,
        maxWidth: 1120,
        mx: "auto",
        px: { xs: 2.5, sm: 5 },
        py: { xs: 5, md: 10 },
      }}
    >
      <Box
        component="aside"
        sx={{
          display: { xs: "contents", md: "flex" },
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Box
          component="img"
          src={photo}
          alt="Klymenok Nataliia"
          sx={{
            display: "block",
            width: { xs: 200, md: "100%" },
            aspectRatio: "4 / 5",
            objectFit: "cover",
            objectPosition: "50% 25%",
            borderRadius: 4,
          }}
        />

        <SideBlock title="Contact" order={2}>
          <Box sx={{ display: "grid", rowGap: 1 }}>
            {contacts.map((contact) => (
              <Link
                key={contact.href}
                href={contact.href}
                underline="hover"
                {...(contact.external && {
                  target: "_blank",
                  rel: "noreferrer",
                })}
                sx={{
                  fontSize: 15,
                  color: "text.primary",
                  overflowWrap: "anywhere",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {contact.label}
              </Link>
            ))}
          </Box>
        </SideBlock>

        <SideBlock title="Skills" order={5}>
          <Box sx={{ display: "grid", rowGap: 2.5 }}>
            {skillGroups.map((group) => (
              <Box key={group.label}>
                <Typography
                  sx={{ fontSize: 13, color: "text.secondary", mb: 1 }}
                >
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {group.value.split(",").map((skill) => (
                    <Box
                      component="span"
                      key={skill}
                      sx={{
                        px: 1.25,
                        fontSize: 13,
                        lineHeight: "26px",
                        bgcolor: "background.paper",
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 99,
                      }}
                    >
                      {skill.trim()}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </SideBlock>
      </Box>

      <Box
        sx={{
          display: { xs: "contents", md: "flex" },
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Box component="header" sx={{ order: { xs: 1, md: 0 }, pt: { md: 1 } }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              fontSize: { xs: 17, md: 21 },
              letterSpacing: "0.1em",
              color: "primary.main",
              mb: 1.5,
            }}
          >
            {experience[0].role}
          </Typography>
          <Typography variant="h1">Klymenok Nataliia</Typography>
        </Box>

        <Section title="Professional Experience" order={3}>
          <Box sx={{ display: "grid", rowGap: 4.5 }}>
            {experience.map((job) => (
              <Box key={`${job.company}-${job.period}`}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    columnGap: 2,
                  }}
                >
                  <Typography variant="h3">{job.role}</Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                      fontVariantNumeric: "tabular-nums",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {job.period}
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontFamily: "h2.fontFamily", fontStyle: "italic" }}
                  color="primary"
                >
                  {job.company}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    mt: 1.25,
                    pl: 2.25,
                    color: "text.secondary",
                    "& li::marker": { color: "primary.main" },
                    "& li + li": { mt: 0.5 },
                  }}
                >
                  {job.duties.map((duty) => (
                    <Typography component="li" variant="body2" key={duty}>
                      {duty}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Section>

        <Section title="Education & Training" order={4}>
          <Box sx={{ display: "grid", rowGap: 2 }}>
            {education.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "minmax(0, 1fr)",
                    sm: "120px minmax(0, 1fr)",
                  },
                  columnGap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    lineHeight: "23px",
                    color: "text.secondary",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {item.period}
                </Typography>
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Section>
      </Box>
    </Box>
  );
};

export default CV;
