import strings from '_localization';

class ItemController {
  static async createItem(title, description, image, latitude, longitude, locationDetails) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (title, description, image, latitude, longitude, locationDetails) {
          resolve({ title });
        } else {
          reject(new Error(strings.createItem.invalidItem));
        }
      }, 500);
    });
  }
}

export default ItemController;
