const store = [
  {
    product: "laptop",
    value: 1800,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "mobile",
    value: 500,
    count: 10,
  },
];
const totalValueStore = store.reduce(
  (acc, item) => acc + item.value + item.count,
  0
);

console.log(totalValueStore);
