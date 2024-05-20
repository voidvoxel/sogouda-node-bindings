export interface Bindings {
    /**
     * Load the native binaries to bind.
     *
     * @returns {Promise<Bindings>}
     */
    load (): Promise<Bindings>


    /**
     * Start a Sogouda app.
     *
     * @param {StartOptions} options
     * @returns {any}
     */
    start (
        options: StartOptions
    ): any
}


export interface StartOptions {
    title: string,
    url: string,
    width: number,
    height: number,
    frameless: boolean,
    debug: boolean
}


/**
 * Load the native binaries to bind.
 *
 * @returns {Promise<Bindings>}
 */
export async function load () {}



/**
 * Start a Sogouda app.
 *
 * @param {StartOptions} options
 * @returns {any}
 */
export function start (
    options: StartOptions
) {}
