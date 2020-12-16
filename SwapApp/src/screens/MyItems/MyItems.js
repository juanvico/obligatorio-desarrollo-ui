import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Profile/Profile.styles';
import { TextStyles } from '_theme';
import { ITEM_TYPES } from '_actions/ItemActions';
import { isLoadingSelector } from '_selectors/StatusSelectors';

function MyItems() {
  const { colors } = useTheme();
  var data = useSelector(state => state.item.myItems);

  const isLoading = useSelector(state =>
    isLoadingSelector([ITEM_TYPES.MY_ITEMS], state)
  );

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
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Text style={[TextStyles.textField, { color: colors.text }]}>
        {item.description}
      </Text>
      <Text style={[TextStyles.secondaryText, { color: colors.text }]}>
        {strings.items.locationDescription} {item.pickup_location_description}
      </Text>
    </View>
  );

  if (isLoading) return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <ActivityIndicator />
    </View>
  )

  return (
    <View style={styles.container}>
      {Object.keys(data).length > 0 ? <ItemsListView /> : <EmptyItemsView />}
    </View>
  );
}

export default MyItems;
