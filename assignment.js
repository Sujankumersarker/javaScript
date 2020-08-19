
//feetToMile converter.

function feetToMile(feet){
    var mile = feet/5280;
    return mile
}
var firstFeet = feetToMile(5280);
console.log(firstFeet);
var scondFeet = feetToMile(15240);
console.log(scondFeet);


//woodCalculator
function woodCalculator(chair,table,bed){
    var chair = chair*2;
    var table = table*3;
    var bed = bed*5;
    return chair+table+bed;
    
}
var chair = woodCalculator(2,3,4);
var table =woodCalculator(2,3,4);
var bed =woodCalculator(2,3,4);
var total = chair+table+bed;
console.log(chair);
console.log(table);
console.log(bed);
console.log(total);















//brickCalculator

function brickCalculator(floor) {  
    let totalBrick;
    if (floor <= 10) {
        totalBrick = floor*1500;
      } else if (floor <= 20) {
        totalBrick = floor*1200;
      } else if (floor > 20) {
        totalBrick = floor*1000;
      }
      else {
          totalBrick= floor*0;
      }
      return totalBrick;
}
const totalBrick = brickCalculator(1);
console.log(totalBrick);


// tinyFriend
function tinyFriend(friendList)
{
    let smallestLength = 999;
    let tinyFriendName;

    for (let i=0; i<friendList.length; i++)
    {
        if(smallestLength>friendList[i].length)
        {
            tinyFriendName = friendList[i];
            smallestLength = friendList[i].length;
        }
    }
    return tinyFriendName;
}
let smallName = tinyFriend(['sujan', 'ram', 'prodeep'])
console.log (smallName);


