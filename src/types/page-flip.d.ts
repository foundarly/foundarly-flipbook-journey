declare module "page-flip" {
  export class PageFlip {
    constructor(element: HTMLElement, options?: any);
    loadFromHTML(pages: NodeListOf<Element>): void;
    on(event: string, cb: (...args: any[]) => void): void;
    destroy(): void;
    flipNext(): void;
    flipPrev(): void;
  }
}
