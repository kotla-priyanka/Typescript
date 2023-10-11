var Address = {
    name: "priyanka",
    age: 23
};
console.log(Address.name);
// Nested Objects
var Person = {
    id: 1,
    name: "ramya",
    age: 23,
    Address: {
        city: "bangalore",
        phonenumber: 9000751189
    }
};
console.log(Person.Address);
