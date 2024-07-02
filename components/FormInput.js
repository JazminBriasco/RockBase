import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { RoomConst } from "../utils/_const";

export default function FormInput({ data, value, onChangeText }) {
    const handleSend = (value) => { onChangeText(data.title, value) };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{data.title}</Text>

                {data.title === RoomConst.LOCATION ?
                    <TextInput
                        style={[styles.input, styles.inputNonEditable]}
                        editable={false}
                        value={'MDQ - (solo disponible en Mar del Plata)'}
                    />
                    :
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={handleSend}
                        placeholder={data.placeholder}
                        placeholderTextColor={'rgb(102, 102, 102)'}
                        keyboardType={data.keyboardType}
                        maxlength={data.length}
                    />

                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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