import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cocktails from "../screen/Cocktails";
import Decert from "../screen/Decert";
import Dishes from "../screen/Dishes";
import Main from "../screen/Main";
import MenuRecept from "../screen/MenuRecept";
import Snacks from "../screen/Snacks";

export default function NavigateStack() {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
        <Stack.Group>
            <Stack.Screen options={{headerShown: false}} name="MenuRecept" component={MenuRecept}/>
            <Stack.Screen options={{headerShown: false}} name="Decert" component={Decert}/>
            <Stack.Screen options={{headerShown: false}} name="Dishes" component={Dishes} />
            <Stack.Screen options={{headerShown: false}} name="Cocktails" component={Cocktails} />
            <Stack.Screen options={{headerShown: false}} name="Snacks" component={Snacks} />
        </Stack.Group>
      </Stack.Navigator>
  );
}