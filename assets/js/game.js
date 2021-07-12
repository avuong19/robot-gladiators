var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    
    //repeat and execute as long as the enemy robot is alive
    while (enemyHealth>0 && playerHealth>0){
     
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or Skip to choose");
     
    if (promptFight === "skip" || promptFight==="SKIP"){
        //Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");
   
    //if yes (true), leave fight 
    if (confirmSkip){
        window.alert (playerName+ " has decided to skip this fight. Goodbye!");
    //Substract money from playerMoney for skipping
    playerMoney = playerMoney -10;
    console.log("playerMoney", playerMoney);
    break;
    }
}
    
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth variable
    enemyHealth = enemyHealth- playerAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
       playerName + " attack " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining" 
    );

    //check enemy health
    if (enemyHealth <=0){
        window.alert (enemyName+ " has died!");
        playerMoney = playerMoney +20;
        break;
    }

    else { 
        window.alert(enemyName+ " still has " + enemyHealth+" health left.")
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth variable
        playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName+ " attacked "+playerName+"."+ playerName+" now has "+playerHealth+ " health remaining."
    );

    if (playerHealth<=0){
        window.alert(playerName+ " has died!");
        break;
    }
    else {
        window.alert(playerName+" still has "+playerHealth+" health left.");
    }
}
};
  
var startGame =function(){
    //Reset player stats
    playerHealth =100;
    playerAttack = 10;
    playerMoney=10;
    for (var i=0; i< enemyNames.length; i++){
    if (playerHealth>0){
        window.alert('welcome to Robot Gladiators! Round ' + (i+1));
    
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    //call fight function with enemy robot 
    fight(enemyNames[i]);
    }

    else{
        window.alert("you have lost your robot in battle!Game Over!");
        break;
    }
}
 endGame();
};

var endGame = function(){
   //if the player is still alive, player wins!
   if (playerHealth>0) {
       window.alert("Great jpb! You've surived the game! You now have a score of" + playerMoney +".");
    
   }
   else{
       window.alert("you've lost your robot in battle.")
   }

   var playAgainConfirm= window.confirm ("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators!Come back soon!");
    }
};



//start game when the page loads
startGame();
 