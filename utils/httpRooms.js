import axios from "axios";

const URL = 'https://react-native-rock-default-rtdb.firebaseio.com';

export function addRoomHTTP(roomData) {
 //   console.log('roomData', roomData)
    return axios.post( URL + '/rooms.json', roomData );
}

export async function getRoomsHTTP() {
    const response =await axios.get( URL + '/rooms.json' );
    const rooms = [];
    for ( const key in response.data ) {
        const userObject = {
            id: key,
            adress: response.data[key].adress,
            description: response.data[key].description,
            location: response.data[key].location,
            availability: response.data[key].availability,
            ownerContact: response.data[key].ownerContact,
        }
        rooms.push(userObject);
    }
    return rooms;
}