import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function MenuRecept() {

    const navigate = useNavigation();

  return (
    <LinearGradient colors={["#EB3349", "#F45C43"]} style={styles.container}>
      <View >
        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate.navigate("Dishes")}
          >
            <Image
              source={require("../../assets/dishes.jpg")}
              style={styles.image}
            />
            <Text style={styles.buttonText}>Страви</Text>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate.navigate("Decert")}
          >
            <Image
              source={require("../../assets/decert.jpg")}
              style={styles.image}
            />
            <Text style={styles.buttonText}>Десерт</Text>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate.navigate("Snacks")}
          >
            <Image
              source={require("../../assets/snacks.jpg")}
              style={styles.image}
            />
            <Text style={styles.buttonText}>Закуски</Text>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate.navigate("Cocktails")}
          >
            <Image
              source={require("../../assets/cocktails.png")}
              style={styles.image}
            />
            <Text style={styles.buttonText}>Коктейлі</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    bottom: 10,
    top: 10
    
  },
  image: {
    width: 350,
    height: 140,
    borderRadius: 25,
    bottom: -50,
    margin: -10
  },
  buttonText: {
    fontSize: 20,
    textShadowColor: "black",
    color: "white",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 12,
    margin: 10
  },
});
