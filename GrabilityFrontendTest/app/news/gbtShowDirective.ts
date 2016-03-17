module grabilityFrontendTest.news {
    'use strict';
    
    class ShowDirective {
        public restrict: string = 'A';
        public scope: any = {
            gbtShow: '=',
            afterShow: '&',
            afterHide: '&'
        };

        constructor(private $animate: ng.animate.IAnimateService) {
        }

        link = (scope: IShowDirectiveScope, element: ng.IAugmentedJQuery) => {
            var self = this;

            scope.$watch('gbtShow',
                function (gbtShow: boolean, oldGbtShow: boolean) {
                    if (gbtShow) {
                        self.$animate.removeClass(element, 'ng-hide')
                            .then(scope.afterShow);
                    }

                    if (!gbtShow) {
                        self.$animate.addClass(element, 'ng-hide')
                            .then(scope.afterHide);
                    }
                });
        };
    }

    // gbt is a prefix used to avoid name collisions. It means Grability Test
    angular.module('GrabilityFrontendTest')
        .directive(
            'gbtShow',
            common.Helper.instantiateFactory(ShowDirective, '$animate'));
}
