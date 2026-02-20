import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./screens/menuScreen";
import InventoryScreen from "./screens/inventoryList";
import PullSheetScreen from "./screens/pullSheetscreen";
import CreatePullSheet from "./screens/createPullSheet";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name = "Menu" component={MenuScreen}/>
        <Stack.Screen name = "PullSheet" component={PullSheetScreen}/>
        <Stack.Screen name = "CreatePullSheetList" component={CreatePullSheet}/>
        <Stack.Screen name = "Inventory" component={InventoryScreen}/>
      </Stack.Navigator>
    </NavigationIndependentTree>
    
  );
}