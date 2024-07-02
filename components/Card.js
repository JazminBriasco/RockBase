import { View, Text, StyleSheet, Pressable, Vibration, Linking, Alert } from "react-native";
import { GlobalColors } from "../utils/_colors";

export default function Card({ cardInfo }) {
    const logPress =() =>{
        console.log('pres');
    }

    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(cardInfo.ownerContact)}`;
        Linking.canOpenURL(url).then(suported => {
            suported && Linking.openURL(url);
        }) 
        .catch();
    }

    return (
        <View style={styles.container}>
                <Pressable 
                    style={({pressed}) => pressed && styles.pressedCard}
                    onPress={logPress}>
                <View style={styles.innerContainer}>
                    <View style={styles.header}>
                        <Text style={styles.adress}>{cardInfo.adress} - {cardInfo.location}</Text>
                        {cardInfo.availability ? <Text style={styles.available}>♪♫</Text> : <Text style={styles.busy}>♪♫</Text>}
                    </View>
                    <Text style={styles.description}>{cardInfo.description}</Text>
                    <View style={styles.contactContainer}>
                        <Pressable  
                            style={({pressed}) => pressed && styles.pressedContact}
                            onPress={openWhatsApp}
                        >
                            <Text style={styles.contact}>{cardInfo.ownerContact}</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
            </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec',
        borderWidth: 2,
        margin: 5,
        borderRadius: 8,
    },
    innerContainer: {
        padding:10,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    adress: {
        fontWeight: 'bold'
    },
    available: {
        color: 'green',
        fontWeight: 'bold',
    },
    busy: {
        color: 'red',
        fontWeight: 'bold',
        textDecorationLine:'line-through'
    },
    pressedCard:{
        backgroundColor:'redrgb(139, 139, 139)',
        borderRadius: 6,
    },
    description: {
        marginBottom:20
    },
    contactContainer: {
        backgroundColor:'rgb(224, 88, 88)',
        height:25,
        maxWidth: 150,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center'
    },
    contact: {
    },
    pressedContact: {
    }
});