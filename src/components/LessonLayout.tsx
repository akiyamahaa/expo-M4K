import React, { ReactNode } from 'react'
import BackgroundLayout from './BackgroundLayout'
import CloseBtn from './CloseBtn'
import { useNavigation } from '@react-navigation/native'
import { images } from '@/constants'
import { View } from 'react-native'

type Props = {
  iconSource: string
  children: ReactNode
  handleBack?: () => void
}

const LessonLayout = (props: Props) => {
  const navigation = useNavigation()
  const { handleBack = () => navigation.goBack() } = props
  return (
    <BackgroundLayout imageSource={props.iconSource || images.bg2}>
      <View className="flex-1 py-8">
        <View className="flex-row flex-1 justify-end">
          <View className="h-full w-2/3">
            <BackgroundLayout imageSource={images.table}>{props.children}</BackgroundLayout>
          </View>
          <View className="mx-6 -mt-2">
            <CloseBtn handleBtn={handleBack} />
          </View>
        </View>
      </View>
    </BackgroundLayout>
  )
}

export default LessonLayout
