import { useTheme, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, FlatList, RefreshControl } from 'react-native';
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
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var data = useSelector(state => state.item.exploreItems);

  useEffect(() => {
    dispatch(exploreItems())
  }, [exploreItems])

  const sendMessage = (item) => {
    navigation.navigate(NAVIGATION.createMessage, { item: item })
  };

  const renderItem = (data) => {
    return (
      <ItemView item={data.item} />
    )
  };

  function ItemsListView() {
    return (
      <FlatList
        refreshing={refresh}
        ListEmptyComponent={EmptyItemsView}
        onRefresh={() => { 
          setRefresh(true)
          dispatch(exploreItems(() => setRefresh(false)))
        }}
        style={styles.listContainer}
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
      <Text style={[TextStyles.textField, { color: colors.text }]}>
        {strings.items.owner} {item.user_name}
      </Text>
      <Text style={[TextStyles.secondaryText, { color: colors.text }]}>
        {strings.items.locationDescription} {item.pickup_location_description}
      </Text>
      <Button
        onPress={sendMessage.bind(this, item)}
        style={styles.secondaryButton}
        title={strings.items.sendMessage}
      />
    </View>
  );


  return (
    <View style={styles.container}>
      <ItemsListView />
    </View>
  );
}

export default Home;
