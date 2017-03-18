import { View } from 'aurelia-framework';
export declare class UITabbarStart {
}
export declare class UITabbarEnd {
}
export declare class UITabbarToggle {
    element: Element;
    dropdown: any;
    disabled: boolean;
    private tether;
    private obMouseup;
    isDisabled: boolean;
    constructor(element: Element);
    attached(): void;
    detached(): void;
    toggleDropdown(evt: any): boolean;
}
export declare class UITabPanel {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    private tether;
    private isOverflow;
    private wrapper;
    private overflow;
    private overflowToggle;
    private obClick;
    private obResize;
    height: string;
    tabs: any[];
    activeTab: any;
    private noTabs;
    private activeTabEl;
    private tabsChanged();
    private activeTabChanged(newValue);
    private closeTab(tab);
    private activateTab(tab);
    canActivate(id: any): boolean;
    private arrange();
    private showOverflow(evt);
}
export declare class UITab {
    element: Element;
    static seed: number;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    id: string;
    glyph: string;
    label: string;
    disabled: boolean;
    active: boolean;
    closeable: boolean;
    remove(): void;
}
