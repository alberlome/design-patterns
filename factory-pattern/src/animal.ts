export {};

// Clase base
class Animal {
  public name: String | undefined;

  constructor(name: String) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} hace ruido.`);
  }
}

// Subclases
class Dog extends Animal {
  speak() {
    console.log(`${this.name} ladra...`);
  }
}

class Cat extends Animal {
  speak(): void {
    console.log(`${this.name} maúlla...`);
  }
}

// Factory
class AnimalFactory {
  createAnimal(type: String, name: String) {
    switch (type) {
      case "perro":
        return new Dog(name);
      case "gato":
        return new Cat(name);
      default:
        console.log(`No se reconoce ese tipo de animal '${type}'.`);
    }
  }
}

const factory = new AnimalFactory();
const myDog = factory.createAnimal("perro", "Fido");
const myCat = factory.createAnimal("gato", "Gardfield");

myDog?.speak();
myCat?.speak();
