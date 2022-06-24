import Hero from "./Hero";

class league {
  private _name: string = '';
  private _members: Array<Hero>;

  constructor(name: string) {
    this._name = name;
    this._members = []
  }
  get name(): string{
    return this._name;
  }
  set name(name: string){
    if(!name) throw new Error("Name is required");
    this._name = name;
  }

  addHero(hero: Hero){
    if(this._members.find((h) => h.name === hero.name)) throw new Error("Member already exists");
    this._members.push(hero)
  }
  doPresentation():void{
    console.log(this._name);
    console.table(this._members);
    
  }
}

const jleague = new league('Justice League')
const hero1: Hero = new Hero('Gero',24,['Display of Power']);
const hero2: Hero = new Hero('Luka',22,['Anger Furry']);
jleague.addHero(hero1);
jleague.addHero(hero2);
jleague.doPresentation();