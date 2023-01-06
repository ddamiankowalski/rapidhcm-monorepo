import { Component, Input } from "@angular/core";

@Component({
    selector: 'rapid-button',
    templateUrl: './rapid-button.component.html'
})
export class RapidButtonComponent {
    @Input() type: 'default' | 'simple' = 'default';
}