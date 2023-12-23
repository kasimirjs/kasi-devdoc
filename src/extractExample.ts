import { parse } from "acorn";
import { simple as walk } from "acorn-walk";

export function extractExample(exampleName: string, code: string): string | null {
    const ast = parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module'
    });

    let extractedCode: string | null = null;

    walk(ast, {
        CallExpression(node: any) {
            if (node.callee.name === 'registerExample') {
                const exampleArg = node.arguments[0];
                if (exampleArg && exampleArg.type === 'ObjectExpression') {
                    const nameProperty = exampleArg.properties.find((p: any) => p.key.name === 'name');
                    if (nameProperty && nameProperty.value.value === exampleName) {
                        const exampleProperty = exampleArg.properties.find((p: any) => p.key.name === 'example');
                        if (exampleProperty && exampleProperty.value.type === 'ArrowFunctionExpression') {
                            const body = exampleProperty.value.body;
                            // Check if the body is a block statement or a single expression
                            extractedCode = code.substring(body.start, body.end);
                        }
                    }
                }
            }
        }
    });

    // Remove indentation from code lines by looking at the indentation of the last code line
    if (extractedCode) {
        const lines = extractedCode.split('\n');
        const lastLine = lines[lines.length - 1];
        const lastLineIndentation = lastLine.match(/^\s*/)[0].length;
        extractedCode = lines.map(line => line.slice(lastLineIndentation)).join('\n').trim();
    }

    return extractedCode;
}
