var grabilityFrontendTest;
(function (grabilityFrontendTest) {
    var news;
    (function (news) {
        'use strict';
        var ShowDirective = (function () {
            function ShowDirective($animate) {
                var _this = this;
                this.$animate = $animate;
                this.restrict = 'A';
                this.scope = {
                    gbtShow: '=',
                    afterShow: '&',
                    afterHide: '&'
                };
                this.link = function (scope, element) {
                    var self = _this;
                    scope.$watch('gbtShow', function (gbtShow, oldGbtShow) {
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
            return ShowDirective;
        })();
        // gbt is a prefix used to avoid name collisions. It means Grability Test
        angular.module('GrabilityFrontendTest')
            .directive('gbtShow', grabilityFrontendTest.common.Helper.instantiateFactory(ShowDirective, '$animate'));
    })(news = grabilityFrontendTest.news || (grabilityFrontendTest.news = {}));
})(grabilityFrontendTest || (grabilityFrontendTest = {}));
//# sourceMappingURL=gbtShowDirective.js.map