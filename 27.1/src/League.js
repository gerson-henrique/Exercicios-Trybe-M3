"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./Hero"));
class league {
    constructor(name) {
        this._name = '';
        this._name = name;
        this._members = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name)
            throw new Error("Name is required");
        this._name = name;
    }
    addHero(hero) {
        if (this._members.find((h) => h.name === hero.name))
            throw new Error("Member already exists");
        this._members.push(hero);
    }
    doPresentation() {
        console.log(this._name);
        console.table(this._members);
    }
}
const jleague = new league('Justice League');
const hero1 = new Hero_1.default('Gero', 24, ['Display of Power']);
const hero2 = new Hero_1.default('Luka', 22, ['Anger Furry']);
jleague.addHero(hero1);
jleague.addHero(hero2);
jleague.doPresentation();
