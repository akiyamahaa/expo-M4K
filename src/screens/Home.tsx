import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, VStack, useTheme } from "native-base";
import BackgroundLayout from "../components/BackgroundLayout";
import CustomBtn from "../components/CustomBtn";
import PopupRightAnswer from "../components/PopupRightAnswer";
import CloseBtn from "../components/CloseBtn";
import PopupParent from "../components/PopupParent";
type Props = {};

const Home = (props: Props) => {
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  return (
    <BackgroundLayout imageSource={require("../../assets/images/bg-1.png")}>
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
              />
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Đếm số"
                size="MD"
              />
            </HStack>
            <HStack justifyContent={"space-between"}>
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Trắc nghiệm phép cộng"
                size="MD"
              />
              <CustomBtn
                btnColor={colors.gradient.primary}
                text="Trắc nghiệm phép trừ"
                size="MD"
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
