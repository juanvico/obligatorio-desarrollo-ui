import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    margin: 16,
    borderRadius: 12,
  },
  itemImage: {
    alignContent: 'center',
    width: '65%',
    height: 200,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
  },
  submitButton: {
    marginTop: 20,
  },
  secondaryButton: {
    marginHorizontal: 8,
    marginVertical: 8,  
    padding: 12,
    width: '10%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
});

export default styles;
