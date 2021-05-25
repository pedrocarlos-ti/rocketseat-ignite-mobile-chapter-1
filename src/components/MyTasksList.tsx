import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

function FlatListHeaderComponent({ dark }) {
  return (
    <View>
      <Text
        style={[
          styles.header,
          dark ? styles.darkModeTitle : styles.lightModeTitle,
        ]}
      >
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  dark: boolean;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  dark,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={[
              item.done ? styles.taskButtonDone : styles.taskButton,
              dark ? styles.darkModeBtn : null,
            ]}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              style={[
                item.done ? styles.taskMarkerDone : styles.taskMarker,
                dark && item.done ? styles.darkModeMarker : null,
              ]}
            />
            <Text
              style={[
                item.done ? styles.taskTextDone : styles.taskText,
                dark ? styles.darkModeTitle : styles.lightModeTitle,
                dark && item.done ? styles.darkModeTask : null,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent dark={dark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
  },
  darkModeBtn: {
    backgroundColor: "rgba(68, 71, 90, 0.1)",
  },
  darkModeMarker: {
    backgroundColor: "#67E480",
  },
  darkModeTitle: {
    color: "#67E480",
  },
  lightModeTitle: {
    color: "#3D3D4D",
  },
  darkModeTask: {
    color: "#E1E1E6",
    opacity: 0.64,
    textDecorationLine: "line-through",
  },
});
