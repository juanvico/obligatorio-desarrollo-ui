import apolloClient from '../client/apollo-client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LOGIN from '_apollo/mutations/login';
import ME from '_apollo/queries/me';
import CREATE_USER from '_apollo/mutations/createUser';


class UserController {
  static login = async ({ email, password }) => {
    const { data } = await apolloClient.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });
    AsyncStorage.setItem('authorization', data.login.token)
    return data.login;
  }

  static register = async ({ name, email, password }) => {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_USER,
      variables: { email, password, name },
    });
    AsyncStorage.setItem('authorization', data.createUser.token)
    return data.createUser;
  }

  static me = async () => {
    try {
      const { data } = await apolloClient.query({
        query: ME
      })
      return data.me
    } catch (error) {
      AsyncStorage.removeItem('authorization')
    }
  }

  static async logout() {
    AsyncStorage.removeItem('authorization')
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}

export default UserController;
