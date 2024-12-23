import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {count === 0
          ? "Nenhum clique ainda"
          : count === 1
          ? "Clicado 1 vez"
          : `Clicado ${count} vezes`}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {count === 0
            ? "Clique aqui"
            : count === 1
            ? "Clique novamente"
            : "Cliques"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
