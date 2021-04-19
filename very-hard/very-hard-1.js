// Challenge link: https://edabit.com/challenge/jfpfpH6w42tZeRo2T

const negate = (item, index) => index % 2 == 0 ? item : item*= -1;
const accumulate = (acc, crr) => acc + crr;

const trackRobot2 = (...args) => {
    const first = [...args].filter((value, index) => index % 2 == 0);
    const second = [...args].filter((value, index) => index % 2 == 1);
    const x = first.map(negate).reduce(accumulate, 0);
    const y = second.map(negate).reduce(accumulate, 0);
    return [y, x];
}

function trackRobot(...steps) {
	return steps.reduce((a, c, i) => {a[(i+1) % 2] += (i % 4 > 1 ? -c : c); return a;}, [0, 0])
}

console.log(trackRobot(20, 30, 10, 40));