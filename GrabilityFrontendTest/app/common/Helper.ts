module grabilityFrontendTest.common {
    export class Helper {
        static instantiateFactory(
            actualClass: IInstantiable, ...dependencyNames: string[]) {
            var instance = function (...dependencies: any[]) {
                var obj = {};
                actualClass.prototype.constructor.apply(obj, dependencies);
                return obj;
            };
            instance.$inject = dependencyNames;

            return instance;
        }
    }
}