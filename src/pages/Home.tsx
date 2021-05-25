import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle === "") return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const _tasks = tasks.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }

      return t;
    });

    setTasks(_tasks);
  }

  function handleRemoveTask(id: number) {
    const _tasks = tasks.filter((t) => t.id !== id);

    setTasks(_tasks);
  }

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "#191622" : "#fff" }}>
      <Header dark={darkMode} changeTheme={setDarkMode} />

      <TodoInput dark={darkMode} addTask={handleAddTask} />

      <MyTasksList
        dark={darkMode}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}
