import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { connect } from "react-redux";
import { roomActions } from "../redux/actions/roomAction";
import { useEffect } from "react";
import Card from "../components/Card";

const Rooms = ({getRooms, rooms}) => {

    const aviablesRooms = rooms.filter(room => room.availability === true);
    const busyRooms = rooms.filter(room => room.availability === false);
    const orderedRooms = [...aviablesRooms, ...busyRooms];

    useEffect(() => {
        getRooms();
    }, [rooms]); 


    return (
        <View style={styles.container} >
            <ImageBackground
                source={require("../assets/pxfuel.jpg")}
                style={styles.image}
                imageStyle={{ opacity: 0.3, resizeMode: 'cover', }}
            >

                <View style={styles.cardContainer}>
                    <Text style={[styles.textColor, { fontWeight: 'bold', textAlign: 'center', margin: 16 }]} >Salas de ensayo disponibles en Mar del Plata</Text>
                    <FlatList
                        data={orderedRooms}
                        renderItem={({ item }) =>
                            <Card cardInfo={item}></Card>}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',

    },
    image: {
        height: '100%',
    },
    textColor: {
        color: GlobalColors.colors.black,
        fontSize: 17,
        fontFamily: ''
    },
    cardContainer: {
        padding: 10,
        marginBottom:50
    }
});


const mapStateToProps = (state) => ({
    rooms: state.roomReducer.rooms
});

const mapDispatchToProps = {
    getRooms: roomActions.getRooms,
}


export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
