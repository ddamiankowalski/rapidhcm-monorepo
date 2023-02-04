import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapid-sidenav-auxillary',
    templateUrl: './rapid-sidenav-auxillary.component.html'
})
export class RapidSidenavAuxillaryComponent {
    @Input() isNavCollapsed?: boolean;
}