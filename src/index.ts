import { Logger } from "./contract";
import { NoLogger } from "./no-logger";

export * from "./contract";
export * from "./no-logger";

// Logger singleton instance
let _loggerInstance!: Logger;

/**
 * @function [registerLogger]
 *
 * Register logger to singleton
 *
 * @param {Logger} [logger] Object instance that implement Logger interface
 */
export function registerLogger(logger: Logger): void {
    _loggerInstance = logger;
}

/**
 * @function [getLogger]
 *
 * Retrieve logger instance. Call registerLogger to set a Logger implementation before calling getLogger.
 * If no Logger implementation is being registered, then NoLogger will be initiated to prevent no reference error.
 */
export function getLogger(): Logger {
    if (!_loggerInstance) {
        _loggerInstance = new NoLogger();
    }
    return _loggerInstance;
}
