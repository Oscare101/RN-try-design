import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native'
import MainScreen from './mainScreen'
import TryIphone from './tryIphone'

const width = Dimensions.get('screen').width

const iphoneHeight = 575
const iphoneWidth = iphoneHeight / 2.07
const iphoneUniBrowWidth = iphoneHeight / 5.4
const iphoneUniBrowHeight = iphoneHeight / 26

export default function TryScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        // source={{
        //   uri: 'https://upload.wikimedia.org/wikipedia/uk/6/63/IOS_13_Homescreen_iPhone_X.png',
        // }}
        style={{
          width: 280,
          height: 290 * 2.09169054441,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 300,
          }}
        >
          <View
            style={{
              width: 300,
              height: 300 * 2.09169054441,
              borderRadius: 50,
              overflow: 'hidden',
            }}
          >
            <TryIphone width={280} height={621} />
          </View>

          <Image
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
            }}
            source={require('./iphoneScreen.png')}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iphone: {
    width: iphoneWidth,
    height: iphoneHeight,
    borderColor: '#000',
    borderWidth: 10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    marginRight: 9,
  },
  unibrow: {
    position: 'absolute',
    top: 0,
    width: iphoneWidth,
    height: iphoneUniBrowHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  head: {
    width: iphoneUniBrowWidth,
    height: iphoneUniBrowHeight,
    backgroundColor: '#000',

    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  upHead: {
    width: (iphoneWidth - iphoneUniBrowWidth) / 2,
    height: iphoneUniBrowHeight,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  item: {
    backgroundColor: 'red',
    width: (iphoneWidth - iphoneUniBrowWidth) / 2,
    height: iphoneUniBrowHeight / 2,
  },
  line: {
    width: iphoneWidth,
    backgroundColor: '#000',
    height: iphoneUniBrowHeight / 3,
  },
})
