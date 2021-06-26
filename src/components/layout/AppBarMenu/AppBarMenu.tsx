import React, { useLayoutEffect, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppDrawer from "../AppDrawer/AppDrawer";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  appBar: {
    background: "#08182D",
    color: "#FBF5F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  appBarSmall: {
    background: "#08182D",
    color: "#FBF5F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    background: "#08182D",
    color: "#FBF5F3",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"

  },
  logo: {
    width: '30px',
    height: '30px',
    marginRight: '10px'
  },
  appText: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "lighter"
  }
});

function HideOnScroll(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function AppBarMenu(props: any) {
  const classes = useStyles();
  const [isSmall, setIsSmall] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const history = useHistory();

  const handleButtonClick = (path: string) => {
    history.push("/" + path);
  }

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 420) setIsSmall(true);
    else if (isSmall) setIsSmall(false);
  }, [width]);

  const buttons = (
    <div className={isSmall || isOpenDrawer ? classes.drawer : ''}>
      <Button className={classes.appText} color="inherit" onClick={() => {handleButtonClick('projects')}}>PROJECTS</Button>
      <Button className={classes.appText} color="inherit" onClick={() => {handleButtonClick('contact')}}>CONTACT</Button>
      <Button className={classes.appText} color="inherit" onClick={() => {handleButtonClick('about')}}>ABOUT</Button>
    </div>
  );

  const Options = !isSmall ? (
    buttons
  ) : (
    <IconButton
      edge="start"
    //   className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={() => setIsOpenDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={isSmall ? classes.appBarSmall : classes.appBar}>
          <Toolbar>
            {/* <img className={classes.logo} src={logo} alt='logo'/> */}
            <Typography className={classes.appText} variant="h6">My Website</Typography>
          </Toolbar>
          {Options}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <AppDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} buttons={buttons} />
    </React.Fragment>
  );
}
