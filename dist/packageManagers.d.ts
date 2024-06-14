export declare function getPackageManager(name: string, { workingDirectory }?: {
    workingDirectory?: string;
}): {
    readonly install: "npm i";
    readonly exec: "npx";
} | {
    readonly install: "yarn add";
    readonly exec: "yarn";
} | {
    readonly install: "pnpm add";
    readonly exec: "pnpm exec";
} | {
    readonly install: "bun i";
    readonly exec: "bunx";
};
