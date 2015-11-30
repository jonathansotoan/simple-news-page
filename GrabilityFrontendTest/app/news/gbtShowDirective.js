'use strict';

// gbt is the prefix. It means Grability Test
angular.module('GrabilityFrontendTest')
    .directive('gbtShow', ['$animate', gbtShowDirective]);

function gbtShowDirective($animate) {
    return {
        restrict: 'A',
        scope: {
            gbtShow: '=',
            afterShow: '&',
            afterHide: '&'
        },
        link: function (scope, element) {
            scope.$watch('gbtShow', function (gbtShow, oldGbtShow) {
                if (gbtShow) {
                    $animate.removeClass(element, 'ng-hide')
                        .then(scope.afterShow);
                }

                if(!gbtShow) {
                    $animate.addClass(element, 'ng-hide')
                        .then(scope.afterHide);
                }
            });
        }
    }
}
