import { useTheme, useRoute, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, MESSAGE_TYPES } from '_actions/MessageActions';
import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateMessage/CreateMessage.styles';
import { TextStyles } from '_theme';
import strings from '_localization';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { NAVIGATION } from '_constants';

function CreateMessage() {
  const { colors } = useTheme();
  const [errors, setErrors] = useState([])
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [body, setBody] = useState('');
  const isMultiline = true
  const lines = 4
  const multilineHeight = 80

  const item = route.params.item;

  const handleSubmit = useCallback(() => {
    if (body === '') setErrors(['Message must not be empty'])
    else dispatch(createMessage({
      destinataryUserEmail: item.user_email,
      description: body
    }, () => {
      setErrors([])
      setBody([])
      navigation.navigate(NAVIGATION.inbox)
    }));
  }, [
    dispatch,
    createMessage,
    item.user_email,
    body,
    setErrors,
    setBody,
    navigation,
  ])


  const isLoading = useSelector(state =>
    isLoadingSelector([MESSAGE_TYPES.CREATE_MESSAGE], state)
  );

  return (
    <View>
      <View key={item.id} style={[styles.itemContainer, { backgroundColor: colors.card }]}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />

        <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {item.title}
        </Text>
        <Text style={[TextStyles.textField, { color: colors.text }]}>
          {item.description}
        </Text>
        <Text style={[TextStyles.textField, { color: colors.text }]}>
          {strings.items.owner} {item.user_name}
        </Text>
        <Text style={[TextStyles.secondaryText, { color: colors.text }]}>
          {strings.items.distance} {item.distance} {strings.items.unit}
        </Text>
      </View>


      <View
        style={[
          styles.messageContainer
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
          multiline={isMultiline}
          numberOfLines={lines}
          minHeight={multilineHeight}
          maxHeight={multilineHeight}
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

export default CreateMessage;
