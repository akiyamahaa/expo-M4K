import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from '@/navigation'
import appTheme from '@/theme'
import store from '@/redux'

export default function App() {
  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  )
}
