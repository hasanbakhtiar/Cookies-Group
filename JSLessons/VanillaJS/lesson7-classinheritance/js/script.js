// ES5
// function Human(name,surname,age){
//     this.humanName = name;
//     this.huamnSurname = surname;
//     this.humanAge = age;

// }

// const color = "black"
// Human.prototype.eyeColor = color;

// const myHuman = new Human("Jhon","Anderson",30);
// console.log(myHuman.eyeColor);

// ES6
// class
class Human {
  constructor(name, surname, birthday) {
    this.myName = name;
    this.mySurname = surname;
    this.myBirthday = birthday;
  }

  sayHi() {
    return `Hello  ${this.myName} ,ur age is ${
      new Date().getFullYear() - this.myBirthday
    } `;
  }

  seeSpeed(mySpeed) {
    return `${mySpeed}km/h`;
  }
}

class Animal extends Human {
  constructor(bodyLenght) {
    super();
    this.animalBody = bodyLenght;
  }
  bodyLenght(){
    return "0.5";
  }
}

class Insect extends Animal {
  
}

// Animal
console.log("Animal:");
const myAnimal = new Animal();

console.log(myAnimal.seeSpeed(10));
// console.log(myAnimal.myName);
myAnimal.animalBody = 0.2;
console.log(myAnimal.animalBody);

// Human
console.log("Human:");
const myHuman = new Human("Jhon", "Morgan", 1990);
console.log(myHuman.sayHi());
console.log(myHuman.myName);
console.log(myHuman.seeSpeed(5));

const myInsect = new Insect(1,2,3,4,5);
myInsect.myName = "b";
console.log(myInsect);
console.log(myInsect.animalBody);
console.log(myInsect.myName);
