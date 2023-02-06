import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'rapid-card',
    templateUrl: './rapid-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RapidCardComponent {
}