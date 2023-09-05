import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import LessonLayout from "../components/LessonLayout";
import { Box, Text, HStack, VStack, useTheme, Center } from "native-base";
import { ArrowLeft3, ArrowRight3, TickCircle } from "iconsax-react-native";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { EFont } from "../types/utils";
import CustomBtn from "../components/CustomBtn";
import BackgroundLayout from "../components/BackgroundLayout";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";

type Props = {};

const Collection = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  return (
    <LessonLayout
      iconSource={require("../../assets/images/bg-3.jpg")}
      handleBack={() => navigation.navigate("Home")}
    >
      <Box flex={1}>
        <Box height={20} mt={"-4"}>
          <BackgroundLayout
            imageSource={require("../../assets/images/label.png")}
          >
            <Box flex={1} justifyContent={"center"} alignItems={"center"}>
              <Text
                fontFamily={EFont.Quicksand_700Bold}
                fontSize={18}
                color={"white"}
                textTransform={"uppercase"}
              >
                Thu thập nhãn dán
              </Text>
            </Box>
          </BackgroundLayout>
        </Box>
        <VStack height={"70%"}>
          {/* Box Badges */}
          <Box flex={1} px={12}>
            <Image
              style={{ width: 32, height: 32 }}
              source={require("../../assets/badges/badge-1.png")}
            />
          </Box>
          {/* List Badges */}
          <Box px={12}>
            <Box
              bgColor={"#173D55"}
              borderRadius={100}
              justifyContent={"center"}
              py={2}
            >
              <HStack px={8} alignItems={"center"} space={4}>
                <TouchableOpacity>
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../assets/badges/badge-1.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../assets/badges/badge-2.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../assets/badges/badge-3.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../assets/badges/badge-4.png")}
                  />
                </TouchableOpacity>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </LessonLayout>
  );
};

export default Collection;

const styles = StyleSheet.create({});
