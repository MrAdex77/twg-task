import { Linking } from "react-native";

const openUrl = async (url: string) => {
  const isSupported = await Linking.canOpenURL(url);

  if (isSupported) {
    await Linking.openURL(url);
  } else {
    console.error(`Cannot open url: ${url}`);
  }
};

export { openUrl };
