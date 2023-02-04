import { Component, Input } from "@angular/core";

@Component({
    selector: 'rapid-badge',
    templateUrl: './rapid-badge.component.html'
})
export class RapidBadgeComponent {
    @Input() value?: string | number;
}