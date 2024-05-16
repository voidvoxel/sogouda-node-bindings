const bindings = require("..");


console.log(bindings);

const options = {
    title: "Hello World",
    url: "https://example.com",
    width: 640,
    height: 480,
    frameless: false,
    debug: false
};

bindings.start(options);
