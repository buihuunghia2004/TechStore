// // src/navigation/TabNavigator.js

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import { Ionicons } from '@expo/vector-icons'; // Hoặc bạn có thể sử dụng react-native-vector-icons

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="settings" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;
