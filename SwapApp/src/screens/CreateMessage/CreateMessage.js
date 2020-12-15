import { useTheme, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createMessage, MESSAGE_TYPES } from '_actions/MessageActions';
import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateMessage/CreateMessage.styles';
import { ShadowStyles, TextStyles } from '_theme';
import strings from '_localization';
import { isLoadingSelector } from '_selectors/StatusSelectors';

function CreateMessage() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const route = useRoute();
  const [body, setBody] = useState('');
  const isMultiline = true
  const lines = 4
  const multilineHeight = 80

  // TODO: fix this should be something it knows not hardcoded
    const item = route.params.item;
    // {
    //   id: '1',
    //   title: 'Cup', 
    //   description: 'vintage cup', 
    //   image: 'https://image.freepik.com/psd-gratis/mock-up-taza-sobre-fondo-verde_1307-195.jpg',
    //   latitude: -51,
    //   longitue: 0,
    //   availableToPickup: true,
    //   locationDetails: '2nd floor',
    //   userName: 'Paola',
    //   userEmail: 'paolafrancescoli@gmail.com',
    //   distance: 1,
    // };

  const handleSubmit = useCallback(() => {
    dispatch(createMessage(item.userEmail, body));
  }, [dispatch, createMessage, item.userEmail, body])


  const isLoading = useSelector(state =>
    isLoadingSelector([MESSAGE_TYPES.CREATE_MESSAGE], state)
  );

  return (
    <View>

        <View key={item.id} style={[styles.itemContainer, { backgroundColor: colors.card }]}> 
          <Image style={styles.itemImage} source={ { uri: item.image}} />
          
          <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
            {item.title}
          </Text>
          <Text style={[TextStyles.textField, { color: colors.text }]}>
            {item.description}
          </Text>
          <Text style={[TextStyles.textField, { color: colors.text }]}>
          {strings.items.owner} {item.userName} {item.userEmail}
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
        {/* <ErrorView errors={errors} /> */}
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
