//==========Exercise #1 ===========//


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}


//=======Exercise #2=========//

// I didn't see originally to us arrow functions, so I made each one twice
// Once each with and without using the arrow

function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = function(){
        return `You are a person and your name is ${this.name}.\nYou are ${this.age} years old.`
    }
    this.printMoreInfo = () => `Just trying an arrow function, ${this.name}.`
    this.happy_birthday = function(){
        let counter = 0;
        return function(){return counter++}
    } ()
    this.happy_arrow_day = (age) => {
        return age + 3
    } //this function shortcuts the 3 year aging process
}
let adam = new Person('Adam', 25)
let bradam = new Person('Bradam', 34)
console.log(adam.printInfo())
console.log(adam.printMoreInfo())
console.log(adam.happy_arrow_day(0))
console.log(bradam.printInfo())
console.log(adam.happy_birthday())
console.log(adam.happy_birthday())
console.log(adam.happy_birthday())
console.log(adam.happy_birthday())


// =============Exercise #3 ============//

function is_it_big(string){
    const long = string.length;
        if(long > 10){
            return "Big Word"
        } else {
            return "Small Number"
        }
    }
console.log(is_it_big('this is a long string'))
console.log(is_it_big('no'))

// Not sure if that counts as a promise function, so here's another one

var is_big = function(string){
    return new Promise(function(resolve,reject){
        const long = string.length
        if(long > 10){
            resolve("Big Word")
        } else {
            reject('Small Number')
        }
    })
}
console.log(is_big('very very biiiig'))
console.log(is_big('tiny'))

// Codewars question to take string input and change it to a number
// This was a new codewars question for me

var stringToNumber = function(str){
    return Number(str);
}
console.log(stringToNumber('64'))

// Codewars question to return the index of the string 'needle' in an array
// This is actually a new question as well

function findNeedle(haystack) {
    var x = haystack.indexOf('needle');
    return `found the needle at position ${x}`
  }
console.log(findNeedle(['fred',9,'word',6,3,'needle','noodle']))