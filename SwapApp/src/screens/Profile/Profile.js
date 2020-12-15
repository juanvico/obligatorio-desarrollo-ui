import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '_actions/UserActions';
import { Button } from '_components';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';
import { NAVIGATION } from '_constants';

function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoMyItems = useCallback(() => {
    navigation.navigate(NAVIGATION.myItems)
  }, [navigation])

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text
        style={[TextStyles.fieldTitle, styles.legend, { color: colors.text }]}
      >
        {strings.profile.message}
      </Text>

      <Button title={strings.profile.myItems} onPress={handleGoMyItems} />
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}

export default Profile;
