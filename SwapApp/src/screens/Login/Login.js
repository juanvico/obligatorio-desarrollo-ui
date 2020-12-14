import { useTheme } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '_actions/UserActions';
import { Button, ErrorView, TextField } from '_components';
import strings from '_localization';
import styles from '_screens/Login/Login.styles';
import errorsSelector from '_selectors/ErrorSelectors';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { ShadowStyles, TextStyles } from '_theme';

function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = useCallback(() => {
    dispatch(login(email, password));
  }, [dispatch, login, email, password])

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.login.username}
        </Text>
        <TextField
          accessibilityHint={strings.login.emailHint}
          accessibilityLabel={strings.login.email}
          onChangeText={setEmail}
          placeholder={strings.login.email}
          value={email}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.login.password}
        </Text>
        <TextField
          secureTextEntry
          accessibilityHint={strings.login.passwordHint}
          accessibilityLabel={strings.login.password}
          onChangeText={setPassword}
          placeholder={strings.login.password}
          value={password}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.login.button}
        />
      </View>
    </View>
  );
}

export default Login;
