import postcss from "postcss";
import type { Root, Rule, Declaration, Container } from "postcss";
import fs from "fs";
import path from "path";

function toJsProp(className: string): string {
    return className
        .replace(/^-+/, "")
        .replace(/^_+/, "")
        .replace(/_/g, "")
        .replace(/-([a-zA-Z0-9])/g, (_, char) => char.toUpperCase()); // camelCase
}

function createExtractPlugin(outputFile: string) {
    const plugin = {
        postcssPlugin: "extract-css-variables",
        Once(root: Container) {
            const vars: Record<string, string> = {};
            const classes: Record<string, string> = {};

            // CSS variables
            root.walkDecls((decl: Declaration) => {
                if (decl.prop.startsWith("--")) {
                    const propName = toJsProp(decl.prop);
                    vars[propName] = decl.prop;
                    // value - decl.value
                }
            });

            // @property rules
            root.walkAtRules("property", (atRule) => {
                const name = atRule.params.trim();
                const propName = toJsProp(name);
                let initialValue = "undefined";

                atRule.walkDecls((decl) => {
                    if (decl.prop === "initial-value") {
                        initialValue = decl.value;
                    }
                });

                vars[propName] = name;
                // value - initialValue
            });

            // CSS classes
            root.walkRules((rule: Rule) => {
                rule.selectors.forEach((sel) => {
                    sel = sel.trim();
                    if (sel.startsWith(".")) {
                        const name = sel.slice(1);
                        const propName = toJsProp(name);
                        classes[propName] = name;
                    }
                });
            });

            root.walkAtRules("utility", (atRule) => {
                const name = atRule.params.trim();
                if (name) {
                    const propName = toJsProp(name);
                    classes[propName] = name;
                }
            });

            fs.writeFileSync(
                outputFile,
                JSON.stringify({ vars, classes }, null, 2),
                "utf8",
            );
        },
    };

    // (plugin as any).postcss = true;
    return plugin; // as AcceptedPlugin
}

function getCssFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getCssFiles(filePath));
        } else if (
            file.endsWith(".css") &&
            !file.startsWith("_") &&
            !file.startsWith("$")
        ) {
            results.push(filePath);
        }
    });
    return results;
}

async function transform(dir: string) {
    const cssFiles = getCssFiles(dir);
    const merged: Record<
        string,
        { vars: Record<string, string>; classes: Record<string, string> }
    > = {};

    for (const cssFile of cssFiles) {
        const outputFile = cssFile.replace(/\.css$/, ".tokens.json");

        try {
            const css = fs.readFileSync(cssFile, "utf8");
            const processor = postcss([createExtractPlugin(outputFile)]);
            await processor.process(css, { from: cssFile });

            const tokens = JSON.parse(fs.readFileSync(outputFile, "utf8"));

            const folderPath = path.dirname(cssFile);
            const baseName = path.basename(cssFile, ".css");
            const name = path.join(folderPath, baseName).replace(/\\/g, "/").substring(dir.length + 1);
            merged[name] = tokens;

            console.log(`✅ Processed ${cssFile} → ${outputFile}`);
        } catch (err) {
            console.error(`❌ Error in ${cssFile}:`, err);
        }
    }

    const mergedFile = path.join(dir, "css.tokens.json");
    fs.writeFileSync(mergedFile, JSON.stringify(merged, null, 2), "utf8");
    console.log(`📦 Merged all → ${mergedFile}`);
}

transform("src");
