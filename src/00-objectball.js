function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Testing the gameObject function
console.log(gameObject());

function homeTeamName() {
    return gameObject().home.teamName;
}
console.log(homeTeamName()); // logs "Brooklyn Nets"

function awayTeamName() {
    return gameObject().away.teamName;
}
console.log(awayTeamName()); // logs "Charlotte Hornets"

function numPointsScored(playerName) {
    return gameObject().home.players[playerName]?.points || gameObject().away.players[playerName]?.points;
}
console.log(numPointsScored("Alan Anderson")); // logs 22
console.log(numPointsScored("Ben Gordon")); // logs 33

function shoeSize(playerName) {
    return gameObject().home.players[playerName]?.shoe || gameObject().away.players[playerName]?.shoe;
}
console.log(shoeSize("Reggie Evans")); // logs 14

function teamColors(teamName) {
    const teams = gameObject();
    if (teams.home.teamName === teamName) {
        return teams.home.colors;
    } else if (teams.away.teamName === teamName) {
        return teams.away.colors;
    } else {
        return [];
    }
}
console.log(teamColors("Brooklyn Nets")); // logs ["Black", "White"]
console.log(teamColors("Charlotte Hornets")); // logs ["Turquoise", "Purple"]

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
}
console.log(teamNames()); // logs ["Brooklyn Nets", "Charlotte Hornets"]

function playerNumbers(teamName) {
    const players = [];
    const teams = gameObject();
    if (teams.home.teamName === teamName) {
        for (let player in teams.home.players) {
            players.push(teams.home.players[player].number);
        }
    } else if (teams.away.teamName === teamName) {
        for (let player in teams.away.players) {
            players.push(teams.away.players[player].number);
        }
    }
    return players;
}
console.log(playerNumbers("Brooklyn Nets")); // logs [0, 30, 11, 1, 31]
console.log(playerNumbers("Charlotte Hornets")); // logs [4, 0, 2, 8, 33]

