// understanding classes
// commit1
class Human {
    // old syntax
    //myproperty1 = 'test';
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {

    constructor() {
        super();
        this.gender = 'female';
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}

///
const person = new Person();
person.printMyName();
person.printGender();
