//Lesson One
const hobbies = ['firstStr','secondStr','thirdStr'];
console.log(`All Content is ${hobbies} while first value is ${hobbies[0]}`);

//Lesson Four
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

console.log(groceryList);

//Lesson Five
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments = ['Mayo'];

utensils[0] = 'Plate';
console.log(condiments);
console.log(utensils);

//lesson Seven
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('Clean your','Take a Shower');
console.log(`${chores}`);

//Lesson Eight
const choresPop = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
console.log(choresPop);
choresPop.pop();
console.log(choresPop);

//Lesson Ten
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
    arr.push('New Value');
  }
  changeArr(concept)
  console.log(concept);

  //Project Secret Message
  let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
  console.log(secretMessage);
  console.log(secretMessage.length)
  secretMessage.pop();
  secretMessage.push('to','Program');
  secretMessage[7] = 'right';
  secretMessage.shift();
  secretMessage.unshift('Programming');
  secretMessage.splice(6,5,'know');
  
  console.log(secretMessage.length)
  console.log(secretMessage.join(' '));