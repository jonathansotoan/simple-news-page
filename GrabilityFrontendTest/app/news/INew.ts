module grabilityFrontendTest.news {
    export interface INew {
        id: number;
        title: string;
        content: string;
        image: string;

        canBeSmall$: boolean;
        isVirtuallyOpen$: boolean;
        isOpen$: boolean;
    }
}
