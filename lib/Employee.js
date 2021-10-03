//class constructor
class Employee {
    consructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = Employee;
    
}
//returns employee name
getName() {
    return this.name;
}
//returns employee ID
getId() {
    return this.id;
}

//returns employee email
getEmail() {
    return this.email;
}

//returns eployee role
getRole() {
    return this.role;
}

};

//export module
module.exports = Employee;