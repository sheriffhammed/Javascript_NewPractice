//Lesson for .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit =>{
    console.log(`I want to eat a ${fruit}`);
})
console.log('   ');
console.log(':::::::::::::::::::.forEach() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Sample for .map() Method
const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(bigNumbers);
console.log('   ');
console.log(':::::::::::::::::::.Sample for .map() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');


//Exercise for for .map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal =>{
    return animal[0];
})
console.log(secretMessage.join(''));

const bigNumbersMap = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbersMap.map(number => {
    return (number/100);
})
console.log(smallNumbers);
console.log(bigNumbers);
console.log('   ');
console.log(':::::::::::::::::::.Exercise for .map() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Exercise for for .filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbersFilter = randomNumbers.filter(num => {
    return num < 250;
})
console.log(smallNumbersFilter);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
})
console.log(longFavoriteWords);
console.log('   ');
console.log(':::::::::::::::::::.Exercise for .filter() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Exercise for for .findIndex method
const animalsFindIndex = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animalsFindIndex.findIndex(animal => {
    if(animal === 'elephant')
    return animal;
})
console.log(foundAnimal);

const startsWithS = animalsFindIndex.findIndex(animal => {
    if (animal[0] === 's')
    return animal
})
console.log(startsWithS);
console.log('   ');
console.log(':::::::::::::::::::.Exercise for .findIndex() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Exercise for The .reduce() Method
const newNumbers = [1, 3, 5, 7];
//const newSum = newNumbers.reduce();
const newSum = newNumbers.reduce((accumulator, currentValue) =>{
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
},10)
console.log(newSum);
console.log(startsWithS);
console.log('   ');
console.log(':::::::::::::::::::.Exercise for .reduce() Method Ends:::::::::::::::::::::::::::::');
console.log('   ');

//Project for Iterator (Grammar Checker)
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords);

let count = 0;
storyWords.forEach(word => {
    count++;
});
console.log(count);
storyWords.filter(word => {
    /*if (word !== unnecessaryWord)
    return word;*/
    word !== unnecessaryWord;
});
storyWords.map(word => {
    if (word === misspelledWord)
    return 'beautiful';
    else
    return word;

});
const badWordIndex = storyWords.findIndex(word => {
    if (word === badWord)
    return word;
});
storyWords[80] = 'really';
const lengthCheck = storyWords.every(word => {
    return word.length < 10;
});
const longWords = storyWords.forEach(word => {
    //word.lenght > 10 && console.log(word);
    if (word.length > 10)
    return console.log(word);
  });
//console.log(storyWords.join(''));
console.log(lengthCheck);
console.log(badWordIndex);
console.log(longWords);
//console.log(storyWords);
console.log(storyWords.join(' '));

