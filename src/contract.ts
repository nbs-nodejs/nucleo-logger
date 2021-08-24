/**
 * Logger interface. Level are based on common implementation of syslog.
 */
export interface Logger {
    warn(message: string, options?: unknown): void;

    error(message: string, options?: unknown): void;

    info(message: string, options?: unknown): void;

    debug(message: string, options?: unknown): void;

    createChild(scope: string, options?: unknown): Logger;
}
