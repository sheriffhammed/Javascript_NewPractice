//Less Two Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  console.log(isTwoPlusTwo.name); //This will return the original name of the function(checkThatTwoPlusTwoEqualsFourAMillionTimes)
  console.log('   ');
  console.log(':::::::::::::::::::Lesson Two Ends:::::::::::::::::::::::::::::');
  console.log('   ');
  //Lesson Three Sample1
  const higherOrderFunc = param => {
    param();
    return `I just invoked this FunctionName: ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
   
  console.log(higherOrderFunc(anotherFunc));
  console.log('   ');
  console.log(':::::::::::::::::::Lesson Three Sample1 Ends:::::::::::::::::::::::::::::');
  console.log('   ');
  //Another Sample with anonymous function
  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });
  console.log('   ');
  console.log(':::::::::::::::::::Lesson Three Sample2 Ends:::::::::::::::::::::::::::::');
  console.log('   ');
  //Lesson Three Exercises
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB =  func(val);
    if (checkA === checkB){
        return checkB
    }
    else{
        return 'inconsistent results';
    }
  }
  console.log(checkConsistentOutput(addTwo,10));
  console.log('   ');
  console.log(':::::::::::::::::::Lesson Three Exercise Ends:::::::::::::::::::::::::::::');
  console.log('   ');