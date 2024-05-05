import {StyleSheet, View,Text,Pressable } from "react-native";
import React ,{useState,useEffect} from "react";

function Time(){
    const [timeList, setTimeList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const addCurrentTime = () => {
        const currentDate = new Date();
        const timeString = currentDate.toLocaleTimeString();
        if(timeList.length<2){
          setTimeList([...timeList, timeString]);
          setIsDisabled(!isDisabled);
        }
      };
      function getCurrentTime(){
          debugger
          const currentDate = new Date();
          const timeString = currentDate.toLocaleTimeString();
          const newTimeList = [...timeList];
          timeList.forEach((time,index)=>{
            debugger
            newTimeList[index] = timeString;
          })
          setTimeList(newTimeList);
      }
    
      useEffect(() => {
        addCurrentTime();
      }, []);

    return (
        <View>
            <View>
            {timeList.map((time, index) => (
            <Text key={index} style={styles.time}>
                CURRENT TIME：{time}
            </Text>
            ))}
            </View>

            <Pressable onPress={getCurrentTime} 
            style={ [
                buttonStyles.button
            ]}>
            <Text style={buttonStyles.text}>REFRESH TIME</Text>
            </Pressable>

            <Pressable  onPress={addCurrentTime} style={[buttonStyles.button,
            {
            opacity: isDisabled ? 1 : 0.5,
            },
            ]}>
            <Text  style={buttonStyles.text}>CREATE ANOTHER CLOCK</Text>
            </Pressable>
        </View>
    )
}
const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#2196F3",
        borderRadius: 2,
        marginVertical: "2em",
    },
    text: {
        color: "#fff",
        fontWeight: "500",
        padding: 8,
        textAlign: "center",
        textTransform: "uppercase"
    }
});

const styles = StyleSheet.create({
    time: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      textAlign: "center"
    },
});

export default Time;
