import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createMessage, TYPES } from '_actions/MessageActions';
import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateMessage/CreateMessage.styles';
import { ShadowStyles, TextStyles } from '_theme';
import strings from '_localization';

function CreateMessage() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const destinatary = 'paolafrancescoli@gmail.com' //TODO: fix

  const handleSubmit = () => {
    dispatch(createMessage(destinatary, body));
  };

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
          {strings.createMessage.body}
        </Text>
        <TextField
          accessibilityHint={strings.createMessage.bodyHint}
          accessibilityLabel={strings.createMessage.body}
          onChangeText={setBody}
          placeholder={strings.createMessage.body}
          value={body}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.createMessage.button}
        />
      </View>
    </View>
  );
}

export default Login;
