import { ReservedRoom, Room } from "./class";

const room1 = new Room(1, 'Santiago del Estero 5241', 'Sala con 10mt cuadrados, disponible parlante.', 'MDQ', true, '5465457');
const room2 = new Room(2, 'flkghjdlkjf', 'small one', '7600', true, '5465447');
const room3 = new Room(3, 'jklgsfd', 'Smelly', 'Filomento al 7800', false, '223598647');
const room4 = new Room(4, 'dgfzjnkhol', 'Nice', 'MDQ - 2', true, '265654856');
const room5 = new Room(9, 'asd123', 'big one', 'MDQ', true, '5465457');
const room6 = new Room(10, 'flkghjdlkjf', 'small one', '7600', false, '5465447');
const room7 = new Room(11, 'jklgsfd', 'Smelly', 'Filomento al 7800', false, '223598647');
const room8 = new Room(12, 'dgfzjnkhol', 'Nice', 'MDQ - 2', true, '265654856');


const reservedRoom1 = new ReservedRoom(5, 1, '13:30', '12/02/2024');
const reservedRoom2 = new ReservedRoom(6, 2, '13:50', '11/10/2024' );
const reservedRoom3 = new ReservedRoom(7, 3, '13:40', '15/12/2024' );
const reservedRoom4 = new ReservedRoom(8, 4, '13:20', '17/7/2024' );


export const rooms = [
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
];

export const reservedRooms = [
    reservedRoom1,
    reservedRoom2,
    reservedRoom3,
    reservedRoom4
  ];