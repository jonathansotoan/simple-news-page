'use strict';

angular.module('GrabilityFrontendTest')
    .controller('NewsController', [
        '$http',
        'usSpinnerService',
        newsController
    ]);

function newsController($http, usSpinnerService) {
    var self = this;
    var areNewsEnabled = false;
    var lastLoadedNews = '';

    self.newsSource = 'app/news/news_mock.json';

    self.refreshNews = function () {
        usSpinnerService.spin('loading-news-spinner');
        lastLoadedNews = self.newsSource;

        $http.get(self.newsSource).success(function (news) {
            self.news = news;

            self.news.forEach(function (newItem) {
                newItem.widthClass = 'col-md-6';
            });

            usSpinnerService.stop('loading-news-spinner');
            areNewsEnabled = true;
        });
    };

    self.toggleNews = function () {
        if (areNewsEnabled) {
            areNewsEnabled = false;
        } else if (lastLoadedNews !== self.newsSource) {
            self.refreshNews();
        } else {
            areNewsEnabled = true;
        }
    };

    self.areNewsEnabled = function () {
        return areNewsEnabled;
    };

    self.toggleNew = function (targetNew) {
        if (!targetNew.isVirtuallyOpen$) {
            self.news.forEach(function (newItem) {
                newItem.isVirtuallyOpen$ = false;
                newItem.widthClass = 'col-md-6';
            });

            targetNew.widthClass = 'col-md-12';
        }

        targetNew.isVirtuallyOpen$ = !targetNew.isVirtuallyOpen$;
    };

    // Returns true when the new is open or is being animated to be opened
    self.isNewVirtuallyOpen = function (targetNew) {
        return targetNew.isVirtuallyOpen$;
    };

    // Returns true when the new is completely open
    self.isNewOpen = function (targetNew) {
        return targetNew.isOpen$;
    };

    self.onOpeningComplete = function (targetNew) {
        targetNew.isOpen$ = true;
    };

    self.onClosingComplete = function (targetNew) {
        targetNew.widthClass = 'col-md-6';
        targetNew.isOpen$ = false;
    };
}
