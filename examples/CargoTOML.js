const { readFileSync } = require("fs");


const tomlParser = require("@toml-tools/parser");


class CargoTOML {
    static readFileSync (
        filePath
    ) {
        const toml = tomlParser.parse(
            readFileSync(
                "Cargo.toml",
                "utf-8"
            )
        );

        const options = {};

        const name = options.name = toml.name ?? "example";
        const version = options.version = toml.children.version ?? "0.1.0";
        const description = options.version = toml.children.description ?? "";
    }


    constructor (
        options = {}
    ) {
        options ??= {};

        const name = options.name ??= "example";
        const version = options.version ??= "0.1.0";
        const description = options.version ??= "";
    }
}


module.exports = CargoTOML;
