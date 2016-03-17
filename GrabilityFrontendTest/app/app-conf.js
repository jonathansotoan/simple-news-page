var grabilityFrontendTest;
(function (grabilityFrontendTest) {
    'use strict';
    var grabilityFrontEndTestConfiguration = function (usSpinnerConfigProvider) {
        usSpinnerConfigProvider.setDefaults({
            radius: 30,
            width: 8,
            length: 16
        });
    };
    angular.module('GrabilityFrontendTest').config([
        'usSpinnerConfigProvider',
        grabilityFrontEndTestConfiguration
    ]);
})(grabilityFrontendTest || (grabilityFrontendTest = {}));
//# sourceMappingURL=app-conf.js.map