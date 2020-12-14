import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button, ErrorView, TextField } from '_components';
import styles from '_screens/CreateItem/CreateItem.styles';
import { ShadowStyles, TextStyles } from '_theme';
import strings from '_localization';
import { createItem, TYPES } from '_actions/ItemActions';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';
import cameraIcon from '_assets/ic_camera/ic_camera.png';
import galleryIcon from '_assets/ic_gallery/ic_gallery.png';



function CreateItem() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [itemImage, setItemImage] = useState({sourceURL: 'https://image.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'})
  const [pickupLatitude, setPickupLatitude] = useState('')
  const [pickupLongitude, setPickupLongitude] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [availableToPickup, setAvailableToPickup] = useState(true);
  const [[hasError, errorMessage], setErrors] = useState([false, '']);
  const isMultiline = true
  const lines = 3
  const multilineHeight = 60
  
  const handleSubmit = () => {
    dispatch(createItem(title, description, image, pickupLatitude, pickupLongitude, pickupLocation, availableToPickup));
  };

  const chooseImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setItemImage(image)
      console.log(image);
    });
  };

  const chooseImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setItemImage(image)
      console.log(image);
    });
  };

  
  const isLoading = false

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView>

        <View style={styles.horizontalContainer}>
          <Image style={styles.itemImage} source={ { uri: itemImage.sourceURL}} />
          <View>
            <TouchableOpacity onPress={chooseImageFromCamera} style={styles.secondaryButton}>
              <Image source={cameraIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={chooseImageFromGallery} style={styles.secondaryButton}>
            <Image source={galleryIcon}/>
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
          {strings.createItem.latitude}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.latitudeHint}
          accessibilityLabel={strings.createItem.latitude}
          onChangeText={setPickupLatitude}
          placeholder={strings.createItem.latitudeHint}
          value={pickupLatitude}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.createItem.longitude}
        </Text>
        <TextField
          accessibilityHint={strings.createItem.longitudeHing}
          accessibilityLabel={strings.createItem.longitude}
          onChangeText={setPickupLongitude}
          placeholder={strings.createItem.longitudeHint}
          value={pickupLongitude}
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
        {/* <ErrorView errors={errors} /> */}
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? strings.actions.loading : strings.createItem.button}
        />
        </ScrollView>
      </View>
  );
}

export default CreateItem;
