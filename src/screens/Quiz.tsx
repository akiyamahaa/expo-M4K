import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LessonLayout from '../components/LessonLayout'
import { EQuizStatus, IAnserTag } from '../types/utils'
import Formula from '../components/Formula'
import GroupAnswer from '../components/GroupAnswer'
import PopupRightAnswer from '../components/PopupRightAnswer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { quizAddAndSubtract } from '../data/mockup'
import { RootStackParams } from '@/navigation/config'
import { images } from '@/constants'

type Props = NativeStackScreenProps<RootStackParams, 'Quiz'>

const Quiz = (props: Props) => {
  const { route, navigation } = props
  const { operation } = route.params
  const [listTest] = useState(
    quizAddAndSubtract[operation].sort(() => 0.5 - Math.random()).slice(0, 5),
  )
  const [answerTag, setAnswerTag] = useState<IAnserTag>(null)
  const [quesIndex, setQuesIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleNextQues = () => {
    console.log(quesIndex, listTest.length)
    if (quesIndex < listTest.length - 1) {
      setQuesIndex(quesIndex + 1)
      setAnswerTag(null)
      setShowModal(false)
    } else {
      setAnswerTag(null)
      setShowModal(false)
      navigation.navigate('Collection')
    }
  }

  useEffect(() => {
    if (answerTag) {
      setShowModal(true)
    }
  }, [answerTag])

  return (
    <LessonLayout iconSource={images.bg2}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleNextQues}
      />
      <View className="flex-1 justify-center items-center">
        <View className="">
          <Formula
            size="M"
            data={listTest[quesIndex]}
            status={EQuizStatus.ANSWER}
            answerTag={answerTag}
          />
          <View className="my-8" />
          <GroupAnswer
            size="M"
            dataAnswer={{
              choices: listTest[quesIndex].choices,
              answer: listTest[quesIndex].answer,
            }}
            answerTag={answerTag}
            setAnswerTag={setAnswerTag}
          />
        </View>
      </View>
    </LessonLayout>
  )
}

export default Quiz
