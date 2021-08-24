import { Logger } from "./contract";

/**
 * Class that implements Logger interface and does nothing when function are being called.
 * This class prevents undefined or no reference error when no Logger implementation is registered.
 *
 * @class
 */
export class NoLogger implements Logger {
    createChild(_scope: string): Logger {
        return new NoLogger();
    }

    debug(_message: string): void {
        // Does nothing
    }

    error(_message: string): void {
        // Does nothing
    }

    info(_message: string): void {
        // Does nothing
    }

    warn(_message: string): void {
        // Does nothing
    }
}
