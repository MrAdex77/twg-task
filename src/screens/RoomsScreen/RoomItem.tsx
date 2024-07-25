import { Row } from "@components/layout/Row/Row";
import { StyledText } from "@components/StyledText/StyledText";
import { Routes } from "@navigation/routes";
import { RoomsScreenProps } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import React, { memo, useEffect } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SingleRoomType } from "../../types/generated/graphql";

import { useQuery, useSubscription } from "@apollo/client";
import { GET_ROOM, MESSAGE_ADDED } from "@constants/queries";
import { calculateHowLongAgo } from "@utils/common";
import { xScale, yScale } from "utils/scale";

interface RoomItemProps {
  rooms: SingleRoomType;
}

const RoomItem = ({ rooms }: RoomItemProps) => {
  const { name, id } = rooms;

  const { data } = useQuery(GET_ROOM, {
    variables: {
      id,
    },
  });
  const { data: newMessage } = useSubscription(MESSAGE_ADDED, { variables: { roomId: id } });

  const lastMessage = data?.room?.messages[0];

  const [isActive, setIsActive] = React.useState<boolean>(Boolean(newMessage));

  const { navigate } = useNavigation<RoomsScreenProps["navigation"]>();

  useEffect(() => {
    setIsActive(Boolean(newMessage));
  }, [newMessage]);

  const handlePress = () => {
    setIsActive(false);
    navigate(Routes.Chat, { id });
  };

  return (
    <Pressable style={[styles.container, isActive && styles.active]} onPress={handlePress}>
      <Row>
        <Image source={require("assets/rooms/room1.png")} style={styles.image} />
        <View style={styles.content}>
          <StyledText style={[styles.h3, isActive && styles.active]} numberOfLines={1}>
            {name}
          </StyledText>
          <StyledText style={[styles.bodyText, isActive && styles.active]} numberOfLines={1}>
            {newMessage ? newMessage?.messageAdded?.body : lastMessage?.body}
          </StyledText>
        </View>
        <View>
          {isActive ? (
            <View style={styles.dot} />
          ) : (
            <StyledText style={styles.caption}>{calculateHowLongAgo(lastMessage?.insertedAt)}</StyledText>
          )}
        </View>
      </Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: xScale(16),
    borderRadius: xScale(12),
  },
  active: {
    backgroundColor: colors.plum500,
    color: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: xScale(16),
    gap: yScale(4),
  },
  h3: {
    ...defaultStyles.heading3,
    color: colors.black,
    fontWeight: "400",
  },
  bodyText: {
    ...defaultStyles.bodyText,
    color: colors.black,
  },
  caption: {
    ...defaultStyles.caption2,
    color: colors.gray500,
  },
  image: {
    width: xScale(64),
    height: xScale(64),
    resizeMode: "contain",
  },
  dot: {
    height: xScale(12),
    width: xScale(12),
    borderRadius: xScale(6),
    backgroundColor: colors.active,
  },
});

export default memo(RoomItem);
