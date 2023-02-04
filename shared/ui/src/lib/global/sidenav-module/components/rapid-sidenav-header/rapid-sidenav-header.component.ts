import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'rapid-sidenav-header',
    templateUrl: './rapid-sidenav-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidSidenavHeaderComponent {
    public title = 'Shared Calendars';

    @Input() public isNavCollapsed: boolean | undefined;
    @Output() hamburger: EventEmitter<boolean> = new EventEmitter();

    public handleHamburgerClick() {
        this.hamburger.emit();
    }
}