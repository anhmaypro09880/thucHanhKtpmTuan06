import axios from "axios";
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
import connect1 from "../api/connect1";
// import Swipeout from "react-native-swipeout";

const FlatListIteam = ({ item, index, data }) => {
    const handleRemove = (item) => {
        // console.log(item);
    };
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
                        item.index % 2 == 0 ? "#FFFFFF" : "#E5E5E5",
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
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            // onPress={handleRemove()}
                            style={{
                                height: 40,
                                width: 60,
                                backgroundColor: "aqua",
                                borderWidth: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={() => {
                                console.log(item.id);
                                connect1
                                    .delete(
                                        "https://6348d9a30b382d796c7881ef.mockapi.io/comments" +
                                            item.id,
                                        {}
                                    )
                                    .then((result) => {
                                        data = result.data;
                                        // setOutputs(result.data);
                                    });
                            }}
                        >
                            <Text>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default function ToDoList() {
    const [refresh, setRefresh] = useState(false);
    const [job, setJob] = useState("");
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState([]);
    const [outputs, setOutputs] = useState();

    //    const  getList= () =>{
    //     axios({
    //         url:"https://6348d9a30b382d796c7881ef.mockapi.io/comments",
    //         method:"GET"
    //     }).then((res) =>{
    //         var respone = res.data;
    //         setOutputs(respone.data);
    //     })
    //     }
    // }

    const request = connect1
        .get("https://6348d9a30b382d796c7881ef.mockapi.io/comments", {})
        .then((result) => {
            setOutputs(result.data);
        })
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " +
                    error.message
            );
            // ADD THIS THROW error
            throw error;
        });
    // console.log(outputs);

    // console.log(outputs);
    const renderItem = ({ item, index }) => {
        return (
            <FlatListIteam
                data={outputs}
                item={item}
                index={index}
                handleRemove={() => {
                    // setRefresh(!refresh);
                    // console.log("alo");
                    // console.log(item);
                    // outputs.splice(outputs.indexOf(item), 1);
                }}
            ></FlatListIteam>
        );
    };
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

    // console.log(jobs);
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
                    style={{ borderWidth: 1, height: 40, width: "20%" }}
                    //   value={job}
                    onChangeText={(e) => setJob(e)}
                ></TextInput>
                <TextInput
                    style={{ borderWidth: 1, height: 40, width: "20%" }}
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
                    data={outputs}
                    renderItem={renderItem}
                    // renderItem={({ item, index }) => {
                    //     return (
                    //         <FlatListIteam
                    //             item={item}
                    //             index={index}
                    //             keyExtractor={(item) => item.id}
                    //         ></FlatListIteam>
                    //     );
                    // }}
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
