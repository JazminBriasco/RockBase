import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { GlobalColors } from "../utils/_colors";
import { PagesConst, RoomConst, UserConst } from "../utils/_const";
import {AddType} from '../utils/_const';
import { useEffect, useState } from 'react'
import { userActions } from "../redux/actions/userAction";
import { connect } from "react-redux";
import { User } from "../utils/class";
import PrimaryButton from "./PrimaryButton";
import AddButton from './AddButton'

const FormLogin = ({addUser, getUsers, users}) => {
    
    const initialValues = new User('','','','','');

    const [loginData, setloginData] = useState(initialValues);
    const [validForm, setValidForm] = useState(false);
    const [userAlreadyExist, setUserAlreadyExist] = useState(false);

    useEffect(() => {
        getUsers();
    }, [users]); 

    const resetValues = () =>{
        setloginData(initialValues);
        setValidForm(false);
        setUserAlreadyExist(false);
    }

    const validateForm = () => {
        setValidForm(
            loginData?.name?.length >= 2 && loginData?.name?.length <= 40 &&
            loginData?.contactNumber?.length >= 8 && loginData?.contactNumber?.length <=20 && 
            loginData?.mail?.length >= 5 && loginData?.mail?.length <= 50 && loginData?.mail?.includes('@') &&
            loginData?.password?.length >= 3 && loginData?.password?.length <= 30 && 
            !userAlreadyExist
        );
    }

    const handleInputChange = (key, value) => {
        key === UserConst.NAME && setloginData({ ...loginData, name: value });
        key === UserConst.CONTACTNUMBER && setloginData({ ...loginData, contactNumber: value });
        if(key === UserConst.MAIL){
            users.find(user => user.mail.toUpperCase() === value.toUpperCase()) === undefined ? setUserAlreadyExist(false) : setUserAlreadyExist(true);
            setloginData({ ...loginData, mail: value });
        }
        key === UserConst.PASSWORD && setloginData({ ...loginData, password: value });

        validateForm();
    };
  
    const handleUserSubmit = () => {
        const newUser = new User('', loginData.name, '+54'+loginData.contactNumber, loginData.mail, loginData.password);
        addUser(newUser);
        resetValues();
    }

    const agregarTest = () => {        
        const newUser1 = new User('', 'Jazmin Briasco', '+542235968467', 'jaabris@hotmail.com', 'jazmin1234', true);        
        const newUser2 = new User('', 'Nicolas Villarino', '+542234954876', 'nicov@hotmail.com', 'jazmin1234', true);
        const newUser3 = new User('', 'Matu Briascino', '+54223521478', 'matu@hotmail.com', 'jazmin1234', false);        
        const newUser4 = new User('', 'Panchu Briasco', '+542235632147', 'panchi@hotmail.com', 'jazmin1234', false);
        addUser(newUser1);        
        addUser(newUser2);
        addUser(newUser3);        
        addUser(newUser4);
    }  

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Nombre y Apellido</Text>
            <TextInput
                style={styles.input}
                placeholder='John Doe'
                placeholderTextColor={'rgb(102, 102, 102)'}
                keyboardType='default'
                maxlength={20}
                value={loginData.name}
                onChangeText={(text) => handleInputChange(UserConst.NAME ,text)}
            />

            <Text style={styles.inputTitle}>Numero de contacto</Text>
            <TextInput
                style={styles.input}
                placeholder='2235968744'
                placeholderTextColor={'rgb(102, 102, 102)'}
                keyboardType='numeric'
                maxlength={20}
                value={loginData.contactNumber}
                onChangeText={(text) => handleInputChange(UserConst.CONTACTNUMBER ,text)}
            />

            <Text style={styles.inputTitle}>Mail</Text>
            <TextInput
                style={[styles.input, userAlreadyExist ? styles.duplicateMail : '']}
                placeholder='johnDoe@gmail.com'
                placeholderTextColor={'rgb(102, 102, 102)'}
                keyboardType='email-address'
                maxlength={20}
                value={loginData.mail}
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
                value={loginData.password}
                onChangeText={(text) => handleInputChange(UserConst.PASSWORD ,text)}
            />

            {userAlreadyExist ? <Text style={styles.duplicateMail }>El mail ingresado ya existe, logeate logi</Text> : ''}
            <AddButton validForm={validForm} btnTitle={'Agregar'} data={loginData} onSubmit={handleUserSubmit} addType={AddType.USERADD} userAlreadyExist={userAlreadyExist}></AddButton>
            <PrimaryButton btnTitle={'Cancelar'} navigateTo={PagesConst.HOME} ></PrimaryButton>
            <Button title="Agregar usuarios TEST" onPress={agregarTest}></Button>
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
    },
    duplicateMail: {
        color: 'rgb(255, 0, 0)',
        fontWeight: 'bold'
    }

});

const mapStateToProps = (state) => ({
    users: state.userReducer.users
});

const mapDispatchToPtops = {
    addUser: userActions.addUser,
    getUsers: userActions.getUsers,
}

export default connect(mapStateToProps, mapDispatchToPtops)(FormLogin);