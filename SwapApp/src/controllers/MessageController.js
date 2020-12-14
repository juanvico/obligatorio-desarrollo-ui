import strings from '_localization';

class MessageController {
  static async createMessage(destinatary, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (destinatary && body) {
          resolve({ body });
        } else {
          reject(new Error(strings.createMessage.invalidMessage));
        }
      }, 500);
    });
  }
}

export default MessageController;
