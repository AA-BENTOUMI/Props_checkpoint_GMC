import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Search";
import RatingStars from "./RatingStars";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function NavBar({ SearchedhWord, setRateState }) {
  const classes = useStyles();

  // ****get the word typed in the search input****
  const searchHandle = (search) => {
    SearchedhWord(search);
  };
  const starsrate = (rate) => {
    setRateState(rate);
  };
  return (
    /***********  navbar material ui  **********************/
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie-App
          </Typography>
          <div>
            <Search searchWord={searchHandle} />
          </div>
          <div>
            <RatingStars starsrate={starsrate} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
