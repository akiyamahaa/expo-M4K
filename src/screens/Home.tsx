import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, VStack, useTheme } from "native-base";
import BackgroundLayout from "../components/BackgroundLayout";
import CustomBtn from "../components/CustomBtn";
import PopupParent from "../components/PopupParent";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";
type Props = {};

const Home = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  const [showModal, setShowModal] = useState(false);

  const navigateLessonsScreen = () => {
    navigation.navigate("Lessons");
  };
  const navigateCountScreen = () => {
    navigation.navigate("CountNumber");
  };
  const navigateAddScreen = () => {
    navigation.navigate("Quiz");
  };
  const navigateSubtractScreen = () => {
    navigation.navigate("Quiz");
  };

  return (
    <BackgroundLayout imageSource={require("../../assets/images/bg-1.jpg")}>
      {/* Popup */}
      <PopupParent showModal={showModal} setShowModal={setShowModal} />
      <Box flex={1} justifyContent={"center"}>
        <Center>
          <VStack width={"80%"} space={4}>
            <HStack justifyContent={"space-between"}>
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Bài giảng"
                size="MD"
                handleBtn={navigateLessonsScreen}
              />
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Đếm số"
                size="MD"
                handleBtn={navigateCountScreen}
              />
            </HStack>
            <HStack justifyContent={"space-between"}>
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Trắc nghiệm phép cộng"
                size="MD"
                handleBtn={navigateAddScreen}
              />
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Trắc nghiệm phép trừ"
                size="MD"
                handleBtn={navigateSubtractScreen}
              />
            </HStack>
          </VStack>
        </Center>
      </Box>
      <Box position={"absolute"} bottom={4} right={"10%"}>
        <CustomBtn
          btnColor={colors.gradient.secondary.orange}
          text="Dành cho phụ huynh"
          size="XS"
          handleBtn={() => setShowModal(true)}
        />
      </Box>
    </BackgroundLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
