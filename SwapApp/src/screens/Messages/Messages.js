import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import strings from '_localization';
import styles from '_screens/Messages/Messages.styles';
import { TextStyles } from '_theme';

function Messages() {
  const { colors } = useTheme();
 
  // TODO: get from backend not hardcoded
 const messages = [
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
  return (
    <View style={styles.container}>
       <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.messages.header}
        </Text>

      <ScrollView style={styles.scrollView}>

        {messages?.map((aMessage) => (
        <View key={aMessage.id} style={[styles.messageContainer, { backgroundColor: colors.primary }]}>           
          <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
          {strings.messages.from} {aMessage.userName} {aMessage.userEmail}
          </Text>
          <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {aMessage.userEmail}
          </Text>
          <Text style={[TextStyles.textField, { color: colors.text }]}>
            {aMessage.description}
          </Text>
        </View>
        ))}

      </ScrollView>

    </View>
  );
}

export default Messages;
