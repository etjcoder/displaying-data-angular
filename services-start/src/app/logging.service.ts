import { Injectable } from "@angular/core";

@Injectable()

export class LoggingService {
    logToConsole(message: string) {
        console.log('Console Log: Account Status is: ' + message);
    }
}