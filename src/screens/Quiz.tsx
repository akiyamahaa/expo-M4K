import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LessonLayout from "../components/LessonLayout";
import { Center, VStack, useTheme } from "native-base";
import { EOperation, EQuizStatus, IAnserTag, IQuiz } from "../types/utils";
import Formula from "../components/Formula";
import GroupAnswer from "../components/GroupAnswer";
import PopupRightAnswer from "../components/PopupRightAnswer";
import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { ScreenNavigationProps } from "../navigations/config";
import { Audio } from "expo-av";

type Props = {};

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
    choices: [2, 3, 9],
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
];

const playSound = new Audio.Sound();
const Quiz = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProps>();
  const [answerTag, setAnswerTag] = useState<IAnserTag>(null);
  const [quesIndex, setQuesIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNextQues = () => {
    console.log(quesIndex, listTest.length);
    if (quesIndex < listTest.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnswerTag(null);
      setShowModal(false);
    } else {
      setAnswerTag(null);
      setShowModal(false);
      navigation.navigate("Collection");
    }
  };

  useEffect(() => {
    if (answerTag) {
      setShowModal(true);
    }
  }, [answerTag]);

  return (
    <LessonLayout iconSource={require("../../assets/images/bg-2.jpg")}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleNextQues}
      />
      <Center flex={1}>
        <VStack space={10}>
          <Formula
            size="M"
            data={listTest[quesIndex]}
            status={EQuizStatus.ANSWER}
            answerTag={answerTag}
          />
          <GroupAnswer
            size="M"
            dataAnswer={{
              choices: listTest[quesIndex].choices,
              answer: listTest[quesIndex].answer,
            }}
            answerTag={answerTag}
            setAnswerTag={setAnswerTag}
          />
        </VStack>
      </Center>
    </LessonLayout>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
