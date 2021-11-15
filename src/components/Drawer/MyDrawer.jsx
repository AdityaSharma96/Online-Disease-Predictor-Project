// core
import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";

// icons
import {
  AccessTime as TimeIcon,
  House as HomeIcon,
  Menu as MenuIcon,
  Favorite as PreventionIcon,
  ChevronLeft as ChevronLeftIcon,
  Room as Location,
} from "@material-ui/icons";

// firebase
import { auth } from "../../firebase";

// navigation
import { useHistory } from "react-router-dom";

// redux
import { success_snackbar } from "../../redux/actions/snackbar";
import { useDispatch } from "react-redux";

// cookies
import { delete_cookie, read_cookie } from "sfcookies";

// styles
import clsx from "clsx";
import drawerStyles from "./styles";

export default function MyDrawer(props) {
  // styles
  const classes = drawerStyles();

  // stored value
  const uid = read_cookie("uid");

  // redux
  const dispatch = useDispatch();

  // navigation
  const history = useHistory();

  const [open, setOpen] = React.useState(true);
  const [titleName, setTitleName] = React.useState("DISEASE CLASSIFIER");
  const handleDrawerToggle = () => setOpen(!open);

  const googleSignout = () => {
    auth.signOut().then(() => {
      delete_cookie("uid");
      delete_cookie("name");
      dispatch(success_snackbar("Logout succesful"));
      history.replace("/");
    });
  };

  const data = [
    {
      listTitle: "Home",
      details: [
        {
          name: "Past Records",
          icon: <TimeIcon color="primary" />,
          link: `/home/${uid}`,
        },
      ],
    },
    {
      listTitle: "Diabetes",
      details: [
        {
          name: "Predictor",
          icon: <HomeIcon color="primary" />,
          link: `/diabetes/home/${uid}`,
        },
        {
          name: "Prevention and Cure",
          icon: <PreventionIcon color="primary" />,
          link: `/diabetes/preventionandcure/${uid}`,
        },
      ],
    },
    {
      listTitle: "Pneumonia",
      details: [
        {
          name: "Predictor",
          icon: <HomeIcon color="primary" />,
          link: `/pneumonia/home/${uid}`,
        },
        {
          name: "Prevention and Cure",
          icon: <PreventionIcon color="primary" />,
          link: `/pneumonia/preventionandcure/${uid}`,
        },
      ],
    },
    // {
    //   listTitle: "Fractures",
    //   details: [
    //     {
    //       name: "Home",
    //       icon: <PreventionIcon color="primary" />,
    //       link: `/fractures/${uid}`,
    //     },
    //   ],
    // },
    {
      listTitle: "Nearby Hospitals",
      details: [
        {
          name: "Map",
          icon: <Location color="primary" />,
          link: `/locations`,
        },
      ],
    },
  ];

  const drawer = (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <List
            subheader={
              <ListSubheader color="primary">
                {open ? item.listTitle : ""}
              </ListSubheader>
            }
          >
            {item.details.map((detail, index) => (
              <Tooltip title={`${item.listTitle} ${detail.name}`} key={index}>
                <ListItem
                  button
                  onClick={() => {
                    setTitleName(`${item.listTitle} > ${detail.name}`);
                    history.push(`${detail.link}`);
                  }}
                >
                  <ListItemIcon>{detail.icon}</ListItemIcon>
                  <Typography variant="body1" color="textSecondary">
                    {detail.name}
                  </Typography>
                </ListItem>
              </Tooltip>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap className={classes.title}>
            {titleName}
          </Typography>
          <Tooltip title="logout">
            <Button variant="text" color="inherit" onClick={googleSignout}>
              Logout
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div>
            <div>
              <Typography variant="subtitle1">{read_cookie("name")}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                {read_cookie("email")}
              </Typography>
            </div>
          </div>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{drawer}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
