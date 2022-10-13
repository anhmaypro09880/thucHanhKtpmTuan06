import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoList from "./components/toDoList";

export default function App() {
    return <ToDoList></ToDoList>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
