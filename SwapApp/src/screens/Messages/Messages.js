import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myMessages, MESSAGE_TYPES } from '_actions/MessageActions';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import strings from '_localization';
import styles from '_screens/Messages/Messages.styles';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  var data = useSelector(state => state.message.myMessages);
  const isLoading = useSelector(state => isLoadingSelector([MESSAGE_TYPES.MY_MESSAGES], state));

  useEffect(() => {
    dispatch(myMessages())
  }, [myMessages])

  const renderMessage = ({ item }) => (
    <MessageView item={item} />
  );

  const MessageView = ({ item }) => (
    <View style={[styles.messageContainer, { backgroundColor: colors.primary }]}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.messages.from} {item.user_name}
      </Text>
      <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
        {item.user_email}
      </Text>
      <Text style={[TextStyles.textField, { color: colors.text }]}>
        {item.description}
      </Text>
    </View>
  );

  function MessagesListView() {
    return (
      <FlatList
        style={{width: '100%'}}
        refreshing={refresh}
        ListEmptyComponent={EmptyMessagesView}
        onRefresh={() => {
          setRefresh(true)
          dispatch(myMessages(() => setRefresh(false)))
        }}
        data={data}
        renderItem={renderMessage}
        keyExtractor={item => item._id}
      />
    )
  };

  function EmptyMessagesView() {
    return (
      <Text>
        {strings.messages.empty}
      </Text>
    )
  }

  if (isLoading && !refresh) return (
    <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  )
  return (
    <View style={styles.container}>
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.messages.header}
      </Text>
      <MessagesListView />
    </View>
  );
}

export default Messages;
