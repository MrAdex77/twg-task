import { ApolloProvider } from "@apollo/client";
import { RootNavigator } from "@navigation/RootNavigator";
import { AuthProvider } from "@providers/AuthProvider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import client from "./apolloClient";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ApolloProvider>
  );
}
