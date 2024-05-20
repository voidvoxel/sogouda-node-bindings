async function main () {
    const { PackageJSON } = await import("@voidvoxel/package-json");

    const mainPackage = await PackageJSON.readFile(".");
    const subPackage = new PackageJSON("@sogouda/app-bindings-types");

    subPackage.version = mainPackage.version;
    subPackage.description = "Type definitions for `@sogouda/app-bindings`";
    subPackage.main = "index.js";
    subPackage.types = "index.d.ts";
    subPackage.author = mainPackage.author;
    subPackage.license = mainPackage.license;
    subPackage.repository = structuredClone(mainPackage.repository);
    subPackage.bugs = structuredClone(mainPackage.bugs);
    subPackage.homepage = mainPackage.homepage;
    subPackage.engines = {
        "node": ">=20.13.1",
        "sogouda": "^0.2.0"
    };
    subPackage.keywords = structuredClone(mainPackage.keywords);

    subPackage.keywords.push(
        "types",
        "definitions",
        "type-definitions",
        "type definitions",
        ".d.ts",
        ".dts",
        "dts"
    );

    // Required to stop publish errors.
    subPackage.scripts = {};

    await PackageJSON.writeFile("packages/app-bindings-types", subPackage);
}


main();
