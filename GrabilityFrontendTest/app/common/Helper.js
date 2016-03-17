var grabilityFrontendTest;
(function (grabilityFrontendTest) {
    var common;
    (function (common) {
        var Helper = (function () {
            function Helper() {
            }
            Helper.instantiateFactory = function (actualClass) {
                var dependencyNames = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    dependencyNames[_i - 1] = arguments[_i];
                }
                var instance = function () {
                    var dependencies = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        dependencies[_i - 0] = arguments[_i];
                    }
                    var obj = {};
                    actualClass.prototype.constructor.apply(obj, dependencies);
                    return obj;
                };
                instance.$inject = dependencyNames;
                return instance;
            };
            return Helper;
        })();
        common.Helper = Helper;
    })(common = grabilityFrontendTest.common || (grabilityFrontendTest.common = {}));
})(grabilityFrontendTest || (grabilityFrontendTest = {}));
//# sourceMappingURL=Helper.js.map