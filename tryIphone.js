import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'

import {
  Fontisto,
  FontAwesome,
  Foundation,
  Entypo,
  Ionicons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import Svg, { Ellipse } from 'react-native-svg'

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

function CardText(props) {
  return (
    <View>
      <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
      <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}>
        {props.title}
      </Text>
    </View>
  )
}

export default function TryIphone(props) {
  return (
    <ImageBackground
      source={{
        uri: 'https://media.idownloadblog.com/wp-content/uploads/2021/09/iPhone-13-Wallpaper-2-YTECHB-iDownloadBlog.png',
      }}
      style={{
        width: props.width,
        height: props.height,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <View
        style={{
          width: props.width,
          height: props.height,
          alignItems: 'center',
          alignSelf: 'center',
          padding: 8,
          paddingTop: 20,
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>9:41</Text>
          <Fontisto name="battery-full" size={18} color="#ffff" />
        </View>
        <View style={styles.main}>
          <View
            style={{
              flex: 1,
              width: '100%',
              padding: 12,
              justifyContent: 'flex-start',
            }}
          >
            <View style={styles.mainHorizontal}>
              <CardText title="FaceTime" style={{ backgroundColor: 'green' }}>
                <LinearGradient
                  colors={['#88F784', '#58BE48']}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons name="videocam" size={35} color="#fff" />
                </LinearGradient>
              </CardText>
              <CardText title="Calendar" style={{ backgroundColor: 'green' }}>
                <LinearGradient
                  colors={['#fff', '#fff']}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      color: '#EC5849',
                      fontWeight: 'bold',
                      position: 'absolute',
                      top: 1,
                    }}
                  >
                    Tuesday
                  </Text>
                  <Text style={{ fontSize: 32, paddingTop: 4 }}>4</Text>
                </LinearGradient>
              </CardText>
              <CardText title="Photos" style={{ backgroundColor: 'green' }}>
                <LinearGradient
                  colors={['#fff', '#fff']}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      transform: [{ rotate: '0deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="orange"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '45deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="yellow"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '90deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#55ff00"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '135deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#00ff66"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '180deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#00a2ff"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '225deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#d000ff"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '270deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#ff0084"
                      />
                    </Svg>
                  </View>
                  <View
                    style={{
                      transform: [{ rotate: '315deg' }],
                      position: 'absolute',
                      opacity: 0.5,
                    }}
                  >
                    <Svg height="45" width="45">
                      <Ellipse
                        cx="22"
                        cy="12"
                        rx="7"
                        ry="10"
                        stroke="purple"
                        strokeWidth="0"
                        fill="#f00"
                      />
                    </Svg>
                  </View>
                </LinearGradient>
              </CardText>
              <CardText title="Camera" style={{ backgroundColor: 'green' }}>
                <LinearGradient
                  colors={['#E2E2E7', '#939397']}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Entypo name="camera" size={30} color="black" />
                </LinearGradient>
              </CardText>
            </View>
            <View style={styles.mainHorizontal}>
              <CardText title="Mail" style={{ backgroundColor: 'green' }}>
                <LinearGradient
                  colors={['#3476F2', '#5CC1F6']}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Foundation name="mail" size={40} color="#fff" />
                </LinearGradient>
              </CardText>
            </View>
          </View>

          <View style={styles.footer}>
            <Card style={{ backgroundColor: 'green' }}>
              <LinearGradient
                colors={['#88F784', '#58BE48']}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesome name="phone" size={40} color="#fff" />
              </LinearGradient>
            </Card>
            <Card style={{ backgroundColor: 'green' }}>
              <LinearGradient
                colors={['#fff', '#fff']}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <LinearGradient
                  colors={['#58BBF4', '#3B79EB']}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',

                    padding: 5,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#fff',
                      borderStyle: 'dotted',
                      width: 38,
                      height: 38,
                      borderRadius: 20,

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        transform: [{ rotate: '45deg' }],
                      }}
                    >
                      <View
                        style={{
                          width: 2,
                          height: 16,
                          backgroundColor: '#ff3b19',
                        }}
                      />
                      <View
                        style={{
                          width: 2,
                          height: 16,
                          backgroundColor: '#fff',
                        }}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </LinearGradient>
            </Card>
            <Card style={{ backgroundColor: 'green' }}>
              <LinearGradient
                colors={['#88F784', '#58BE48']}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesome name="comment" size={30} color="#fff" />
              </LinearGradient>
            </Card>
            <Card style={{ backgroundColor: 'green' }}>
              <LinearGradient
                colors={['#F95D6B', '#F9283D']}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="ios-musical-notes" size={37} color="#fff" />
              </LinearGradient>
            </Card>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  main: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 13,
  },
  footer: {
    backgroundColor: '#28395E',
    width: '100%',
    borderRadius: 25,
    padding: 12,
    paddingVertical: 14,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  card: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  mainHorizontal: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 17,
  },
})
