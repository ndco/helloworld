//Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
var a = 10
var b = 7
var c = a + b
console.log(a+b);
console.log(c);


//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var myInterest = 
	[
		["skiing", "basketball", "soccer"],
		[3, 7, 8],
		["Watch Movie", "Listen to Music", "Programming"]
	]

console.log(myInterest);
console.log(myInterest[0] [0] + " and " + myInterest[2] [1]);


//Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
// var num = 99

if (num < 100) {
	alert(num + " is less than 100");
}
	else if (num > 100) {
		alert(num + " is greater than 100");
	}
	else if (num === 100) {
		alert(num + " equals 100");
	}
	else {
		alert("Invalid Character");
	}



// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function alertUserName(user) {
	return alert("You have entered username as " + user);
}

alertUserName("ND_SEO");


//Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function openDoor(door) {
	// Check if input is string or not
	if (typeof door === "string") {
		return alert("Wrong input, it must be number");
	}	

	// Check if the input is in range of 1 - 3
	if (door > 4 || door <= 0) {
		return alert("You have entered invalid door #");
	}

	// Reward for opening correct doors
	var	prize = door * 100;
	while (door < 4) {
		return alert("You have earned $" + prize);
	} 
}

openDoor("0");