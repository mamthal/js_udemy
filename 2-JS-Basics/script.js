// var name = 'Mamtha';
// console.log(name);
// var lastName = "Lakshmi";
// console.log(lastName);
// var age = 28;
// console.log(age);
//
// var fullAge = true;
// console.log(fullAge);
//
// console.log(name+age);
// console.log(age+age);
//
// var job,isMarried;
//
// console.log(job);
//
// job = 'teacher';
// isMarried = true;
//
// console.log(name+ ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');
//
// age = 'thirty six';
// job = 'librarian';
//
// console.log(name+ ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');
//
// var lastName = prompt('Whit is the last name?');
// console.log(lastName);
//
// alert(name+ ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');


//
// var now= 2018, birthYear = now - 26;
// birthYear =  now - 26 * 2;
// console.log(birthYear);
//
// var agea = 28, ageb = 28;
//
// agea = ageb = (3 + 5) * 4 - 6;
//
// agea++;
// agea *= 2;
// console.log(agea);
// console.log(ageb);


// var age  = 20;
//
// if (age <= 20)
// {
//   console.log("John is a teen");
// }
// else {
// console.log('John a man');
// }
//
// var job = "peacher";
//
// job = prompt('what he do?');
// switch(job) {
//   case 'teacher':
//   console.log('he teach');
//   break;
//   case 'driver':
//   console.log('he drive');
//   break;
//   default:
//   console.log('HE lazy');
// }
//

//challenge

var jHeight = 150, kHeight = 120, jAge = 48, kAge = 36;
var jScore = jHeight + 5* jAge, kScore = kHeight + 5 * kHeight;

if (jScore > kScore)
{
  console.log("j wins");
}
else if(jScore<kScore)
{
  console.log("k wins");
}
else {
  console.log("Draw");
}

var newFriendAge = prompt("Whats your age yo?"), newFriendHeight = prompt("Whats your height yo?");
FriendScore = parseInt(newFriendHeight) + parseInt(5*newFriendAge);

if (FriendScore > jScore && kScore)
{
  console.log("Friend Wins");
}
else if(FriendScore < jScore && kScore)
{
  if (jScore > kScore)
  {
    console.log("j wins");
  }
  else if(jScore<kScore)
  {
    console.log("k wins");
  }
  else {
    console.log("Draw");
  }
}
else {
  console.log("Draw by 3");
}
