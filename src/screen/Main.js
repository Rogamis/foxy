import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
  
  const navigate = useNavigation()

  return (
        <LinearGradient
          colors={["#EB3349", "#F45C43"]}
          style={styles.container}>
          <View>
            <TouchableOpacity title="Рецепти" style={styles.button} onPress={() => navigate.navigate("MenuRecept")}>
              <Image
                source={require("../../assets/recept.jpg")}
                style={styles.image}
              />
              <Text style={styles.buttonText}>РЕЦЕПТИ</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    padding: 100,
    
  },
  image: {
    width: 350,
    height: 170,
    borderRadius: 15,
  },
  buttonText: {
    position: "absolute",
    color: "white",
    margin: 100,
    fontSize: 30,
  },
});
