var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]


firstTeenager = people.find((p) => p.age >= 10 && p.age <= 20);
allTeenagers = people.filter((p) => p.age >= 10 && p.age <= 20);
checkAllTeenagers = people.every((p) => p.age >= 10 && p.age <= 20);
checkAnyTeenagers = people.some((p) => p.age >= 10 && p.age <= 20);

console.log("the first person off the people array is teenager: ", firstTeenager);
console.log("all person of the people array is teenager: ", allTeenagers);
console.log("if every person of the people array is teenager: ", checkAllTeenagers);
console.log("if any person of the people array is teenager: ", checkAnyTeenagers);