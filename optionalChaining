// Sure! Here are 5 examples of optional chaining in JavaScript:

// 1)  Accessing properties on an object that may not exist:

const person = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};
console.log(person.address?.zipCode);


// 2)  Accessing methods on an object that may not exist:

const car = {
  start: function() {
    console.log('Car started');
  }
};
car?.start?.();


// 3) Accessing array elements that may not exist:

const arr = [1, 2, 3];
console.log(arr[5]?.toString());

// 4) Chaining multiple optional properties and methods:
const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  orders: [
    { id: 1, total: 10 },
    { id: 2, total: 20 }
  ]
};
console.log(user?.address?.zipCode?.toString());
console.log(user?.orders?.[0]?.total?.toFixed(2));


// 5) Using optional chaining with function parameters:

function printName(user) {
  console.log(user?.name ?? 'User does not exist');
}

const person = { name: 'John' };
const employee = null;
printName(person); 
printName(employee);
