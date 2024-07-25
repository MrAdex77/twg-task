import { Linking } from "react-native";
import { IMessage } from "react-native-gifted-chat";
import { Message } from "../types/generated/graphql";

const openUrl = async (url: string) => {
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    await Linking.openURL(url);
  } else {
    console.error(`Cannot open url: ${url}`);
  }
};

const mapMessages = (messages: Message[]): IMessage[] => {
  if (!messages) return [];

  return messages.map((message) => {
    return {
      _id: message.id,
      text: message.body,
      createdAt: new Date(message.insertedAt),
      user: {
        _id: message.user.id,
        name: message.user.firstName,
      },
    };
  });
};

export { mapMessages, openUrl };
