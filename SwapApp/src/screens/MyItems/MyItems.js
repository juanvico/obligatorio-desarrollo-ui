import { useTheme } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '_actions/UserActions';
import { Button } from '_components';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';
import { myItems } from '_actions/ItemActions';

function MyItems() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  var data = useSelector(state => state.item.myItems);

  useEffect(() => {
    dispatch(myItems())
  }, [myItems])

  const renderItem = ({ item }) => (
    <ItemView item={item} />
  );

  function ItemsListView() {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    )
  };

  function EmptyItemsView() {
    return (
      <Text>
        {strings.myItems.empty}
      </Text>
    )
  }

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
            {strings.items.locationDescription} {item.pickup_location_description}
            </Text>
      </View>
  );

  return (
    <View style={styles.container}>
      {Object.keys(data).length > 0 ? <ItemsListView/> : <EmptyItemsView/>}
    </View>
  );
}

export default MyItems;
