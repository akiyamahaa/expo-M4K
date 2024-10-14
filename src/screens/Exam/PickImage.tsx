import React from 'react'
import LessonLayout from '../../components/LessonLayout'
import { Text } from 'native-base'
import { images } from '@/constants'

const PickImage = () => {
  return (
    <LessonLayout iconSource={images.bg2}>
      <Text>PickImage</Text>
    </LessonLayout>
  )
}

export default PickImage
