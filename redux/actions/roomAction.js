import { RoomActions } from "../../utils/_const";
import { addRoomHTTP, getRoomsHTTP } from "../../utils/httpRooms";

export const roomActions = {
    addRoom,
    getRooms,
    removeRoom,
    editRoom
};

function addRoom (room) {
    return(dispatch) => {
        return addRoomHTTP(room).then(res => {
         //   console.log('addRoomHttp: ', res.data);
            dispatch({type: RoomActions.ADD_ROOM, payload: res.data})
        })
        .catch(error => {
        //    console.error('Error adding Room:', error);
            dispatch({ type: RoomActions.ADD_ROOM_FAILURE, payload: error });
        });
        
    }
}

function getRooms() {
    return (dispatch) => {
        return getRoomsHTTP().then(res => {
            dispatch({type: RoomActions.GET_ROOMS, payload: res})
        })
        .catch(error => {
          //  console.error('Error adding Room:', error);
            dispatch({ type: RoomActions.GET_ROOMS_FAILURE, payload: error });
        });
    }
}

function removeRoom() {
    return (dispatch) => {
        return ;
    }
}

function editRoom() {
    return (dispatch) => {
        return;
    }
}

