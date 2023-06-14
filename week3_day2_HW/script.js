/**JavaScript Classes HW */

/**Cat class
 * at least 3 properties
 * at least 3 methods
 * two instances of cats
 * log both to see properties
 * invoke each method from both instances (two)
 */
//methods: purr, giveAMouse, meow
//properties: breed, color, age, name

class Cat{
    deservesATreat = false;
    lovesCatGrass = true;
    hatesWater = true;
    constructor(name, breed, color, age){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.mouseCount = 0;
    }

    purr(){
        console.log(`${this.name} is ~purring~`)
    }

    giveAMouse(){
        this.mouseCount+=1;
        console.log(`${this.name} has given you a gift of a mouse on your doorstep.  You have a total of ${this.mouseCount} mice.`)
    }

    meow(){
        console.log("Meoooow!");
    }


}

const cat_0 = new Cat("Scottie", "Scottish Fold", "grey", 5);
console.log(cat_0);

cat_0.purr();
cat_0.giveAMouse();
cat_0.meow();
console.log("***********************************************\n")

const cat_1 = new Cat("Benny", "Ragdoll", "white grey and brown", 0.5);
console.log(cat_1);

cat_1.purr();
cat_1.giveAMouse();
cat_1.meow();

console.log("***********************************************\n")

/**3 properties
 * 3 methods
 * instantiates 2 arrays of 3 pirates 
 * ships should be named after famous shipes
 * loop over each array and print 3 properites of each pirate
 * 
 */
class Pirate{
    constructor(eyePatch, pegLeg, title, name){
        this.name = name;
        this.title = title;
        this.eyePatch = eyePatch;
        this.pegLeg = pegLeg;

    };

    shipWreck(){
        console.log(`Abandon ship, live to die another day!  Our ship will live again.  Overboard ye all!  I best get a move on it or me name ait\'t ${this.name}.`);
        if(this.title.toLowerCase() === "captain"){
            console.log(`I sure am not going down with the ship, I would kill anybody here if they even try!  Jump overboard ye all, feed the sharks before I go down to join ye!  Ha ha ha!`)
        } else{
            console.log(`Only the Captain may go down with the ship, and I sure ain\'t no captain!`);
            if(this.title.toLowerCase() === "first mate"  || this.title.toLowerCase() === "quartermaster"){
                console.log(`Well...at least not yet.  I won\'t be a captain of no sunken ship!`);

            }
        }

    };

    swabTheDeck(){
        if(this.title.toLowerCase() !== "captain" && this.title.toLowerCase() !== "first mate" && this.title.toLowerCase() !== "quartermaster"){
            console.log(`You know what the Quartermaster said, he said to me \"The Captain orders ye to swap the deck.  I want no lip from you ${this.title} ${this.name}, ye hear me?\"  like I\'m some halfwit maggot on me first day!`);
        } else{
            console.log(`Me thinks it beit time for these land lovin Shipmates to swab the decks.  On the ${this.title}\'s orders.  Hear ye all!  Get to swabbin.`);

        }
    };

    pillage(){
        console.log("Pillaging brings me the greatest glee!!!!");
    }
}

//function with for loop to loop through each of the boat array provided and print their properties and methods
function piratePropertiesOnBoard (boat){
    for(let pirate of boat){
        console.log(`${pirate.title} ${pirate.name}- eyepatch is: ${pirate.eyePatch} and peg leg is: ${pirate.pegLeg}`);
        pirate.shipWreck();
        pirate.swabTheDeck();
        pirate.pillage();
        console.log("*********************************************************")
    }
}

//help with titles of people on board of pirate ships: http://www.thewayofthepirates.com/pirate-life/who-is-who/
const blackPearl = [
    new Pirate(false, true, "Boatswain", "Beauford"),
    new Pirate(true, true, "Quartermaster", "Gillian"),
    new Pirate(false, false, "Cook", "Robbie")
];

piratePropertiesOnBoard(blackPearl);

const theLeviathan = [
    new Pirate(true, true, "First Mate", "Killian"),
    new Pirate(true, false, "Gunner", "Canary"),
    new Pirate(false, false, "Captain", "Pennyworth")

];

piratePropertiesOnBoard(theLeviathan);

const queenAnnesRevenge = [
    new Pirate(false, false, "Captain", "Blackbeard"),
    new Pirate(true, false, "Shipmate", "Jimmy"),
    new Pirate(false, false, "Sailing Master", "Ned")

];

//piratePropertiesOnBoard(queenAnnesRevenge);




