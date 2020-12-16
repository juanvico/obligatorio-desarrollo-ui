import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateItem/CreateItem.styles';
import { TextStyles } from '_theme';
import strings from '_localization';
import { createItem, exploreItems, ITEM_TYPES } from '_actions/ItemActions';
import ImagePicker from 'react-native-image-crop-picker';
import cameraIcon from '_assets/ic_camera/ic_camera.png';
import galleryIcon from '_assets/ic_gallery/ic_gallery.png';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { NAVIGATION } from '_constants';


const PLACE_HOLDER_IMAGE = 'https://image.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'

function CreateItem() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [itemImage, setItemImage] = useState(PLACE_HOLDER_IMAGE)
  const [pickupLocation, setPickupLocation] = useState('')
  const [errors, setErrors] = useState([]);
  const isMultiline = true
  const lines = 3
  const multilineHeight = 60

  const handleSubmit = useCallback(() => {
    if (title === '') setErrors([...errors, "title required"])
    else if (description === '') setErrors([...errors, "description required"])
    else if (itemImage === '') setErrors([...errors, "itemImage required"])
    else if (pickupLocation === '') setErrors([...errors, "pickupLocation required"])
    else dispatch(createItem({
      title,
      description,
      image: itemImage,
      pickupLocation,
      availableToPickup: true
    }, () => {
      dispatch(exploreItems())
      setTitle('')
      setDescription('')
      setItemImage(PLACE_HOLDER_IMAGE)
      setPickupLocation('')
      setErrors([])
      navigation.navigate(NAVIGATION.home)
    }));
  }, [
    dispatch,
    createItem,
    title,
    description,
    itemImage,
    pickupLocation,
    errors,
    setErrors,
    exploreItems,
    setTitle,
    setDescription,
    setItemImage,
    setPickupLocation,
    navigation
  ])

  const chooseImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      const base64 = 'data:' + image.mime + ';base64,' + image.data;
      setItemImage(base64)
    });
  };

  const chooseImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      const base64 = 'data:' + image.mime + ';base64,' + image.data;
      setItemImage(base64)
    });
  };

  const isLoading = useSelector(state =>
    isLoadingSelector([ITEM_TYPES.CREATE_ITEM], state)
  );

  return (
    <KeyboardAwareScrollView>
      <View style={[styles.container, { backgroundColor: colors.primary }]}>
        <View style={styles.horizontalContainer}>
          <Image style={styles.itemImage} source={{ uri: itemImage }} />
          <View>
            <TouchableOpacity onPress={chooseImageFromCamera} style={styles.secondaryButton}>
              <Image source={cameraIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={chooseImageFromGallery} style={styles.secondaryButton}>
              <Image source={galleryIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.title}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.titleHint}
          accessibilityLabel={strings.createItem.title}
          onChangeText={setTitle}
          placeholder={strings.createItem.titleHint}
          value={title}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.description}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.descriptionHint}
          accessibilityLabel={strings.createItem.description}
          multiline={isMultiline}
          numberOfLines={lines}
          minHeight={multilineHeight}
          maxHeight={multilineHeight}
          onChangeText={setDescription}
          placeholder={strings.createItem.descriptionHint}
          value={description}
          style={styles.multilineText}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.locationDetails}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.locationDetailsHint}
          accessibilityLabel={strings.createItem.locationDetails}
          onChangeText={setPickupLocation}
          placeholder={strings.createItem.locationDetailsHint}
          value={pickupLocation}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.createItem.button}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default CreateItem;
