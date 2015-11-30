'use strict';

angular.module('GrabilityFrontendTest', ['ngAnimate'])

angular.module('GrabilityFrontendTest')
    .controller('NewsController', ['$http', '$scope', newsController]);

function newsController($http, $scope) {
    var self = this;
    var areNewsEnabled = true;

    self.newsSource = 'app/news/news_mock.json';

    self.refreshNews = function () {
        $http.get(self.newsSource).success(function (news) {
            self.news = news;

            self.news.forEach(function (newItem) {
                newItem.widthClass = 'col-md-6';
            });
        });
    };

    self.toggleNews = function () {
        areNewsEnabled = !areNewsEnabled;
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

    self.refreshNews();
}
