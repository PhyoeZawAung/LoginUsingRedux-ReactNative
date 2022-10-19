import React from "react";

import { Provider } from "react-redux";

import LoginScreen from "./src/screens/Login";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoutScreen from "./src/screens/Logout";
const App = () => {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      
      
    </Provider>
  )
}

export default App;