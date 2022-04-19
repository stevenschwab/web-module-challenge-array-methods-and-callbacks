const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const filter2014FinalHomeTeam = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === "Final");
});
console.log(filter2014FinalHomeTeam[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
const filter2014FinalAwayTeam = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === "Final");
});
console.log(filter2014FinalAwayTeam[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
const filter2014FinalHomeTeamGoals = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === "Final");
});
console.log(filter2014FinalHomeTeamGoals[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
const filter2014FinalAwayTeamGoals = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === "Final");
});
console.log(filter2014FinalAwayTeamGoals[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
const filter2014FinalWinner = fifaData.filter((game) => {
    return (game.Year === 2014 && game.Stage === "Final");
});
console.log(filter2014FinalWinner[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(anArray) {
    const finalArray = anArray.filter((game) => {
        return (game.Stage === "Final");
    });
    return finalArray;
 }
console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(anArray, callback) {
    const years = callback(anArray).map((game) => {
        return game.Year;
    });
    return years;
}
console.log(getYears(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(anArray, callback) {
    const winners = callback(anArray).map(game => {
        if (game['Home Team Goals'] > game['Away Team Goals']) {
            return game['Home Team Name'];
        } else {
            return game['Away Team Name'];
        }
    });
    return winners;
}
console.log(getWinners(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(anArray, callback, callback2, callback3) {
    const winnersByYear = callback(anArray).map((game, index) => {
        return `In ${callback2(anArray, callback)[index]}, ${callback3(anArray, callback)[index]} won the world cup!`;
    });
    return winnersByYear;
}
console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive a callback function in a parameter that will take getFinals (from task 2) as an argument and ensure you pass in the fifaData as its argument
 
 💡 HINT: Example of invocation: getAverageGoals(getFinals(fifaData));

 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
 
*/

function getAverageGoals(callback) {
    const averageGoals = callback.reduce((total, game) => {
        let sum = total + game['Home Team Goals'] + game['Away Team Goals'];
        return sum;
    }, 0);
    return (averageGoals / callback.length).toFixed(2);
 }
console.log(getAverageGoals(getFinals(fifaData)));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(param1, param2) {
    const winners = getFinals(param1).map(game => {
        if (game['Home Team Goals'] > game['Away Team Goals']) {
            return game['Home Team Initials'];
        } else {
            return game['Away Team Initials'];
        }
    });
    const countryWins = winners.reduce((total, winner) => {
        if (winner === param2) {
            return total + 1;
        } else {
            return total;
        }
    }, 0);
    return countryWins;
}
console.log(getCountryWins(fifaData, 'ARG'));



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    const totalHomeGoals = getFinals(data).reduce((total, game) => {
        return {
            'Team': game['Home Team Name'],
            'Goals': total + game['Home Team Goals']
        }
    }, 0);
    return totalHomeGoals;
}
console.log(getGoals(fifaData));


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
