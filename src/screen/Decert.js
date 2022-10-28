import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Dishes() {
  return (
    <LinearGradient colors={["#EB3349", "#F45C43"]} style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/plus.png")}
            style={styles.button}
          ></Image>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignContent: "flex-end",
    width: 75,
    height: 75,
  },
  buttonContainer: {
    display: "flex",
    bottom: -320,
  },
});
