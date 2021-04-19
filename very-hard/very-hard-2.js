// Challenge link: https://edabit.com/challenge/vHvu4Wis8RhmQbwXm
const collate = (n, f, c) => Array.from(String(n), n => Number(n)).reduce(f,c);

const additivePersistence = (n, cicles=0) => {
    if (/^\d$/.test(n)) { return cicles; }
    else {
        return additivePersistence(collate(n, (acc, cur) => acc += cur, 0), ++cicles);
    }
};


const multiplicativePersistence = (n, cicles=0) => {
    if (/^\d$/.test(n)) { return cicles; }
    else {
        return multiplicativePersistence(collate(n, (acc, cur) => acc *= cur, 1), ++cicles);
    }
};

console.log(additivePersistence(1679583));
console.log(multiplicativePersistence(123456));