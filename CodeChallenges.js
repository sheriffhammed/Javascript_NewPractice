//reverseArray()
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reverseArray = (arrayArg) => {
    return console.log(arrayArg.reverse());
};
reverseArray(sentence);
console.log('   ');
console.log(':::::::::::::::::::.reverseArray Ends:::::::::::::::::::::::::::::');
console.log('   ');

//greetAliens
const greetAliens = (arrayArg) => {
    for(let i= 0; i < arrayArg.length; i++){
        //return console.log(`Oh powerful ${arrayArg[i]}, we humans offer our unconditional surrender!`);
        console.log(`Oh powerful ${arrayArg[i]}, we humans offer our unconditional surrender!`);
        
    }
};
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);
console.log('   ');
console.log(':::::::::::::::::::.greetAliens Ends:::::::::::::::::::::::::::::');
console.log('   ');

//convertToBaby
const convertToBaby = (arrayArg) => {
    const newArray = [];
    for (let i=0; i < arrayArg.length; i++){
        //console.log(`Baby ${arrayArg[i]}`);
        newArray.push(`Baby ${arrayArg[i]}`);
        
    }
    return newArray;
};
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));

console.log('   ');
console.log(':::::::::::::::::::.convertToBaby Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Fix Error
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            console.log(`Numer: ${number}`);
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
                  console.log(`J: ${j}, Number: ${number}`);
            }
            results.push(j);
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) ;
console.log('   ');
console.log(':::::::::::::::::::.Fixerror Ends:::::::::::::::::::::::::::::');
console.log('   ');

// declineEverything() and acceptEverything()
//Solution1
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const declineEverything = (arrayArg) => {
    arrayArg.forEach(politelyDecline);
}
//Using for Loop 
const declineEverythingL = (arrayArg) => {
    for (let i=0; i < arrayArg.length; i++){
        politelyDecline(arrayArg[i]);
    }
}
console.log(declineEverything(veggies));
console.log(declineEverythingL(veggies));
console.log(':::::::::::::::::::SolutionOne Ends:::::::::::::::::::::::::::::');
//Solutions Two
const acceptEverything = (arrayArg) => {
    arrayArg.forEach(element => {
        console.log(`Ok, I guess I will eat some ${element}.`);
    })
}
acceptEverything(veggies);
console.log('   ');
console.log(':::::::::::::::::::.declineEverything() and acceptEverything() Ends:::::::::::::::::::::::::::::');
console.log('   ');
//squareNums()
const numArray = [2, 7, 9, 171, 52, 33, 14];
const squareNums1 = (arrayArg) => arrayArg.map(e => {
    return e * e})
const squareNums = arr => arr.map(element => element * element)
console.log(squareNums(numArray));
console.log(squareNums1(numArray));
console.log('   ');
console.log(':::::::::::::::::::.squareNums() Ends:::::::::::::::::::::::::::::');
console.log('   ');
//shoutGreetings
const shoutGreetings = (arrayArg) => arrayArg.map(element => {
        return element.toUpperCase() + '!';
    })

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings));
console.log('   ');
console.log(':::::::::::::::::::.shoutGreetings() Ends:::::::::::::::::::::::::::::');
console.log('   ');

//sortYears
const sortYears = (arrayArg) => arrayArg.sort()
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
console.log(sortYears(years));
console.log('   ');
console.log(':::::::::::::::::::.sortYears() Ends:::::::::::::::::::::::::::::');
console.log('   ');
//justCoolStuff
const justCoolStuff = (arrayArg1,arrayArg2) => 
    arrayArg1.filter(element => arrayArg2.includes(element))

//Second Solution
/*function justCoolStuff(firstArray, secondArray) {
    function isInSecondArray(item){
        for(let i = 0; i<secondArray.length; i++){
            if (secondArray[i] === item){
                return true
            }
        }
        return false 
        }
        return firstArray.filter(isInSecondArray)
  }
*/
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
console.log(justCoolStuff(myStuff, coolStuff));
console.log('   ');
console.log(':::::::::::::::::::.justCoolStuff() Ends:::::::::::::::::::::::::::::');
console.log('   ');

//isTheDinnerVegan
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
//const dinner = [{name: 'hamburger', source: 'Plant'}, {name: 'cheese', source: 'Plant'}];
//First Solution
/*const isTheDinnerVegan = (arrayArg) => arrayArg['source'] === 'Plant';
console.log(dinner.every(isTheDinnerVegan));*/
//Second Solution
const isTheDinnerVegan = (arrayArg) => arrayArg.every(element => element['source'] === 'Plant');
console.log(isTheDinnerVegan(dinner));
//Every Method Sample
/*const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 40];
console.log(array1.every(isBelowThreshold));
*/
console.log('   ');
console.log(':::::::::::::::::::.isTheDinnerVegan() Ends:::::::::::::::::::::::::::::');
console.log('   ');
//sortSpeciesByTeeth
//const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
//const sortSpeciesByTeeth = (arrayArg) => arrayArg.sort(arrayArg['numTeeth']);
//const sortSpeciesByTeeth = (arrayArg) => arrayArg.sort(arrayArg.every(element => element['numTeeth']));
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray));
console.log('   ');
console.log(':::::::::::::::::::.sortSpeciesByTeeth() Ends:::::::::::::::::::::::::::::');
console.log('   ');

//findMyKeys

const findMyKeys = (arrayArg) => arrayArg.findIndex(element => element === 'keys');
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
console.log('   ');
console.log(':::::::::::::::::::.findMyKeys() Ends:::::::::::::::::::::::::::::');
console.log('   ');
//dogFactory()
const dogFactory = (name,breed,weight) => {
    return obj = {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name(){ return this._name},
        get breed(){return this._breed},
        get weight(){return this._breed},
        set name(nameToCheck){ return this._name = nameToCheck;},
        set breed(breedToCheck){ return this._breed = breedToCheck;},
        set weight(weightToCheck){return this._weight = weightToCheck;},
        bark(){
            return 'ruff! ruff!';
        },
        eatTooManyTreats(){
            this._weight = this._weight + 1;
        }
    };
};
const result = dogFactory('Joe', 'Pug', 27);
console.log(result);
console.log('   ');
console.log(':::::::::::::::::::.dogFactory() Ends:::::::::::::::::::::::::::::');
console.log('   ');