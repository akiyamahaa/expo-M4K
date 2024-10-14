import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LessonLayout from '../components/LessonLayout'
import { Center, VStack } from 'native-base'
import GroupAnswer from '../components/GroupAnswer'
import FormulaImage from '../components/FormulaImage'
import { IQuizImage } from '../types/utils'
import PopupRightAnswer from '../components/PopupRightAnswer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '@/navigation/config'
import { images } from '@/constants'

type Props = NativeStackScreenProps<RootStackParams, 'QuizImage'>

const listTestImage: IQuizImage[] = [
  {
    imageSlot: 2,
    choices: [2, 3, 9],
    answer: 0,
  },
]

const QuizImage = ({ navigation }: Props) => {
  const [answerTag, setAnswerTag] = useState<ChildNode | null>(null)
  const [quesIndex, setQuesIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleNextQues = () => {
    if (quesIndex < listTestImage.length - 1) {
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
        <View>
          <FormulaImage imageSlot={listTestImage[quesIndex].imageSlot} answerTag={answerTag} />
          <View className="my-2" />
          <GroupAnswer
            size="M"
            dataAnswer={{
              choices: listTestImage[quesIndex].choices,
              answer: listTestImage[quesIndex].answer,
            }}
            answerTag={answerTag}
            setAnswerTag={setAnswerTag}
          />
        </View>
      </View>
    </LessonLayout>
  )
}

export default QuizImage

const styles = StyleSheet.create({})
