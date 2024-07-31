// // src/navigation/AppNavigator.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AuthNavigator from './AuthNavigator';
// import TabNavigator from './TabNavigator';
// import useAuth from '../hooks/useAuth';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const { user } = useAuth();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
//         ) : (
//           <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
