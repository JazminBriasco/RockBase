import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { useEffect, useState } from "react";
import { PagesConst, RoomConst } from "../utils/_const";
import { connect } from "react-redux";
import { roomActions } from "../redux/actions/roomAction";
import { Room } from "../utils/class";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/PrimaryButton";
import AddButton from "../components/AddButton";

const AddRoom = ({addRoom, getRooms, rooms}) => {
    const initialValues = new Room('', '', '', 'MDQ', true, '');

    const [formData, setFormData] = useState(initialValues);
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        getRooms();
    }, [rooms]); 

    const getRoomsNow = () => {
        getRooms();
    }

    const resetValues = () =>{
        setFormData(initialValues);
        setValidForm(false);
    }

    const validateForm = () => {
        setValidForm(
            formData.adress?.length >= 5 && formData.adress?.length<= 50 && 
            formData.description?.length >= 5 && formData.description?.length <= 200 && 
            formData.ownerContact?.length >= 8  && formData.ownerContact?.length <= 20 //El numero del usuario de valor, igaulmente editable
        )
    }

    const handleInputChange = (key, value) => {
        key === RoomConst.ADRESS && setFormData({ ...formData, adress: value });
        key === RoomConst.DESCRIPTION && setFormData({ ...formData, description: value });
        key === RoomConst.CONTACT && setFormData({ ...formData, ownerContact: value });
        validateForm();
    };

    // Testing 
    const setTestRooms = () => {
        const test0 = new Room('', 'Santiago del Estero 2313', 'Sala equipada con paneles acústicos de alta calidad, ideal para grabaciones y sesiones íntimas.', 'MDQ', true, '+5492234247219');
        const test1 = new Room('', 'Avenida Colón 3456', 'Ubicada en el corazón de la ciudad, esta sala cuenta con equipos modernos y un ambiente inspirador.', 'MDQ', true, '2235987456');
        const test2 = new Room('', 'Calle Güemes 2200', 'Sala de ensayo con piano de cola y amplio espacio para orquestas y grupos grandes.', 'MDQ', true, '223658745');
        const test3 = new Room('', 'Boulevard Marítimo 7600', 'Pequeña y acogedora, perfecta para ensayos individuales o dúos, equipada con amplificadores y micrófonos..', 'MDQ', true, '115698745');
        const test4 = new Room('', 'Rivadavia 3100', 'Espacio versátil con proyector y sistema de sonido envolvente, ideal para bandas y producciones audiovisuales.', 'MDQ', true, '112589896');
        const test5 = new Room('', 'Avenida Juan B. Justo 5200', 'Espacio robusto con batería completa, amplificadores Marshall y una excelente insonorización para ensayos de rock.', 'MDQ', true, '23174654');
        const test6 = new Room('', 'San Martín 2300', 'Sala moderna con equipo de grabación de última generación y un ambiente relajado para la creatividad musical.', 'MDQ', true, '124564684');
        const test7 = new Room('', 'Alberti 1400', 'Diseñada para músicos acústicos, con una acústica cálida y natural, ideal para guitarristas y cantantes.', 'MDQ', true, '125746545');
        const test8 = new Room('', 'Alvarado 19003', 'Sala configurable con paredes móviles para ajustar el espacio según las necesidades del grupo.', 'MDQ', true, '3653461532');
        const test9 = new Room('', 'Avenida Independencia 2900', 'Un espacio vibrante y colorido con instrumentos variados y equipos para jóvenes talentos musicales', 'MDQ', true, '5464325131');
        addRoom(test0);
        addRoom(test1);
        addRoom(test2);
        addRoom(test3);
        addRoom(test4);
        addRoom(test5);
        addRoom(test6);
        addRoom(test7);
        addRoom(test8);
        addRoom(test9);
    }
    //

    const handleRoomSubmit = () => {
        const newRoom = new Room(
            '',
            formData.adress, 
            formData.description, 
            'MDQ', 
            true, 
            formData.ownerContact.includes('+54') ? formData.ownerContact : '+54'+formData.ownerContact
        );
        addRoom(newRoom);
        resetValues();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/pxfuel.jpg")}
                style={styles.image} imageStyle=
                {{ opacity: 0.3, resizeMode: 'cover', }}
            >
                <Text style={styles.headerText}>Por favor complete los siguientes puntos:</Text>

                <FormInput
                    data={{ title: RoomConst.ADRESS, keyboardType: 'default', placeholder: 'Av Colón 1234', length: 15 }}
                    value={formData.adress}
                    onChangeText={handleInputChange}
                >
                </FormInput>
                <FormInput
                    data={{ title: RoomConst.DESCRIPTION, keyboardType: 'default', placeholder: '10 metros cuadrados, disponible parlantes', length: 50 }}
                    value={formData.description}
                    onChangeText={handleInputChange}
                ></FormInput>
                <FormInput
                    data={{ title: RoomConst.LOCATION, keyboardType: 'default', placeholder: 'MDQ', length: 10 }}
                    value={formData.location}
                    onChangeText={handleInputChange}
                ></FormInput>
                <FormInput
                    data={{ title: RoomConst.CONTACT, keyboardType: 'numeric', placeholder: '025968437', length: 15 }}
                    value={formData.ownerContact}
                    onChangeText={handleInputChange}
                ></FormInput>
                <AddButton validForm={validForm} btnTitle={'Agregar'} data={formData} onSubmit={handleRoomSubmit}> </AddButton>
                <PrimaryButton btnTitle={'Cancelar'} navigateTo={PagesConst.GOBACK} ></PrimaryButton>
            <Button title='Get Rooms' onPress={getRoomsNow}></Button>
            <Button title='Add Test Rooms' onPress={setTestRooms} navigateTo={PagesConst.GOBACK}></Button>
            </ImageBackground>
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

});

const mapStateToProps = (state) =>({
    rooms: state.roomReducer.rooms
});

const mapDispatchToProps = {
    addRoom: roomActions.addRoom,
    getRooms: roomActions.getRooms
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom);