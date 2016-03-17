module grabilityFrontendTest.news {
    'use strict';

    export interface IShowDirectiveScope extends ng.IScope {
        gbtShow: boolean;
        afterShow: (promiseValue: void) => void;
        afterHide: (promiseValue: void) => void;
    }
}
