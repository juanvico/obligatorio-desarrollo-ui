import { useTheme, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, ScrollView, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';
import { Button } from '_components';
import { NAVIGATION } from '_constants';

function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  const navigation = useNavigation();

  // TODO: get from backend not hardcoded
  const data = [
    {
      id: '1',
      title: 'Cup', 
      description: 'vintage cup', 
      image: 'https://image.freepik.com/psd-gratis/mock-up-taza-sobre-fondo-verde_1307-195.jpg',
      latitude: -51,
      longitue: 0,
      availableToPickup: true,
      locationDetails: '2nd floor',
      userName: 'Paola',
      userEmail: 'paolafrancescoli@gmail.com',
      distance: 1,
    },
    {
      id: '2',
      title: 'Cup', 
      description: 'new cup', 
      image: 'https://image.freepik.com/vector-gratis/tazas-asa_1308-41607.jpg',
      latitude: -52,
      longitue: 0,
      availableToPickup: true,
      locationDetails: 'first floor',
      userName: 'Lucia',
      userEmail: 'lucia@mail.com',
      distance: 2,
    }
  ]


  const sendMessage = () => {
    navigation.navigate(NAVIGATION.createMessage)
  };

  const renderItem = ({ item }) => (
    <ItemView item={item} />
  );


  const ItemView = ({ item }) => (
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
            <Button
            onPress={sendMessage}
            style={styles.secondaryButton}
            title={strings.items.sendMessage}
            />
      </View>
  );


  return (
    <View style={styles.container}>
       <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.home.message} {user?.username}
        </Text>
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.home.explore}
        </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

export default Home;
