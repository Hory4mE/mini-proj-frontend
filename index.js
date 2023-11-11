import "expo-router/entry";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

// function App() {
//   return (
//     <Stack.Navigator>
//       {/* <Stack.Screen name="home" component={Home} />
//       <Stack.Screen name="register" component={Register} /> */}
//     </Stack.Navigator>
//   );
// }

export default (App) => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
