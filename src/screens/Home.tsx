import BackgroundLayout from '@/components/BackgroundLayout'
import CustomBtn from '@/components/CustomBtn'
import PopupParent from '@/components/PopupParent'
import { images } from '@/constants'
import { EOperation } from '@/types/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation<any>()

  const navigateLessonsScreen = async () => {
    navigation.navigate('Lessons')
  }
  const navigateCountScreen = async () => {
    navigation.navigate('QuizImage')
  }
  const navigateAddScreen = async () => {
    navigation.navigate('Quiz', {
      operation: EOperation.AddOperation,
    })
  }
  const navigateSubtractScreen = async () => {
    navigation.navigate('Quiz', {
      operation: EOperation.SubtractOperation,
    })
  }

  return (
    <BackgroundLayout imageSource={images.bgMain}>
      <PopupParent showModal={showModal} setShowModal={setShowModal} />
      <View className="flex-1 justify-center items-center">
        <View className="w-3/4 space-y-4">
          <View className="flex-row justify-between">
            <CustomBtn
              btnColor={{
                color1: '#45DEFF',
                color2: '#2671E1',
              }}
              text="Bài giảng"
              size="MD"
              handleBtn={navigateLessonsScreen}
            />
            <CustomBtn
              btnColor={{
                color1: '#45DEFF',
                color2: '#2671E1',
              }}
              text="Đếm số"
              size="MD"
              handleBtn={navigateCountScreen}
            />
          </View>
          <View className="flex-row justify-between">
            <CustomBtn
              btnColor={{
                color1: '#45DEFF',
                color2: '#2671E1',
              }}
              text="Trắc nghiệm phép cộng"
              size="MD"
              handleBtn={navigateAddScreen}
            />
            <CustomBtn
              btnColor={{
                color1: '#45DEFF',
                color2: '#2671E1',
              }}
              text="Trắc nghiệm phép trừ"
              size="MD"
              handleBtn={navigateSubtractScreen}
            />
          </View>
        </View>
      </View>
      <View className="absolute bottom-4 right-20">
        <CustomBtn
          btnColor={{
            color1: '#FFD21C',
            color2: '#FF9F1F',
          }}
          text="Dành cho phụ huynh"
          size="XS"
          handleBtn={() => setShowModal(true)}
        />
      </View>
    </BackgroundLayout>
  )
}

export default Home
