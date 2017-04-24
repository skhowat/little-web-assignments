var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143
}


function fullfillOrder(orders) {
  // Implement this
  inventory.eggs -= orders.omelets * 3;
  inventory.stripsOfBacon -= orders.omelets * 2;
  inventory.cheeseUnits -= orders.omelets;
  inventory.eggs -= orders.eggPlates * 2;
  inventory.stripsOfBacon -= orders.eggPlates * 3;
}


//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
fullfillOrder({
  omelets: 4, // (3 eggs, 2 strips of bacon, and 1 cheese unit)
  eggPlates: 12 // (2 eggs, 3 strips of bacon)
});

console.log(inventory);

// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?
