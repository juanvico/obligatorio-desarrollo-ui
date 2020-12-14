import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';
import { Button } from '_components';

function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  
  // TODO: get from backend not hardcoded
  const items = [
    {
      title: 'Cup', 
      description: 'vintage cup', 
      image: 'https://image.freepik.com/psd-gratis/mock-up-taza-sobre-fondo-verde_1307-195.jpg',
      latitude: -51,
      longitue: 0,
      availableToPickup: true,
      locationDetails: '2nd floor',
      userName: 'Paola',
      userEmail: 'paolafrancescoli@gmail.com'
    },
    {
      title: 'Cup', 
      description: 'new cup', 
      image: 'https://image.freepik.com/vector-gratis/tazas-asa_1308-41607.jpg',
      latitude: -52,
      longitue: 0,
      availableToPickup: true,
      locationDetails: 'first floor',
      userName: 'Lucia',
      userEmail: 'lucia@mail.com'
    }
  ]

  const sendMessage = () => {
    // TODO: wasn't recognising ImagePicker even though dependency and access keys are there
    console.log('send message routing needs implementation');
  };

  return (
    <View style={styles.container}>
       <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.home.message} {user?.username}
        </Text>
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.home.explore}
        </Text>

      <ScrollView style={styles.scrollView}>

        {items?.map((item) => (
        <View style={[styles.itemContainer, { backgroundColor: colors.card }]}> 
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
          <Button
          onPress={sendMessage}
          style={styles.secondaryButton}
          title={strings.items.sendMessage}
          />
        </View>
        ))}

      </ScrollView>

    </View>
  );
}

export default Home;
