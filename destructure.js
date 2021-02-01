const friends = ["Sakib Khan", "Amir Khan", "salman Khan", "Arman Khan"];
const [firstFriend, secondFriend] = friends;
const [numOneF, numTow, ...allF] = friends;
console.log (firstFriend, secondFriend);
console.log (firstFriend);
console.log (allF);

const Person = {name: "Amir", address: "Dhaka", father: "Suzon", mother: "Jorina", phone: 01799827366};

const {name, phone, address} = Person;

console.log (name, phone, address);