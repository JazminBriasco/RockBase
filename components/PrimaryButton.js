import { View, StyleSheet, Button } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { useNavigation } from '@react-navigation/native';
import { PagesConst } from "../utils/_const";

export default function PrimaryButton({ btnTitle, navigateTo }) {

    const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.innerContainer}>
                <Button
                    color={GlobalColors.colors.white}
                    title={btnTitle}
                    onPress={() => navigateTo === PagesConst.GOBACK ? navigation.goBack() : navigation.navigate(navigateTo)}
                ></Button>
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
    }

});