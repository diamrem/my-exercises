var randomS1=Math.floor(Math.random()*5);
var location1=randomS1;
var location2=location1+1;
var location3=location2+1;
// console.log(location1,location2,location3);
var guess;//действие пользователя 
var guesses=0;//кол-во ударов пользователя
var hits=0;// положительные удары
var beat=false;
while(beat==false){
guess=prompt("Готовы потопить корабль? Введите значение(цифра от 0 до 10");
if(guess<0 || guess>10){
    console.log("error");
}
else {
    guesses=guesses+1;
if (guess==location1 || guess==location2 ||guess==location3){
 
    hits=hits+1;
    if(hits==3){
        beat=true; 
          console.log("Ураааа! побил!");
    }
}
}
}
