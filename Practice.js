/*Practise 2 
Write a function subLength() that takes 2 parameters, a string and a single character. The function should 
search the string for the two occurrences of the character and return the length between them including the 
2 characters. If there are less than 2 or more than 2 occurrences of the character the function should 
return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/
// Write function below
/*const subLength = (str,char) => {
  
}*/

const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};
console.log(subLength('Saturday', 'a')); // returns 6
/*subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0*/
console.log('   ');
console.log(':::::::::::::::::::Practice Two Ends:::::::::::::::::::::::::::::');
console.log('   ');
/* Parctise 3
Write a function groceries() that takes an array of object literals of grocery items. The function should
 return a string with each item separated by a comma except the last two items should be separated by 
 the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
Examples:
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
 groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/
//My Code
/*const groceries = (arrayArg) => arrayArg.map(Element => {
    let i = 0;
    while (i < arrayArg.length - 1 ){
        return `${Element},`;
    }
});
*/
const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }
    
    return listString;
  }
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));