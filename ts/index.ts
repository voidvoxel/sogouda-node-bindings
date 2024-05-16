export default interface StartOptions {
    title: string,
    url: string,
    width: number,
    height: number,
    frameless: boolean,
    debug: boolean
}


/**
 * Start a Sogouda app.
 *
 * @param {StartOptions} options
 * @returns {any}
 */
export function start (
    options: StartOptions
) {}
