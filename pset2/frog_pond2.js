const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];	
let userInput = prompt("Input a number between 0 and 4");
userInput = userInput % 4;
print(activities[userInput]);