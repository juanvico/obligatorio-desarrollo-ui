import apolloClient from '../client/apollo-client';
import CREATE_PICKUP_MESSAGE from '_apollo/mutations/createPickupMessage';

class MessageController {
  static createMessage = async ({ destinataryUserEmail, description }) => {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_PICKUP_MESSAGE,
      variables: { destinataryUserEmail, description },
    });
    return data.pickupMessage;
  }
}

export default MessageController;
