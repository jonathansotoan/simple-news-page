// Compiled using typings@0.6.3
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/angular-spinner/angular-spinner.d.ts
// Type definitions for angular-spinner.js 0.5.1
// Project: https://github.com/urish/angular-spinner
// Definitions by: Marcin Biegała <https://github.com/Biegal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
* SpinnerService 
* see https://github.com/urish/angular-spinner
*/
interface ISpinnerService {
    /**
     * Start selected spinner
     * 
     * @param spinner key
     */
    spin(key: string): void;

    /**
     * Stop selected spinner
     * 
     * @param spinner key
     */
    stop(key: string): void;
}