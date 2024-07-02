import { View, StyleSheet, Button, Alert } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { AddType, RoomConst, UserConst } from "../utils/_const";

export default function AddButton({ btnTitle, data, onSubmit, validForm, addType = '' }) {

    const submit = () => {
        onSubmit();
    }

    return (
        <View style={styles.buttonContainer}>
            <View style={[styles.innerContainer, !validForm && styles.isNotValidForm]}>
                {addType === AddType.USERADD ?
                    <Button
                        title={btnTitle}
                        color={'white'}
                        disabled={!validForm}
                        onPress={() => Alert.alert(
                            'Confirmar usuario ♫',
                            UserConst.NAME + ': ' + data.name + '\n' +
                            UserConst.CONTACTNUMBER + ': ' + data.contactNumber + '\n' +
                            UserConst.MAIL + ': ' + data.mail + '\n',
                            [
                                { text: 'Cancelar', style: 'cancel' },
                                { text: 'Aceptar', onPress: submit }
                            ],
                            { cancelable: false }
                        )}
                    ></Button>
                    :
                    <Button
                        color={GlobalColors.colors.white}
                        title={btnTitle}
                        disabled={!validForm}
                        onPress={() => Alert.alert(
                            "Por favor confirme la sala:",
                            RoomConst.ADRESS + ' : ' + data.adress + '\n' +
                            RoomConst.DESCRIPTION + ' : ' + data.description + '\n' +
                            RoomConst.CONTACT + ' : ' + data.ownerContact,
                            [
                                { text: "Cancel", style: "destructive" },
                                { text: "Okey", style: "default", onPress: submit },
                            ]
                        )}
                    ></Button>

                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    innerContainer: {
        backgroundColor: GlobalColors.colors.primary5,
        width: '80%',
    },
    isNotValidForm: {
        opacity: 0.5,
    }
});