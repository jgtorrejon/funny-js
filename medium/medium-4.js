// Challenge link: https://edabit.com/challenge/erFxBbqzZPSegMwnc
// Title: Convenience Store

function changeEnough(change, amountDue) {
    const exchangeRate = [0.25, 0.10, 0.05, 0.01];
    const totalAmount = change.map((x, i)=> x * exchangeRate[i]).reduce((acc, cur)  => acc += cur, 0);
    return totalAmount >= amountDue;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));