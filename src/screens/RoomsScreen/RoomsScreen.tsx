import { useQuery } from "@apollo/client";
import { IconButton } from "@components/IconButton/IconButton";
import { Icons } from "@constants/icons";
import { GET_ROOMS } from "@constants/queries";
import { Routes } from "@navigation/routes";
import { RoomsScreenProps } from "@navigation/types";
import { colors } from "@styles/colors";
import { xScale, yScale } from "@utils/scale";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RoomItem from "./RoomItem";

const RoomsScreen = ({ navigation }: RoomsScreenProps) => {
  const { data, loading } = useQuery(GET_ROOMS);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <IconButton icon={Icons.Search} iconStyle={styles.icon} />
          <IconButton icon={Icons.Rooms} iconStyle={styles.icon} onPress={() => navigation.navigate(Routes.Dev)} />
        </>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.usersRooms?.rooms}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <RoomItem rooms={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.blue100,
  },
  contentContainer: {
    marginTop: yScale(32),
    gap: yScale(12),
  },
  icon: {
    height: xScale(44),
    width: xScale(44),
  },
});

export default RoomsScreen;
