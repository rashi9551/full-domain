class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
      return `The name of the animal is ${this.name} and the age is ${this.age}`;
    }
  }
  const firstAnimal = new Animal("Lion", 7);
    console.log(firstAnimal); //Animal {name: "Lion", age: 7}
    console.log(firstAnimal.getInfo()); //The name of the animal is Lion and the age is 7



class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    bark() {
        return "Woof";
    }
}
class Cat extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
}
  
  const myDog = new Dog("Snowy", 2, "Fox Terrier");
  console.log(myDog.getInfo()); //The name of the animal is Snowy and the age is 2
  console.log(myDog.breed); //Fox Terrier
  console.log(myDog.bark()); //Woof
  
  const myCat = new Cat("Bob", 5, "3kg");
  console.log(myCat.getInfo()); //The name of the animal is Bob and the age is 5
  console.log(myCat.weight); //3kg