import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import LessonLayout from "../components/LessonLayout";
import { Box, Text, HStack, VStack, useTheme } from "native-base";
import { ArrowLeft3, ArrowRight3, TickCircle } from "iconsax-react-native";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { EFont } from "../types/utils";
import CustomBtn from "../components/CustomBtn";

type Props = {};

const Tick = () => {
  const { colors } = useTheme();
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={[
        colors.gradient.secondary.orange.color1,
        colors.gradient.secondary.orange.color2,
      ]}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 18,
        height: 18,
        borderRadius: 18,
      }}
    >
      <Text fontSize={10} color={"#2b82e7"}>
        √
      </Text>
    </LinearGradient>
  );
};

const Lessons = (props: Props) => {
  const { colors } = useTheme();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <LessonLayout iconSource={require("../../assets/images/bg-3.jpg")}>
      <Box flex={1}>
        <VStack flex={1} justifyContent={"center"} alignItems={"center"}>
          <HStack alignItems={"center"} justifyContent={"space-between"} px={5}>
            <TouchableOpacity>
              <ArrowLeft3 size="36" color="#FFFFFF" variant="Bold" />
            </TouchableOpacity>
            <Box flex={1} borderRadius={16} alignItems={"center"} px={2}>
              <Video
                ref={video}
                style={{ width: "100%", height: 180, borderRadius: 16 }}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </Box>
            <TouchableOpacity>
              <ArrowRight3 size="36" color="#FFFFFF" variant="Bold" />
            </TouchableOpacity>
          </HStack>
          <HStack
            width="60%"
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <VStack>
              <Text
                fontFamily={EFont.Quicksand_700Bold}
                color="white"
                fontSize={24}
              >
                Bài 1:
              </Text>
              <HStack alignItems={"center"} space={1}>
                <Text
                  fontFamily={EFont.Quicksand_700Bold}
                  color="white"
                  fontSize={18}
                >
                  Phép cộng
                </Text>
                <Tick />
              </HStack>
            </VStack>
            <CustomBtn
              btnColor={colors.gradient.secondary.orange}
              size="SM"
              text="Bài kiểm tra"
              handleBtn={() => {}}
            />
          </HStack>
        </VStack>
      </Box>
    </LessonLayout>
  );
};

export default Lessons;

const styles = StyleSheet.create({});