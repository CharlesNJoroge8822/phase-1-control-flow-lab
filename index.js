function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'; 
    // Changes 'Nope, sorry. That’s too expensive.' to No can do
  }
  //write your code here
}


function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'; 
    // Changes from 'Welcome to NYC!' to 'Ok, sounds good.'
  } else {
    return 'No go.'; 
    // changes to 'no go' 
  }
  //write your code here
}


function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.'; // Changes to return 'Bye.' for any other tip
  }
  //write your code here
}


// Example usage:
console.log(scuberGreetingForFeet(300)); // 'This one is on me!'
console.log(ternaryCheckCity('Cuba')); // 'No go.'
console.log(switchOnCharmFromTip('generous')); // 'Thank you so much.'
