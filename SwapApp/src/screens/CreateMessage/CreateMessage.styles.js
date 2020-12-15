import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  messageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    margin: 8,
    padding: 16,
    borderRadius: 12,
  },
  secondaryButton: {
    marginHorizontal: '10%',
    marginTop: 16,
    width: '80%',
  },
  scrollView: {
    width: '100%'
  },
  itemImage: {
    width: '80%',
    height: 120,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
  },
});

export default styles;
