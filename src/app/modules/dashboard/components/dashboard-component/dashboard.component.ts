import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'rapid-dashboard',
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidDashboardComponent {}