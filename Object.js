//Lesson Two
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };

  const crewCount = spaceship.numCrew;
  console.log(crewCount);
  const planetArray = spaceship.flightPath;
  console.log(planetArray);

  //Lesson Four
  let spaceshipBracketNotation = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  const isActive = spaceshipBracketNotation['Active Mission'];
  console.log(spaceshipBracketNotation[propName]);
  

  //Lesson Five
  let spaceship5 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  spaceship5.color = 'glorious gold';
  spaceship5.numEngines = 10;
  delete spaceship5["Secret Mission"];

  //Leson Six (Method)
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
    retreat: function() {
        console.log(retreatMessage);
    },
    takeOff () {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};

console.log(alienShip.retreat());
console.log(alienShip.takeOff());

//Lesson Seven (Nested Objects)
let spaceship7 = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  const capFave = spaceship7.crew.captain['favorite foods'][0];
  console.log(capFave);
  const firstPassenger = spaceship7.passengers[0];
  console.log(firstPassenger);

  //Lesson Eight 
  let spaceship8 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };

  const greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil';
  }

  const remotelyDisable = (obj) => {
    obj.disabled = true;
  }
   
  greenEnergy(spaceship8);
  remotelyDisable(spaceship8);
  console.log(spaceship8);

  //Lesson Nine
  let spaceship9 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
for (let crewMember in spaceship9.crew){
    console.log(`${crewMember}: ${spaceship9.crew[crewMember].name}`)
}

for (let crewMember in spaceship9.crew){
    console.log (`${crewMember}: ${spaceship9.crew[crewMember].degree}`)
}