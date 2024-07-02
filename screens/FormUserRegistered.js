import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { PagesConst, RoomConst, UserConst } from "../utils/_const";
import {AddType} from '../utils/_const';
import { useState } from 'react'
import AddButton from "../components/AddButton";
import PrimaryButton from "../components/PrimaryButton";

export default function FormUserRegistered() {
    const initialValues = {
        mail: '',
        password: '',
    }

    const [logUser, setLogUser] = useState(initialValues);

    const handleInputChange = (key, value) => {
        key === UserConst.MAIL && setLogUser({ ...logUser, mail: value });
        key === UserConst.PASSWORD && setLogUser({ ...logUser, password: value });

    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Mail</Text>
            <TextInput
                style={styles.input}
                placeholder='johnDoe@gmail.com'
                placeholderTextColor={'rgb(102, 102, 102)'}
                keyboardType='email-address'
                maxlength={20}
                value={logUser.mail}
                onChangeText={(text) => handleInputChange(UserConst.MAIL ,text)}
            />
            
            <Text style={styles.inputTitle}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='12345'
                placeholderTextColor={'rgb(102, 102, 102)'}
                keyboardType='default'
                maxlength={20}
                secureTextEntry={true}
                value={logUser.password}
                onChangeText={(text) => handleInputChange(UserConst.PASSWORD ,text)}
            />

        <PrimaryButton btnTitle={'Cancelar'} navigateTo={PagesConst.GOBACK } ></PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        height: '100%',
    },
    headerText: {
        color: GlobalColors.colors.black,
        padding: 10,
        marginVertical: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },

    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    inputTitle: {
        color: GlobalColors.colors.black,
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputNonEditable: {
        color: GlobalColors.colors.primary2,
    },
    input: {
        marginBottom: 30,
        color: GlobalColors.colors.black,
        padding: 10,
        fontSize: 15,
        opacity: 1,
        borderBottomWidth: 1
    }

});