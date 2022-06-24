class Hero {
 private _name: string;
 private _age: number;
 private _powers: Array<string>;
  alive: boolean = true;
  level: number = 0;
  weakness: Array<string> = [];

  sayHello(): string {
    return `${this._name} Says LETS GO`
  }

  constructor (name: string, age: number, powers: Array<string>) {
    this._name = name;
    this._age = age;
    this._powers = powers;
  }


  get name(): string {
    return this._name
  }

  set name(name:string) {
    if(!name) throw new Error("Name is required");
    this._name = name;
  }

}

const hero1: Hero = new Hero('Gero',24,['Display of Power']);
const hero2: Hero = new Hero('Luka',22,['Anger Furry']);

console.log(hero1.name);
console.log(hero2.name);
console.log(hero1.sayHello());

export default Hero