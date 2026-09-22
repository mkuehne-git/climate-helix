/// <reference types="vite/client" />

declare const APP_VERSION: string;

declare module '*.html?raw' {
    const content: string;
    export default content;
}
