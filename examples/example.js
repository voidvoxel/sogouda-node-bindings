// Import the Sogouda app bindings.
const bindings = require("..");


async function main () {
    await bindings.load();

    // Define the app options.
    const options = {
        title: "Hello World",
        url: "https://example.com",
        width: 640,
        height: 480,
        frameless: false,
        debug: false
    };

    // Start the Sogouda app.
    bindings.start(options);
}


main();
