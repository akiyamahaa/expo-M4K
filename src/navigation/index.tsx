import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParams } from './config'
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av'
import { LogBox } from 'react-native'
import LoadingOverlay from '@/components/LoadingOverlay'
import ErrorOverlay from '@/components/ErrorOverlay'
import Home from '@/screens/Home'
import PickImage from '@/screens/Exam/PickImage'
import ObjectiveTest from '@/screens/Exam/ObjectiveTest'
import QuizImage from '@/screens/QuizImage'
import Collection from '@/screens/Collection'
import Lessons from '@/screens/Lessons'
import Quiz from '@/screens/Quiz'
import Examination from '@/screens/Exam/Examination'

//Ignore all log notifications
LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator<RootStackParams>()

export default function RootStack() {
  // useEffect(() => {
  //   const loadingSound = async () => {
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: false,
  //       staysActiveInBackground: true,
  //       interruptionModeIOS: InterruptionModeIOS.DuckOthers,
  //       playsInSilentModeIOS: true,
  //       shouldDuckAndroid: true,
  //       interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
  //       playThroughEarpieceAndroid: false,
  //     });
  //   };
  //   loadingSound();
  // }, []);
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="ObjectiveTest" component={ObjectiveTest} />
        <Stack.Screen name="Examination" component={Examination} />
        <Stack.Screen name="QuizImage" component={QuizImage} />
        <Stack.Screen name="Collection" component={Collection} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="PickImage" component={PickImage} />
      </Stack.Navigator>
    </>
  )
}
