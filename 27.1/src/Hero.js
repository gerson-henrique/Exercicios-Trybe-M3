"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(name, age, powers) {
        this.alive = true;
        this.level = 0;
        this.weakness = [];
        this._name = name;
        this._age = age;
        this._powers = powers;
    }
    sayHello() {
        return `${this._name} Says LETS GO`;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name)
            throw new Error("Name is required");
        this._name = name;
    }
}
const hero1 = new Hero('Gero', 24, ['Display of Power']);
const hero2 = new Hero('Luka', 22, ['Anger Furry']);
console.log(hero1.name);
console.log(hero2.name);
console.log(hero1.sayHello());
exports.default = Hero;
