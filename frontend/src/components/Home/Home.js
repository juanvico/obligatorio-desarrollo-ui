import React, { useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AddItemContainer from '../AddItemContainer';
import MessagesContainer from '../MessagesContainer';
import SendMessageContainer from '../SendMessageContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ME from '../../queries/me';
import Feed from '../Feed/Feed';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const { loading, error, data } = useQuery(ME, { fetchPolicy: 'network-only' });

  const handleLogout = useCallback(
    () => {
      localStorage.removeItem('authorization')
      history.push('/auth/login')
    },
    [history],
  )
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen])

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  if (loading) return 'Loading...';

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
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {`Hello ${data?.me.name}!`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{ title: 'Home', to: '/' }, { title: 'Add', to: '/add' }, { title: 'My messages', to: '/messages' }].map((nav, index) => (
            <ListItem button component={Link} key={nav.title} to={nav.to} onClick={handleDrawerClose} >
              <ListItemText primary={nav.title} />
            </ListItem>
          ))}
          <Divider />
          <ListItem button onClick={handleLogout} >
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/add" component={AddItemContainer} />
          <Route exact path="/sendMessage" component={SendMessageContainer} />
          <Route exact path="/messages" component={MessagesContainer} />
          <Route exact path="/items/:id" component={ItemDetailContainer} />
        </Switch>
      </main>
    </div>
  );
}

export default Home;