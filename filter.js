const people = [
  {
    name: "Ram",
    age: 26,
  },
  {
    name: "Shyam",
    age: 18,
  },
  {
    name: "Sita",
    age: 15,
  },
];
const adults = people.filter((person) => person.age >= 18);
console.log(adults);
