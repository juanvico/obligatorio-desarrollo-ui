import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateItem/CreateItem.styles';
import { ShadowStyles, TextStyles } from '_theme';
import strings from '_localization';
import { createItem, TYPES } from '_actions/ItemActions';

function CreateItem() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [pickupLatitude, setPickupLatitude] = useState('')
  const [pickupLongitude, setPickupLongitude] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [availableToPickup, setAvailableToPickup] = useState(true);
  const [[hasError, errorMessage], setErrors] = useState([false, '']);

  const handleSubmit = () => {
    dispatch(createItem(title, description, image, pickupLatitude, pickupLongitude, pickupLocation, availableToPickup));
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
          {strings.createItem.title}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.titleHint}
          accessibilityLabel={strings.createItem.title}
          onChangeText={setTitle}
          placeholder={strings.createItem.title}
          value={title}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.description}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.descriptionHint}
          accessibilityLabel={strings.createItem.description}
          onChangeText={setDescription}
          placeholder={strings.createItem.description}
          value={description}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.image}
        </Text>
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.latitude}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.latitudeHint}
          accessibilityLabel={strings.createItem.latitude}
          onChangeText={setPickupLatitude}
          placeholder={strings.createItem.latitude}
          value={pickupLatitude}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.longitude}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.longitudeHing}
          accessibilityLabel={strings.createItem.longitude}
          onChangeText={setPickupLongitude}
          placeholder={strings.createItem.longitude}
          value={pickupLongitude}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.locationDetails}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.longitudeHing}
          accessibilityLabel={strings.createItem.locationDetails}
          onChangeText={setPickupLocation}
          placeholder={strings.createItem.locationDetails}
          value={pickupLocation}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.createItem.button}
        />
      </View>
    </View>
  );
}

export default CreateItem;
