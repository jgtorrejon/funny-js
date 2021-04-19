// Challenge link: https://edabit.com/challenge/chDJCBDzZkjSExMwm

const factorial = (n) => {
    if (n == 0) { return 1; }
    if (n == 1) { return n; }
    return n * factorial(n-1);
}

const isExact = (n, i=0) => {
    if(n < factorial(i)) { return "Not an exact bound!"; }
    if(n == factorial(i)) { return [n, i]; }
    return isExact(n, i+1);
}

console.log(isExact(6));
console.log(factorial(4));