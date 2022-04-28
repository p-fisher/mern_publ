class ninja {
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

console.log("\n  Upcoming: Chuck");
const ninja1 = new ninja("Chuck", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log("\n  Upcoming: Mary");
const ninja2 = new ninja("Mary", 10, 10, 6);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
