// Challenge link: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Title: Converting Objects to Arrays
function toArray(obj) {
    return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));