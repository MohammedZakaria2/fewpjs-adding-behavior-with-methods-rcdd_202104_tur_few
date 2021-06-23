class Cat {
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  } 
  
  get speack(){
    return this.name + " says meow!"
  }
}

const cat = new Cat("Sasha", "female");
cat.speack();