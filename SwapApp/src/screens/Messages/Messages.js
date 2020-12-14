import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.messages.header}
      </Text>
    </View>
  );
}

export default Messages;
