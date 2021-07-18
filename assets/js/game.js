
var fightOrSkip = function () {
    //ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter FIGHT or Skip to choose");
    //Enter the conditional recursive function call here!
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
      }

    promptFight = promptFight.toLowerCase ();
    //if player picks "skip" confirm and stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerInfo.playerMoney = playerInfo.money - 10;
          return true;
          shop();
        }
      }
      return false 
    }


var fight = function(enemy) {
    
    //repeat and execute as long as the enemy robot is alive
    while (enemy.health>0 && playerInfo.health>0){
    if( fightOrSkip()){
        break
    }
}
    
    //Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console so we know that it worked
    console.log(
       playerInfo.name + " attack " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining" 
    );

    //check enemy health
    if (enemy.health <=0){
        window.alert (enemy.name+ " has died!");
        playerInfo.money = playerInfo.money +20;
        
    }

    else { 
        window.alert(enemy.name+ " still has " + enemy.health+" health left.")
    }

    //Subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health variable
       var damage = randomNumber (enemy.attack-3, enemy.attack);
       
       playerInfo.health=Math.max(0, playerInfo.health-damage);

    //Log a resulting message to the console so we know that it worked
    console.log(
        enemy.name+ " attacked "+playerInfo.name+"."+ playerInfo.name+" now has "+playerInfo.health+ " health remaining."
    );

    if (playerInfo.health<=0){
        window.alert(playerInfo.name+ " has died!");
        
    }
    else {
        window.alert(playerInfo.name+" still has "+playerInfo.health+" health left.");
    }
}
;
  
var startGame =function(){
    //Reset player stats
    playerInfo.reset();
    
    for (var i=0; i< enemyInfo.length; i++){
    if (playerInfo.health>0){
        window.alert("welcome to Robot Gladiators! Round " + (i+1));
        debugger;
    
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health= randomNumber(40,60);
    //call fight function with enemy robot 
    fight(pickedEnemyObj);

    //if we're not at the last enemy in the array
    if(playerInfo.health>0 && i<enemyInfo.length - 1){
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");
        //if yes, take them to the store() function
        if (storeConfirm){
        shop();}
    }
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
   if (playerInfo.health>0) {
       window.alert("Great jpb! You've surived the game! You now have a score of" + playerInfo.money +".");
    
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
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt =window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL','UPGRADE' or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
            playerInfo.refillHealth ();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack ();
            break;
        case "leave":
        case "LEAVE":
            window.alert ("Leaving the store");
            //do nohting, so function will end
            break;
        default:
            window.alert("You did not pick the right option.Try again.") ;
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//function to generate a random numeric value
var randomNumber =function(min,max){
    var value =Math.floor(Math.random()*(max-min+1))+min;
    return value;
};

//function to set name
var getPlayerName =function(){
    var name ="";
    while (name === ""  || name === null){
        name=prompt ("WHat is your robot's name?");
    }

    console.log ("Your Robot's name is "+ name);
    return name;
};

var playerInfo ={
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money:10,
    reset: function(){
        this.health = 100;
        this.money =10;
        this.attack =10;
    },
    refillHealth: function(){
        if (this.money >=7){
            window.alert ("Refilling player's health by 20 for 7 dollars");
        
        this.health +=20;
        this.money -=7;
        }
        else {window.alert("You don't have enough money");}
    },
    upgradeAttack: function(){
        if (this.money>= 7){
        window.alert ("Upgrading player's attack by 6 for 7 dollars");
        this.attack +=6;
        this.money -=7;
        }
        else { window.alert ("You don't have enough money");}
    }
    
};

var enemyInfo=[
    {
        name:"Roborto",
        attack:randomNumber (10,14)
    }, 
    {
        name:"Amy Andtroid",
        attack: randomNumber (10,14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10,14)
    }
];


//start game when the page loads
startGame();
 