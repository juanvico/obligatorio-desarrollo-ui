import apolloClient from '../client/apollo-client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LOGIN from '_apollo/mutations/login';
import ME from '_apollo/queries/me';


class UserController {
  static login = async ({ email, password }) => {
    const { data } = await apolloClient.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });
    AsyncStorage.setItem('authorization', data.login.token)
    debugger;
    return data.login;
  }

  static me = async () => {
    const { data } = await apolloClient.query({
      query: ME
    })
    return data.me
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}

export default UserController;
