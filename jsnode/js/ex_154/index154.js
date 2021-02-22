player={
    name:null,
    energy:100,
    lives:3,
    loseEnergy:function(damage){  if (this.energy-damage<0){ this.loseLife(); }else{ this.energy=this.energy-damage}; },
    recoveryEnergy:function(energyUp){if(this.energy>100){this.recoverLife();} else{this.energy=this.energy+energyUp;} },
    loseLife:function(){this.lives=this.lives-1;},
    recoverLife:function(){ if(this.lives<100){this.lives=this.lives+1;}else{this.lives=100;}}
    
}

player.name="ben";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);

console.log(`The player name is  ${player.name} and  has ${player.energy}  and  has life ${player.lives} lifes`);
player.recoveryEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
console.log(`The player name is  ${player.name} and  has ${player.energy}  and  has life ${player.lives} lifes`);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`The player name is  ${player.name} and  has ${player.energy}  and  has life ${player.lives} lifes`)