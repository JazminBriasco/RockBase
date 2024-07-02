import { RoomActions } from "../../utils/_const";

const initialState = {
    rooms: [],
    error: null
}

const roomReducer = (state= initialState, action) => {
    switch (action.type) {
        case RoomActions.ADD_ROOM:
          //  console.log('state',state);
          //  console.log('action',action);
            return {
                ...state, 
                rooms: [...state.rooms, action.payload],
                error: null
            }
    
        case RoomActions.ADD_ROOM_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        case RoomActions.GET_ROOMS:
            
            return {
                ...state, 
                rooms: action.payload,
                error: null
            }
    
        case RoomActions.GET_ROOMS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default: 
            return state;
        
    }
}

export default roomReducer;