import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { connect } from 'react-redux';
import PrimaryButton from "../components/PrimaryButton";


const Home = ({ roomData }) => {
  //  console.log(roomData);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/pxfuel.jpg")}
                style={styles.image} imageStyle=
                {{ opacity: 0.3, resizeMode: 'cover', }}
            >
                <Text style={styles.headerText}>En esta aplicación encontrarás salas para ensayar en Mar del Plata.</Text>
                <PrimaryButton btnTitle={'Agregar sala de ensayo'} navigateTo={'Agregar'}></PrimaryButton>
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

const mapStateToProps = (state) => ({
    roomData: state.roomData,
});


export default connect(mapStateToProps)(Home);