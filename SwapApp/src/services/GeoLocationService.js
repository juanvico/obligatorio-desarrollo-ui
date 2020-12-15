import Geolocation from '@react-native-community/geolocation';

class GeoLocationService {
  static getCurrentLocation = () => new Promise(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(
        info => {
          resolve(info)
        },
        error => {
          reject(error)
        },
      )
    })
}

export default GeoLocationService;