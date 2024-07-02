
export class Room {
    constructor(id, adress, description, location, availability, ownerContact ){
        this.id = id;
        this.adress = adress;
        this.description = description;
        this.location= location;
        this.availability= availability;
        this.ownerContact= ownerContact;
    }
}

export class ReservedRoom {
    constructor(id, roomId, hour, date){
        this.id = id;
        this.roomId = roomId;
        this.hour = hour;
        this.date= date;
    }
}

export class User {
    constructor(id, name, contactNumber, mail, password, isAdmin) {
        this.id = id;
        this.name= name;
        this.contactNumber= contactNumber;
        this.mail=mail;
        this.password=password;
        this.isAdmin = isAdmin;
    }
}