import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    margin: 16,
  },
  itemImage: {
    alignContent: 'center',
    width: '70%',
    height: 200,
    marginTop: 4,
    marginBottom: 8,
  },
  submitButton: {
    marginTop: 20,
  },
  secondaryButton: {
    margin: 5,
    width: '10%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});

export default styles;
