//Lesson Six
const bobsFollowers = ['Sola','Tola','Kehinde','Taiye'];
const tinasFollowers  = ['Seun',,'Kehinde','Taiye'];
const mutualFollowers = [];
for (let bobsIndex = 0; bobsIndex < bobsFollowers.length; bobsIndex++)
{
    for (let tinaIndex = 0; tinaIndex < tinasFollowers.length; tinaIndex++)
    {
        if (tinasFollowers[tinaIndex] === bobsFollowers[bobsIndex])
        {
           mutualFollowers.push(tinasFollowers[tinaIndex]);
        }
    }
}

console.log(`Mutual Friends between Bobs and Tina are ${mutualFollowers}`);

//Lesson Nine
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i =0; i<rapperArray.length; i++)
{
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.')
    {
        break;
    }
    
}
console.log(`And if you don't know, now you know.`);

//Whale Project
//const input = 'turpentine and turtles';
const input = 'full stack engineer';
const vowels = ['a','e','i','o','u'];
const resultArray = [];
//Using For Loop Statement
/*for (let inputIndex=0; inputIndex<input.length; inputIndex++)
{
    //console.log(input[inputIndex]);
    for (let vowelsIndex=0; vowelsIndex<vowels.length; vowelsIndex++)
    {
        //console.log(vowels[vowelsIndex]);
        if (input[inputIndex] === vowels[vowelsIndex])
        {
            console.log(input[inputIndex]);
            resultArray.push(input[inputIndex]);
            if (input[inputIndex] === 'u' || input[inputIndex] === 'e')
            {
                resultArray.push(input[inputIndex]);
            }
        }
    }
}*/
//Using For of Loop Statement
for (let inputIndex of input){
    //console.log(inputIndex);
    for (vowelIndex of vowels)
    {
        //console.log(vowelIndex);
        if (inputIndex === vowelIndex)
        {
            resultArray.push(inputIndex)
            if(inputIndex === 'u' || inputIndex === 'e')
            {
                resultArray.push(inputIndex);
            }
        }
    }
}
console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
//console.log(resultString.toUpperCase());
console.log(resultString);