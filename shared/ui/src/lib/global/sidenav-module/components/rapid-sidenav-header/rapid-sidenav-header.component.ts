import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'rapid-sidenav-header',
    templateUrl: './rapid-sidenav-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidSidenavHeaderComponent {
    public title = 'Shared Calendars';
    public isCollapsed = false;

    @Output() hamburger: EventEmitter<boolean> = new EventEmitter();

    public handleHamburgerClick() {
        this.isCollapsed = !this.isCollapsed;
        this.hamburger.emit(this.isCollapsed);
    }
}