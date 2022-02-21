import React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Okt',
  'Nov',
  'Dec',
]
const sumList = [0, 1000, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const depositList = [0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const allSumList = [
  [1000, 0, 500],
  [2000, 0, 500],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
const sumData = {
  labels: months,
  datasets: [
    {
      data: sumList,
      color: () => '#fff', // optional
      strokeWidth: 1, // optional
    },
  ],
  legend: ['СУММА АКТИВОВ'], // optional
}
const depositData = {
  labels: months,
  datasets: [
    {
      data: depositList,
      color: () => '#fff', // optional
      strokeWidth: 1, // optional
    },
  ],
  legend: ['ДОХОД В МЕСЯЦ'], // optional
}

const moneyData = {
  labels: months,
  legend: ['риск', 'безриск', 'кеш'],
  data: [
    [allSumList[0][0], allSumList[0][1], allSumList[0][2]],
    [allSumList[1][0], allSumList[1][1], allSumList[1][2]],
    [allSumList[2][0], allSumList[2][1], allSumList[2][2]],
    [allSumList[3][0], allSumList[3][1], allSumList[3][2]],
    [allSumList[4][0], allSumList[4][1], allSumList[4][2]],
    [allSumList[5][0], allSumList[5][1], allSumList[5][2]],
    [allSumList[6][0], allSumList[6][1], allSumList[6][2]],
    [allSumList[7][0], allSumList[7][1], allSumList[7][2]],
    [allSumList[8][0], allSumList[8][1], allSumList[8][2]],
    [allSumList[9][0], allSumList[9][1], allSumList[9][2]],
    [allSumList[10][0], allSumList[10][1], allSumList[10][2]],
    [allSumList[11][0], allSumList[11][1], allSumList[11][2]],
  ],
  barColors: ['#f00', '#fd0', '#0f0'],
}

const chartConfig = {
  backgroundGradientFrom: '#52B65D',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#70CC7A',
  backgroundGradientToOpacity: 1,
  color: () => '#e6ffe8',
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
}

export default function MainScreen() {
  return (
    <ScrollView
      style={{ width: screenWidth, backgroundColor: '#2B9438' }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.screen}>
        <View style={styles.block}>
          <LineChart // Summary
            data={sumData}
            width={screenWidth * 0.95}
            height={210}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            bezier
          />
        </View>
        <View style={styles.block}>
          <LineChart // Deposit per month
            data={depositData}
            width={screenWidth * 0.95}
            height={210}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            bezier
          />
        </View>
        <View style={styles.blockRotate}>
          <StackedBarChart
            data={moneyData}
            width={screenWidth * 0.95 + 200}
            height={screenWidth * 0.95 + 20}
            chartConfig={chartConfig}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2B9438',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 40,
    marginBottom: 100,
  },
  block: {
    width: screenWidth * 0.95,
    height: 240,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 10,
  },
  blockRotate: {
    width: screenWidth * 0.95 + 200,
    height: screenWidth * 0.95,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    marginTop: 100,
    marginBottom: 10,
    transform: [{ rotateX: '0deg' }, { rotateZ: '90deg' }],
  },
})
