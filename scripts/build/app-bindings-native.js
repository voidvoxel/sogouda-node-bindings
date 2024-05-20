async function main () {
    const { PackageJSON } = await import("@voidvoxel/package-json");

    const projectName = `app-bindings-${process.platform}-${process.arch}`;

    const mainPackage = await PackageJSON.readFile(".");
    const subPackage = new PackageJSON(`@sogouda/${projectName}`);

    subPackage.version = mainPackage.version;
    subPackage.description = "Native binaries for `@sogouda/app-bindings`";
    subPackage.main = "index.node";
    subPackage.types = "index.d.ts";
    subPackage.author = mainPackage.author;
    subPackage.license = mainPackage.license;
    subPackage.repository = structuredClone(mainPackage.repository);
    subPackage.bugs = structuredClone(mainPackage.bugs);
    subPackage.homepage = mainPackage.homepage;
    subPackage.os = [ process.platform ];
    subPackage.cpu = [ process.arch ];
    subPackage.engines = {
        "node": ">=20.13.1",
        "sogouda": "^0.2.0"
    };
    subPackage.keywords = structuredClone(mainPackage.keywords);

    subPackage.keywords.push(
        process.platform,
        process.arch,
        `${process.platform}-${process.arch}`
    );

    // Required to stop publish errors.
    subPackage.scripts = [];

    await PackageJSON.writeFile("packages/app-bindings-native", subPackage);
}


main();
