class Logger {
    log(message: string): void {
        console.log(message);
    }
}
const myMessage: string = "Hello World";


const logger = new Logger();
logger.log(myMessage);