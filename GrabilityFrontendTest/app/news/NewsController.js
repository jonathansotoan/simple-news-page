'use strict';

angular.module('GrabilityFrontendTest', ['ngAnimate'])

angular.module('GrabilityFrontendTest').controller('NewsController', ['$http', newsController]);

function newsController($http) {
    var self = this;
    var areNewsEnabled = true;

    self.newsSource = 'app/news/news_mock.json';

    self.refreshNews = function () {
        $http.get(self.newsSource).success(function (news) {
            self.news = news;
        });
    };

    self.toggleNews = function () {
        areNewsEnabled = !areNewsEnabled;
    };

    self.areNewsEnabled = function () {
        return areNewsEnabled;
    };

    self.toggleNew = function (targetNew) {
        if (!targetNew.isOpen$) {
            self.news.forEach(function (newItem) {
                newItem.isOpen$ = false;
            });
        }

        targetNew.isOpen$ = !targetNew.isOpen$;
    };

    self.isNewOpen = function (targetNew) {
        return targetNew.isOpen$;
    };

    self.refreshNews();
}
