// core
import { Link, Typography, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";

// styles
import loginStyles from "./styles";
import "./login.css";

// components
import MyCard from "../../components/Card/MyCard";
import Navbar from "../../components/Navbar/Navbar";
import NameCard from "../../components/Card/NameCard";

// images
import Diabetes from "../../images/Diabetes1.png";
import diabetes2 from "../../images/diabetes2.png";
import diabetes3 from "../../images/diabetes3.png";
import pneumonia1 from "../../images/pneumonia1.png";
import pneumonia2 from "../../images/pneumonia2.png";
import pneumonia3 from "../../images/pneumonia3.png";
import background from "../../images/ML1.png";

function Copyright() {
  // styles
  const classes = loginStyles();

  return (
    <Typography
      className={classes.copyright}
      variant="button"
      color="primary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Disease Classifier
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Login() {
  // styles
  const classes = loginStyles();

  const a = window.innerWidth;

  const articles = [
    {
      title: "Type 1 and Type 2 Diabetes: What’s the Difference?",
      image: Diabetes,
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

  const members = [
    {
      name: "Nikeshsingh Ajaysingh Baghel",
      roll: "57",
      linkedin: "",
      github: "",
    },
    { name: "Prathamesh Channe", roll: "64", linkedin: "", github: "" },
    { name: "Aditya Sharma", roll: "88", linkedin: "", github: "" },
    { name: "Rishab Ratihi", roll: "69", linkedin: "", github: "" },
    { name: "Shreyas Barve", roll: "75", linkedin: "", github: "" },
  ];

  return (
    <div className={classes.root}>
      <Navbar />
      <div
        width={window.innerWidth}
        height={683}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          opacity: "0.8",
        }}
      >
        <Typography
          component="div"
          width={window.innerWidth}
          style={{ height: "683px", width: { a } }}
        >
          <div className={classes.root1}>
            <center>
              <h1>Disease-Classifier Project</h1>
              <br />
              <h2>
                - This is a Machine Learning Project to predict Diabetes,
                Pnuemonia <br /> also generating a medical report
              </h2>
              <br />
              <a
                href="https://github.com/shreyasbarve/disease-classifier"
                class="button"
              >
                <GitHubIcon /> Github
              </a>
            </center>
          </div>
        </Typography>
      </div>

      <br />
      <Container>
        <center>
          <h1>Articles</h1>
        </center>
        <br />
        <Grid container spcaing={3}>
          {articles.map((name) => (
            <Grid key={name.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <MyCard title={name.title} img={name.image} link={name.link} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <div width={window.innerWidth} height="fit-content">
        <Typography
          component="div"
          width={window.innerWidth}
          style={{
            backgroundColor: "#212121",
            height: "fit-content",
            width: { a },
          }}
        >
          <center>
            <Grid container spcaing={3} padding={20} className={classes.root2}>
              {members.map((member) => (
                <Grid key={member.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                  <NameCard
                    name={member.name}
                    roll={member.roll}
                    College={member.College}
                    image={member.college}
                    linkedin={member.linkedin}
                    github={member.github}
                  />
                </Grid>
              ))}
            </Grid>
          </center>
        </Typography>
      </div>

      <Copyright />
    </div>
  );
}
