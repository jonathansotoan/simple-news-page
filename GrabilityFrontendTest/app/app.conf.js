'use strict';

angular.module('GrabilityFrontendTest').config([
    'usSpinnerConfigProvider',
    grabilityFrontEndTestConfiguration
]);

function grabilityFrontEndTestConfiguration(usSpinnerConfigProvider) {
    usSpinnerConfigProvider.setDefaults({
        radius: 30,
        width: 8,
        length: 16
    });
}
