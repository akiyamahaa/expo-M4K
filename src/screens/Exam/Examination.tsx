import React, { useEffect, useState } from 'react'
import LessonLayout from '../../components/LessonLayout'
import Formula from '../../components/Formula'
import GroupAnswer from '../../components/GroupAnswer'
import { EQuizStatus, IAnserTag } from '../../types/utils'
import PopupRightAnswer from '../../components/PopupRightAnswer'
import CustomBtn from '../../components/CustomBtn'

import { lessons } from '../../data/mockup'
import { RootStackParams } from '@/navigation/config'
import { images } from '@/constants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'

type Props = NativeStackScreenProps<RootStackParams, 'Examination'>

type IAnserTagList = { [key: number]: IAnserTag }

const Examination = ({ route, navigation }: Props) => {
  const { idx } = route.params
  const exams = lessons[idx].exams
  const [quizIndex, setQuizIndex] = useState(0)
  const [finishQuiz, setFinishQuiz] = useState(false)
  const [answerTagList, setAnswerTagList] = useState<IAnserTagList>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  })
  const [showModal, setShowModal] = useState(false)
  const handleChoice = (childNode: ChildNode) => {
    setAnswerTagList({ ...answerTagList, [quizIndex]: childNode })
    // Set limit when get last question
    if (quizIndex < 5) {
      setQuizIndex(quizIndex + 1)
    } else {
      setShowModal(true)
    }
  }

  const handleModalBtn = () => {
    setShowModal(false)
    setFinishQuiz(true)
  }

  const handleNextBtn = () => {
    navigation.navigate('Collection')
  }

  useEffect(() => {}, [answerTagList])
  return (
    <LessonLayout iconSource={images.bg2}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleModalBtn}
      />
      <View className="flex-1 px-4 py-8 justify-between">
        <View className="flex-7 flex-row flex-wrap">
          {exams.map((elm, idx) => (
            <View className="flex-row w-1/2 justify-center" key={`${elm}-${idx}`}>
              <Formula
                size="S"
                status={quizIndex >= idx ? EQuizStatus.ANSWER : EQuizStatus.HIDDEN}
                answerTag={answerTagList[idx]}
                data={elm}
              />
            </View>
          ))}
        </View>
        <View className={`flex-2 ${finishQuiz ? 'items-end' : 'items-center'}`}>
          {finishQuiz ? (
            <CustomBtn
              btnColor={{
                color1: '#45DEFF',
                color2: '#2671E1',
              }}
              size="SM"
              text="Tiếp tục →"
              handleBtn={handleNextBtn}
            />
          ) : (
            <GroupAnswer
              size="S"
              dataAnswer={{
                choices: exams[quizIndex].choices,
                answer: exams[quizIndex].answer,
              }}
              answerTag={answerTagList[quizIndex]}
              setAnswerTag={handleChoice}
            />
          )}
        </View>
      </View>
    </LessonLayout>
  )
}

export default Examination
