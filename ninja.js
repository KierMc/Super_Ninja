
class Ninja{
    constructor(name, health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3
    }
    sayName(){
        console.log(this.name)
        return this;
    }
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
        return this;
    }
    drinkSake(){
        this.health+=10
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=wisdom;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake();
    }
}

const superSensei=new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();