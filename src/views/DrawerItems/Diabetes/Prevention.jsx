// core
import { Fragment } from "react";
import {
  Grid,
  List,
  ListItemText,
  Paper,
  Typography,
  Divider,
  ListSubheader,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export default function Prevention() {
  // styles
  const classes = useStyles();

  const data = [
    "Cut Sugar and Refined Carbs From Your Diet",
    "Work Out Regularly",
    "Drink Water as Your Primary Beverage",
    "Lose Weight If You’re Overweight or Obese",
    "Quit Smoking",
    "Follow a Very-Low-Carb Diet",
    "Watch Portion Sizes",
    "Avoid Sedentary Behaviors",
    "Eat a High-Fiber Diet",
    "Optimize Vitamin D Levels",
    "Minimize Your Intake of Processed Foods",
    "Drink Coffee or Tea",
    "Consider Taking These Natural Herbs",
  ];

  const cureData = [
    {
      name: "Type2 diabetes",
      cures: ["diet", "exercise", "medication", "insulin therapy"],
    },
    {
      name: "Type1 diabetes",
      cures: [
        "maintain normal blood sugar level through regular monitoring",
        "exercise",
        "diet",
        "insulin therapy",
      ],
    },
    {
      name: "Prediabetes",
      cures: [
        "Physical exercise",
        "Weight loss",
        "Low carbohydrate diet",
        "Mediterranean diet",
        "Low fat diet and Diabetic diet",
      ],
    },
    {
      name: "Gestational diabetes",
      cures: [
        "healthy diet",
        "physical exercise",
        "anti-diabetic medication",
        "insulin therapy",
      ],
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Preventions</Typography>
          <List>
            {data.map((item, index) => (
              <ListItemText primary={`${index + 1}. ${item}`} key={index} />
            ))}
          </List>

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.healthline.com/nutrition/prevent-diabetes"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.healthline.com/nutrition/prevent-diabetes
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>

      {/* Cure */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Cure</Typography>
          <Divider />
          {cureData.map((item, index) => (
            <Fragment key={index}>
              <List subheader={<ListSubheader>{item.name}</ListSubheader>}>
                {item.cures.map((text, index) => (
                  <ListItemText primary={`${index + 1}. ${text}`} key={index} />
                ))}
              </List>
              <Divider />
            </Fragment>
          ))}

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.google.com/search?q=how+to+cure+diabetes&oq=how+to+cure+diabetes"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.google.com/search?q=how+to+cure+diabetes&oq=how+to+cure+diabetes
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
