//Lesson Two
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo (){
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };
  console.log(robot.provideInfo());

  //Lesson Three
  const robot3 = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
console.log(robot3.checkEnergy());

//Lesson Four
const robot4 = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot4._energyLevel = 'high';
  robot4.recharge();

  //Lesson Five (Get Method)
  const robot5 = {
    _model: '1E78V2',
  _energyLevel: 100,
    get energyLevel(){
        if (typeof this._energyLevel === 'number')
        {
            return `My current energy level is ${this._energyLevel}`;
        }
        else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
  };

  console.log(robot5.energyLevel);

  //Lesson 6 (Set Method)
  const robot6 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
        if (typeof num === 'number' && num>= 0){
            this._numOfSensors = num;
        }
        else{
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
  };
  robot6.numOfSensors = 100;
  console.log(robot6.numOfSensors);

  //Lesson Seven (Factory Function)
  const robotFactory  = (model,mobile) => {
    return {
        //model: 'model',
        model: model,
        mobile: mobile,
        beep(){
            console.log('Beep Boop');
        }
    }
  }
  const tinCan = robotFactory('P-500',true);
  tinCan.beep();
  console.log(tinCan.mobile);
  console.log(tinCan.model);
  console.log(tinCan);

  //Lesson Nine (Destructured Assignment)
  const robot9 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  robot9.functionality.beep();
  const {functionality } = robot9;
  functionality.beep();
  functionality.fireLaser();

  //Lesson Ten (Built-in Objects Methods)
  const robot10 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot10);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot10)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

//Project Meal Maker
const menu = {
    _meal: '',
    _price: 0,
    set meal (mealToCheck){
        if(typeof mealToCheck === 'string'){
            //return mealToCheck = this._meal;
            return  this._meal = mealToCheck;
        }
    },
    set price (priceToCheck){
        if (typeof priceToCheck === 'number'){
            //return priceToCheck = this._price;
            return  this._price = priceToCheck;
        }
    },
    get todaysSpecial (){
        if(this._meal && this._price){
            return `Today’s Special is ${this._meal} and the price is ${this._price}!`;
        }
        else {
            return 'Meal or price was not set correctly!';
        }
    }
}
menu.meal = 'Amala';
menu.price = 1000;
//console.log(menu);
console.log(menu.todaysSpecial);

//Project Two (Team Stats)
const team = {
    _players : [
      {firstName: 'Sheriff', lastName: 'Hammed', age:30},
      {firstName: 'Abolade', lastName: 'Samuel', age:35},
      {firstName: 'Adekunle', lastName: 'Bolanle', age:25}
    ],
    _games : [
  {opponent: 'RiversUnited', teamPoints: 50, opponentPoints:30},
  {opponent: 'KanoPillar', teamPoints: 45, opponentPoints:40},
  {opponent: 'ShootingStars', teamPoints: 48, opponentPoints:35},
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName,newLastName,newAge){
      let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame (newOpponent,newTeamPoints,newOpponentPoints){
   let game = {
     opponent : newOpponent,
     teamPoints : newTeamPoints,
     opponentPoints : newOpponentPoints
   };
   this.games.push(game);
  }
  };
  //console.log(team.addPlayer('Bugs','Bunny',76));
  //console.log(team.players);
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players);
  team.addGame('Titans',100,98);
  console.log(team.games);
  