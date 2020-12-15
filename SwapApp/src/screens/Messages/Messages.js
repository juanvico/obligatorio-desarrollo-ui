import { useTheme } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myMessages } from '_actions/MessageActions';
import { Text, View, FlatList } from 'react-native';
import strings from '_localization';
import styles from '_screens/Messages/Messages.styles';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();
  const dispatch = useDispatch()
  var data = useSelector(state => state.message.myMessages);

  console.log(data);

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

  return ( 
      <View style={styles.container}>
    <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
      {strings.messages.header}
    </Text>
      {Object.keys(data).length > 0 ? <MessagesListView/> : <EmptyMessagesView/>}
    </View>
  );
}

export default Messages;
