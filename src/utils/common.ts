import { differenceInMilliseconds, parseISO } from "date-fns";
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

const convertUTCDateToLocalDate = (utcDate: string) => {
  const dateObject = parseISO(utcDate + "Z"); //Wrong format date on the backend side

  return dateObject;
};

const calculateHowLongAgo = (date: string) => {
  if (!date) return "-";

  const dateObject = convertUTCDateToLocalDate(date);
  const currentTime = new Date();
  const timeDifference = differenceInMilliseconds(currentTime, dateObject);

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  if (days > 0) {
    return `${days} d ago`;
  } else if (hours > 0) {
    return `${hours} h ago`;
  } else if (minutes > 0) {
    return `${minutes} m ago`;
  } else {
    return `${seconds} s ago`;
  }
};

export { calculateHowLongAgo, mapMessages, openUrl };
