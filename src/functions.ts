
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
export const __exampleMap = new Map<string, ExampleConfig>();

export type ExampleConfig = {
    name: string;
    filename: string;
    example: ()=>void;
    starter?: (element: ShadowRoot, example : ()=>void) => void;
    htmlFrameworks?: {
        bootstrap5?: boolean;
    };
    starterHTML?: string;
}

export function registerExample(def : ExampleConfig){
    __exampleMap.set(def.name, def);
}




