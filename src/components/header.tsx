import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    justifyContent: "flex-start"
  }
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" className={classes.title} href="/">
            Красноярск
          </Button>

          <Button color="inherit" href="/order">
            Заявка
          </Button>

          <Button color="inherit">Поиск на карте</Button>
          <Button color="inherit">Вы сервис?</Button>
          <Button color="inherit">Войти</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
