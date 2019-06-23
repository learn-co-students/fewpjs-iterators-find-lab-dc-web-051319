function superbowlWin(array) {
    let winningGame = array.find( game => 
        game.result === "W" 
    );
    if (winningGame === undefined)
        return undefined;
    else
        return winningGame.year;
}
