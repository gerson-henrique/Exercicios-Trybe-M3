class Hero {
  name: string;
  age: number;
  powers: Array<string>;
  alive: boolean = true;
  level: number = 0;
  weakness: Array<string> = [];

  constructor (name: string, age: number, powers: Array<string>) {
    this.name = name;
    this.age = age;
    this.powers = powers;
  }
}

const hero1: Hero = new Hero('Gero',24,['Display of Power']);

console.log(hero1.name)