const person = { name: "Rakib" };
const updated = Object.assign({}, person, { name: "sakib" });
console.log(updated);

//we can also use spread operator
const person1 = { name: "Nokib" };
const updated1 = { ...person1, name: "rafi" };
console.log(updated1);

// for nested object

// const info = {
//   name: "hriday",
//   address: {
//     country: "bd",
//     district: "Tangail",
//   },
// };
// const updated3 = { ...info, name: "Nasum" };
// updated3.address.district = "Dhaka";
// console.log(updated3);
const info = {
  name: "hriday",
  address: {
    country: "bd",
    district: "Tangail",
  },
};
const updated3 = {
  ...info,
  adress: { ...info.address, district: "dhaka" },
  name: "Nasum",
};
// updated3.address.district = "Dhaka";
console.log(updated3);
