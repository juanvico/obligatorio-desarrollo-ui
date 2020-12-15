import { useTheme, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';
import { Button } from '_components';
import { NAVIGATION } from '_constants';
import { exploreItems } from '_actions/ItemActions';

function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var data = useSelector(state => state.item.exploreItems);

  console.log(data);

  useEffect(() => {
    dispatch(exploreItems())
  }, [exploreItems])


  const sendMessage = () => {
    navigation.navigate(NAVIGATION.createMessage)
  };

  const renderItem = ({ item }) => (
    <ItemView item={item} />
  );

  const ItemView = ({ item }) => (
    <View style={[styles.itemContainer, { backgroundColor: colors.card }]}> 
            <Image style={styles.itemImage} source={ { uri: item.image}} />
            <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            <Text style={[TextStyles.textField, { color: colors.text }]}>
              {item.description}
            </Text>
            <Text style={[TextStyles.textField, { color: colors.text }]}>
            {strings.items.owner} {item.user_name} {item.user_email}
            </Text>
            <Text style={[TextStyles.secondaryText, { color: colors.text }]}>
            {strings.items.locationDescription} {strings.items.pickup_location_description}
            </Text>
            <Button
            onPress={sendMessage}
            style={styles.secondaryButton}
            title={strings.items.sendMessage}
            />
      </View>
  );

  function ItemListView() {
    return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={ item => item._id }
      />
    )
  };

  function EmptyItemsView() {
    return (
      <Text>
        {strings.home.empty}
      </Text>
    )
  };

  return (
    <View style={styles.container}>
       <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.home.message} {user?.username}
        </Text>
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.home.explore}
        </Text>
        {/* 
        
        Commenting this as itemListview, for some reason FlatList item is null, even though data is a valid array (works in messages)

        {Object.keys(data).length > 0 ? <ItemListView/> : <EmptyItemsView/>}      
        
        */}
    </View>
  );
}

export default Home;
