const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("wWhich meal is your favourite? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? ", (answer7) => {
         console.log(` ${answer1} likes to ${answer2} while listing to ${answer3}. Your favorite meal is ${answer4} and the favorite thing about the meal being ${answer5}.You love to plat ${answer6} and your superpower is ${answer7}`);
    rl.close()
            });
          });
        });
      });
    });
  }); 
});













// rl.question("ssse :)", (answer2) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer1}`);

// rl.question("What's an activity you like doing", (answer2) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer2}`);
  
// rl.close();
  

//console.log(`${answer1} ${answer2}`)


// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!