let gameNum = 25;
let userNum = prompt("Guess the number : ");
while(userNum != gameNum)
{
 userNum = prompt("You enters wrong number. Uuess again : ");
}
console.log("Congratualations, you enter the right number ");