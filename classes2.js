// Task1
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
    }
    sleep() {
      return (this.energy += 10);
    }
    doSomethingFun() {
      return (this.energy += 10);
    }
  }
  
  // const Jack = new Person("jack", 32, 98)
  // console.log(Jack.sleep())
  
  // Task2
  class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
      super(name, age, energy);
      this.xp = xp;
      this.hourlyWage = hourlyWage;
    }
    goToWork() {
      return (this.xp += 10);
    }
  }
  
  // Task3
  function intern() {
    let intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
  }
  // Task4
  
  function manager() {
    let manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
  
    return manager;
  }
  
  // // Task3
  // const intern = new Worker("Bob", 21, 110, 0, 10);
  //     intern.goToWork();
    
  //   // Task4
    
  // const manager = new Worker("Alice", 30, 120, 100, 30);
  //     manager.doSomethingFun();
    
     