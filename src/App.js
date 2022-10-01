import React from 'react'
import { SafeAreaView,StyleSheet }from 'react-native'
import IAmRich from './components/IAmRich/IAmRich'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <IAmRich />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default App
