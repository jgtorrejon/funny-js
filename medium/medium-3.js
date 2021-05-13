// Challenge link: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg
// Title: Concatenate Variable Number of Input Arrays

function concat(...args) {
    return [].concat(...args);
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4, 4]));