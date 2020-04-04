import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Launch from './views/Launch.js';
import Connexion from './views/auth/Connexion.js';

const Stack = createStackNavigator();

// class App extends React.Component {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Launch" screenOptions={{headerShown:false}}>
//       <Stack.Screen name="Launch" component={Launch} />
//         <Stack.Screen name="Connexion" component={Connexion} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;
export default App => {
  let [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Raleway-Medium.ttf'),
    'RalewayBold': require('./assets/fonts/Raleway-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Launch" component={Launch} />
          <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
