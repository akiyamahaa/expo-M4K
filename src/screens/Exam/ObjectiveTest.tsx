import { StyleSheet } from "react-native";
import React, { useState } from "react";
import LessonLayout from "../../components/LessonLayout";
import { Box, Center, HStack, Text, VStack, useTheme } from "native-base";
import { Image } from "expo-image";
import CustomBtn from "../../components/CustomBtn";
import PopupRightAnswer from "../../components/PopupRightAnswer";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const questionInfo = {
  id: 1,
  imageUrl:
    "https://www.elle.vn/wp-content/uploads/2023/04/24/525991/trac-nghiem-con-ho-cai-cay.webp",
  question: "Nhìn vào bức ảnh bên dưới, bạn thấy điều gì đầu tiên?",
  choices: ["Con hổ", "Cái cây", "Lúa", "Tảng Đớ"],
  answer: 0,
};

const ObjectiveTest = (props: Props) => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    status: false,
    title: "",
    text: "",
  });

  const handleModalBtn = () => {
    setShowModal(false);
    if (infoModal.status) {
      navigation.navigate("Collection");
    } else {
      navigation.navigate("Home");
    }
  };

  const handleBtn = (idx: number) => {
    if (idx == questionInfo.answer) {
      setInfoModal({
        title: "Yeah!",
        text: "Bạn đã trả lời đúng",
        status: true,
      });
    } else {
      setInfoModal({
        title: "Oh no!",
        text: "Bạn trả lời chưa chính xác",
        status: false,
      });
    }
    setShowModal(true);
  };

  return (
    <LessonLayout iconSource={require("../../../assets/images/bg-2.jpg")}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleModalBtn}
        title={infoModal.title}
        text={infoModal.text}
      />
      <Center flex={1}>
        {/* Question Info */}
        <VStack>
          <Center px={4}>
            <Center width="100%">
              <Image
                source={{
                  uri: questionInfo.imageUrl,
                }}
                style={{
                  width: "60%",
                  height: 150,
                  borderWidth: 2,
                  borderColor: "#fff",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
                contentFit="fill"
              />
            </Center>
            <Box>
              <Text
                color={"#fff"}
                fontWeight={600}
                fontSize={16}
                textAlign={"center"}
              >
                {questionInfo.question}
              </Text>
            </Box>
          </Center>
        </VStack>
        {/* Answer Group */}
        <HStack flexWrap={"wrap"} justifyContent={"center"} px={16}>
          {questionInfo.choices.map((choice, idx) => (
            <Box margin={2} key={choice}>
              <CustomBtn
                btnColor={colors.gradient.primary}
                text={choice}
                size="XS"
                handleBtn={() => handleBtn(idx)}
              />
            </Box>
          ))}
          {/* <CustomBtn text="Con Hổ" /> */}
        </HStack>
      </Center>
    </LessonLayout>
  );
};

export default ObjectiveTest;

const styles = StyleSheet.create({});
