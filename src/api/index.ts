/* Platform-dependent bindings */

// @ts-ignore -- optional interface, will gracefully degrade to `any` if not installed


function notYetLoadedError () {
    return new Error("Please first load the bindings by calling `load`.");
}


// The loaded bindings.=
let bindings: any = null;

const PLATFORM = process.platform;
const ARCH = process.arch;


export async function load (): Promise<any> {
    return new Promise<any>(
        async (resolve, reject) => {
            try {
                bindings = await import(`@sogouda/app-bindings-${PLATFORM}-${ARCH}`);

                resolve(bindings);
            } catch {
                const errorMessage
                    =   "No builds for this version are available "
                    +   `for target "${PLATFORM}-${ARCH}".`
                ;

                reject(errorMessage);
            }
        }
    );
}


export function start (...args: any[]): any {
    return bindings.start(...args);
}


export default bindings;
