import apolloClient from '../client/apollo-client';
import CREATE_PICKUP_MESSAGE from '_apollo/mutations/createPickupMessage';
import PICKUP_MESSAGES from '_apollo/queries/pickupMessages';

class MessageController {
  static createMessage = async ({ destinataryUserEmail, description }) => {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_PICKUP_MESSAGE,
      variables: { destinataryUserEmail, description },
    });
    return data.pickupMessage;
  }

  static myMessages = async () => {
    const { data } = await apolloClient.query({
      query: PICKUP_MESSAGES
    })
    return data.pickupMessages
  }

}

export default MessageController;
