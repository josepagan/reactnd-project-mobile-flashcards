// import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-get-random-values'


import { store, persistor } from './app/store/store';
import AppMain from './app/AppMain';
import { NavigationContainer } from '@react-navigation/native';
import { dirtyCardsReset } from './app/store/cardsSlice';
import { dirtyDecksReset } from './app/store/decksSlice';
export default function App() {
  // store.dispatch(dirtyCardsReset())
  // store.dispatch(dirtyDecksReset())
  // console.log("store", store.getState())
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppMain />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

