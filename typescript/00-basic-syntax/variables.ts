/**
 * All types
 * boolean
 * number
 * string
 * null/ undefined
 * Object
 * any
 */


const arr: number[][] = [];
for (let i = 0; i < 10; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++)
        arr[i][j] = i * 10 + j
}
arr[0][2] = 5
console.log('arr:', arr)

