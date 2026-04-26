function getMilk(money) {   
  console.log("leaveHouse");

  // Navigate to Store
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  // Purchase Logic
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " of milk");

  // Navigate Home
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  
  console.log("enterHouse");
}

var money = prompt("How much money do you have?");
getMilk(money);
