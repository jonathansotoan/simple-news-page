var grabilityFrontendTest;
(function (grabilityFrontendTest) {
    var news;
    (function (news_1) {
        'use strict';
        var NewsController = (function () {
            function NewsController($http, usSpinnerService) {
                this.$http = $http;
                this.usSpinnerService = usSpinnerService;
                this.lastLoadedNews = '';
                this.areNewsEnabled = false;
                this.newsSource = 'app/news/news_mock.json';
            }
            NewsController.prototype.refreshNews = function () {
                this.usSpinnerService.spin('loading-news-spinner');
                this.lastLoadedNews = this.newsSource;
                var self = this;
                this.$http.get(this.newsSource).success(function (news) {
                    self.news = news;
                    self.news.forEach(function (newItem) {
                        newItem.canBeSmall$ = true;
                    });
                    self.usSpinnerService.stop('loading-news-spinner');
                    self.areNewsEnabled = true;
                });
            };
            NewsController.prototype.toggleNews = function () {
                if (this.areNewsEnabled) {
                    this.areNewsEnabled = false;
                }
                else if (this.lastLoadedNews !== this.newsSource) {
                    this.refreshNews();
                }
                else {
                    this.areNewsEnabled = true;
                }
            };
            ;
            NewsController.prototype.toggleNew = function (targetNew) {
                if (!targetNew.isVirtuallyOpen$) {
                    this.news.forEach(function (newItem) {
                        newItem.isVirtuallyOpen$ = false;
                        newItem.canBeSmall$ = true;
                    });
                    targetNew.canBeSmall$ = false;
                }
                targetNew.isVirtuallyOpen$ = !targetNew.isVirtuallyOpen$;
            };
            ;
            // Returns true when the new is open or is being animated to be opened
            NewsController.prototype.isNewVirtuallyOpen = function (targetNew) {
                return targetNew.isVirtuallyOpen$;
            };
            // Returns true when the new is completely open
            NewsController.prototype.isNewOpen = function (targetNew) {
                return targetNew.isOpen$;
            };
            NewsController.prototype.onOpeningComplete = function (targetNew) {
                targetNew.isOpen$ = true;
            };
            NewsController.prototype.onClosingComplete = function (targetNew) {
                targetNew.canBeSmall$ = true;
                targetNew.isOpen$ = false;
            };
            ;
            NewsController.$inject = ['$http', 'usSpinnerService'];
            return NewsController;
        })();
        angular.module('GrabilityFrontendTest')
            .controller('NewsController', NewsController);
    })(news = grabilityFrontendTest.news || (grabilityFrontendTest.news = {}));
})(grabilityFrontendTest || (grabilityFrontendTest = {}));
//# sourceMappingURL=NewsController.js.map