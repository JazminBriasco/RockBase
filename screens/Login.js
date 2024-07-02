import { View, Text, StyleSheet, ImageBackground, ScrollView, Button } from "react-native";
import { GlobalColors } from "../utils/_colors";
import PrimaryButton from "../components/PrimaryButton";
import FormLogin from "../components/FormLogin";
import { useState } from "react";
import FormUserRegistered from "./FormUserRegistered";


export default function Login(){

    const [isRegistered, setIsRegistered] = useState(false);

    const handlePress = () => {
        setIsRegistered(!isRegistered);
    }

    return (

        <View style={styles.container}>
            <Button title={ isRegistered ? 'Ya tengo usuario' : 'Crear Usuario'} onPress={handlePress}></Button>
            <ImageBackground
                source={require("../assets/pxfuel.jpg")}
                style={styles.image} imageStyle=
                {{ opacity: 0.3, resizeMode: 'cover', }}
            >
            <Text style={styles.headerText}>Crear Usuario:</Text>
            <ScrollView>
            {!isRegistered ?
                <FormUserRegistered/> : <FormLogin/>
            }
            </ScrollView>
            </ImageBackground>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b8b8b8',
    },
    image: {
        height: '100%',
    },
    headerText: {
        color: GlobalColors.colors.black,
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
});
