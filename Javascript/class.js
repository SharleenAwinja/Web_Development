class Animal {
    name;
    legs;
    head = 1;
    constructor(legs, name) {
        console.log('Animal Created');
        this.legs = legs;
        this.name = name;
    }
  getName() {
    return this.name;
  }  
  getAnimal() {
    if(this.legs === 8) {
        return 'arachnid';
    } else {
        return 'mammal';
    }
  }
}
//const cat = new Animal(4, 'Whiskers');

/*console.log('Cat: ',cat);
console.log(cat.getAnimal());
const spider = new Animal(8, 'Monkey');
console.log('Spider: ',spider);

console.log(spider.getName());
console.log(spider.getAnimal());

const snake = new Animal(0, 'anaconda');*/

class Cyborg extends Animal {
    laserBeams; 
    constructor(lb, legs, name) {
        super(legs, name);
        this.laserBeams = lb;
    }
    getName() {
        return this.laserBeams;
    }
};

const deathRay = new Cyborg(5, 4, 'shawryForCyborg');
console.log(deathRay);
console.log(deathRay.getName());