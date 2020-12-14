import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
  },
  messageContainer: {
    width: '100%',
    margin: 8,
    padding: 16,
  },
});

export default styles;
