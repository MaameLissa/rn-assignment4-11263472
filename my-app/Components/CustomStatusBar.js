// // CustomStatusBar.js
// import React from 'react';
// import { View, Text, StyleSheet, StatusBar } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const CustomStatusBar = () => (
//   <View style={styles.statusBar}>
//     <Text style={styles.time}>9:41</Text>
//     <View style={styles.statusIcons}>
//       <Icon name="cellular" size={16} color="black" style={styles.icon} />
//       <Icon name="wifi" size={16} color="black" style={styles.icon} />
//       <Icon name="battery-full" size={16} color="black" style={styles.icon} />
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   statusBar: {
//     width: '100%',
//     height: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     backgroundColor: '#FAFAFD',
//     paddingTop: StatusBar.currentHeight,
//     marginBottom: 60, // Add margin bottom for space
//   },
//   time: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   statusIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginLeft: 5,
//   },
// });

// export default CustomStatusBar;