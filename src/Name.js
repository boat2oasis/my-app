import {Text,StyleSheet} from "react-native";

function Name({name}) {
    return (
      <Text style={styles.name}>{name}</Text>
    );
  }
export default Name;


const styles = StyleSheet.create({
    name: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      textAlign: "center"
    }
});