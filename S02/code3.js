// understanding classes
class Human {
    //myproperty1 = 'test';

    gender = 'male';

    printGender = () => {
        console.log(gender);
    }
}

class Person extends Human {

    gender = 'female';
    name = 'Max';

    printMyName = () => console.log(this.name);
}


///

const person = new Person();
person.printMyName();
person.printGender();