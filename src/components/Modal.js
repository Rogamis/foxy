import React, { useState } from "react";
import { Button, StyleSheet, Modal, View, TextInput, Dimensions, TouchableOpacity, Image, Text } from "react-native";

const { width } = Dimensions.get("window");

export default function ModalWindow() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [titleRecept, setTiteRecept] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModalVisibility}>
        <Image
          source={require("../../assets/plus.png")}
          style={styles.button}
        ></Image>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <Text style={{ margin: 20 }}>Додати рецепт</Text>
            <TextInput
              placeholder="Назва страви"
              value={titleRecept}
              style={styles.textInput}
              onChangeText={(value) => setTiteRecept(value)}
            />
            <TextInput
              placeholder="Ингрідієнти"
              value={ingredients}
              style={styles.textInput}
              onChangeText={(value) => setIngredients(value)}
            />
            <TextInput
              placeholder="Як його ото готувати"
              value={description}
              style={styles.textInput}
              onChangeText={(value) => setDescription(value)}
            />
            <View style={{ margin: 12,flexDirection: "row" }}>
              <Button title="Додати" onPress={toggleModalVisibility} />
              <Button title="Закрити" onPress={toggleModalVisibility} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    width: width * 0.8,
    backgroundColor: "pink",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
  button: {
    alignContent: "flex-end",
    width: 75,
    height: 75,
  },
});
