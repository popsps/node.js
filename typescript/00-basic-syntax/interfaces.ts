/**
 * interface
 * class
 * enum
 */


// only compile time
interface Car {
    name: string
    licence?: number // optional property
    register(state: string): void
}

interface ICarService {
    add(car: Car): void

    delete(car: Car): void

}

let myCar: Car = {
    name: "civic", licence: 343433434,
    register(state: string) {
        console.log('car is registered.')
    }
}
