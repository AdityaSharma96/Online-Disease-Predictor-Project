// core
import { Box, Grid, Typography } from "@material-ui/core";

// icons
import { GitHub } from "@material-ui/icons";

// components
import LoginButton from "../../components/LoginButton/LoginButton";
import MyCard from "../../components/Card/MyCard";

// styles
import { useStyles } from "./styles";

// images
import diabetes1 from "../../images/Diabetes1.png";
import diabetes2 from "../../images/diabetes2.png";
import diabetes3 from "../../images/diabetes3.png";
import pneumonia1 from "../../images/pneumonia1.png";
import pneumonia2 from "../../images/pneumonia2.png";
import pneumonia3 from "../../images/pneumonia3.png";

export default function Homepage() {
  // styles
  const classes = useStyles();

  //   articles
  const articles = [
    {
      title: "Type 1 and Type 2 Diabetes: What’s the Difference?",
      image: diabetes1,
      link:
        "https://www.healthline.com/health/difference-between-type-1-and-type-2-diabetes",
    },
    {
      title: "Causes of Diabetes",
      image: diabetes2,
      link: "https://www.diabetes.co.uk/diabetes-causes.html",
    },
    {
      title: "Managing Diabetes",
      image: diabetes3,
      link:
        "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/4-steps",
    },
    {
      title: "Symptoms of pneumonia",
      image: pneumonia1,
      link:
        "https://www.verywellhealth.com/pneumonia-signs-and-symptoms-2633386",
    },
    {
      title: "What is pneumonia",
      image: pneumonia2,
      link:
        "https://www.healthgrades.com/right-care/lungs-breathing-and-respiration/pneumonia",
    },
    {
      title: "Diagnosis of pneumonia",
      image: pneumonia3,
      link:
        "https://www.mayoclinic.org/diseases-conditions/pneumonia/diagnosis-treatment/drc-20354210",
    },
  ];

  return (
    <Box>
      <Box className={classes.cover}>
        <Box className={classes.imageContent}>
          <Typography className={classes.title}>Disease Classifier</Typography>
          <LoginButton />
        </Box>
      </Box>

      <Grid container spacing={3} className={classes.grid}>
        {articles.map((article, index) => (
          <Grid item className={classes.gridItem} xs={12} md={4} key={index}>
            <MyCard
              title={article.title}
              img={article.image}
              link={article.link}
            />
          </Grid>
        ))}
      </Grid>

      <Box className={classes.footer}>
        <Grid item xs={12} className={classes.footerItem}>
          Copyright &copy; {new Date().getFullYear()}
        </Grid>
        <Grid item xs={12} className={classes.footerItem}>
          <a
            href="https://github.com/shreyasbarve/disease-classifier"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <GitHub />
          </a>
        </Grid>
      </Box>
    </Box>
  );
}
