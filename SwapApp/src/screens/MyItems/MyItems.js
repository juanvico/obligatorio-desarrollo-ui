import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '_actions/UserActions';
import { Button } from '_components';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';

function MyItems() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  //TODO: get from server my items
  const myItems = [
    {
      id: '3',
      title: 'Chair',
      description: 'a lovely launch chair',
      image: 'https://image.freepik.com/psd-gratis/sillon-almohada_176382-861.jpg',
      latitude: -51,
      longitue: 0,
      availableToPickup: true,
      locationDetails: 'brick building',
      userName: 'Paola',
      userEmail: 'paolafrancescoli@gmail.com'
    }
  ]

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {/* <Text
        style={[TextStyles.fieldTitle, styles.legend, { color: colors.text }]}
      >
        {strings.profile.message}
      </Text> */}

      <ScrollView style={styles.scrollView}>
        {myItems?.map((item) => (
          <View key={item.id} style={[styles.itemContainer, { backgroundColor: colors.card }]}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />
            <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            <Text style={[TextStyles.textField, { color: colors.text }]}>
              {item.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}

export default MyItems;
