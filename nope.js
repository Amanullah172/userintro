
var username = prompt ("Enter your name");
alert ("wellcome " + username + "!")

var userage = prompt ("Enter your Age");
if (userage >=18 && userage <60 ){
    alert ('You are an adult')
}
else if (userage <18){
    alert ('you are minor')
}
else if (userage >60){
    alert ('you are senior citizen')
}
else {
    alert('You are good')
}
var student = prompt ('Enter your identification  Student or other ');
var userage = prompt ('Enter your age');
var dailyuser = prompt ('Are you daily customer or want spent $100');
if (student = 'student' && userage >60){
   if (dailyuser = 'daily customer' || dailyuser =='spent $100' ){
      alert ('You got such agreat discount')
   }
}else {
    alert ('No discount available')
}

// var usernumber = prompt ('enter number');
// if (username =0){
//     alert ('Given number is zero')
// }
// else if (usernumber =-1,-2,-3,-4,-5,-6,-7,8,9,10){
//     alert('NEgative number detected')
// }
// else if (usernumber = 2,4,6,8,10,12,14,16,18,20){
//     alert('Given number is Even')
// }else if (usernumber =1,3,5,7,9,11,13,15,17,19,21){
//     alert ('Given number is Odd')
// }
// else {
//     alert ('Finished')
// }
