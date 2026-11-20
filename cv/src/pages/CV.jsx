import { Box, Link, Typography } from "@mui/material";
import photo from "../assets/IMG_3650.JPG";

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
      sx={{
        pb: 2,
        mb: 4,
        borderBottom: 1,
        borderColor: "divider",
        "@media print": { pb: 1.5, mb: 3 },
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const CV = ({ cv }) => {
  const { title, summary, experience, education, skillGroups } = cv;

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

        "@media print": {
          gridTemplateColumns: "240px minmax(0, 1fr)",
          columnGap: 6,
          zoom: 0.77,
          maxWidth: "none",
          p: 0,
        },
      }}
    >
      <Box
        component="aside"
        sx={{
          display: { xs: "contents", md: "flex" },
          flexDirection: "column",
          gap: 5,
          "@media print": { display: "flex", gap: 4 },
        }}
      >
        <Box
          component="img"
          src={photo}
          alt="Klymenok Nataliia"
          sx={{
            display: "block",
            width: { xs: 200, md: "100%" },
            "@media print": { width: "100%" },
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
              <Box key={group.label} sx={{ breakInside: "avoid" }}>
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
          "@media print": { display: "flex", gap: 5 },
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
            {title}
          </Typography>
          <Typography variant="h1">Klymenok Nataliia</Typography>
        </Box>

        {summary && (
          <Section title="Summary" order={3}>
            <Typography sx={{ color: "text.secondary" }}>{summary}</Typography>
          </Section>
        )}

        <Section title="Professional Experience" order={3}>
          <Box
            sx={{
              display: "grid",
              rowGap: 4.5,
              "@media print": { rowGap: 3 },
            }}
          >
            {experience.map((job) => (
              <Box
                key={`${job.company}-${job.period}`}
                sx={{ breakInside: "avoid" }}
              >
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
                    "@media print": { mt: 1, "& li + li": { mt: 0.25 } },
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
          <Box
            sx={{
              display: "grid",
              rowGap: 2,
              "@media print": { rowGap: 1 },
            }}
          >
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
