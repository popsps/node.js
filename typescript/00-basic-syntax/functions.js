const add = (a, b) => {
    return a + b;
};
console.log(add(5, 6));
function calculate(action, ...values) {
    let total = 0;
    console.log('values:', values);
    if (action === 'add') {
        for (let value of values)
            total += value;
    }
    else if (action === 'subtract') {
        for (let value of values)
            total -= value;
    }
    return total;
}
console.log(calculate('add', 1, 2, 3, 4, 5));
// function tl(x: string, y: string): number
// function tl(x: any[], y: any[]): number {
//     return x.length + y.length
// }
// console.log(tl([32, 324, 4343], [2, 3, 5, 6]))
function totalLength(x, y) {
    if (x instanceof Array)
        console.log('x is an Array');
    else
        console.log('x is a string');
    if (y instanceof String)
        console.log('y is a string');
    else
        console.log('y is an Array');
    if (typeof y === "string")
        console.log('y is a string');
    else
        console.log("typeof y is:", typeof y);
    return x.length + y.length;
}
console.log(totalLength("feef", [32, 324, 4343]));
//# sourceMappingURL=functions.js.map