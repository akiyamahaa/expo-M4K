import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LessonLayout from "../components/LessonLayout";
import { Box, Center, HStack, Text, VStack, useTheme } from "native-base";
import Formula from "../components/Formula";
import GroupAnswer from "../components/GroupAnswer";
import { EOperation, EQuizStatus, IAnserTag, IQuiz } from "../types/utils";
import PopupRightAnswer from "../components/PopupRightAnswer";
import CustomBtn from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";

type Props = {};

type IAnserTagList = { [key: number]: IAnserTag };
const listTest: IQuiz[] = [
  {
    firstNum: 4,
    secondNum: 5,
    operation: EOperation.AddOperation,
    choices: [2, 3, 9],
    answer: 9,
  },
  {
    firstNum: 4,
    secondNum: 2,
    operation: EOperation.SubtractOperation,
    choices: [2, 4, 9],
    answer: 2,
  },
  {
    firstNum: 3,
    secondNum: 2,
    operation: EOperation.SubtractOperation,
    choices: [1, 3, 9],
    answer: 1,
  },
  {
    firstNum: 4,
    secondNum: 2,
    operation: EOperation.AddOperation,
    choices: [2, 6, 9],
    answer: 6,
  },
  {
    firstNum: 5,
    secondNum: 2,
    operation: EOperation.SubtractOperation,
    choices: [3, 2, 9],
    answer: 3,
  },
  {
    firstNum: 3,
    secondNum: 2,
    operation: EOperation.SubtractOperation,
    choices: [1, 3, 9],
    answer: 1,
  },
];

const Examination = (props: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  const [quizIndex, setQuizIndex] = useState(0);
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [answerTagList, setAnswerTagList] = useState<IAnserTagList>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });
  const [showModal, setShowModal] = useState(false);

  const handleChoice = (childNode: ChildNode) => {
    // Set limit when get last question
    setAnswerTagList({ ...answerTagList, [quizIndex]: childNode });
    if (quizIndex < 5) {
      setQuizIndex(quizIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleModalBtn = () => {
    setShowModal(false);
    setFinishQuiz(true);
  };

  const handleNextBtn = () => {
    navigation.navigate("Lessons");
  };

  useEffect(() => {}, [answerTagList]);
  return (
    <LessonLayout iconSource={require("../../assets/images/bg-2.jpg")}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleModalBtn}
      />
      <Center flex={1} padding={4}>
        <VStack>
          <VStack flex={7} flexWrap={"wrap"} justifyContent={"center"}>
            {listTest.map((elm, idx) => (
              <HStack key={`${elm}-${idx}`} flexBasis={`26%`}>
                <Formula
                  size="S"
                  status={
                    quizIndex >= idx ? EQuizStatus.ANSWER : EQuizStatus.HIDDEN
                  }
                  answerTag={answerTagList[idx]}
                  data={elm}
                />
                {idx < 3 && <Box mx={4} width={0.5} bgColor={"#fff"}></Box>}
              </HStack>
            ))}
          </VStack>
          <Box flex={2} alignItems={finishQuiz ? "flex-end" : "center"}>
            {finishQuiz ? (
              <CustomBtn
                btnColor={colors.gradient.primary}
                size="SM"
                text="Tiếp tục →"
                handleBtn={handleNextBtn}
              />
            ) : (
              <GroupAnswer
                size="S"
                dataAnswer={{
                  choices: listTest[quizIndex].choices,
                  answer: listTest[quizIndex].answer,
                }}
                answerTag={answerTagList[quizIndex]}
                setAnswerTag={handleChoice}
              />
            )}
          </Box>
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default Examination;

const styles = StyleSheet.create({});
