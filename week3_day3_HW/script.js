/**JavaScript Classes HW 2
 * June 14, 2023
 */

//Govenor class with static properties and methods
class Governor{
    static stateGovernorOver = "Ohio";
    static governorTitle = "Governor";
    static nameOfGovernor = "Mike DeWine";
    static lieutinantGovernor = "Jon Husted";
    static partyOfGovernor = "Republican";

    static veto (bill){
        return (bill.toString() + ": Vetoed ");
    }

    static signBillInToLaw(bill){
        return(bill.toString() + ": Signed into Law");

    }

    static stateOfTheStateAddress(date){
        return("State of the State Address on: " + date);
    }
}

console.log(Governor.governorTitle, Governor.nameOfGovernor, "of", Governor.stateGovernorOver);
console.log("Lieutinant Governor", Governor.lieutinantGovernor)
console.log("Party Affliation of Governor:", Governor.partyOfGovernor);
console.log(Governor.veto("Bill ORC 3112 Issue 45: Free icecream at all government buildings clause"));
console.log(Governor.signBillInToLaw("Bill ORC 1234 Civil Code Issue 12: Free dairy-free icecream at all state parks clause"));
console.log(Governor.stateOfTheStateAddress("January 31, 2023"));
console.log("*********************************************************\n");


//Person class, with constructor with at least three properties, and three methods
class Person{
    constructor(firstName, lastName, middleName = "", year, month, day, age){
        this.nameGiven = {
            firstName: firstName,
            lastName: lastName,
            middleName: middleName
        };
        this.dob = {
            year: year,
            month: month,
            day: day
        };
        this.age = age;

    }

    breathe(){
        console.log("\*Breathe\*");
    }

    eat(){
        console.log("\-Eating or being fed\-");
    }

    sleep(durationHrs){
        console.log(`~asleep for ${durationHrs} hours~`);
    }

   
}

//PostalWorker class that inherits from Person class
class PostalWorker extends Person{
    //properties
    profession = "PostalWorker";
    mailSorted = false;
    truckPacked = false;
    housesDelievedTo = [];

    //methods
    //mail is sorted and set to true
    sortMail(){
        this.mailSorted = true;
        console.log("Mail has been sorted!");
    }

    //truck is packed is ready to begin the day of delivery of mail
    packTruck(){
        this.truckPacked = true;
        console.log("Truck has been packed and is ready to drive!");

    }

    //mail delieved, and house delieved to added to array
    deliverMail(houseAddress){
        this.housesDelievedTo.push(houseAddress);
        console.log(`Mail has been delievered to: ${houseAddress}`);

    }
    //end of shirt, reset the properties for the day
    endShift(){
        this.mailSorted = false;
        this.truckPacked = false;
        this.housesDelievedTo = [];
        console.log(`Mail shall once again be delivered someday!`);


    }
}

//creation of postal workers and console log of all methods 
const postalWorker_0 = new PostalWorker("Hamlet", "Prince of Denmark", "", 1406, "June", 15, 25);
console.log(postalWorker_0);

console.log("________________Person Habits___________________");
postalWorker_0.breathe();
postalWorker_0.eat();
postalWorker_0.sleep(7);
console.log("___________________________________");


postalWorker_0.sortMail();
console.log(postalWorker_0);
console.log("___________________________________");

postalWorker_0.packTruck();
console.log(postalWorker_0);
console.log("___________________________________");


postalWorker_0.deliverMail("1500 Baker St.");
console.log(postalWorker_0);
console.log("___________________________________");

postalWorker_0.endShift();
console.log(postalWorker_0);

console.log("+++++++++++++++++++++++++++++++++++++++++++++");

const postalWorker_1 = new PostalWorker("Itachi", "Uchiya", "20", 230, "August", 7, "quite old");
console.log(postalWorker_1);

console.log("________________Person Habits___________________");
postalWorker_1.breathe();
postalWorker_1.eat();
postalWorker_1.sleep(15);
console.log("___________________________________");


postalWorker_1.sortMail();
console.log(postalWorker_1);
console.log("___________________________________");

postalWorker_1.packTruck();
console.log(postalWorker_1);
console.log("___________________________________");


postalWorker_1.deliverMail("295 Konoha Ave.");
console.log(postalWorker_1);
console.log("___________________________________");

postalWorker_1.endShift();
console.log(postalWorker_1);


console.log("****************************************************");

//Chef class that inherits from Person
class Chef extends Person{
    profession = "Chef";
    //methods
    //buyFood: provided an array, prints off the list, separated by a comma and a space
    buyFood(foodToBuy){
       console.log(`Make sure to buy\-\n\t Shopping List: ${foodToBuy.join(", ")}`)

    }

    prepareFood(){
        console.log("Busy cooking and creating a masterpiece!")

    }

    serveFood(){
        console.log("Order up!");

    }

    cleanKitchen(){
        console.log("Cleaning kitchen...all clean!");

    }
}


//instantiation of chef objects and logging their methods
const chef_0 = new Chef("Marcus", "Bennings", "Mars", 1987, "October", 23, 35);
console.log(chef_0);

console.log("________________Person Habits___________________");
chef_0.breathe();
chef_0.eat();
chef_0.sleep(5);
console.log("___________________________________");

chef_0.buyFood(["cucumber", "tomatoes", "vegannaise", "vegan gluten free bread", "tofu", "vegan bbq sauce", "pineapple"]);
chef_0.prepareFood();
chef_0.serveFood();
chef_0.cleanKitchen();
console.log("+++++++++++++++++++++++++++++++++++++++++++++");

const chef_1 = new Chef("Patricia", "Moore", "Pluto", 1980, "May", 8, 43);
console.log(chef_1);

console.log("________________Person Habits___________________");
chef_1.breathe();
chef_1.eat();
chef_1.sleep(4);
console.log("___________________________________");

chef_1.buyFood(["steak", "A1 Sauce", "onions", "bell peppers", "fresh sweet corn", "hamburger buns", "watermelon"]);
chef_1.prepareFood();
chef_1.serveFood();
chef_1.cleanKitchen();


