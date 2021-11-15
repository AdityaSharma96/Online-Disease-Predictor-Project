// core
import {
  Divider,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";

// styles
import { useStyles } from "./styles";

export default function Prevention() {
  // styles
  const classes = useStyles();

  const data = [
    "Wash your hands regularly especially after you go to the bathroom and before you eat",
    "Eat right, with plenty of fruits and vegetables",
    "Exercise",
    "Get enough sleep",
    "Quit smoking",
    "Stay away from sick people, if possible",
  ];

  const data2 = [
    "Get lots of rest",
    "Drink plenty of fluids (they’ll loosen up the gunk in your lungs so you can cough it out)",
    "Use a humidifier or take a warm bath (more gunk-loosening)",
    "Don’t smoke",
    "Stay home until your fever goes down and you aren’t coughing anything out",
    "Oxygen treatment",
    "IV fluids and medications",
    "Treatments to help loosen up the gunk",
  ];

  const shots = [
    {
      name: "PCV13 (Prevnar 13)",
      app: [
        "People 65 or older",
        "Kids under 5 years",
        "People who have a high risk of bacterial pneumonia",
      ],
    },
    {
      name: "PPSV23 (Pneumovax)",
      app: [
        "People 65 or older",
        "Children older than 2 who have a high risk of bacterial pneumonia",
        "People between 19 and 64 who smoke or have asthma",
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

          <Divider />
          <br />

          <Typography className={classes.title}>
            Two kinds of shots for bacterial pneumonia:
          </Typography>

          {shots.map((item, index) => (
            <Fragment key={index}>
              <List subheader={<ListSubheader>{item.name}</ListSubheader>}>
                {item.app.map((text, index) => (
                  <ListItemText primary={`${text}`} key={index} />
                ))}
              </List>
              <Divider />
            </Fragment>
          ))}

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.webmd.com/lung/bacterial-pneumonia"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.webmd.com/lung/bacterial-pneumonia
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>

      {/* cure */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Cure</Typography>
          <List>
            {data2.map((item, index) => (
              <ListItemText primary={`${index + 1}. ${item}`} key={index} />
            ))}
          </List>

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.webmd.com/lung/bacterial-pneumonia"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.webmd.com/lung/bacterial-pneumonia
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
