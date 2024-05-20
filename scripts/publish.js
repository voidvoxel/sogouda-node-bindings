#!/usr/bin/env node


const { execSync } = require("child_process");
const path = require("path");


function publishProject (
    projectName,
    tag = null
) {
    // Get the absolute path to the package.
    const packageDirectory = path.resolve(
        path.join(
            __dirname,
            "..",
            "packages",
            projectName
        )
    );

    let command = "npm publish --access public";

    if (tag) {
        if (typeof tag !== "string") {
            const errorMessage
                =   "Argument `tag` is of invalid type "
                +   `"${typeof tag}".`
            ;

            throw new TypeError(errorMessage);
        }
        command += " --tag " + tag;
    }

    // Publish the package.
    execSync(
        command,
        {
            cwd: packageDirectory
        }
    );
}


const args = process.argv.splice(2);


let projectName = args[0];

let tag;

if (args.length > 1) {
    tags = args[1];
}


try {
    publishProject(projectName);
} catch {}
