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
//
// var jHeight = 150, kHeight = 120, jAge = 48, kAge = 36;
// var jScore = jHeight + 5* jAge, kScore = kHeight + 5 * kHeight;
//
// if (jScore > kScore)
// {
//   console.log("j wins");
// }
// else if(jScore<kScore)
// {
//   console.log("k wins");
// }
// else {
//   console.log("Draw");
// }
//
// var newFriendAge = prompt("Whats your age yo?"), newFriendHeight = prompt("Whats your height yo?");
// FriendScore = parseInt(newFriendHeight) + parseInt(5*newFriendAge);
//
// if (FriendScore > jScore && kScore)
// {
//   console.log("Friend Wins");
// }
// else if(FriendScore < jScore && kScore)
// {
//   if (jScore > kScore)
//   {
//     console.log("j wins");
//   }
//   else if(jScore<kScore)
//   {
//     console.log("k wins");
//   }
//   else {
//     console.log("Draw");
//   }
// }
// else {
//   console.log("Draw by 3");
// }
// Functions


// // array
//
// var names = ['John', 'Jane' , 'Mark'];
// var years = new Array(1990,1976,1968);
//
// // console.log(names[0]);
//
// names[1] = 'Ben';
// console.log(names);
//
// console.log(names);
//
// var john = ['John', 'Smith', 1990, 'teacher' , false];
//
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();
// console.log(john);
//
// alert(john.indexOf('Smith'));
//
// if(john.indexOf('actor') === -1)
// {
//   console.log('John is not a teacher');
// }
//
//

// Obj


// coding challenge 2


var ages = [1957, 1965, 1994, 2013];
var agescopy = new Array();

for(i=0;i<ages.length;i++)
{
  agescopy[i]= ages[i];
}

for(i=0; i<ages.length;i++)
{
  if((2018 - ages[i]) >= 18)
  {
    console.log('Major');
  }
  else
  {
    console.log('Minor');
  }
}
function printFullAge(ages)
{
  var newages = new Array();
  var oput = new Array(ages.length);


  for (i=0; i<ages.length; i++)
  {
    newages[i] = ages[i];
    if((2018 - ages[i]) >= 18)
    {
      oput[i] = 'true';
    }
    else
    {
      oput[i] = 'false';
    }

  }
  return oput;
}
var ages2 = [1987, 1968, 1979, 2016]
var full_1 = printFullAge(ages);
var full_2 = printFullAge(ages2);

console.log(full_1);
console.log(full_2);
