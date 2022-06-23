"use strict";
class Hero {
    constructor(name, age, powers) {
        this.alive = true;
        this.level = 0;
        this.weakness = [];
        this.name = name;
        this.age = age;
        this.powers = powers;
    }
}
const hero1 = new Hero('Gero', 24, ['Display of Power']);
console.log(hero1.name);
