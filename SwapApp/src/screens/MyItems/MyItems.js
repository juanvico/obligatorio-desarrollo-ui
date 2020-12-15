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
  const data = useSelector(state => state.myItems);

  useEffect(() => {
    dispatch(myItems())
  }, [myItems])

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
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default MyItems;
