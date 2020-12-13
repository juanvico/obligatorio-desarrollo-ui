import React, { useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AddItemContainer from '../AddItemContainer';
import MessagesContainer from '../MessagesContainer';
import SendMessageContainer from '../SendMessageContainer';
import ME from '../../queries/me';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useToken } from "../AuthProvider";

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
const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  const { token } = useToken();

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  // eslint-disable-next-line 
  const { loading, error, data } = useQuery(ME, { fetchPolicy: 'network-only' });

  const handleLogout = useCallback(
    () => {
      localStorage.removeItem('authorization')
      navigation.push('Login');
      setToken('');
      //history.push('/auth/login')
    },
    [history],
  )

  if (loading) return 'Loading...';

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {token ? (
          <>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Add" component={AddItemContainer} />
            <Drawer.Screen name="SendMessage" component={SendMessageContainer} />
            <Drawer.Screen name="Messages" component={MessagesContainer} />
          </>
        ) : (
            <>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Login" component={Login} />
            </>
          )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Home;