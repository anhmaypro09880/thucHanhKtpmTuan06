import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View,
    Input,
    FlatList,
} from "react-native";

class FlatListIteam extends Component {
    render() {
        return (
            <View
                style={{
                    height: 100,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        height: "80%",
                        width: "90%",
                        backgroundColor:
                            this.props.index % 2 == 0 ? "#FFFFFF" : "#E5E5E5",
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "80%",
                                justifyContent: "center",
                            }}
                        >
                            <Text>{this.props.item}</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{
                                    height: 40,
                                    width: 60,
                                    backgroundColor: "aqua",
                                    borderWidth: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default function ToDoList() {
    const data = [
        {
            id: 1,
            title: "test",
        },
        {
            id: 2,
            title: "test",
        },
    ];
    const [job, setJob] = useState("");
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState([]);
    const handleClick = () => {
        setJobs((prev) => [...prev, job]);
        console.log(job);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 2,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* <TextInput
                    style={{ borderWidth: 1 }}
                    onChange={(e) => setName(e.target.value)}
                ></TextInput> */}

                <TextInput
                    style={{ borderWidth: 1, height: 40, width: "70%" }}
                    //   value={job}
                    onChangeText={(e) => setJob(e)}
                ></TextInput>
                <TouchableOpacity onPress={handleClick}>
                    <Image
                        style={{ height: 40, width: 40 }}
                        source={require("../assets/add.png")}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 10 }}>
                <FlatList
                    data={jobs}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListIteam
                                item={item}
                                index={index}
                            ></FlatListIteam>
                        );
                    }}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
});
