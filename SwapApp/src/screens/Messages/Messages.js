import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import strings from '_localization';
import styles from '_screens/Messages/Messages.styles';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();
 
  // TODO: get from backend not hardcoded
 const data = [
  {
    id: '1',
    description: 'Hi! I am interested in the cup',
    destinatary: 'paolafrancescoli@gmail.com',
    userName: 'Lucia',
    userEmail: 'lucia@mail.com'
  },
  {
    id: '2',
    description: 'Hi! Love the cup, call me!', 
    destinatary: 'paolafrancescoli@gmail.com',
    userName: 'Jenny',
    userEmail: 'jenny@mail.com'
  },
]

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
