module grabilityFrontendTest.news {
    'use strict';

    class NewsController {
        private lastLoadedNews: string = '';

        public areNewsEnabled: boolean = false;
        public news: INew[];
        public newsSource: string = 'app/news/news_mock.json';

        static $inject = ['$http', 'usSpinnerService'];

        constructor(
            private $http: ng.IHttpService,
            private usSpinnerService: ISpinnerService) {
        }

        refreshNews(): void {
            this.usSpinnerService.spin('loading-news-spinner');
            this.lastLoadedNews = this.newsSource;
            var self = this;

            this.$http.get(this.newsSource).success(function (news: INew[]) {
                self.news = news;

                self.news.forEach(function (newItem: INew) {
                    newItem.canBeSmall$ = true;
                });

                self.usSpinnerService.stop('loading-news-spinner');
                self.areNewsEnabled = true;
            });
        }

        toggleNews(): void {
            if (this.areNewsEnabled) {
                this.areNewsEnabled = false;
            } else if (this.lastLoadedNews !== this.newsSource) {
                this.refreshNews();
            } else {
                this.areNewsEnabled = true;
            }
        };

        toggleNew(targetNew: INew) {
            if (!targetNew.isVirtuallyOpen$) {
                this.news.forEach(function (newItem: INew) {
                    newItem.isVirtuallyOpen$ = false;
                    newItem.canBeSmall$ = true;
                });

                targetNew.canBeSmall$ = false;
            }

            targetNew.isVirtuallyOpen$ = !targetNew.isVirtuallyOpen$;
        };

        // Returns true when the new is open or is being animated to be opened
        isNewVirtuallyOpen(targetNew: INew): boolean {
            return targetNew.isVirtuallyOpen$;
        }

        // Returns true when the new is completely open
        isNewOpen(targetNew: INew): boolean {
            return targetNew.isOpen$;
        }

        onOpeningComplete(targetNew: INew): void {
            targetNew.isOpen$ = true;
        }

        onClosingComplete(targetNew: INew): void {
            targetNew.canBeSmall$ = true;
            targetNew.isOpen$ = false;
        };
    }

    angular.module('GrabilityFrontendTest')
        .controller('NewsController', NewsController);
}
