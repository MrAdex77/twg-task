import { useMutation, useQuery, useSubscription } from "@apollo/client";
import CustomInputToolbar from "@components/CustomInputToolbar/CustomInputToolbar";
import { IconButton } from "@components/IconButton/IconButton";
import { Row } from "@components/layout/Row/Row";
import { ScreenWrapper } from "@components/layout/ScreenWrapper/ScreenWrapper";
import { StyledText } from "@components/StyledText/StyledText";
import { Icons } from "@constants/icons";
import { GET_ROOM, MESSAGE_ADDED, SEND_MESSAGE } from "@constants/queries";
import { ChatScreenProps } from "@navigation/types";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import { mapMessages } from "@utils/common";
import { xScale, yScale } from "@utils/scale";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Bubble, GiftedChat, IMessage } from "react-native-gifted-chat";

const ChatScreen = ({ navigation, route }: ChatScreenProps) => {
  const { id } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { data, loading } = useQuery(GET_ROOM, {
    variables: {
      id,
    },
  });
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const { data: message } = useSubscription(MESSAGE_ADDED, { variables: { roomId: id } });

  useEffect(() => {
    if (data?.room?.messages) {
      setMessages(mapMessages(data?.room?.messages));
    }
  }, [data]);

  useEffect(() => {
    if (message) {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, mapMessages([message.messageAdded])));
    }
  }, [message]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Row style={styles.header}>
          <IconButton
            icon={Icons.CaretLeft}
            iconStyle={styles.backIcon}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Image source={require("@assets/rooms/avatarTWG.png")} />
          <View style={styles.headerContent}>
            <StyledText style={styles.title}>The Widlarz Group</StyledText>
            <StyledText style={defaultStyles.bodyText}>Active now</StyledText>
          </View>
        </Row>
      ),
      headerRight: () => (
        <>
          <IconButton icon={Icons.Phone} iconStyle={styles.icon} />
          <IconButton icon={Icons.VideoCall} iconStyle={styles.icon} />
        </>
      ),
    });
  }, [navigation]);

  const handleSend = async (messages) => {
    await sendMessage({
      variables: {
        roomId: id,
        body: messages[0].text,
      },
    });
  };

  return (
    <ScreenWrapper style={styles.container} hasSafeArea={false}>
      <GiftedChat
        messages={messages}
        isLoadingEarlier={loading}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{ left: styles.leftBubble, right: styles.rightBubble }}
            textStyle={{ left: styles.text, right: styles.text }}
          />
        )}
        minInputToolbarHeight={yScale(102)}
        renderInputToolbar={(props) => <CustomInputToolbar {...props} />}
        onSend={(messages) => handleSend(messages)}
        user={{
          _id: data?.room?.user?.id,
        }}
      />
    </ScreenWrapper>
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
  backIcon: {
    height: xScale(32),
    width: xScale(32),
  },
  leftBubble: {
    backgroundColor: colors.white,
  },
  rightBubble: {
    backgroundColor: colors.plum300,
  },
  text: {
    ...defaultStyles.bodyText,
    fontSize: xScale(16),
  },
  headerContent: {
    marginLeft: xScale(12),
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...defaultStyles.heading4,
    color: colors.plum500,
  },
});

export default ChatScreen;
