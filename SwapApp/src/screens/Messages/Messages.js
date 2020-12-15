import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myMessages } from '_actions/MessageActions';
import { Text, View, FlatList } from 'react-native';
import strings from '_localization';
import styles from '_screens/Messages/Messages.styles';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();
  const dispatch = useDispatch()
  const data = useSelector(state => state.myMessages);

  useEffect(() => {
    dispatch(myMessages)
  }, [myMessages])

const renderMessage = ({ item }) => (
  <MessageView item={item} />
);

const MessageView = ({ item }) => (
  <View key={item.id} style={[styles.messageContainer, { backgroundColor: colors.primary }]}>           
          <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.messages.from} {item.userName} {item.userEmail}
          </Text>
          <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {item.userEmail}
          </Text>
          <Text style={[TextStyles.textField, { color: colors.text }]}>
            {item.description}
          </Text>
        </View>
);

  return (
    <View style={styles.container}>
       <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.messages.header}
        </Text>
        <FlatList
        data={data}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        />
    </View>
  );
}

export default Messages;
