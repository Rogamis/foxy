import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigateStack from "./src/navigate/NavigateStack";

export default function App() {
  return (
      <NavigationContainer>
        <NavigateStack />
      </NavigationContainer>
  );
}
