import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';


interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
    };

    private overlayOpen = new Subject<any>();

    overlayOpen$ = this.overlayOpen.asObservable();

    constructor() {
    }

    onMenuToggle() {
        this.state.overlayMenuActive = !this.state.overlayMenuActive;
        if (this.state.overlayMenuActive) {
            this.overlayOpen.next(null);
        }
    }

}
