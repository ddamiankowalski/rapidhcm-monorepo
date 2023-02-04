import { Component } from "@angular/core";

@Component({
    selector: 'rapid-sidenav',
    templateUrl: './rapid-sidenav.component.html'
})
export class RapidSidenavComponent {
    public isCollapsed = false;

    toggleSideNav(collapsedValue: boolean): void {
        this.isCollapsed = collapsedValue;
    }
}