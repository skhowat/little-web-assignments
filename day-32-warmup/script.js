var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143,

  fullfillOrder: function(orders) {
    this.eggs -= (orders.omelets * 3);
    this.stripsOfBacon -= (orders.omelets * 2);
    this.cheeseUnits -= (orders.omelets * 1);
    this.eggs -= (orders.eggPlates * 2);
    this.stripsOfBacon -= (orders.eggPlates *3);
  }
}




//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
inventory.fullfillOrder({
  omelets: 4,
  eggPlates: 12
});

console.log('eggs: ' + inventory.eggs);
console.log('strips of bacon: ' + inventory.stripsOfBacon);
console.log('cheese units: ' + inventory.cheeseUnits);
