import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { register, TYPES } from '_actions/UserActions';
import { Button, ErrorView, TextField } from '_components';
import strings from '_localization';
import styles from '_screens/Register/Register.styles';
import errorsSelector from '_selectors/ErrorSelectors';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { ShadowStyles, TextStyles } from '_theme';
import { NAVIGATION } from '_constants';

function Register() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.REGISTER], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.REGISTER], state),
    shallowEqual
  );

  const handleSubmit = useCallback(() => {
    dispatch(register({ name, email: email.toLowerCase(), password }));
  }, [dispatch, register, name, email, password])

  const handleLogin = () => {
    navigation.navigate(NAVIGATION.login)
  }

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
          {strings.register.name}
        </Text>
        <TextField
          accessibilityHint={strings.register.nameHint}
          accessibilityLabel={strings.register.name}
          onChangeText={setName}
          placeholder={strings.register.name}
          value={name}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.register.email}
        </Text>
        <TextField
          accessibilityHint={strings.register.emailHint}
          accessibilityLabel={strings.register.email}
          onChangeText={setEmail}
          placeholder={strings.register.email}
          value={email}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.register.password}
        </Text>
        <TextField
          secureTextEntry
          accessibilityHint={strings.register.passwordHint}
          accessibilityLabel={strings.register.password}
          onChangeText={setPassword}
          placeholder={strings.register.password}
          value={password}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.register.passwordCheck}
        </Text>
        <TextField
          secureTextEntry
          accessibilityHint={strings.register.passwordCheckHint}
          accessibilityLabel={strings.register.passwordCheck}
          onChangeText={setPasswordCheck}
          placeholder={strings.register.passwordCheck}
          value={passwordCheck}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.register.button}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.secondaryButton}>
          <Text style={[TextStyles.selectableText, { color: colors.text }]}>
            {strings.register.login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
