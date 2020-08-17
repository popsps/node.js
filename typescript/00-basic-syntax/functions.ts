const add = (a: number, b: number): number => {
    return a + b
}
console.log(add(5, 6))

function calculate(action, ...values): number {
    let total: number = 0
    console.log('values:', values)
    if (action === 'add') {
        for (let value of values)
            total += value
    } else if (action === 'subtract') {
        for (let value of values)
            total -= value
    }
    return total
}

console.log(calculate('add', 1, 2, 3, 4, 5))
