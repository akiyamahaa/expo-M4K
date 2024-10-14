import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IListBadges } from '../types/utils'
import BackgroundLayout from '../components/BackgroundLayout'
import { Image } from 'expo-image'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { allBadges } from '../data/mockup'
import PopupRightAnswer from '../components/PopupRightAnswer'
import { Audio } from 'expo-av'
import AsyncStorage from '@react-native-async-storage/async-storage' // Add this import
import { ScreenNavigationProps } from '@/navigation/config'
import { loadSound } from '@/utils/func'
import { images } from '@/constants'
import LessonLayout from '@/components/LessonLayout'

interface IBadges {
  id: number
  badgeId: number
  name: string
}

// const playSound = new Audio.Sound()
const Collection = () => {
  const navigation = useNavigation<ScreenNavigationProps>()

  const [myBadges, setMyBadges] = useState<IBadges[]>([])
  const [badges, setBadges] = useState<IListBadges>(allBadges)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const loadBadges = async () => {
      try {
        const storedBadges = await AsyncStorage.getItem('myBadges') // Fetch badges from Async Storage
        const list: IBadges[] = storedBadges ? JSON.parse(storedBadges) : [] // Parse the stored badges
        console.log('🚀 ~ loadBadges ~ list:', list)
        const newListBadges = { ...allBadges }
        // remove collected badges
        list.forEach((badge) => {
          if (allBadges[badge.badgeId]) {
            delete newListBadges[badge.badgeId]
          }
        })
        setMyBadges(list)
        setBadges(newListBadges)
      } catch (err) {
        console.log(err)
      }
    }
    loadBadges()
  }, [showModal])

  const handlePickBadge = async (badgeId: number) => {
    // Make this function async
    // const playSound = new Audio.Sound()
    // loadSound(playSound, require('@/assets/sound/correct.mp3'))
    const currentBadges = await AsyncStorage.getItem('myBadges') // Get current badges
    const updatedBadges = currentBadges ? JSON.parse(currentBadges) : [] // Parse current badges
    updatedBadges.push({ badgeId }) // Add new badge
    await AsyncStorage.setItem('myBadges', JSON.stringify(updatedBadges)) // Save updated badges
    setShowModal(true)
  }

  const handleNextQues = () => {
    navigation.navigate('Home')
  }

  useFocusEffect(() => {
    // loadSound(playSound, require('@/assets/sound/win.mp3'))
    const unsubscribe = async () => {
      // await playSound.stopAsync()
    }

    return () => unsubscribe()
  })

  return (
    <LessonLayout iconSource={images.bg3} handleBack={() => navigation.navigate('Home')}>
      <PopupRightAnswer
        showModal={showModal}
        setShowModal={setShowModal}
        handleBtn={handleNextQues}
        text={'Bạn đã nhận được huy hiệu'}
      />
      <View className="flex-1 items-center">
        <Image source={images.label} className="h-16 w-60 -mt-4" />
        <View className="flex-1">
          {/* Box Badges */}
          <View className="flex-row gap-2">
            {myBadges.map((badge) => (
              <View key={badge.badgeId}>
                <Image style={{ width: 32, height: 32 }} source={allBadges[badge.badgeId].image} />
              </View>
            ))}
          </View>
          {/* List Available Badges */}
          <View className="px-12 justify-end mb-14">
            <View className="rounded-full justify-center bg-blueGray py-2">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row px-8 items-center space-x-4">
                  {Object.keys(badges).map((badgeId: any, idx) => (
                    <TouchableOpacity
                      key={`${badgeId}-${idx}`}
                      onPress={() => handlePickBadge(badgeId)}
                    >
                      <Image style={{ width: 32, height: 32 }} source={badges[badgeId].image} />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </LessonLayout>
  )
}

export default Collection
