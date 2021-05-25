import React from "react";
import { View, Text, StatusBar, StyleSheet, Switch } from "react-native";

interface Mode {
  dark: boolean;
  changeTheme: (dark: boolean) => void;
}

export function Header({ dark, changeTheme }: Mode) {
  return (
    <View style={[styles.header, dark ? styles.darkMode : styles.lightMode]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
        do
      </Text>

      <Switch
        onValueChange={() => changeTheme(!dark)}
        value={dark}
        trackColor={{
          true: "#34313D",
          false: "#fff",
        }}
        thumbColor={dark ? "#988BC7" : "#565BFF"}
        style={styles.switch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  switch: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  lightMode: {
    backgroundColor: "#273FAD",
  },
  darkMode: {
    backgroundColor: "#483C67",
  },
});
