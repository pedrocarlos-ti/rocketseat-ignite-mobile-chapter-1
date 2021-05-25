import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";

interface TodoInputProps {
  addTask: (task: string) => void;
  dark: boolean;
}

export function TodoInput({ addTask, dark }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    addTask(task);
    setTask("");
  }

  return (
    <View
      style={[
        styles.inputContainer,
        dark ? styles.darkMode : styles.lightMode,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={[styles.input, dark ? styles.darkMode : styles.lightMode]}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={dark ? "#fff" : "#A09CB1"}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[
          styles.addButton,
          dark ? styles.darkModeButton : styles.lightModeButton,
        ]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  lightMode: {
    backgroundColor: "#F5F4F8",
  },
  lightModeButton: {
    backgroundColor: "#3FAD27",
  },
  darkMode: {
    backgroundColor: "#34313D",
  },
  darkModeButton: {
    backgroundColor: "#988BC7",
  },
});
