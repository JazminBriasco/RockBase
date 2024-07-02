import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { rooms, reservedRooms } from '../utils/dummy-data';

export default function Profile() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/pxfuel.jpg")}
                style={styles.image}
                imageStyle={{ opacity: 0.3, resizeMode: 'cover', }}
            >
                <View style={styles.subContent}>
                    <Text style={styles.text}>Mis Reservas</Text>
                    <Text> Lista de salas reservadas:</Text>
                    <FlatList
                        data={reservedRooms}
                        renderItem={({ item }) => <Text>El día {item.date} a las {item.hour} hs</Text>}
                    />
                </View>
                <View style={styles.subContent}>
                    <Text style={styles.text}>Mis Salas</Text>
                    <Text> Lista de salas propias disponibles para reserva</Text>
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <Text>{item.description} -  {item.location} - {item.adress}</Text>}
                    />
                </View>
            </ImageBackground>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.colors.white,
    },
    image: {
        height: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subContent: {
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 8,
    }
});