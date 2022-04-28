class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("Name is: " + this.name);
    }

    showStats() {
        console.log("Stats: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(
            this.name + " consumed sake. Health is now: " + this.health
        );
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("Some wisdom...");
        this.drinkSake();
        console.log(
            "Jack Handy indicates the crows seemed to be calling Kaw's name."
        );
    }
}

console.log("\n  Upcoming: Chuck");
const ninja1 = new Ninja("Chuck", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log("\n  Upcoming: Mary");
const ninja2 = new Ninja("Mary", 14, 9, 5);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
