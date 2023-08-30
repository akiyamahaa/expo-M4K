import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  Center,
  HStack,
  Modal,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { EFont } from "../types/utils";
import CustomBtn from "./CustomBtn";
import BackgroundLayout from "./BackgroundLayout";

type Props = {
  showModal?: boolean;
  setShowModal?: any;
  handleBtn?: () => {};
};

const PopupRightAnswer = (props: Props) => {
  const { colors } = useTheme();
  const { showModal, setShowModal, handleBtn } = props;
  return (
    <Center>
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Content>
          <Modal.Body height={200}>
            <BackgroundLayout
              imageSource={require("../../assets/images/bg-popup-right.gif")}
            >
              <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
                <Text
                  fontSize={24}
                  fontFamily={EFont.Quicksand_700Bold}
                  color={"text.primary"}
                >
                  Yeah!
                </Text>
                <Text
                  fontSize={16}
                  fontFamily={EFont.Quicksand_400Regular}
                  color={"text.coolGray"}
                  mb={4}
                >
                  Bạn đã trả lời đúng
                </Text>
                <CustomBtn
                  btnColor={colors.gradient.primary}
                  size="SM"
                  text="Tiếp tục →"
                  // TODO: Add Function here
                  handleBtn={() => {}}
                />
              </VStack>
            </BackgroundLayout>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PopupRightAnswer;

const styles = StyleSheet.create({});
