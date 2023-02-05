import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'rapid-recent-header-add',
    templateUrl: './rapid-recent-header-add.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidRecentHeaderAddComponent {
    public addWidget(): void {
        console.log('add new widget');
    }
}